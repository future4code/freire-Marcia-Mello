import React, { Component } from 'react'

// requests
import { deletePlaylist } from '../../utils/requests'

// icons
import { TrashIcon } from '../../assets/icons/icons'

// styles
import { PlaylistContainer } from './styled';

class PlaylistCard extends Component {

  handleDeletePlaylist = async (id) => {
    const { getPlaylists } = this.props;

    await deletePlaylist(id)

    getPlaylists()
  }

  render() {
    const { playlist, savePlaylist } = this.props;

    return (
      <PlaylistContainer>
        <p onClick={savePlaylist}>{playlist.name}</p>
        <button onClick={() => this.handleDeletePlaylist(playlist.id)}><TrashIcon/></button>
      </PlaylistContainer>
    )
  }
}

export default PlaylistCard;