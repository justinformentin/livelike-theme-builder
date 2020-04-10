import React, { useState, useEffect, useRef } from "react";

export function OutsideClick({ children, onClickOutside, ...props }) {
  const ref = useRef(null);
  const [touched, setTouched] = useState(false);

  const handleClick = e => {
    e.type === "touchend" && setTouched(true);
    if (e.type === "click" && touched) return;
    ref && !ref.current.contains(e.target) && onClickOutside(e);
  };

  useEffect(() => {
    document.addEventListener("touchend", handleClick, true);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("touchend", handleClick, true);
      document.removeEventListener("click", handleClick, true);
    };
  });

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
