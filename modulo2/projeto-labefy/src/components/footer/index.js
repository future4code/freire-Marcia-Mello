import { FooterContainer } from './styles'

function Footer() {

    const year = new Date().getFullYear()

    return (
        <FooterContainer>
            <p>Copyright © {year} | <b>Marcia Mello design Limited.</b></p>
        </FooterContainer>
    )
}

export default Footer