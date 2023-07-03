import { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import useDarkSide from "./hooks/useDarkSide";

export interface DarkModeSwitcherProps {
    size?: number;
}

const DarkModeSwitcher = ({ size = 30 }: DarkModeSwitcherProps) => {
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
