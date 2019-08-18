import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: 0
        };

        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
        // your code here
    }

    // your code here

    setNum1(e) {
        this.setState({num1: e.currentTarget.value})
    }

    setNum2(e) {
        this.setState({ num2: e.currentTarget.value })
    }

    add() {
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let result = num1 + num2
        this.setState({ result: result })
        // debugger
    }

    subtract(){
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let result = num1 - num2
        this.setState({ result: result })
    }

    multiply(){
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let result = num1 * num2
        this.setState({ result: result })
    }

    divide(){
        let num1 = Number(this.state.num1)
        let num2 = Number(this.state.num2)
        let result = num1 / num2
        this.setState({ result: result })
    }

    clear(){
        this.setState({ 
            result: 0,
            num1: "",
            num2: ""
         })
    }

    render() {
        let _state = this.state
        let num1 = _state.num1
        let num2 = _state.num2
        let result = _state.result
        return (

            <div>
                <h1>{result}</h1>
                <input onChange={this.setNum1} value={num1}/> 
                <input onChange={this.setNum2} value={num2}/>
                <button onClick={this.clear}>clear</button>                
                <br/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        );
    }
}

export default Calculator;