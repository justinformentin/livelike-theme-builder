import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { OutsideClick } from "./OutsideClick";

export function Input({
  styleSelector,
  styleName,
  defaultVal,
  isColor,
  changeVal = () => {}
}) {
  const [clicked, setClicked] = useState(false);
  const [val, setVal] = useState("");

  useEffect(() => {
    defaultVal && setVal(defaultVal);
  }, [defaultVal]);

  const convertAlpha = alpha => {
    var num = Math.round(alpha * 255);
    return (num + 0x10000)
      .toString(16)
      .substr(-2)
      .toUpperCase();
  };

  const onChange = e => {
    let hex = e.hex;
    e.rgb && e.rgb.a < 1 && (hex = e.hex + convertAlpha(e.rgb.a));
    const val = (e.target && e.target.value) || hex;
    setVal(val);
    changeVal({
      name: styleName,
      selector: styleSelector,
      value: val
    });
  };

  return (
    <div className="input-container">
      <label htmlFor={styleSelector}>{styleName}</label>
      {isColor && clicked && (
        <OutsideClick
          className="color-picker-wrap"
          onClickOutside={() => setClicked(false)}
        >
          <SketchPicker
            id={styleSelector}
            color={val}
            onChangeComplete={onChange}
          />
        </OutsideClick>
      )}
      <input onChange={onChange} value={val} onClick={() => setClicked(true)} />
    </div>
  );
}
