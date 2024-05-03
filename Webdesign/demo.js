// s1 s2 s3
const arr= {

        id:1,
        fname:"Hemanth",
        avg:99.12,
        avg:65.12

}
Object.defineProperty(arr,"id",{writable:false})

arr.id=22;
console.log(arr)


