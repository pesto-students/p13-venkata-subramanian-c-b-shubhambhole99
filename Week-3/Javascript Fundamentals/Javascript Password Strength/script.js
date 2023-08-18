function isStrongPassword(str){
    let f1=false;
    let f2=false;
    let f3=false;
    if(str.length>=8){
        f1=true;
    }
    // doesn't contain password
   
    const regex = /password/i;

    if (regex.test(str)) {
   
    console.log("String contains 'password' (case-insensitive).");
    } else {
        f2=true;
    console.log("String does not contain 'password'.");
    }
    // atleast one uppercse
    for(let i=0;i<str.length;i++){
        if(/^[A-Za-z]$/.test(str[i]) && str[i]==str[i].toUpperCase()){
            f3=true;
            break
        }
    }
    if(f1&&f2&&f3){
        return true;
    }
    else{
        return false;
    }


}


console.log(isStrongPassword("Qwerty123"))