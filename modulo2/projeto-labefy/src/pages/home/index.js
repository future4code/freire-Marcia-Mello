import React, { Component } from 'react'

// components
import PlaylistCard from '../../components/playlistCard';

// styles
import { HomeContainer } from './styles';

class Home extends Component {

  handleRenderPlaylists = () => {
    const { playlists, getPlaylists } = this.props;

    const renderPlaylist = playlists.map((playlist) => {
      return <PlaylistCard key={playlist.id}
        playlist={playlist}
        getPlaylists={getPlaylists}
        savePlaylist={() => this.handleSavePlaylist(playlist)}
      />
    })

    return renderPlaylist;
  }

  handleSavePlaylist = (playlist) => {
    const { savePlaylist } = this.props

    savePlaylist(playlist)
  }

  render() {
    const { playlists } = this.props;

    return (
      <HomeContainer>
        { playlists && this.handleRenderPlaylists() }
      </HomeContainer>
    )
  }
}

export default Home;