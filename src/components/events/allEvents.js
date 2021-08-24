import React, { useEffect } from "react";
import Styles from "../../assets/css/event.css";
import ModalHeader from "./modalHeader";

const AllEvents = (props) => {
    const handleClick = () => {
        let collapsibleElements = document.getElementsByName("collapsible");
        let i;
        for (i = 0; i < collapsibleElements.length; i++) {
            collapsibleElements[i].addEventListener("click", function (event) {
                this.classList.toggle("active");
                let content = this.childNodes[2];
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    };

    useEffect(() => {
        handleClick();
        return () => {
            let collapsibleElements = document.getElementsByName("collapsible");
            let i;
            for (i = 0; i < collapsibleElements.length; i++) {
                collapsibleElements[i].removeEventListener("click");
            }
        };
    }, []);

    return (
        <div id='allEvents' className={Styles.eventDetailsPopUp}>
            <ModalHeader
                closeAddEvent={props.closeAddEvent}
                headerTitle={`Events - ${
                    props.events[0] &&
                    new Date(props.events[0].date).toDateString()
                }`}
            />
            <div className={Styles.allEvents}>
                {props.events.map((item, index) => {
                    return (
                        <button
                            key={index}
                            type='button'
                            name='collapsible'
                            className={`${Styles.eventList} ${Styles.collapsible}`}
                        >
                            {item.title}
                            <span>
                                ({item.startTime} - {item.endTime})
                            </span>
                            <div className={Styles.content}>
                                <div>
                                    <p>
                                        <b>Type</b> - {item.type}
                                    </p>
                                    <p className={Styles.eventDescriptions}>
                                        <b>Description</b> - {item.description}
                                    </p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(AllEvents);
