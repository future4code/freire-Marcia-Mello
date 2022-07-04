import React, { Component } from 'react'
import TrackCard from '../../components/trackCard';

// requests
import { getPlaylistTracks } from '../../utils/requests'

// styles
import { PlaylistDetailsContainer } from './styles';

class PlaylistDetails extends Component {
  state = {
    tracks: []
  }

  componentDidMount() {
    const { tracks } = this.state;

    if (tracks.length < 1) {
      this.handleGetPlaylistTracks()
    }
  }

  handleGetPlaylistTracks = async () => {
    const { playlist } = this.props;

    const response = await getPlaylistTracks(playlist.id)

    this.setState({
      tracks: response
    })
  }

  render() {
    const { tracks } = this.state;
    const { playlist } = this.props;

    return (
      <PlaylistDetailsContainer>
        <h2>Músicas</h2>
        {
          tracks && tracks.length !== 0 ?
            tracks.map((track) => {
              return <TrackCard
                key={track.id}
                track={track}
                playlistId={playlist.id}
                getAllTracks={this.handleGetPlaylistTracks}
              />
            }) :
            <h3>Nenhuma música encontrada :(</h3>
        }
      </PlaylistDetailsContainer>
    )
  }
}

export default PlaylistDetails;