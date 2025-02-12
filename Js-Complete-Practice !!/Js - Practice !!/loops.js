 for( let i=0;i<6;i++){
     console.log ("hello");
  }


  let a = 19;
  for( let i=1;i<=10;i++){
      console.log(a*i);
  }


 let obj = {
     name : "avii",
     class : 10 , 
     rollno : 1 ,
 }

  for (const key in obj) {
         const element = obj[key];
         console.log(key,element);
  }

 for (const a of "avii") {
     console.log(a);
 }

 let i = 1;
 while (i<20) {
     console.log("hello");
     i++;
 }

 {
 let i = 1;
 do{
     console.log(i);
     i++ ;
 }

 while(i<=20);

 }