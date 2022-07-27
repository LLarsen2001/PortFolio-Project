import React, { Children } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  let primary = "#4640DE"
  let secondary = "#CCCCF5"
  let tertiary = "#E7F6FD"

  return (
    <ThemeContext.Provider value={{ primary, secondary, tertiary }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider



