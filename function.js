// function tambah() {
//     var hasil = 0;
//     for(i = 0; i < arguments. length;i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1,2,3,4,5);
// console.log(coba);

// global scope / window acope
// var a = 1

// function tes() {
//     var a = 2;
//     console.log(a);
    
// }
// tes();
// console.log(a);

// function recursion / mirip increment & decrement
 function tampilAngka(n) {
     if( n === 0) {
        return;
     }
     console.log(n);
     tampilAngka(n-1);
 }
 tampilAngka(10);

