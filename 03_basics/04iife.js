// Immediately invoked function expressions (iife) //
function chai(){
    console.log(`DB CONNECTED`)
}

// chai() // DB CONNECTED

(function chai(){
    console.log(`DB CONNECTED`)
})();  //DB CONNECTED

(function aur(){
    // function aur eta holo named iife.
    console.log(`DB CONNECTED TWO`)
})(); // DB CONNECTED TWO,, ei ans asbe na jodi uporer ei code })() er por.

(()=>{
    console.log(`DB CONNECTED TWO`)
})(); //  DB CONNECTED TWO,, ei ans asbe na jodi uporer ei code })() er por.

((name)=>{
    // name holo unnamed iife.   
    console.log(`DB CONNECTED TWO ${name}`)
})("hitesh")  //  DB CONNECTED TWO hitesh. eivabe o excicute kora jai.

// video 25 holo practicle ja video dekha sikhte hobe //