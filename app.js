
function cal(a, b) {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var pt = document.getElementById('pt').value;

    a = Number(a);
    b = Number(b);
    switch (pt) {
        case '+':
            var kq = document.getElementById('kq').value = (a + b);
            break;
        case '-':
            var kq = document.getElementById('kq').value = (a - b);
            break;
        case '*':
            var kq = document.getElementById('kq').value = (a * b);
            break;
        case '/':
            if (b !== 0) {
                var kq = document.getElementById('kq').value = (a / b);
            } else {
                alert('Khong chia duoc cho so 0 !');
                var kq = document.getElementById('kq').value = 'NaN';
            }
            break;
    }
}