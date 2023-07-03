import React from "react";
declare const defaultProperties: {
    dark: {
        circle: {
            r: number;
        };
        mask: {
            cx: string;
            cy: string;
        };
        svg: {
            transform: string;
        };
        lines: {
            opacity: number;
        };
    };
    light: {
        circle: {
            r: number;
        };
        mask: {
            cx: string;
            cy: string;
        };
        svg: {
            transform: string;
        };
        lines: {
            opacity: number;
        };
    };
    springConfig: {
        mass: number;
        tension: number;
        friction: number;
    };
};
type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, "onChange">;
interface Props extends SVGProps {
    onChange: (checked: boolean) => void;
    checked: boolean;
    style?: React.CSSProperties;
    size?: number | string;
    animationProperties?: typeof defaultProperties;
    moonColor?: string;
    sunColor?: string;
}
declare const ToggleSwitch: React.FC<Props>;
export default ToggleSwitch;
