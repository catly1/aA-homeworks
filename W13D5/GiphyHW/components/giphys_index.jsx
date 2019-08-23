import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
    render(){
        const { giphys } = this.props;
        // debugger
        const Giphyslist = giphys.map( (giphy, i) => (
            <GiphysIndexItem 
            key={`giphy-item-${i}`}
            giphy={ giphy }
            />
        ));


        return <div>
            <ul>
               { Giphyslist } 
            </ul>
        </div>
    }

}

export default GiphysIndex