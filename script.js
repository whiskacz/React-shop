class Shop extends React.Component{
state = {
    availability : 9,
    currentState : 0
}
handleRemoveFromCart = () => {
    this.setState({
        currentState: this.state.currentState - 1
    })
}
handleAddFromCart = () => {
    this.setState({
        currentState: this.state.currentState + 1
    })
}
buyButton = () => {
    this.setState({
        availability : this.state.availability - this.currentState,
        currentState : 0
        
    })
}


    render(){
        return(
            <>
            <button disabled={this.state.currentState === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>
            <span style={{
                backgroundColor : "red",
                color: "blue"
            }}>{this.state.currentState}</span>
            <button disabled={this.state.currentState >= this.state.availability? true : false}onClick={this.handleAddFromCart}>+</button>
            <button onClick={this.buyButton}>KUP</button>
            </>
        )
       
    }
}

ReactDOM.render(<Shop />, document.getElementById('root'))