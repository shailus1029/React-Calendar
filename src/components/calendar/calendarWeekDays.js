import React from "react";
import Styles from "../../assets/css/calendar.css";
import { daysShort } from "../../utils/constant";

const CalendarWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className={Styles.singleDay} key={i}>
                {daysShort[i]}
            </div>
        );
    }
    return <div className={Styles.daysSection}>{days}</div>;
};

export default React.memo(CalendarWeekDays);
