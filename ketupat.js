let n = 10
let s = ''; 
for(a = n; a > 0; a--) {
    for(i = 1; i <= a - 1; i++) {
        s += ' ';
    }

    for(a1 = 1; a1 <= n-a+1; a1++) {
        s += '*';
    }

    for(a2 = 1; a2 <= n-a; a2++) {
        s +='*';
    }

    s += '\n';
}

for(b = 1; b <= n; b++) {
    for(j = 1; j < b+1; j++) {
        s += ' ';
    }

    for(b1 = 1; b1 <= n-b; b1++) {
        s += '*';
    }

    for(b2 = 1; b2 < n-b; b2++) {
        s += '*';
    }

    s += '\n';
}

console.log(s);
