const divideArray= (arr)=>{
    let even_arr=[]
    let odd_arr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even_arr.push(arr[i])
        }else{
            odd_arr.push(arr[i])
        }
    }
    even_arr.sort((a,b)=>(a-b))
    odd_arr.sort((a,b)=>(a-b))
    
    console.log(even_arr,odd_arr)
}


const arr=[4,2,9,1,8]
divideArray(arr)