function kangoroo(x1, v1, x2, v2) {
    var res;

    if ((x1 < x2) && (v1 < v2)) {
        res = "NO"
    } else {
        var hitung = (x1 - x2) % (v2 - v1)
        if(hitung === 0 || hitung === -0){
            var operator = x2 - x1
            var pembagi = v1 - v2
            var hasil = operator / pembagi
            if (hasil > 0) {
                res = "YES"
            } else {
                res = "NO"
            }
        }else{
            res = "NO"
        }
    }
    return res;
}

console.log(kangoroo(63, 8, 94, 3))