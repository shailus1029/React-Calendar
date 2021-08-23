import React from "react";
import Styles from "../../assets/css/timerDropDown.css";

class TimeDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            labelItem: props.label,
        };
        this.container = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.hideTimeList);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.hideTimeList);
    }

    showTimeList = () => {
        this.setState({ showList: true });
    };

    hideTimeList = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            showList: false,
          });
        }
      };

    handleSelectTime = (value) => {
        if (this.state.labelItem !== value) {
            this.setState({
                labelItem: value,
                showList: false,
            });
            this.props.handleChange(value);
        }
    };

    renderSingleListItem = (item, index) => {
        return (
            <li
                key={index}
                value={item}
                onClick={() => this.handleSelectTime(item)}
            >
                <a>{item}</a>
            </li>
        );
    };

    render() {
        const { list } = this.props;
        return (
            <div
                className={`${Styles.dropdown} ${
                    this.state.showList ? Styles.open : ""
                }`}
                ref={this.container}
            >
                <button
                    className={Styles.dropdownToggle}
                    type='button'
                    onClick={this.showTimeList}
                >
                    {this.state.labelItem}
                    <span className={Styles.caret}></span>
                </button>
                {this.state.showList ? (
                    <ul className={Styles.dropdownMenu}>
                        {list.map(this.renderSingleListItem)}
                    </ul>
                ) : null}
            </div>
        );
    }
}

export default TimeDropdown;