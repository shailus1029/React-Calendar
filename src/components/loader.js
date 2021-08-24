import React from "react";
import Styles from '../assets/css/loader.css';

const Loader = () => {
    return <div id="loader" className={Styles.loaderContainer}></div>;
};

export default React.memo(Loader);