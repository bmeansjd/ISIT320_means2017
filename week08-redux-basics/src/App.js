


const storeState = this.props.store.getState();


constructor(props){
    super(props);
    this.state = {
        statement: 'No comment'
        
    };
    this.props.store.subscribe(() => {
        const storeState = this.props.store.getState();
        this.setState((prevState) => {
            return {statement: storeState.statement}
        });
    })
}

verifyStatement = () => {
    this.props.store.dispatch({ type: 'VERIFY' });
};

// IMPLEMENT denyEverything AND noComment HERE.


render(); {
    return (
        <div className="App">
            <h1>Political Science Props Redux in App</h1>
            <p>This component uses redux.</p>
            {this.state.statement}

            <div className="Box">
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
            </div>
            <hr />
        </div>
    );
}