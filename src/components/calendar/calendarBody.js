import React, { useState, useCallback } from "react";
import Styles from "../../assets/css/calendar.css";
import SingleDay from "./singleDay";
import { addDays, getEndOfWeek, getStartOfWeek } from "../../utils/constant";

const CalendarBody = (props) => {
    const { currentMonth } = props;

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
                        addEvent={(eventData) => props.addEvent(eventData)}
                        events={props.events.filter(item => new Date(item.date).getTime() == new Date(day).getTime())}
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
