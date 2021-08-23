import React from "react";
import Styles from "../../assets/css/event.css";
import closeIcon from "../../assets/images/close.svg";

const AllEvents = (props) => {
    return (
        <div id='allEvents' className={Styles.eventDetailsPopUp}>
            <div className={Styles.closeDiv}>
                <img
                    src={closeIcon}
                    alt='closeIcon'
                    className={Styles.closeIcon}
                    onClick={props.closeAddEvent}
                />
            </div>
            <div>
                {props.events.map((item) => {
                    return (
                        <div className={Styles.eventList}>
                            {item.title}
                            <span>
                                ({item.startTime} - {item.endTime})
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(AllEvents);
