import React, { Fragment, useEffect, useState } from "react";
import { Controls } from "./Controls";
import { saveJSON, saveCSS } from "../lib/utils";

export function SidebarContents({ updateStyle, changeTab, tab, list }) {
  const [isDark, setIsDark] = useState(false);
  const [controlList, setControlList] = useState(null);

  useEffect(() => {
    const arr = [];
    for (let item in list) arr.push(list[item]);
    setControlList(arr);
  }, [list]);

  const toggleTheme = () => {
    document.body.style.background = isDark ? "#fff" : "#222";
    document.body.style.color = isDark ? "#000" : "#fff";
    setIsDark(!isDark);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="theme-container">
          <button className={`save-button ${tab === 0 ? 'selected' : ''}`} onClick={()=>changeTab(0)}>
            Widgets
          </button>
          <button className={`save-button ${tab === 1 ? 'selected' : ''}`} onClick={()=>changeTab(1)}>
            Chat
          </button>
        </div>
        <div className="theme-container">
          <button className="save-button" onClick={toggleTheme}>
            {isDark ? "Light Theme" : "Dark Theme"}
          </button>
        </div>
        <div className="save-container">
          <button className="save-button" onClick={saveCSS}>
            Save CSS
          </button>
          <button className="save-button" onClick={saveJSON}>
            Save JSON
          </button>
        </div>
        <h3 className="global-title">Global Variables</h3>
        {controlList &&
          controlList.map((v, idx) => (
            <Fragment key={idx}>
              <h4 className="global-sub-title">{v.name}</h4>
              <Controls controlList={v.list} updateStyle={updateStyle} />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
