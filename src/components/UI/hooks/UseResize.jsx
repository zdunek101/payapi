import { useEffect } from "react";

export const UseResize = (IsGreaterHandler, IsSmallerHandler) => {
  useEffect(() => {
    const listener = () => {
      if (window.innerWidth > 599) {
        IsGreaterHandler();
      } else IsSmallerHandler();
    };
    window.addEventListener("resize", listener);
  }, [IsGreaterHandler, IsSmallerHandler]);
};
