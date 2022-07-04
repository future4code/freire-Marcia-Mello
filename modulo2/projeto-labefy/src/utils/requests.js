import {api} from './api'

const header =  {
    headers: {
        Authorization: "marcia-mello-freire"
    }
}        

// get requests
export const getAllPlaylists = async () => {
    try {
        const response = await api.get("/playlists", header)

        return response.data.result.list
    } catch (error) {   
        console.log(error)
    }
}

export const getPlaylistTracks = async (id) => {
    try {
        const response = await api.get(`/playlists/${id}/tracks`, header)

        return response.data.result.tracks
    } catch (error) {   
        console.log(error)
    }
}

export const searchPlaylist = async (name) => {
    try {
        const response = await api.get(`/playlists/search?name=${name}`, header)

        return response.data.result.playlist
    } catch (error) {   
        console.log(error)
    }
}

// post requests
export const createPlaylist = async (name) => {

    const body = {
        name
    }

    try {
        await api.post("/playlists", body, header)
        
        return alert("Playlist criada com sucesso!")
    } catch (error) {   
        return alert("Playlist existente! Tente outro nome ou email.")
    }
}

export const addTrackToPlaylist = async (id, name, artist, url) => {

    const body = {
        name,
        artist,
        url
    }

    try {
        await api.post(`/playlists/${id}/tracks`, body, header)
        
        return alert("Música adicionada com sucesso!")
    } catch (error) {   
        return alert("Música existente! Tente outra música.")
    }
}

// delete requests
export const deletePlaylist = async (id) => {
    try {
        const response = window.confirm("Deseja deletar essa playlist?")
        
        if(!response) return;
        
        await api.delete(`/playlists/${id}`, header)
        return alert("Playlist deletado com sucesso!")
    } catch (error) {   
        return alert("Houve um erro ao tentar deletar o Playlist!")
    }
}

export const removeTrackFromPlaylist = async (playlistId, trackId) => {
    try {
        const response = window.confirm("Deseja Remover essa música da playlist?")
        
        if(!response) return;

        await api.delete(`/playlists/${playlistId}/tracks/${trackId}`, header)
        return alert("Música removida com sucesso!")
    } catch (error) {   
        return alert("Houve um erro ao tentar Remover a música da Playlist!")
    }
}