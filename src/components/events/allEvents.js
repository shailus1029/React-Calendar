import React from "react";
import Styles from "../../assets/css/event.css";
import ModalHeader from './modalHeader';

const AllEvents = (props) => {
    return (
        <div id='allEvents' className={Styles.eventDetailsPopUp}>
            <ModalHeader
                closeAddEvent={props.closeAddEvent}
                headerTitle={`Events - ${props.events[0] && new Date(props.events[0].date).toDateString()}`}
            />
            <div className={Styles.allEvents}>
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
