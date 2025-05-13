// for loop (video-27)

// for (let  i= 0; i <= 10; i++) {
//     const element = i;
//     console.log(element); //1-10 porjonto print hobe
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <=10 ; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`) // ans 1-10 er namta asbe.
    }
}
let myArr = ["flash","batman","superman"]
console.log(myArr.length); //3

for (let index = 0; index < myArr.length; index++) {//ekhana index++ na likhe sudhu index likhle ans flash hote thakbe etake ctrl+c type kore off korte hobe
    const element = myArr[index];
   console.log(element); //flash batman superman.
}

//break & continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
      console.log(`Detected 5 `); /// ans 5 er por ar show korbe na
      break; 
    }
    console.log(`value of index is ${index}`); // ans 20 porjonto show korbe na jodi index == 5 ei if ta likha hoi.
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5){
      console.log(`Detected 5 `); // continue er khatre 1 bar maf kora hoi, ans 5 er por 20 porjonto print hobe.
      continue;
    }
    console.log(`value of index is ${index}`); 
}
