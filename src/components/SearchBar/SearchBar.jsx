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
        this.props.filteredSong(this.state.searchTerm)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Search Music Library:</label>
                <input name='searchTerm' onChange={this.handleChange} value={this.state.searchTerm}/> <br />
                <button type='submit'>Filter Table</button>
            </form> 
         );
    }
}
 
export default SearchBar;