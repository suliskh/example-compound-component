import { useRef, useState } from "react";
import clsx from "clsx";
import { makeTabId } from "../CompoundTab/utils";

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
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export default function Tabs({
  items,
  orientation = "horizontal",
  position = "start",
}: TabsProps) {
  const [selected, setSelected] = useState<string>(items[0].key);
  const rootRef = useRef<HTMLDivElement>(null);

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

  const selectAndFocus = (key: string) => {
    setSelected(key);

    rootRef.current
      ?.querySelector<HTMLButtonElement>(`#${makeTabId(key)}`)
      ?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    key: string
  ) => {
    const keyCode = e.code;

    const activeItems = items.filter((item) => !item.disabled);
    const selectedIndex = activeItems.findIndex((item) => item.key === key);

    if (
      (orientation === "horizontal" && keyCode === "ArrowRight") ||
      (orientation === "vertical" && keyCode === "ArrowDown")
    ) {
      const nextSelectedIndex = selectedIndex + 1;

      if (nextSelectedIndex >= 0 && nextSelectedIndex < activeItems.length) {
        selectAndFocus(activeItems[nextSelectedIndex].key);
      }
    } else if (
      (orientation === "horizontal" && keyCode === "ArrowLeft") ||
      (orientation === "vertical" && keyCode === "ArrowUp")
    ) {
      const nextSelectedIndex = selectedIndex - 1;

      if (nextSelectedIndex >= 0 && nextSelectedIndex < activeItems.length) {
        selectAndFocus(activeItems[nextSelectedIndex].key);
      }
    }
  };

  return (
    <div className={clsx("flex", rootStyle)} ref={rootRef}>
      <div
        role="tablist"
        className={clsx("flex rounded-xl bg-amber-900/20 p-1", tabListStyle)}
      >
        {items.map((item) => {
          const isSelected = item.key === selected;
          const isDisabled = !!item.disabled;

          let tabStyle = "";

          if (isSelected) {
            if (!isDisabled) tabStyle = "text-amber-700 bg-white shadow";
          } else {
            tabStyle = isDisabled
              ? "text-amber-100 opacity-50 cursor-not-allowed"
              : "text-amber-100 hover:bg-white/[0.12] hover:text-white";
          }

          return (
            <button
              aria-controls={`panel__${item.key}`}
              aria-disabled={isDisabled}
              aria-selected={isSelected ? "true" : "false"}
              className={clsx(
                "w-full flex space-x-2 items-center justify-center rounded-lg py-2.5 px-3 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-400 focus:outline-none focus:ring-2",
                tabStyle
              )}
              disabled={isDisabled}
              id={`tab__${item.key}`}
              key={item.key}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
              onClick={() => setSelected(item.key)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) =>
                handleKeyDown(e, item.key)
              }
              onFocus={() => console.log("FOCUSED!")}
            >
              {item.icon} <span>{item.title}</span>
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
