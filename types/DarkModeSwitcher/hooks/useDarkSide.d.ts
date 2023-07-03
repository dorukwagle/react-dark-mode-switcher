/// <reference types="react" />
declare const useDarkSide: () => {
    colorTheme: "dark" | "light";
    setTheme: import("react").Dispatch<import("react").SetStateAction<"dark" | "light">>;
};
export default useDarkSide;
