import React, { useEffect, useRef, useState } from "react";
import Styles from "../../assets/css/timerDropDown.css";

const TimeList = (props) => {
    const [showList, setShowList] = useState(false);
    const [labelItem, setLabelItem] = useState(props.label);
    const container = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", hideTimeList);

        return () => {
            document.removeEventListener("mousedown", hideTimeList);
        };
    });

    const showTimeList = () => {
        setShowList(true);
    };

    const hideTimeList = (event) => {
        if (container.current && !container.current.contains(event.target)) {
            setShowList(false);
        }
    };

    const handleSelectTime = (value) => {
        if (labelItem !== value) {
            setShowList(false);
            setLabelItem(value);
            props.handleChange(value);
        }
    };

    const renderSingleListItem = (item, index) => {
        return (
            <li key={index} value={item} onClick={() => handleSelectTime(item)}>
                <a>{item}</a>
            </li>
        );
    };

    const { list } = props;
    return (
        <div
            className={`${Styles.dropdown} ${showList ? Styles.open : ""}`}
            ref={container}
        >
            <button
                className={Styles.dropdownToggle}
                type='button'
                onClick={showTimeList}
            >
                {labelItem}
                <span className={Styles.caret}></span>
            </button>
            {showList ? (
                <ul className={Styles.dropdownMenu}>
                    {list.map(renderSingleListItem)}
                </ul>
            ) : null}
        </div>
    );
};

export default React.memo(TimeList);