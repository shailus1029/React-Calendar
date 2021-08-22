import React, { useCallback } from "react";
import Styles from "../../assets/css/calendar.css";
import SingleDay from "./singleDay";
import {
    addDays,
    isMonthSame,
    getEndOfWeek,
    getStartOfWeek,
} from "../../utils/constant";

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
                days.push(<SingleDay day={day} monthStart={monthStart} />);
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

    return <div className={Styles.mainSection}>{renderBody()}</div>;
};

export default React.memo(CalendarBody);