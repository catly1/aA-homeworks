import React from 'react';
import BenchIndex from "../bench/bench_index"
import BenchMap from "../bench/bench_map"

class Search extends React.Component{
  render(){
    //   debugger
    return (<div className="main">
      <BenchMap benches={this.props.benches} updateBounds={this.props.updateBounds} updateFilter={this.props.updateFilter}/>
      <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches} updateFilter={this.props.updateFilter}/>
    </div>)
  }
}

export default Search;