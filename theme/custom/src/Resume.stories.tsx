import type { Meta, StoryObj } from "@storybook/react-vite";
import { Resume } from "./Resume";
import storyResume from "./storyResume.json";

const meta = {
  component: Resume,
} satisfies Meta<typeof Resume>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    ...storyResume,
  },
};
