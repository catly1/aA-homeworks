import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props)

        this.state = { date: new Date() }
        this.tick = this.tick.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    componentDidMount() {
        this.intervalId = window.setInterval(this.tick, 1000)
    }



    render() {
        // debugger
        let hours = this.state.date.getHours();
        let minutes = this.state.date.getMinutes();
        let seconds = this.state.date.getSeconds();
        let timezone = (/\((.*)\)/.exec(new Date().toString())[1]).split(" ").map( (e) => e[0])

        return <div className="main">

            <h1>Clock</h1>
            <div className="clock">

            <p>
                <span>Time:</span> 
                <span>{hours}:{minutes}:{seconds} {timezone}</span>
            </p>

                <p>
                    <span>Date:</span>
                    <span>{this.state.date.toDateString()}</span>
                </p>
            </div>
        </div>
    }

}

export default Clock;