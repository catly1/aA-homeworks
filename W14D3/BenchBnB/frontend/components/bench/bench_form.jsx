import React from 'react';

class BenchForm extends React.Component {
    constructor(props){
        // debugger
        super(props);
        this.state = {
            description: "",
            lat: parseFloat(props.lat),
            lng: parseFloat(props.lng)
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.createBench(this.state)
        .then(data => this.props.history.push(`/`));
    }

    update(property) {
      return e => this.setState({ [property]: e.target.value });
    }

    render() {
        return <div>
          <form className="bench-form" onSubmit={this.handleSubmit}>
                <p>lat: {this.state.lat} lng: {this.state.lng}</p>
            <input
              type="text"
              value={this.state.description}
              placeholder="Bench Description"
              onChange={this.update('description')}
            />
            <br/>
            <button>Create Bench</button>             
          </form>
        </div>
    }

}

export default BenchForm