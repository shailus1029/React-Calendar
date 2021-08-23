import React from "react";
import Styles from "../../assets/css/event.css";
import closeIcon from "../../assets/images/close.svg";

const EventDetails = (props) => {
    return (
        <div id='eventDetails' className={Styles.eventDetailsPopUp}>
            <div className={Styles.closeDiv}>
                <img
                    src={closeIcon}
                    alt='closeIcon'
                    className={Styles.closeIcon}
                    onClick={props.closeAddEvent}
                />
            </div>
            <div>
                <div className={Styles.eventTitle}>
                    {props.eventDetails.title.charAt(0).toUpperCase() + props.eventDetails.title.slice(1)}
                </div>
                <div className={Styles.eventTiming}>
                    {new Date(props.eventDetails.date).toDateString()}
                    <span>
                        {props.eventDetails.startTime} -{" "}
                        {props.eventDetails.endTime}
                    </span>
                </div>
                <p>
                    <b>Type</b> - {props.eventDetails.type}
                </p>
                <p className={Styles.eventDescriptions}>
                    <b>Description</b> - {props.eventDetails.description}
                </p>
            </div>
        </div>
    );
};

export default React.memo(EventDetails);
