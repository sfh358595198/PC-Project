const submit = document.getElementById("submit");
const auto = document.getElementById("auto");
let user = document.getElementById("phone");
let psw = document.getElementById("psw");
submit.onclick = function() {
    if (!phone.value.match(/^[0-9A-Za-z]{11}$/g)) { //正则验证
        alert('账号不正确');
        return
    }
    if (!psw.value.match(/^[0-9A-Za-z]{6,20}$/g)) {
        alert('密码不正确');
        return
    }
    if (auto.checked == true) {
        $.post('http://localhost:8080/login', {
            name: user.value,
            psw: psw.value,
            status: 'up'
        }, function(res) {
            if (res == "账号不存在") {
                alert(res)
            } else {
                window.location.href = '../view/index.html' //跳转主页的地方
            }
        })
    }
}