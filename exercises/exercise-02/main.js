function pairs(start, end) {
    let evenValues = '';

    for (start = start; start <= end; start++) {
        if (start % 2 == 0) {
            console.log(start);
            evenValues += (start < end) ? `${start}, ` : `${start}.`;
        }
    }

    return evenValues;
}

const result = pairs(32, 62);
document.getElementById("result").innerHTML = result;
