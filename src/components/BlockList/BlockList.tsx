import React from "react";
import "./BlockList.css";

export interface BlockListProps<ItemType> {
  items: ItemType[];
  render: (item: ItemType) => React.ReactNode;
}

const BlockList = function BlockList<ItemType>({
  items,
  render,
}: BlockListProps<ItemType>) {
  const itemExist = items.length === 0 ? false : true;

  const listMarkup = itemExist ? (
    <ul>{React.Children.toArray(items.map(render))}</ul>
  ) : null;

  return <div>{listMarkup}</div>;
};

export default BlockList;
