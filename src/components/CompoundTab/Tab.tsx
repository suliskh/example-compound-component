import clsx from "clsx";
import { makePanelId, makeTabId } from "./utils";
import { useContext, useEffect, useRef } from "react";
import { TabsContext } from "./Context";

type TabProps = {
  children: React.ReactNode;
  disabled?: boolean;
  name: string;
};

export function Tab({ children, disabled, name }: TabProps) {
  const { orientation, rootRef, selected, tabNames, registerTab, setSelected } =
    useContext(TabsContext);
  const ref = useRef<HTMLButtonElement>(null);
  const isSelected = name === selected;

  let style = "";
  if (isSelected) {
    if (!disabled) style = "text-purple-700 bg-white shadow";
  } else {
    style = disabled
      ? "text-purple-300 cursor-not-allowed"
      : "text-purple-100 hover:bg-white/[0.12] hover:text-white";
  }

  const handleSelectAndFocus = (tabIndex: number) => {
    if (tabIndex >= 0 && tabIndex < tabNames.length) {
      const tabName = tabNames[tabIndex];

      setSelected(tabName);

      rootRef?.current
        ?.querySelector<HTMLButtonElement>(`#${makeTabId(tabName)}`)
        ?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const keyCode = e.code;
    const selectedIndex = tabNames.indexOf(name);

    if (
      (orientation === "horizontal" && keyCode === "ArrowRight") ||
      (orientation === "vertical" && keyCode === "ArrowDown")
    ) {
      handleSelectAndFocus(selectedIndex + 1);
    } else if (
      (orientation === "horizontal" && keyCode === "ArrowLeft") ||
      (orientation === "vertical" && keyCode === "ArrowUp")
    ) {
      handleSelectAndFocus(selectedIndex - 1);
    }
  };

  useEffect(() => {
    if (!disabled) {
      registerTab(name);
    }
  }, []);

  return (
    <button
      aria-controls={makePanelId(name)}
      aria-disabled={!!disabled}
      aria-selected={isSelected ? "true" : "false"}
      className={clsx(
        "w-full flex space-x-2 items-center justify-center rounded-lg py-2.5 px-3 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
        style
      )}
      disabled={!!disabled}
      id={makeTabId(name)}
      ref={ref}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      type="button"
      onClick={() => {
        if (!disabled) setSelected(name);
      }}
      onKeyDown={(e) => {
        if (!disabled) handleKeyDown(e);
      }}
    >
      {children}
    </button>
  );
}
