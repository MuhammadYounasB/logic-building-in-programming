// Code to make array reverse
array = [12,25,3,4,5];


for( i=0; i<array.length; i++ ){
    // first index of array
    startIndex=i;
    // last index of array
    lastIndex=array.length-i-1;
    // if start index is not less than last index then don't swap values
    if(startIndex<lastIndex){
    // assign value of start index in temp variable
        temp=array[startIndex];
    // assign value of last index to start index
        array[startIndex]=array[lastIndex];
    // assign value temp to last index which was the value of start index
        array[lastIndex]=temp;
    }
}
// print Array
console.log(array);