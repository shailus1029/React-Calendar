import React, { useState } from "react";
import Styles from "../assets/css/calendar.css";
import SearchEvents from "../components/events/searchEvents";
import CalendarBody from "../components/calendar/calendarBody";
import CalendarHeader from "../components/calendar/calendarHeader";
import CalendarWeekDays from "../components/calendar/calendarWeekDays";
import { addMonths, subMonths } from "../utils/constant";

const CalendarWrapper = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <div className={Styles.calendarContainer}>
            <div className={Styles.headerContainer}>
                <CalendarHeader
                    currentMonth={currentMonth}
                    nextMonth={handleNextMonth}
                    prevMonth={handlePrevMonth}
                />
                <SearchEvents />
            </div>
            <CalendarWeekDays />
            <CalendarBody currentMonth={currentMonth} />
        </div>
    );
};

export default CalendarWrapper;
