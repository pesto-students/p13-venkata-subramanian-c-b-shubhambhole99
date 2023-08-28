const getExchangeRate=async(str)=> {

    try{
    const response=await fetch("https://api.exchangerate.host/latest");
    const data=await response.json();
    if (str in data.rates){
    return data.rates[str];
    }
    else{
        return null
    }


    }catch(err){
        console.log(err)
    }


}

getExchangeRate('USD').then((rate)=>{
    console.log(rate)
})