import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newSong(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Title:</label>
                <input name='title' onChange={this.handleChange} value={this.state.title}/> <br />
                <label>Artist:</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/> <br />
                <label>Album:</label>
                <input name='album' onChange={this.handleChange} value={this.state.album}/> <br />
                <label>Release Date:</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/> <br />
                <label>Genre:</label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre}/> <br />
                <button type='submit'>Add Song</button>
            </form>
         );
    }
}
 
export default SongForm;