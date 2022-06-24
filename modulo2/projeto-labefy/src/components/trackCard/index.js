import React, { Component } from 'react'

// components
import VideoClipeModal from './videoClipeModal'

// requests
import { removeTrackFromPlaylist } from '../../utils/requests'

// icons
import { PlayIcon, TrashIcon } from '../../assets/icons/icons'

// styles
import { TrackCardContainer } from './styles'

class TrackCard extends Component {
  state = {
    modalIsOpen: false
  }

  handleRemoveTrack = async () => {
    const { track, playlistId, getAllTracks } = this.props

    await removeTrackFromPlaylist(playlistId, track.id)

    getAllTracks()
  }

  handleOpenVideoClipeModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({
      modalIsOpen: !modalIsOpen
    })
  }

  render() {
    const { modalIsOpen } = this.state
    const { track } = this.props

    return (
      <>
        <TrackCardContainer>
          <h4>{track.name}</h4>
          <p>{track.artist}</p>
          <button className='play-button' onClick={this.handleOpenVideoClipeModal}><PlayIcon/></button>
          <button onClick={this.handleRemoveTrack}><TrashIcon /></button>
        </TrackCardContainer>
        {
          modalIsOpen ? <VideoClipeModal onClickClose={this.handleOpenVideoClipeModal} track={track} modalIsOpen={modalIsOpen}/> : <></>
        }
      </>
    )
  }
}

export default TrackCard;