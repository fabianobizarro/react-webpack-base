// import the base sass file
import './stylesheet/base.sass'

import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("container"));