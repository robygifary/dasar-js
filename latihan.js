var tanya = true;
while(tanya) {
    
    var p = prompt('Masukan Nilai');

    if(p >= 80)
    {
        alert('NIlai = A');
    }else if(p >= 70 && p < 80)
    {
        alert('Nilai = B');
    }else if(p >= 60 && p < 70)
    {
        alert('Nilai = C');
    }else{
        alert('NIlai = D');
    }
    tanya = confirm('Cek lagi ?');
}
alert('Terima kasih');