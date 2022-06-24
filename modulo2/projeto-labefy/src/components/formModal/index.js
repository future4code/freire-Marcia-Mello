import React, { Component } from 'react'

// requests
import { createPlaylist, addTrackToPlaylist } from '../../utils/requests'

// icons
import { CloseIcon } from '../../assets/icons/icons';

// styles
import { FormModalContainer, InputContainer, ModalContainer } from './styles';

class FormModal extends Component {
    state = {
        musicNameInput: "",
        musicArtistInput: "",
        musicUrlInput: "",

        playlistNameInput: ""
    }

    handleOnSubmitPlaylist = async () => {
        const { playlistNameInput } = this.state;
        const { getPlaylist, onClickClose } = this.props;

        await createPlaylist(playlistNameInput)

        getPlaylist()
        onClickClose()
    }

    handleOnSubmitMusic = async () => {
        const { musicNameInput, musicArtistInput, musicUrlInput } = this.state;
        const { id, onClickClose } = this.props;

        await addTrackToPlaylist(id, musicNameInput, musicArtistInput, musicUrlInput)

        onClickClose()
    }

    handlePlaylistInputs = () => {
        const { playlistNameInput } = this.state

        const playlistForm = (
            <>
                <input placeholder='Nome da playlist' value={playlistNameInput} onChange={(e) => this.setState({ playlistNameInput: e.target.value })} />
            </>
        )

        return playlistForm;
    }

    handleMusicInputs = () => {
        const musicForm = (
            <>
                <input placeholder='Nome da Música' onChange={(e) => this.setState({ musicNameInput: e.target.value })} />
                <input placeholder='Nome do Artista' onChange={(e) => this.setState({ musicArtistInput: e.target.value })} />
                <input placeholder='Link da Música' onChange={(e) => this.setState({ musicUrlInput: e.target.value })} />
            </>
        )

        return musicForm;
    }

    handleRenderInputs = () => {
        const { pageType } = this.props;

        return pageType === "home" ? this.handlePlaylistInputs() : this.handleMusicInputs()
    }

    render() {
        const { onClickClose, pageType } = this.props;

        return (
            <FormModalContainer>
                <ModalContainer>
                    <button onClick={onClickClose}><CloseIcon /></button>
                    <InputContainer>
                        <h3>{pageType === "home" ? "Formulário de Playlist" : "Formulário de Música"}</h3>
                        {this.handleRenderInputs()}
                        <button onClick={pageType === "home" ? this.handleOnSubmitPlaylist : this.handleOnSubmitMusic}>{pageType === "home" ? "Criar Playlist" : "Adicionar música"}</button>
                    </InputContainer>
                </ModalContainer>
            </FormModalContainer>
        )
    }
}

export default FormModal;