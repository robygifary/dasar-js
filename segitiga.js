// // buat variable string
// var s = '';
// // pengulangan untuk mengulangan baris
// for ( var i = 0; i < 10; i++) {
//     // pengulangan untuk di tiap2 baris tertentu
//     for (j = 0; j <= 10 - i; j++) {
//        // variable string yg di jumlahkan dengan string spasi kosong
//         s += ' ';

//     }
//     // pengulangan untuk pengulangan baris
//     for ( var a = 0; a <= 2 * i; a++) {
//         // variable string yg di jumlahkan dengan string bintang
//         s += '*';
        
//     }
//     // variable string yang di jumlahkan dengan string \n
//     s += '\n';
// }


// console.log(s);


var s = ' ';

for (var i = 0; i < 10; i++ ){
    if( i >= 0 ) {
        console.log(' ');
    }else {
        console.log('#');
    }
    for ( var j = 0; j <= 10; j++) {
        if( i >= 0 ) {
            console.log('#');
        }else {
            console.log(' ');
        }
        s += '#';

    }
    s += '\n';
}
console.log(s);