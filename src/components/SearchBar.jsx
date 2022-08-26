import React, { Component } from 'react'
import axios from 'axios'

const omdb_url = 'https://www.omdbapi.com/?apikey=da1830dd'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            results: [],
            errorMsg: ''
        }
    }

    handleSubmit = event => {
        // alert(`You pressed ${this.state.search}`)
        console.log("reached at handleSubmit")
        axios.get(omdb_url + `&s=${this.state.search}`)
        .then(res => {
            console.log(res)
            this.setState({
                results: res.data.Search
            })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errorMsg: 'Sorry! Can\'t reach server'
            })
        })
        event.preventDefault();
    }

    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        const { search, results, errorMsg } = this.state
        return (
            <div>
                <p>Search Bar</p>

                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                        placeholder='Search Titles...'
                        value={search}
                        onChange={this.handleSearchChange}>
                    </input>
                </form>
                {
                    results.length ?
                    results.map(result => <div key={result.imdbID}>{result.Title}</div>) :
                    null
                }
            </div>
        )
    }
}

export default SearchBar