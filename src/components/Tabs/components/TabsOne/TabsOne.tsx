/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from "react";

import "./styles.css";

type TabItem = {
  value: string;
  label: string;
  panel: string;
};

type TabsOneProps = {
  defaultValue?: TabItem;
  items: TabItem[];
};

export const TabsOne: FC<TabsOneProps> = ({ defaultValue, items }) => {
  const [value, setValue] = useState(defaultValue ?? items[0].value);

  return (
    <div>
      <div>
        {items.map(({ label, value: itemValue }) => {
          //const isActiveValue = itemValue === value;

          return (
            <button
              key={itemValue}
              type="button"
              onClick={() => setValue(itemValue)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ panel, value: itemValue }) => (
          <div key={itemValue} hidden={itemValue !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
};
