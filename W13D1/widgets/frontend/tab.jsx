import React from 'react';

class Tab extends React.Component {

    constructor(props) {
        super(props)

        this.state = { selectedPane: 0}
    }

    render (){
        return <div className="tab-main">
            <h1>Tabs</h1>
            <ul id="tab-list" onClick={ (e) => {
                let selectedspan = e.target
                let liEl = selectedspan.parentNode
                
                let ulList = Array.from(document.getElementById("tab-list").children)
                
                ulList.forEach((li) => {
                    li.classList.remove("active")
                })
                
                liEl.setAttribute("class", "active")
            }}>
                <li>
                    <span>{this.props["props"][0]["name"]} </span>
                    <span id="list-body">{this.props["props"][0]["body"]}</span>
                </li>
                <li>
                    <span>{this.props["props"][1]["name"]} </span>
                    <span id="list-body">{this.props["props"][1]["body"]}</span>
                </li>
                <li>
                    <span>{this.props["props"][2]["name"]} </span>
                    <span id="list-body">{this.props["props"][2]["body"]}</span>
                </li>
            </ul>
        </div>
    }
}

export default Tab;