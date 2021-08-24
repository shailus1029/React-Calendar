import React from "react";
import Styles from "../../assets/css/event.css";
import closeIcon from "../../assets/images/close.svg";

const ModalHeader = (props) => {
    return (
        <div className={Styles.titleWrapper}>
            <div className={Styles.closeDiv}>
                <img
                    src={closeIcon}
                    alt='closeIcon'
                    className={Styles.closeIcon}
                    onClick={props.closeAddEvent}
                />
            </div>
            <div className={`${Styles.eventTiming} ${Styles.eventDate}`}>
                {props.headerTitle}
            </div>
        </div>
    );
};

export default React.memo(ModalHeader);
