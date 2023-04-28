import { AddNewItem } from "./AddNewItem";
import Card from "./Card";
import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="One" />
      <Card text="Two" />
      <Card text="Three" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New item added")}
      />
    </ColumnContainer>
  );
};
