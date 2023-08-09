import clsx from "clsx";
import { useContext } from "react";
import { TabsContext } from "./Context";

type TabListProps = {
  children?: React.ReactNode;
  className?: string;
};

const orientationStyles = {
  horizontal: "flex-row space-x-1",
  vertical: "flex-col space-y-1 self-start",
};

export function TabList({ children, className }: TabListProps) {
  const { orientation } = useContext(TabsContext);

  return (
    <div
      role="tablist"
      className={clsx(
        "flex rounded-xl bg-amber-900/20 p-1",
        orientationStyles[orientation],
        className
      )}
    >
      {children}
    </div>
  );
}
