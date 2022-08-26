import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './SearchBar.css'
import ErrorCard from './ErrorCard'

/**
 * BAD PRACTICE TO PUT API KEY IN HERE AND MAKE REPO PUBLIC.
 * But it's for demostration purposes.
 */
const omdb_url = 'https://www.omdbapi.com/?apikey=fb980b0'

/**
 * Creates the search bar/input area for our website.
 * It also creates the appropriate card, whether be the result Card or ErrorCard.
 */
class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            results: [],
            errorMsg: '',
            responseStatus: false,
            ranSubmit: false,
        }
    }

    handleSubmit = event => {
        if (this.state.search.length) {                       //I wanted to make sure we don't do an API call with an empty string.
            axios.get(omdb_url + `&s=${this.state.search}`)
            .then(res => {
                if (res.data.Response === 'True') {
                    this.setState({
                        results: res.data.Search,
                        responseStatus: true,
                        ranSubmit: true
                    })
                } else {
                    this.setState({
                        errorMsg: res.data.Error,
                        responseStatus: false,
                        ranSubmit: true,
                    })
                }

            })
            .catch(err => {
                console.log(err)
                this.setState({
                    errorMsg: 'Sorry! Can\'t reach server.',
                    responseStatus: false,
                    ranSubmit: true
                })
            })

        event.preventDefault();
        }
    }

    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        const { search, results, errorMsg, responseStatus, ranSubmit } = this.state

        //Logic to see if we should display the ErrorCard.
        let displayError;
        if (!responseStatus && ranSubmit) {
            displayError = <ErrorCard message={errorMsg} />
        }

        //Logic to see if we shoudl display our results if successful.
        let searchResults;
        if (responseStatus) {
            searchResults = results.map(result => <Card key={result.imdbID} title={result.Title}
                posterURL={result.Poster} year={result.Year} />)
        }

        return (
            <div>
                <div className="searchBar">
                    <form onSubmit={this.handleSubmit}>
                        <button className="buttonSearch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></button>
                        <input type="text" className="inputSearch" placeholder="Search Titles..." value={search}
                            onChange={this.handleSearchChange} />
                    </form>
                </div>

                <br />
                <br />

                <div className="resultCards">
                    {searchResults}
                </div>

                <div className="errorCardArea">
                    {displayError}
                </div>

                <br />
                <br />
                {/* <p>&#128512;</p> */}
            </div>
        )
    }
}

export default SearchBar