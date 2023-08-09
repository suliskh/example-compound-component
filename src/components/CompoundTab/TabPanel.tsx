import { useContext } from "react";
import { makePanelId, makeTabId } from "./utils";
import { TabsContext } from "./Context";

type TabPanelProps = {
  children?: React.ReactNode;
  name: string;
};

export function TabPanel({ children, name }: TabPanelProps) {
  const { selected } = useContext(TabsContext);
  const isSelected = name === selected;


  return (
    <div
      aria-labelledby={makeTabId(name)}
      id={makePanelId(name)}
      role="tabpanel"
      hidden={!isSelected}
      tabIndex={isSelected ? 0 : -1}
    >
      {isSelected ? children : null}
    </div>
  );
}
