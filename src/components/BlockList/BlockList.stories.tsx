import React from "react";
import BlockList from "./BlockList";
import type { BlockListProps } from "./BlockList";
import { ComponentMeta, Story } from "@storybook/react";
import { Card } from "../Card";

const items = [
  {
    title: "Wake up in the morning",
    body: "How to wake up in the morning",
  },
  {
    title: "Wake up in the morning",
    body: "How to wake up in the morning",
  },

  {
    title: "Wake up in the morning",
    body: "How to wake up in the morning",
  },
  {
    title: "Wake up in the morning",
    body: "How to wake up in the morning",
  },
  {
    title: "Wake up in the morning",
    body: "How to wake up in the morning",
  },
];

export default {
  title: "Element/BlockList",
  component: BlockList,
} as ComponentMeta<typeof BlockList>;

const Template: Story<BlockListProps<typeof items[0]>> = (args) => (
  <BlockList
    items={items}
    render={(item) => {
      return (
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Section>{item.body}</Card.Section>
        </Card>
      );
    }}
  />
);

export const Default = Template.bind({});
Default.args = {};
