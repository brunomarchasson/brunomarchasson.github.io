import type { Meta, StoryObj } from "@storybook/react";
import { MediaWrapper } from "./MediaWrapper";
import { Resume } from "./Resume";
import storyResume from "./storyResume.json";
import { ReactElement } from "react";

type StoryProps = {
  media: "screen" | "print";
};

const meta: Meta<{ media: "screen" | "print" }> = {
  title: "Resume",
  component: (args: StoryProps): ReactElement => (
    <MediaWrapper media={args.media}>
      <Resume {...storyResume} />
    </MediaWrapper>
  ),
  parameters: {
    media: "screen",
  },
};

export default meta;

type Story = StoryObj<{ media: "screen" | "print" }>;

export const Screen: Story = {
  storyName: "Screen Mode",
  args: {
    media: "screen",
  },
};

export const Print: Story = {
  storyName: "Print Mode",
  args: {
    media: "print",
  },
};
