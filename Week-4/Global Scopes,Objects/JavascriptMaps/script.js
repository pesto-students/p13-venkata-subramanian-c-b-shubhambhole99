let hm=new Map()

function calcWordFrequencies(str){
    let arr=str.split(" ")
    let hm=new Map()
    for(let i=0;i<arr.length;i++){
        if(hm.has(arr[i])){
            hm.set(arr[i],hm.get(arr[i])+1)
        }
        else{
            hm.set(arr[i],1)
        }
    }

    hm.forEach((value,key)=>{
        console.log(key,value)
    })
}


calcWordFrequencies("hey hi Mark hi mark")