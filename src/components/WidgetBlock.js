import React from "react";
import { Widget } from "./Widget";
import { Controls } from "./Controls";

export default function WidgetBlock({ item, id, updateStyle }) {
  const widgetEl = (props, type) => (
    <Widget id={id} type={type} timeout="P0DT00H00M10S" {...props} />
  );

  const multiWidget = (item, key) => {
    return (
      <div key={key} className="widget-wrap">
        <h4 className="single-widget-title">{item.name}</h4>
        {widgetEl(item.widgetProps, item.type)}
      </div>
    );
  };

  const renderWidgets = item =>
    item.multipleProps
      ? item.multipleProps.map((v, idx) => multiWidget(v, idx))
      : widgetEl(item.widgetProps, item.type);

  return (
    <div className="widget-block-container">
      {item.name && <h3 className="widget-name-title">{item.name}</h3>}
      <div className="control-wrap">
        <div className="controls-container">
          <Controls controlList={item.controlList} updateStyle={updateStyle} />
        </div>
        <div className="widget-container">{renderWidgets(item)}</div>
      </div>
    </div>
  );
}
