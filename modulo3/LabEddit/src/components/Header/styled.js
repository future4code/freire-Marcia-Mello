import styled from 'styled-components'

// material-ui
import { Toolbar } from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
        position: absolute;
        right: 30px;
    }


    .close-icon {
        position: absolute;
        left: 30px;
        height: 30%;
        cursor: pointer;
    }
    
`

export const LogoImage = styled.img`
    width: auto;
    height: 50%;
`