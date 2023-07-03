import { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import useDarkSide from "./hooks/useDarkSide";


interface Props {
    size?: number;
}

const DarkModeSwitcher = ({size = 30}: Props) => {
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
