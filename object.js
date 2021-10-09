// var Mahasiswa = {
//     nama : 'Syakir',
//     lulus : true,
//     IPSemester : [2.90,3.10,3.25,2.88,3.04],
//     IPKumulatif : function() {
//         var total = 0;
//         var ips = this.IPSemester;
//         for(var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// Object Literal
var mhs1 = {
    nama : 'Alim',
    nim : '201255421',
    emai : 'alimbagol666@gmail.com',
    jurusan : 'Teknik mesin'
}

var mhs2 = {
    nama : 'Syakir',
    nim : '2012555477',
    emai : 'Syakir@gmail.com',
    jurusan : 'Teknik sipil'
}

// Membuat Object menggunakan function declaration
function buatObjectMahasiswa(nama,nim,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}
var mhs3 = buatObjectMahasiswa('Rasya','20125435','rasya@gmail.com','Teknik sipil');
var mhs4 = buatObjectMahasiswa('Raffa','201205225','raffa@yahoo.com','Menejemen');

// Membuat Object menggunakan function Constructor
function Mahasiswa(nama,nim,email,jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs5 = new Mahasiswa('Raida','20123601','raida@yahoo.com','Akbid');
