import React from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  let primary = "#4640DE"
  let secondary = "#CCCCF5"
  let tertiary = "#E7F6FD"
  let ujSecondColor = "#56CDAD"
  let ujThirdColor = "#FF6550"

  return (
    <ThemeContext.Provider value={{ primary, secondary, tertiary, ujSecondColor, ujThirdColor }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider