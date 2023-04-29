import {
  createContext,
  useContext,
  FC,
  ReactNode,
  PropsWithChildren,
  Dispatch,
} from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { useImmerReducer } from "use-immer";
import { Action } from "./actions";
import { DragItem } from "../DragItem";

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "To do:",
      tasks: [{ id: "c0", text: "Generate App Scaffold" }],
    },
    {
      id: "1",
      text: "To do:",
      tasks: [{ id: "c1", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "To do:",
      tasks: [{ id: "c2", text: "Begin to use static typing" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTaskByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider: FC<AppStateProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;
  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id == id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTaskByListId, dispatch, draggedItem }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
