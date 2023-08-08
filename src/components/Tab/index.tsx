import { useState } from "react";
import clsx from "clsx";

type TabsProps = {
  items: Array<TabItem>;
  position?: TabPosition;
  orientation?: TabOrientation;
};

type TabPosition = "start" | "end";

type TabOrientation = "horizontal" | "vertical";

type TabItem = {
  key: string;
  title: string;
  content: React.ReactNode;
};

export default function Tabs({
  items,
  orientation = "horizontal",
  position = "start",
}: TabsProps) {
  const [selected, setSelected] = useState<string>(items[0].key);

  let rootStyle = "";
  let tabListStyle = "";

  if (orientation === "horizontal") {
    tabListStyle = "space-x-1 flex-row";

    if (position === "start") rootStyle = "flex-col space-y-2";
    else if (position === "end")
      rootStyle = "flex-col-reverse space-y-2 space-y-reverse";
  } else if (orientation === "vertical") {
    tabListStyle = "space-y-1 flex-col";

    if (position === "start") rootStyle = "flex-row space-x-2";
    else if (position === "end")
      rootStyle = "flex-row-reverse space-x-2 space-x-reverse";
  }

  return (
    <div className={clsx("flex", rootStyle)}>
      <div
        role="tablist"
        className={clsx("flex rounded-xl bg-blue-900/20 p-1", tabListStyle)}
      >
        {items.map((item) => {
          const isSelected = item.key === selected;

          console.log({ isSelected, key: item.key });

          return (
            <button
              className={clsx(
                "w-full rounded-lg py-2.5 px-3 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
                isSelected
                  ? "text-purple-700 bg-white shadow"
                  : "text-purple-100 hover:bg-white/[0.12] hover:text-white"
              )}
              aria-controls={`panel__${item.key}`}
              aria-selected={isSelected ? "true" : "false"}
              id={`tab__${item.key}`}
              key={item.key}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
              onClick={() => setSelected(item.key)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="px-6 py-4 bg-white rounded-xl">
        {items.map((item) => (
          <div
            aria-labelledby={`tab__${item.key}`}
            id={`panel__${item.key}`}
            role="tabpanel"
            tabIndex={item.key === selected ? 0 : -1}
          >
            {item.key === selected && item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
