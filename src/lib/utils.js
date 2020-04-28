import * as g from "./globalWidgetControls";
import * as c from "./globalChatControls";
import * as w from "./widgetControls";

var STYLE;
// Array version. Output:
// [
//   { selector, val },
//   { selector, val }
// ]
// export const updateWidgetStyle = style => {
//   const idx = STYLE.findIndex(v => v.selector === style.selector)
//   idx !== - 1 && STYLE.splice(idx, 1, style)
// };

// export const getWidgetStyles = () => {
//   const defArrs = [w, g];
//   const arr = [];
//   defArrs.map(a => {
//     for (let item in a) {
//       const styleArr = a[item].list || a[item];
//       styleArr.map(v =>
//         arr.push({ selector: v.styleSelector, val: v.defaultVal })
//       );
//     }
//   });
//   console.log('arr',arr)
//   // STYLE = arr;
// };

////////////////////

// Object version. Output:
// {
//   --theme-alert-primary-color: "#9f041b"
//   --theme-alert-secondary-color: "#f5515f"
// }
export const updateSavedStyle = style => (STYLE[style.selector] = style.value);

export const getStyles = () => {
  const defArrs = [w, g, c];
  const obj = {};
  defArrs.map(a => {
    for (let item in a) {
      const styleArr = a[item].list || a[item];
      styleArr.map(v => (obj[v.styleSelector] = v.defaultVal));
    }
  });
  STYLE = obj;
};

export const buildCSSFile = () => {
  let str = "",
    empty = "";
  for (let v in STYLE) {
    let val = `${v}:${STYLE[v]};`;
    STYLE[v] === "" ? (empty += val) : (str += val);
  }
  return `body{${str}\n/*${empty}*/}`;
};

export const saveCSS = () => saveToFile(buildCSSFile(), "livelikeStyles.css");

export const saveJSON = () => saveToFile(STYLE, "livelikeStyles.json");

function saveToFile(data, name) {
  typeof data === "object" && (data = JSON.stringify(data, undefined, 4));
  const a = document.createElement("a");
  const ext = name.split(".").pop();
  const type = `text/${ext === "txt" ? "plain" : ext}`;
  a.href = URL.createObjectURL(new Blob([data], { type }));
  a.download = name;
  a.click();
}
