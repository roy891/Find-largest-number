function maximum(){
    let array = [16, 25, 30, 5, 20, 52, 7, 35];
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    
    document.getElementById("maxnum").innerHTML = (`The largest number in the array is ${max}`);
}
maximum();