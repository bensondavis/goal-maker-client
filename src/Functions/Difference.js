function Difference(A, B) {
    let data = { daily: 0, weekly: 0, monthly: 0, yearly: 0 };
    data["daily"] = A["daily"] - B["daily"];
    data["weekly"] = A["weekly"] - B["weekly"];
    data["monthly"] = A["monthly"] - B["monthly"];
    data["yearly"] = A["yearly"] - B["yearly"];

    return data;
}

export default Difference;