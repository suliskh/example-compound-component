import { useState } from "react";
import clsx from "clsx";

type TabsProps = {
  items: Array<TabItem>;
};

type TabItem = {
  key: string;
  title: string;
  content: string;
};

export default function Tabs({ items }: TabsProps) {
  const [selected, setSelected] = useState<string>(items[0].key);

  return (
    <div className="space-y-2">
      <div
        role="tablist"
        className="flex space-x-1 rounded-xl bg-blue-900/20 p-1"
      >
        {items.map((item) => {
          const isSelected = item.key === selected;

          console.log({ isSelected, key: item.key });

          return (
            <button
              className={clsx(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
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
            {item.key === selected && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
