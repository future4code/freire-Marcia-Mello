import React, { Component } from 'react'

// components
import Home from '../../pages/home'
import PlaylistDetails from '../../pages/playlistDetails'
import FormModal from '../formModal'
import SearchPlaylist from '../searchPlaylist'

// requests
import { getAllPlaylists } from '../../utils/requests'

// styles
import { Content, MainContainer, Menu } from './styles'
import { MusicIcon, PlaylistIcon } from '../../assets/icons/icons'

class Main extends Component {
  state = {
    modalIsOpen: false,
    page: "home",
    playlists: [],
    playlist: {},
    searchedPlaylists: []
  }

  componentDidMount() {
    const { playlists } = this.state

    if (playlists.length < 1) {
      this.handleGetAllPlaylists()
    }
  }

  handleGetAllPlaylists = async () => {
    const response = await getAllPlaylists()

    this.setState({
      playlists: response
    })
  }

  handleOpenModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({ modalIsOpen: !modalIsOpen });
  }

  handleRenderPage = () => {
    const { page, playlists, playlist } = this.state;

    return page === "home" ? 
      <Home 
        playlists={playlists} 
        changePage={() => this.handleChangePage()} 
        getPlaylists={() => this.handleGetAllPlaylists()} 
        savePlaylist={this.handleSavePlaylist}
      /> 
      : 
      <PlaylistDetails 
        playlist={playlist} 
      />
  }

  handleChangePage = () => {
    const { page } = this.state;

    page !== "home" ? this.setState({ page: "home"}) : this.setState({ page: "details"})
  }

  handleSavePlaylist = (playlist) => {
    this.setState({
      playlist
    })

    this.handleChangePage()
  }

  handleSaveSearchedPlaylist = (searchedPlaylists) => {
    this.setState({
      playlists: searchedPlaylists
    })
  }

  render() {
    const { page, modalIsOpen, playlist } = this.state;

    return (
      <MainContainer>
        <Menu>
          <ul>
            <li onClick={this.handleOpenModal}>
              {page === "home" ? "Criar Playlist" : "Adicionar música"}
              {page === "home" ? <PlaylistIcon/> : <MusicIcon/>}
            </li>
          </ul>
        </Menu>
        <Content>
          <h2>
            {page === "home" ? "Minhas Playlists" : `Playlist: ${playlist.name}`} 
            {page === "home" && <SearchPlaylist searchedPlaylists={this.handleSaveSearchedPlaylist} getAllPlaylists={this.handleGetAllPlaylists}/>}
            {page !== "home" && <button onClick={this.handleChangePage}>Voltar</button> }
          </h2>
          {this.handleRenderPage()}
        </Content>
        {
          modalIsOpen && <FormModal
            pageType={page}
            onClickClose={this.handleOpenModal}
            getPlaylist={() => this.handleGetAllPlaylists()}
            id={playlist.id}
          />
        }
      </MainContainer>
    )
  }
}

export default Main