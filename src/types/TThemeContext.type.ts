export type TTheme = "light" | "dark";

export interface IThemeContext {
    theme: TTheme
    toggleTheme: () => void
}