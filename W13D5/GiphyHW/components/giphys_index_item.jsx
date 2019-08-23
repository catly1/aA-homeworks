import React from 'react';

class GiphysIndexItem extends React.Component {
    render(){
        const { giphy } = this.props
        // debugger
        return <li className="giphy-li" key={giphy.id} ><img src={giphy.images.original.url}/></li>
    }
}

export default GiphysIndexItem