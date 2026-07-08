import { ThemeContext } from "@/context/themeContext"
import { IThemeContext } from "@/types/TThemeContext.type";
import { useContext } from "react"

export const useTheme = ():IThemeContext => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("themeContextError!")
    }
    return themeContext;
}