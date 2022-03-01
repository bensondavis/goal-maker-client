function Sum(list) {
  if (list[0].value === "") {
    return 0;
  }

  let res = 0;
  for (let i = 0; i < list.length; i++) {
    let x = 0;

    if (list[i].frequencyType === "DAY") {
      x = parseFloat(list[i].value) * 30;
    } else if (list[i].frequencyType === "WEEKLY") {
      x = parseFloat(list[i].value) * 4;
    } else if (list[i].frequencyType === "YEARLY") {
      x = parseFloat(list[i].value) / 12;
    } else {
      x = parseFloat(list[i].value);
    }

    res += x;
  }

  return res;
}

export default Sum;
