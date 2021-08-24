import React from "react";
import Styles from "../../assets/css/event.css";
import ModalHeader from './modalHeader';

const EventDetails = (props) => {
    return (
        <div id='eventDetails' className={Styles.eventDetailsPopUp}>
            <ModalHeader
                closeAddEvent={props.closeAddEvent}
                headerTitle="Events Details"
            />
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
