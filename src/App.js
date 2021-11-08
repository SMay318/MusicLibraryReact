import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';


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
        console.log(newSong)
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
        this.setState({
            newSong: response.data
        });
        this.getMusic();
    }

    render() { 
        return ( 
            <div>
                <SongForm newSong={this.createSong}/>
                <MusicTable songList={this.state.musicList} deleteASong={this.deleteSong}/>
            </div>
         );
    }
}
 
export default App;