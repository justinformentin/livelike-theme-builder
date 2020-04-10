import React, { useState, useEffect } from "react";
import WidgetBlock from "./components/WidgetBlock";
import { SidebarContents } from "./components/SidebarContents";
import { updateWidgetStyle } from "./lib/utils";
import { list } from "./lib/list";
import "./App.css";

export default function App({ s }) {
  const [style, setStyle] = useState(null);
  const [state, setState] = useState({
    styleString: "",
    styleArr: []
  });
  useEffect(() => {
    if (style) {
      let str = "";
      const arr = [...state.styleArr];
      const { selector, value } = style;
      const idx = arr.findIndex(v => v.selector === selector);
      idx === -1 ? arr.push({ selector, value }) : (arr[idx].value = value);
      arr.map(v => (str += `${v.selector}:${v.value};`));
      s.innerText = `body{${str}}`;
      setState({ styleString: str, styleArr: arr });
      updateWidgetStyle(style);
    }
  }, [style]);

  return (
    <div className="outer-container">
      <SidebarContents updateStyle={setStyle} />
      <livelike-widgets
        programid="91ca9edd-376a-4d27-a24a-6b607c15c17c"
        // mode="single"
      >
        {list.map((v, idx) => (
          <WidgetBlock key={idx} id={idx} item={v} updateStyle={setStyle} />
        ))}
      </livelike-widgets>
    </div>
  );
}
