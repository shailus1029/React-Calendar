import React from "react";
import Styles from "../../assets/css/calendar.css";
import { isMonthSame } from "../../utils/constant";

const SingleDay = (props) => {
    return (
        <div
            className={`${Styles.daysWrapper} ${
                !isMonthSame(props.day, props.monthStart)
                    ? Styles.notCurrentMonth
                    : null
            }`}
            key={props.day}
        >
            <span className={Styles.number}>{props.day.getDate()}</span>
        </div>
    );
};

export default React.memo(SingleDay);