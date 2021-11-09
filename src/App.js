import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';
import SearchBar from './components/SearchBar/SearchBar';
'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            musicList:[]
         }
    }

    componentDidMount(){
        this.getMusic();
        this.deleteSong();
        this.createSong();
        this.filterSongs();
      }
      
    getMusic = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            musicList: response.data
        });
    }

    deleteSong = async(id) => {
        let response = await axios.delete("http://127.0.0.1:8000/music/" + id + "/")
        this.setState({
            deleteASong: response.data
        });
    }

    createSong = async (newSong) => {
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
        this.setState({
            newSong: response.data
        });
        this.getMusic();
    }

    filterSongs = (searchTerm) => {
        let filteredSongs = this.state.musicList.filter(function(song) {
            if(song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.release_date.includes(searchTerm) || song.genre.includes(searchTerm)){
                return true;
            } else {
                return false;
            }
        });
        
        this.setState({
           musicList: filteredSongs

        });
        
    }

    render() { 
        return ( 
            <div>
                <h1>Search Bar </h1>
                <SearchBar filteredSong = {this.filterSongs}/>
                <h1>Music Table </h1>
                <MusicTable songList={this.state.musicList} deleteASong={this.deleteSong}/>
                <h1>Create Song</h1>
                <SongForm newSong={this.createSong}/>
            </div>
         );
    }
}
 
export default App;