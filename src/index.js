import React from 'react';
import ReactDOM from 'react-dom';
import styles from  './index.css'

const HelloWorld = () => {
    return (
        <h1 className={styles.container}>
            Hello World
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("mount"));