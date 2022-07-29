// material-ui
import { createTheme } from '@material-ui/core/styles';

// colors
import { primaryColor, neutralColor, secundaryColor } from "./colors"

const theme = createTheme({
    palette: {
        primary:{
            main: primaryColor,
            contrastText:"white"
        },
        secondary: {
            main: secundaryColor,
            contrastText:"black"
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme