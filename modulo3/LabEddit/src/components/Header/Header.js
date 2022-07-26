import React from 'react'
import {AppBar} from '@material-ui/core/AppBar'
import {Toolbar} from '@material-ui/core/Toolbar'
import { Button } from '@mui/material'


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                
                <Button color="inherit">Login</Button>
                <Button color="inherit">Apagar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header