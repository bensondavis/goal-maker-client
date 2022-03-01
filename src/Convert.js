function convert(result) {
    let year = 0, month = 0;
    if(result >= 12) {
        year = Math.round(result / 12);
        month = result % 12;
        if(month !== 0) {
            return(year+" year and "+month+" month");
        } else {
            return (year+" year");
        }
    }
    else if(result === 0) {
        return("less than a month");
    }
    else if(result < 12) {
        return(result+" months")
    }
}

export default convert;