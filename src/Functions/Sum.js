function Sum(list) {
  let data = { daily: 0, weekly: 0, monthly: 0, yearly: 0 };

  for (let i = 0; i < list.length; i++) {
    if (list[i].frequencyType === "DAY" && list[i].value !== "") {
      data["daily"] += parseFloat(list[i].value);
    } else if (list[i].frequencyType === "WEEKLY" && list[i].value !== "") {
      data["weekly"] += parseFloat(list[i].value);
    } else if (list[i].frequencyType === "MONTHLY" && list[i].value !== "") {
      data["monthly"] += parseFloat(list[i].value);
    } else if (list[i].frequencyType === "YEARLY" && list[i].value !== "") {
      data["yearly"] += parseFloat(list[i].value);
    }
  }

  return data;
}

export default Sum;
