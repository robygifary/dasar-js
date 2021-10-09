var item = prompt ('Masukan Nama minuman : \n (Contoh : Jus Buah, Susu, Coffee, Softdrink, Beer)');

switch(item) {
    case 'Jus Buah' :
    case 'Susu' :
    case 'Coffee' :
        alert('Minuman SEHAT.');
        break;
    case 'Softdrink' :
    case 'Beer' :
        alert('Minuman TIDAK SEHAT');
        break;
    default :
        alert('Sementara Stock Habis');
        break;
}