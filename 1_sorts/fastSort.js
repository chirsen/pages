/*快速排序*/
function fast(arr, left, right){
    var len = arr.length;
    if(left < right){
        var middle = part(arr, left, right);
        fast(arr, left, middle);
        fast(arr, middle+1, right);
    }
    return arr;
}
function part(arr, left, right){
    var base = arr[left], baseIndex = left, changeIndex = baseIndex;
    for(var i = left+1; i < right; i++){
        if(arr[i] < base){
            swap(arr, i, baseIndex);
            baseIndex++;
            changeIndex = i;
        }
    }
    swap(arr, baseIndex, changeIndex);
    return baseIndex;
}
function swap(arr, i, baseIndex){
    var temp = arr[i];
    arr[i] = arr[baseIndex];
    arr[baseIndex] = temp;
}

var arr = [1 , 2, 6, 4, 3];

console.log(fast(arr, 0, arr.length-1));