var jmlAngkot = 10;
var angkotBeroprasi = 6;

// selama noAngkot lebih keci sama dengan jmlAngkot lakukan increment
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    // jika noAngkot lebih keci sama dengan angkotBeroperasi & noAngkot tidak sama dengan angkot no 5
    if (noAngkot <= angkotBeroprasi  && noAngkot !== 5) {
        // maka cetak angkot no 1 - 6 beroperasi dengan baik 
        console.log ('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
        // selain itu jika Angkot no 8, 10, 5
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        // maka lakukan cetak angkot no 8, 10, 5 sedang lembur
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    }
    // selain dari pada itu
    else {
        // maka lakukan cetak angkot no 7, 9 sedang tidak beroperasi
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}