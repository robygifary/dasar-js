// manipulasu Array

// 1. Menambah isi Array
// var arr = [];
// arr[0] = "Robby";
// arr[1] = "Tamara";
// arr[2] = "Gifary";

// cara ke-2
// var arr = ["a",1,true];
//  console.log(arr[0]);

// Menghapus isi Array
// var arr = ["Robby","Tamara","Gifary"];
// arr[1] = undefined;
// console.log(arr);

// Menampilkan isi Array
// var arr = ["Robby","Tamara","Gifary"];
// for(var i = 0;i < arr.lenght;i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }
// Method Array 
// 1.join = menggabungkan isi array menjadi string
// var arr = ["Robby","Tamara","Gifary"];
// console.log(arr.join(' - '));

// 2.push = menambah element di akhir
// var arr = ["Robby","Tamara","Gifary"];
// arr.push('syakir');
// console.log(arr.join(' - '));

// pop = menghilangkan element terakhir
// var arr = ["Robby","Tamara","Gifary"];
// arr.pop();
// console.log(arr.join(' - '));

// 3.unshift = menambah di awal element & shift = menghilangkan element awal
// var arr = ["Robby","Tamara","Gifary"];
// arr.unshift('Raffa');
// arr.shift();
// console.log(arr.join(' - '));

// 4.splice = menyambung element
// indexAwal. mauDihapusBerapa,elementBaru1,elementBaru2,...
// var arr = ["Robby","Tamara","Gifary"];
// arr.splice(1, 2, 'Rasya', 'Raffa');
// console.log(arr.join(' - '));

// 5.slice = mengiris element
// var arr = ['Robby','Tamara','Gifary', 'Rasya','Raffa'];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6.forEach
// var nama = ['Roby','Tamara','Gifary','Syakir','Rasya','Raffa'];
// var angka = [1,2,3,4,5,6,7,8,9];
// nama.forEach(function(a, i) {
//     console.log('Mahasiswa Ke- ' + (i+1) + ' Adalah : ' + a);
    
// });

// 7. map/untuk angka
// var angka = [2,4,6,8,10];
// var Angka2 = angka.map(function(a) {
//     return a * 2;
    
// });
// console.log(Angka2.join(' - '));

// 8.sort/ mengurutkan
// var angka = [2,4,6,8,9,20,15,10];
// angka.sort(function (a,b) {
//     return a-b;
    
// });
// console.log(angka.join(' - '));

// 8.filter = menemukan banyak nilai & find = menemukan 1 nilai
// var angka = [2,4,6,8,9,20,15,10];
// var angka2 = angka.filter(function(x) {
//     return x > 6;
    
// });
// console.log(angka2);
