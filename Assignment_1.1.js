for(let i=1;i<=100;i++){
    f=i%3==0
    s=i%5==0
    console.log(s?(f?"fizzbuzz":"buzz"):(f?"fizz":i))

}