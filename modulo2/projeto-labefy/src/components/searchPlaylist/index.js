import React, { Component } from 'react'

// requests
import { searchPlaylist } from '../../utils/requests'

// styles
import { SearchContainer } from './styles'

class SearchPlaylist extends Component {
    state = {
        searchInput: "",
        hasSearch: false
    }

    onChangeSearch = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleSearchPlaylist = async () => {
        const { searchInput } = this.state;
        const { searchedPlaylists } = this.props

        const response = await searchPlaylist(searchInput);

        searchedPlaylists(response)

        this.setState({
            searchInput: "",
            hasSearch: true
        })
    }

    handleClearSearch = () => {
        const { getAllPlaylists } = this.props;

        getAllPlaylists()

        this.setState({
            hasSearch: false
        })
    }

    render() {
        const { searchInput, hasSearch } = this.state;

        return (
            <SearchContainer>
                <input value={searchInput} onChange={this.onChangeSearch} placeholder="Buscar..." />
                <button type='submit' onClick={this.handleSearchPlaylist}>Buscar</button>
                {hasSearch && <p onClick={this.handleClearSearch}>Limpar busca</p>}
            </SearchContainer>
        )
    }
}

export default SearchPlaylist;