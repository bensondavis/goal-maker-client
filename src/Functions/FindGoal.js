function convertString(data) {
  if(data !== "") {
    return(parseFloat(data));
  }
  else {
    return(0);
  }
}

function getResult(day,month,year) {

  let result = "Your goal can be achieved in ";

  if(year === 1) {
    result += year+" year"; 
  }
  else if(year > 1) {
    result += year+" years ";
  }

  if(month === 1) {
    result += "- "+ month+" month "; 
  }
  else if(month > 1) {
    result += "- "+ month+" months ";
  }

  if(day === 1) {
    result += "- "+ day+" day"; 
  }
  else if(day > 1) {
    result += "- "+ day+" days";
  }

  return result;
}

function findGoal(data = { daily: 0, weekly: 0, monthly: 0, yearly: 0 }, goal = 0, bankBalance = 0) {

  if(data['daily'] == 0 && data['weekly'] == 0 && data['monthly'] == 0 && data['yearly'] == 0) {
    return("Enter income")
  }

  if(goal == 0 || goal < bankBalance) {
    return("Enter a valid goal amount")
  }

  const Goal = convertString(goal);
  const perDayIncome = data["daily"] + (data["weekly"] / 7) + (data["monthly"] / 30) + (data["yearly"] / 365);

  if(perDayIncome <= 0) {
    return("Expenses are too high!");
  }

  let currentMoney = convertString(bankBalance);
  let day = 0;
  let week = 0;
  let month = 0;
  let year = 0;

  while(true) {
    if(currentMoney >= Goal) {
      break;
    }
    day++;
    currentMoney += data["daily"];
    if (day % 7 === 0) {
      week++;
      currentMoney += data["weekly"];
    }
    else if (day === 30) {
      day = 0;
      currentMoney += data["monthly"];
      month++;
      if(month === 12) {
        month = 0;
        year++;
        currentMoney += data["yearly"];
        break;
      }
    }
  }

  if(currentMoney >= Goal) {
    return(getResult(day,month,year));
  }

  let tempMoney = currentMoney;

  while(true) {
    year++;
    tempMoney += currentMoney;
    console.log({year, tempMoney, Goal})
    if(tempMoney >= Goal) {
      tempMoney -= currentMoney;
      year--;
      break;
    }
  }

  currentMoney = tempMoney;

  while(true) {
    if(currentMoney >= Goal) {
      break;
    }
    day++;
    currentMoney += data["daily"];
    if (day % 7 === 0) {
      week++;
      currentMoney += data["weekly"];
    }
    else if (day === 30) {
      day = 0;
      currentMoney += data["monthly"];
      month++;
      if(month === 12) {
        month = 0;
        year++;
        currentMoney += data["yearly"];
      }
    }
  }

  if(currentMoney >= goal) {
    return(getResult(day,month,year));
  }
}

export { findGoal };
