export const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const getCurrentMonth = (date) => {
    const mm = String(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return monthNamesShort[mm - 1] + " " + yyyy.toString();
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

export const fuzzySearch = (str, querySearch) => {
    let i = 0, n = -1, l;
    str = str.toLowerCase();
    querySearch = querySearch.toLowerCase();
    for (i; i < querySearch.length; i++) {
        l = querySearch[i++];
        if (!~(n = str.indexOf(l, n + 1))) {
            return false;
        }
    }
    return true;
};
