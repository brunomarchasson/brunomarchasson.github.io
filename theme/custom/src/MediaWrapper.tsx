import { ReactElement, ReactNode } from "react";

type MediaWrapperProps = {
    children: ReactNode;
    media: string;
};

export const MediaWrapper = ({ children, media }: MediaWrapperProps): ReactElement => {
    const result = <>{children}</>;

    console.log("MediaWrapper", media, result);
    const mediaRules = collectRules();

    if (media === "print") {
        console.log("MediaWrapper: Simulating print mode");
        replaceInAllRules(mediaRules.screen, "disabled");
        replaceInAllRules(mediaRules.print, "screen");
        console.log(mediaRules);
    } else if (media === "screen") {
        console.log("MediaWrapper: Simulating screen mode");
        replaceInAllRules(mediaRules.screen, "screen");
        replaceInAllRules(mediaRules.print, "print");
        console.log(mediaRules);
    }

    return result;
};

type MediaRules = {
    print: CSSMediaRuleWithConditionText[];
    screen: CSSMediaRuleWithConditionText[];
};

const replaceInAllRules = (rules: CSSMediaRuleWithConditionText[], replacement: string): void => {
    rules.forEach((rule) => {
        rule.media.mediaText = replacement;
    });
};

// node_modules/typescript/lib/lib.dom.d.ts doesn't have all the properties of the browser's CSSMediaRule
type CSSMediaRuleWithConditionText = CSSMediaRule & {
    conditionText: string;
};

const collectRules = (): MediaRules => {
    const styleSheets = document.styleSheets;
    const printRules = [];
    const screenRules = [];
    const disabledRules = [];

    for (const sheet of styleSheets) {
        const rules = sheet.cssRules || sheet.rules; // IE <= 8 use "rules" property

        for (const rule of rules) {
            if (rule.constructor.name === "CSSMediaRule") {
                const cast = rule as CSSMediaRuleWithConditionText;

                const condition = cast.conditionText;
                if (condition.includes("screen")) {
                    screenRules.push(cast);
                } else if (condition.includes("print")) {
                    printRules.push(cast);
                } else if (cast.media.mediaText === "disabled") {
                    disabledRules.push(cast);
                }
            }
        }
    }

    if (disabledRules.length) {
        // Storybook doesn't always reset the CSS stylesheets in the iframe.
        // if this happened, then there will be "disabled" rules from the last "print mode" story.
        // Return the disabled rules as "screen" and "screen" rules as "print".
        return {
            print: screenRules,
            screen: disabledRules,
        };
    }

    return {
        print: printRules,
        screen: screenRules,
    };
};