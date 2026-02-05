import {useTheme} from "./ThemeContext";

export default function Specimen({ glow, specimen }) {
  const {isDark} = useTheme();

  return <li className={"specimen " + (glow && isDark ? "glow" : "")}>{specimen}</li>;
}
