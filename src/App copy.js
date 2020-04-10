import React, { useState, useEffect } from "react";
import WidgetBlock from "./components/WidgetBlock";
import { SidebarContents } from "./components/SidebarContents";
import { updateWidgetStyle } from "./lib/utils";
import { list } from "./lib/list";
import * as w from "./lib/globalWidgetControls";
import * as c from "./lib/globalChatControls";
import "./App.css";

export default function App({ s }) {
  const [tab, setTab] = useState(0);
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

  const renderWidgets = () => (
    <livelike-widgets programid="91ca9edd-376a-4d27-a24a-6b607c15c17c">
      {list.map((v, idx) => (
        <WidgetBlock key={idx} id={idx} item={v} updateStyle={setStyle} />
      ))}
    </livelike-widgets>
  );

  const renderChat = () => (
      <livelike-chat
        programid="91ca9edd-376a-4d27-a24a-6b607c15c17c"
      ></livelike-chat>
  );

  return (
    <div className="outer-container">
      <SidebarContents updateStyle={setStyle} list={tab=== 0 ? w : c} changeTab={setTab} tab={tab} />
      {tab === 0 ? renderWidgets() : renderChat()}
    </div>
  );
}
