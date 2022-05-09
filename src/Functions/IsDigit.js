function IsDigit(key) {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

  const result = arr.indexOf(key);
  if (result !== -1) {
    return true;
  } else {
    return false;
  }
}

export default IsDigit;
