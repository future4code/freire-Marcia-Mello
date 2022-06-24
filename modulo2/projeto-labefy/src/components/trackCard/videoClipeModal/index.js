import React, { Component } from 'react'

// icons
import { CloseIcon } from '../../../assets/icons/icons'

// styles
import { VideoClipeContainer, ModalContainer } from './styles'

class VideoClipeModal extends Component {

    handleAjustYoutubeUrl = () => {
        const { track } = this.props;

        const splitedUrl = track.url.split("=")[1]

        return splitedUrl;
    }

    render() {

        const { track, onClickClose, modalIsOpen } = this.props;
        
        return (
            <VideoClipeContainer>
                <ModalContainer>
                    <button onClick={onClickClose}><CloseIcon /></button>
                    <iframe src={`https://www.youtube.com/embed/${this.handleAjustYoutubeUrl()}?autoplay=${modalIsOpen ? "1" : "0"}`} title={track.name}></iframe>
                </ModalContainer>
            </VideoClipeContainer>
        )
    }
}

export default VideoClipeModal;