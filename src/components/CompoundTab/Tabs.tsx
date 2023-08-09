import { useEffect, useRef, useState } from "react";
import { TabsContext } from "./Context";
import type { TabOrientation, TabPosition } from "./types";
import clsx from "clsx";

type TabsProps = {
  children: React.ReactNode;
  orientation?: TabOrientation;
  position?: TabPosition;
};

export function Tabs({
  children,
  orientation = "horizontal",
  position = "start",
}: TabsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("");
  const [tabNames, setTabNames] = useState<Array<string>>([]);

  useEffect(() => {
    if (!selected && tabNames[0]) {
      setSelected(tabNames[0]);
    }
  }, [tabNames]);

  let style = "";
  if (orientation === "horizontal") {
    if (position === "start") style = "flex-col space-y-2";
    else if (position === "end")
      style = "flex-col-reverse space-y-2 space-y-reverse";
  } else if (orientation === "vertical") {
    if (position === "start") style = "flex-row space-x-2";
    else if (position === "end")
      style = "flex-row-reverse space-x-2 space-x-reverse";
  }

  return (
    <TabsContext.Provider
      value={{
        orientation,
        position,
        rootRef,
        selected,
        tabNames,
        registerTab: (name) => {
          if (name) {
            setTabNames((prevTabNames) =>
              !prevTabNames.includes(name)
                ? prevTabNames.concat(name)
                : prevTabNames
            );
          }
        },
        setSelected,
      }}
    >
      <div className={clsx("flex", style)} ref={rootRef}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
