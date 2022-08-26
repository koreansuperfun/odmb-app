import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

const omdb_url = 'https://www.omdbapi.com/?apikey=da1830dd'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            results: [],
            errorMsg: '',
            responseStatus: false,
        }
    }

    handleSubmit = event => {
        // alert(`You pressed ${this.state.search}`)
        console.log("reached at handleSubmit")
        axios.get(omdb_url + `&s=${this.state.search}`)
        .then(res => {
            console.log(res)
            if (res.data.Response === 'True') {
                this.setState({
                    results: res.data.Search,
                    responseStatus: true
                })
            } else {
                this.setState({
                    errorMsg: res.data.Error,
                    responseStatus: false
                })
            }

        })
        .catch(err => {
            console.log(err)
            this.setState({
                errorMsg: 'Sorry! Can\'t reach server',
                responseStatus: false
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
        const { search, results, errorMsg, responseStatus } = this.state
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
                    responseStatus ?
                    results.map(result => <Card key={result.imdbID} title={result.Title} 
                    posterURL={result.Poster} year={result.Year}/>) :
                    <div>{errorMsg}</div>
                }
                {/* {
                    responseStatus ?
                    results.map(result => <div key={result.imdbID}>{result.Title}</div>) :
                    <div>{errorMsg}</div>
                } */}
            </div>
        )
    }
}

export default SearchBar