import { createContext } from "react";
import { TabOrientation, TabPosition } from "./types";

type TabsContextState = {
  orientation: TabOrientation;
  position: TabPosition;
  rootRef: React.RefObject<HTMLDivElement> | null;
  selected: string;
  tabNames: Array<string>;
  registerTab: (name: string) => void;
  setSelected: (selected: string) => void;
};

export const TabsContext = createContext<TabsContextState>({
  orientation: "horizontal",
  position: "start",
  rootRef: null,
  selected: "",
  tabNames: [],
  registerTab: () => {},
  setSelected: () => {},
});
