
var jmlAngkot = 10;
var angkotBeroprasi = 6;

// selama noAngkot lebih kecil sama dengan jumlah angkot lakukan increment
for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    // jika noAngkot lebih keci dari angkotBeroperasi
    if(noAngkot <= 6) {
        // maka cetak Angkot no 1 - 6 beroperasi dengan baik
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    }
    // selain itu jika Angkotnya 8
    else if ( noAngkot === 8) {
        // maka lakukan cetak Angkot no 8 - 10 sedang lembur
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    }
    // selain dari itu
    else {
        // maka lakukan cetak Angkot no 9 - 10 sedang tidak beroperasi
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}