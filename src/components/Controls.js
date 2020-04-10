import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";

export function Controls({ controlList, updateStyle }) {
  return (
    controlList &&
    controlList.map((v, idx) => (
      <Input
        key={idx}
        styleSelector={v.styleSelector}
        styleName={v.styleName}
        defaultVal={v.defaultVal}
        defaultColor={v.defaultColor}
        isColor={v.isColor}
        changeVal={updateStyle}
      />
    ))
  );
}

Controls.propTypes = {
  list: PropTypes.array
};
