export const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const getCurrentMonth = (date) => {
    const mm = String(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return monthNames[mm - 1] + " " + yyyy.toString();
};

export const getStartOfWeek = (dateArg) => {
    let date = new Date(dateArg);
    date.setDate(date.getDate() - date.getDay());
    date.setHours(0, 0, 0, 0);
    return date;
};

export const getEndOfWeek = (dateArg) => {
    let date = new Date(dateArg);
    date.setDate(date.getDate() - date.getDay() + 6);
    date.setHours(0, 0, 0, 0);
    return date;
};

export const addMonths = (dateArg, monthIncrement) => {
    let date = new Date(dateArg);
    date.setMonth(date.getMonth() + monthIncrement);
    return date;
};

export const subMonths = (dateArg, monthDecrement) => {
    let date = new Date(dateArg);
    date.setMonth(date.getMonth() - monthDecrement);
    return date;
};

export const addDays = (dateArg, increAmt) => {
    let date = new Date(dateArg);
    date.setDate(date.getDate() + increAmt);
    return date;
};

export const isMonthSame = (firstDate, secondDate) => {
    return (
        firstDate.getFullYear() === secondDate.getFullYear() &&
        firstDate.getMonth() === secondDate.getMonth()
    );
};