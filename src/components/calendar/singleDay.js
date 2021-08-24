import React, { useState, useCallback, Suspense } from "react";
import Styles from "../../assets/css/calendar.css";
import { isMonthSame } from "../../utils/constant";
import Loader from '../loader';
const AddEvent = React.lazy(() => import('../events/addEvent'));
const EventDetails = React.lazy(() => import('../events/eventDetails'));
const AllEvents = React.lazy(() => import('../events/allEvents'));


const SingleDay = (props) => {
    const [selectedEvent,setSelectedEvent] = useState({});
    const [showAllEvent, setAllEventFlag]= useState(false);
    const [showAddEvent, setAddEventFlag] = useState(false);
    const [showEventDetails, setEventDetailsFlag] = useState(false);

    const handleAddEvent = useCallback(() => {
        const isPopExit = checkIfAnyPopUpAlreadyOpen();
        if(!isPopExit) {
            setAddEventFlag(true);
        }
    });

    const handleEventClick = (event, selectedEvent) => {
        event.stopPropagation();
        const isPopExit = checkIfAnyPopUpAlreadyOpen();
        if(!isPopExit) {
            setEventDetailsFlag(true);
            setSelectedEvent(selectedEvent);
        }
    };

    const handleShowAllEvents = (event) => {
        event.stopPropagation();
        const isPopExit = checkIfAnyPopUpAlreadyOpen();
        if(!isPopExit) {
            setAllEventFlag(true);
        }
    };

    const checkIfAnyPopUpAlreadyOpen = () => {
        const isaddEventPopUpOpen = document.getElementById("addEvent");
        const isAllEventPopUpOpen = document.getElementById("allEvents");
        const isEventDetailsPopUpOpen = document.getElementById("eventDetails");
        if (!isaddEventPopUpOpen && !isAllEventPopUpOpen && !isEventDetailsPopUpOpen) {
            return false;
        } else {
            return true;
        }
    }

    const isDisabled = !isMonthSame(props.day, props.monthStart);
    return (
        <React.Fragment>
            <div
                className={`${Styles.daysWrapper} ${
                    isDisabled ? Styles.notCurrentMonth : null
                }`}
                key={props.day.getTime()}
                onClick={handleAddEvent}
            >
                <span className={Styles.number}>{props.day.getDate()}</span>
                {!isDisabled ? (
                    <React.Fragment>
                        {props.events &&
                            props.events.map((item, index) => {
                                if (index <= 2) {
                                    return (
                                        <div
                                            key={
                                                props.day.getTime().toString() +
                                                "_" +
                                                index.toString()
                                            }
                                            className={Styles.eventTitle}
                                            onClick={(event) =>handleEventClick(event, item)}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                }
                            })}
                        {props.events && props.events.length > 3 && (
                            <div className={Styles.eventTitle}  onClick={(event) => handleShowAllEvents(event)} >More</div>
                        )}
                    </React.Fragment>
                ) : null}
            </div>
            {showAddEvent && (
                <Suspense fallback={<Loader />}>
                    <AddEvent
                        date={props.day}
                        addEvent={props.addEvent}
                        closeAddEvent={() => setAddEventFlag(false)}
                    />
                </Suspense>
            )}
            {showEventDetails && (
                <Suspense fallback={<Loader />}>
                    <EventDetails
                        eventDetails={selectedEvent}
                        closeAddEvent={() => setEventDetailsFlag(false)}
                    />
                </Suspense>
            )}
            {showAllEvent && props.events && props.events.length > 3 && (
                <Suspense fallback={<Loader />}>
                    <AllEvents
                        events={props.events}
                        closeAddEvent={() => setAllEventFlag(false)}
                    />
                </Suspense>
            )}
        </React.Fragment>
    );
};

export default React.memo(SingleDay);
