// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

// method mengelola penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
// method mengelola penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if( this.penumpang.length === 0) {
            alert('Angkot masih KOSONG');
            return false;
        }
// method menangani jika angkot sudah ada penumpang
        for( var i = 0; i < this.penumpang.length; i++) {
            if( this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }

}


// instansiasi object baru
var angkot1 = new Angkot('Robby',['Cibinong', 'Psr.Anyar'], [], 0);
var angkot2 = new Angkot('Syakir',['Cibinong','Babu Kuning'], [], 0);