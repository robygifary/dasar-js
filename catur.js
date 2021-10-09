var s = '';
var panjang = 10;
var lebar = 10;

for(var i = 1; i <= lebar; i++) {
    if( i % 2 == 0) {
        for(var j = 1; j <= panjang; j++) {
            if( j % 2 == 0) {
                s += '#';
            } else {
                s += ' ';
            }
        }
    } else {
        for(var j = 1; j <= panjang; j++) {
            if( j % 2 == 0) {
                s += ' ';
            } else {
                s += '#';
            }
        }
    }
    s += '\n';
}
console.log(s);