import React from 'react';
import ReactDOM from 'react-dom';
import Simulator from '../simulator/simulator';

function App() {
    return (
        <React.Fragment>
            <header style={{marginBottom: '15px'}}>Chalice of Opulence Simulator</header>
            <Simulator />
        </React.Fragment>
    );
}

ReactDOM.render(<App/>, document.getElementById('appContainer'));
