import React, { useState } from "react";
import Styles from "../../assets/css/searchEvents.css";
import { fuzzySearch } from "../../utils/constant";
import EventDetails from "./eventDetails";

const SearchEvents = (props) => {
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggesstions] = useState([]);
    const [events, setEvents] = useState(
        localStorage.getItem("events")
            ? JSON.parse(localStorage.getItem("events"))
            : []
    );
    const [selectedEvent, setSelectedEvent] = useState({});
    const [showEventDetails, setEventDetailsFlag] = useState(false);

    const handleSelectedEvent1 = (item) => e => {
        const isEventDetailsPopUpOpen = document.getElementById("eventDetails");
        if(!isEventDetailsPopUpOpen) {
            setSuggesstions([]);
            setSelectedEvent(item);
            setSearchText(item.title);
            setEventDetailsFlag(true);
        }
    };

    const handleClose = () => {
        setSearchText('');
        setEventDetailsFlag(false)
    }

    const handleAutoComplete = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            suggestions = events.filter((item) => {
                const result = fuzzySearch(item.title, value);
                return result ? true : false;
            });
        }
        setSearchText(value);
        setSuggesstions(suggestions);
    };

    const renderEventSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <div className={Styles.suggestionList}>
                <ul>
                    {suggestions.map((item, index) => (
                        <li
                            key={index}
                            className={Styles.singleSuggestion}
                            onClick={handleSelectedEvent1(item)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className={Styles.searchContainer}>
                <div className={Styles.searchInput}>
                    <input
                        type='text'
                        value={searchText}
                        placeholder='Search Events'
                        onChange={handleAutoComplete}
                    />
                    {renderEventSuggestions()}
                </div>
            </div>
            {showEventDetails && (
                <EventDetails
                    eventDetails={selectedEvent}
                    closeAddEvent={handleClose}
                />
            )}
        </React.Fragment>
    );
};

export default React.memo(SearchEvents);
