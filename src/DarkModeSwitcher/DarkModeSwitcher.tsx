import { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import useDarkSide from "./hooks/useDarkSide";
import SwitchProps from "./DarkModeSwitcher.types";

const DarkModeSwitcher = ({ size = 30 }: SwitchProps) => {
    const { colorTheme, setTheme } = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <ToggleSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={size}
        />
    );
};

export default DarkModeSwitcher;
