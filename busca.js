function linearSearch(arr, target){
    let index = -1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            index = i
        }
    } 
    return index
}

let count = 0
function binarySearch(arr, target){
    let firstIndex = 0
    let lastIndex = arr.length - 1
    let midIndex = 0

    while(lastIndex >= firstIndex){
        count++
        midIndex = Math.floor((firstIndex + lastIndex) / 2)
        if(target > arr[midIndex]){
            firstIndex = midIndex + 1
        }else if(target < arr[midIndex]){
            lastIndex = midIndex - 1
        }else{
            return midIndex
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const target = 7
const linearIndex = linearSearch(arr, target)
const binaryIndex = binarySearch(arr, target)
console.log(`Busca linear - achou o elemento no index ${linearIndex}`)
console.log(`Busca binária - achou o elemento no index ${binaryIndex} com ${count}`)  