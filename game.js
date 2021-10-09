var tanya = true;

while (tanya){
    // menangkap pilihan player
    var p = prompt('pilih : Batu,Gunting,Kertas')

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34) {
        comp = 'Batu';
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = 'Gunting'
    } else {
        comp = 'Kertas';
    }

    var hasil = '';
    // menentukan rules
    if( p == comp ) {
        hasil = 'SERI !';
    } else if( p == 'Batu') {
        if(comp == 'Gunting') {
            hasil = 'MENANG !';
        } else {
            hasil ='KALAH !';
        }
    } else if( p == 'Gunting') {
        if(comp == 'Batu') {
            hasil = 'KALAH !';
        } else {
            hasil = 'MENANG !';
        }
    } else if( p == 'Kertas') {
        if(comp == 'Batu') {
            hasil = 'MENANG !';
        }
    } else {
        hasil = 'Memasukan pilihan yang Salah !';
    }


    // tampilkan hasil
    alert('Kamu memilih :' + p + ' \nComputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('Lagi ?');
}

alert('Terima Kasih Sudah Bermain');






// // tebak  angka 1 - 10 // PR

// var a = alert('Tebak angka 1 - 10 \nKamu memiliki 3 kesempatan');

// //menangkap pilihan komputer // membangkitkan bilangan random
// var comp = Math.random();

// if( comp < 0.42) {
//     comp = 1 || 2 || 3 || 4;
// } else if( comp >= 0.42 && comp < 0.76) {
//     comp = 5 || 6 || 7 || 8;
// } else {
//     comp = 9 || 10;
// }
// var p = prompt('Masukan Angka tebakan')
// var hasil = '';

// if(p == comp) {
//     hasil = 'TEBAKAN BENAR';
// } else if (p == 1 || 2 || 3 || 4) {
//     if (comp == 5 || 6 || 7 || 8) {
//         hasil = alert('Terlalu RENDAH \nKamu memiliki 2 kesempatan lagi');
//     } else {
//         hasil = alert('Yang anda masukan bukan angka');
//     }
// } else if (p == 5 || 6 || 7 || 8) {
//     if (comp == 1 || 2 || 3 || 4) {
//         hasil = alert('Terlalu TINGGI \nKamu memiliki 1 kesempatan lagi');
//     } else {
//         hasil = alert('Yang anda masukan bukan angka');
//     }
// }
// console.log(comp);





