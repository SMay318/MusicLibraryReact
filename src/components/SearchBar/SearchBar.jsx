import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: ''
         }
    }

    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filteredSong(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.searchTerm}/> 
                <label>Artist</label>
                <input name='artist' onChange={this.handleChange} value={this.state.searchTerm}/> 
                <label>Album</label>
                <input name='album' onChange={this.handleChange} value={this.state.searchTerm}/> 
                <label>Release Date</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.searchTerm}/> 
                <label>Genre</label>
                <input name='genre' onChange={this.handleChange} value={this.state.searchTerm}/> 
                <button type='submit'>Filter Table</button>
            </form> 
         );
    }
}
 
export default SearchBar;