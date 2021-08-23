import React, { useState } from "react";
import Styles from "../../assets/css/event.css";
import closeIcon from "../../assets/images/close.svg";
import TimeDropdown from "./timerDropDown";

const types = ["Event", "Remainder"];
const defaulTimeList = [
    "12:00am",
    "01:00am",
    "02:00am",
    "03:00am",
    "04:00am",
    "05:00am",
    "06:00am",
    "07:00am",
    "08:00am",
    "09:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "01:00pm",
    "02:00pm",
    "03:00pm",
    "04:00pm",
    "05:00pm",
    "06:00pm",
    "07:00pm",
    "08:00pm",
    "09:00pm",
    "10:00pm",
    "11:00pm",
];

const defaultEventState = {
    type: null,
    title: "",
    description: "",
    startTime: null,
    endTime: null,
};

const AddEvent = (props) => {
    const [startTimeList,setStartTimeList] = useState(defaulTimeList);
    const [endTimeList, setEndTimeList] = useState(defaulTimeList);
    const [event, setEvent] = useState(defaultEventState);

    const handleChange = (value, key) => {
        setEvent({ ...event, [key]: value });
    };

    const handleSubmit = (eve) => {
        eve.preventDefault();
        const finalData = { ...event, date: props.date }
        props.addEvent(finalData);
        props.closeAddEvent();
    };

    const handleCancel = () => {
        props.closeAddEvent();
        setEvent(defaultEventState);
    };

    const  handleTimeValues = (value, type) => {
        const index = defaulTimeList.indexOf(value);
        if(type == 'startTime') {
            const tempEndTimeList = defaulTimeList.slice(index+1);
            setEndTimeList(tempEndTimeList);
        } else {
            const tempStartTimeList = defaulTimeList.slice(0, index);
            setStartTimeList(tempStartTimeList);
        }
        handleChange(value, type);
    }

    return (
        <div id="addEvent" className={Styles.popup1}>
            <div className={Styles.closeDiv}>
                <img
                    src={closeIcon}
                    alt='closeIcon'
                    className={Styles.closeIcon}
                    onClick={props.closeAddEvent}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Styles.eventForm}>
                    <div className={Styles.from}>
                        <input
                            id='title'
                            type='text'
                            value={event.title}
                            autoComplete='off'
                            placeholder='Add Title'
                            className={Styles.titleInput}
                            onChange={(event) => handleChange(event.target.value, "title")}
                        />
                    </div>
                    <div className={Styles.from}>
                        <textarea
                            rows='3'
                            id='textarea2'
                            value={event.description}
                            className={Styles.descriptions}
                            placeholder='Add description for event'
                            onChange={(event) => handleChange(event.target.value, "description")}
                        ></textarea>
                    </div>
                    <div className={Styles.typeGroup}>
                        {types.map((item) => {
                            return (
                                <p key={item}>
                                    <input
                                        id={item}
                                        type='radio'
                                        value={item}
                                        name='type-group'
                                        checked={item == event.type}
                                        onChange={() => handleChange(item, "type")}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </p>
                            );
                        })}
                    </div>
                    <div className={Styles.timeSelect}>
                        <div>
                            <TimeDropdown
                                list={startTimeList}
                                label="Start Time"
                                startTime={event.startTime}
                                // handleChange={(value) => handleChange(value, 'startTime')}
                                handleChange={(value) => handleTimeValues(value, 'startTime')}
                            />
                        </div>
                        <div className={Styles.marginLeft}>
                            <TimeDropdown
                                label="End Time"
                                list={endTimeList}
                                endTime={event.endTime}
                                // handleChange={(value) => handleChange(value, 'endTime')}
                                handleChange={(value) => handleTimeValues(value, 'endTime')}
                            />
                        </div>
                    </div>
                    <div className={Styles.btnContainer}>
                        <button
                            className={Styles.cancelBtn}
                            type='button'
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button className={Styles.submitBtn} type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default React.memo(AddEvent);
