function convert(result, safe) {
  if (safe) {
    return "Your goal have been achieved!";
  }
  let year = 0,
    month = 0;
  if (result >= 12) {
    year = Math.round(result / 12);
    month = result % 12;
    if (month !== 0) {
      if (Math.round(month) == 12) {
        year = year + 1;
        return "Your goal can be achieved in " + year + " years";
      }
      return (
        "Your goal can be achieved in " +
        year +
        " year and " +
        Math.round(month) +
        " month"
      );
    } else {
      return "Your goal can be achieved in " + year + " year";
    }
  } else if (result === 0) {
    return "Your goal can be achieved in less than a month";
  } else if (result < 0) {
    return "Your goal cannot be achieved (expenses are greater than incomes)";
  } else if (result < 12) {
    return "Your goal can be achieved in " + Math.ceil(result) + " months";
  }
}

export default convert;
