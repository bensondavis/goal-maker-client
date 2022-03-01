function Sum(list) {
    let res = 0;
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].value)
        res += parseFloat(list[i].value);
    }

    return res;
}

export default Sum;