import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(){
        return e => {
            this.setState({ search: e.target.value })
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const giphy = Object.assign({}, this.state)
        this.props.fetchSearchGiphys(giphy);
        debugger
        this.setState({
            search: "",
        })
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
            <label> 
                    <input
                    type="text"
                    value={this.state.search}
                    onChange={this.handleChange()} />
            </label>
            <button>Search</button>

            <GiphysIndex giphys={this.props.giphys}/>
        </form>
    }
}

export default GiphysSearch