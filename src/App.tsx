import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer, ColumnContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo: " />
      <AddNewItem
        toggleButtonText="+Add Another List"
        onAdd={() => console.log("Item Created" )}
      />
    </AppContainer>
  );
};

export default App;
