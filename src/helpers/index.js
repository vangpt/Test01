const validateQuantity = function(quantity) {
    let num = parseInt(quantity);
    if (num == quantity && !isNaN(num)) {
        return num >= 1;
    } else {
        return false;
    }
};

const formatDate = function(year, month, day) {
    const monthNames = [
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
        "December"
    ];

    let monthCurrent = monthNames[month];
    return monthCurrent + " " + day + " , " + year;
};

export { validateQuantity, formatDate };