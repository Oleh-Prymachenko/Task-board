
function app(){
  const arr = [3,7,5,2,3]; 
  const prefer = '';
  const max = '';
  const bigger = () => {
    let len = arr.length;
    for (let i = 0; i < len-1; i++){ 
        for (let j = 0; j < len-1-i; j++){
             if (arr[j+1] < arr[j]){ 
                let t = arr[j+1]; 
                arr[j+1] = arr[j]; 
                arr[j] = t; 
            }
        }
     }                   
    console.log(arr[arr.length - 1])
    return arr[arr.length - 1];    // На выходе сортированный по возрастанию массив A.
  }
  bigger(max);   
}

app();