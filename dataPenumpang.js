// membuat variable nama penumpang
var penumpang = ['Robby', undefined, 'Syakir'];
// membuat variable tambahPenumpang menjalankan fungsi dan menambahkan parameter 
var tambahPenumpang = function(namaPenumpang, penumpang) {

    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;

                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang) {
                // tampilkan pesan kwsalahan
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    } 
}
// membuat variable hapusPenumpang
var hapusPenumpang = function(namaPenumpang, penumpang) {
    
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tampilkan pesan jika angkot kosong
        console.log('Angkot masih kosong');
        
        // tidak mungkin ada penumpang turun
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri kursi dari awal
        for( var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if ( penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah nama menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array
               
                // jika tidak ada nama yang sesuai
            } else if( i == penumpang.length - 1) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                // kembalikan isi array
                return penumpang;
            }
        }
    }
    
}