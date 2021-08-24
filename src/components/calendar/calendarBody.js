import React, { useState, useCallback } from "react";
import Styles from "../../assets/css/calendar.css";
import SingleDay from "./singleDay";
import { addDays, getEndOfWeek, getStartOfWeek } from "../../utils/constant";

const CalendarBody = (props) => {
    const [events, setEvents] = useState(
        localStorage.getItem("events")
            ? JSON.parse(localStorage.getItem("events"))
            : []
    );
    const { currentMonth } = props;

    const addEvent = (eventData) => {
        const data = [...events, eventData];
        localStorage.setItem("events", JSON.stringify(data));
        setEvents(data);
    };

    const renderBody = useCallback(() => {
        const monthStart = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1
        );
        const monthEnd = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            0
        );
        const startDate = getStartOfWeek(monthStart);
        const endDate = getEndOfWeek(monthEnd);
        const rows = [];
        let days = [];
        let day = startDate;
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(
                    <SingleDay
                        key={new Date().getMilliseconds() + parseInt(i)}
                        day={day}
                        monthStart={monthStart}
                        addEvent={(eventData) => addEvent(eventData)}
                        events={events.filter(item => new Date(item.date).getTime() == new Date(day).getTime())}
                    />
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className={Styles.singleRow} key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return rows;
    });

    return (
        <React.Fragment>
            <div className={Styles.mainSection}>{renderBody()}</div>
        </React.Fragment>
    );
};

export default React.memo(CalendarBody);
