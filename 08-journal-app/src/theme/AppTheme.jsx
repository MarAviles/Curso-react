import { ThemeProvider } from "@mui/material"
import { CssBaseLine } from "@mui/material"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>

        <CssBaseLine/>

        { children }
    </ThemeProvider>

  )
}
