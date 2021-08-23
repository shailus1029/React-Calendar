import React from "react";
import Styles from "../../assets/css/calendar.css";
import ArrowImage from "../../assets/images/left-arrow.png";
import { getCurrentMonth } from "../../utils/constant";

const CalendarHeader = (props) => {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.leftSection}>
                <img
                    className={Styles.leftArrow}
                    src={ArrowImage}
                    alt='left arrow'
                    onClick={props.prevMonth}
                />
            </div>
            <div className={Styles.middleSection}>
                <span>{getCurrentMonth(props.currentMonth)}</span>
            </div>
            <div className={Styles.rightSection}>
                <img
                    className={Styles.rightArrow}
                    src={ArrowImage}
                    alt='left arrow'
                    onClick={props.nextMonth}
                />
            </div>
        </div>
    );
};

export default React.memo(CalendarHeader);
