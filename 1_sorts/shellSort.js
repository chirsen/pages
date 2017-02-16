/*插入排序*/
function insert(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        var j = i - 1, temp = arr[i];
        for (; j >= 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}


/*shell 插入排序的高级*/
function shell(arr) {
    var len = arr.length, grep = len / 2;
    while (grep) {
        for (var i = grep; i < len; i++) {
            var j = i - grep, temp = arr[i];
            for (; j >= 0; j -= grep) {
                if (temp < arr[j]) {
                    arr[j + grep] = arr[j];
                    arr[j] = temp;
                } else {
                    break;
                }
            }
        }
        grep = Math.floor(grep / 2);
    }
    return arr;
}