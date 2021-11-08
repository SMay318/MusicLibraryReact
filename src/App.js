import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            musicList:[]
         }
    }

    componentDidMount(){
        this.getMusic();
      }
      
    getMusic = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            musicList: response.data
        })
    }

    render() { 
        return ( 
            <div>
                <MusicTable musicList={this.state.musicList}/>
            </div>
         );
    }
}
 
export default App;