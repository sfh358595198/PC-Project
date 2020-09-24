let hints = document.querySelectorAll('.hints');
const psws = document.getElementById('psws')
const submit = document.getElementById('submit');
const phone = document.getElementById('phone')
const name = document.getElementById('name');
const psw = document.getElementById('psw');
const code = document.getElementById('code');
const txt = document.getElementById('txt');
const auto = document.getElementById('auto');
let sum;

function ranDom() {
    const num = document.getElementById('num');
    var a = parseInt(Math.random() * 10);
    var b = parseInt(Math.random() * 10);
    var c = parseInt(Math.random() * 10);
    var d = parseInt(Math.random() * 10);
    sum = `${a}${b}${c}${d}`
    num.innerHTML = `${a}${b}${c}${d}`
}
ranDom();
code.onchange = function() {
    if (code.value != sum) {
        txt.innerHTML = '验证码不正确';
    } else {
        txt.innerHTML = '';
    }
}
$('.ipt').focus(function() { //获取焦点时让下方提醒文字出现
    $(this).parent().siblings($("#num")).css('visibility', 'visible');
})
$('.ipt').blur(function() { //失去焦点是值为空的话让右边提醒文字出现
    if ($(this).val() == '') {
        $(this).siblings().css('display', 'block')
    }
})

function yes(num) { //输入正确提醒函数
    const span = document.createElement('span');
    hints[num].innerHTML = '';
    hints[num].appendChild(span);
    span.classList.add('notarize');
    hints[num].style.display = 'block';
}

function text(a, b) { //输入错误提示函数
    hints[a].innerHTML = b;
    hints[a].style.display = 'block';
}
phone.onchange = function() { //手机号值改变函数
    if (!phone.value.match(/^[0-9]{11}$/g)) { //正则验证
        text(0, '手机号码格式错误')
        return
    }
    $.post('http://localhost:8080/login', { //对比数据库里有没有当前输入的手机号
        phone: phone.value,
        status: 'in'
    }, function(res) {
        if (res == '账号已注册') {
            text(0, res)
        }
    })
    yes(0);
}
name.onchange = function() { //昵称函数
    if (!name.value.match(/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,16}$/g)) {
        text(1, '请输入正确格式的昵称')
        return
    }
    $.post('http://localhost:8080/login', { //对比数据库里有没有当前输入的手机号
        name: name.value,
        status: 'in'
    }, function(res) {
        if (res == '昵称已存在') {
            text(1, res)
        }
    })
    yes(1)
}
psw.onchange = function() { //密码函数
    if (!psw.value.match(/^[0-9A-Za-z]{6,20}$/g)) {
        text(2, '请以字母加数字格式输入')
        return
    }
    yes(2);
}
psws.onchange = function() { //再次输入函数
    if (psw.value != psws.value) {
        text(3, '密码输入不一致')
    } else if (psw.value == psws.value) {
        yes(3)
    }
}

submit.onclick = function() { //注册提交函数
    if (!phone.value.match(/^[0-9A-Za-z]{11}$/g) || !psw.value.match(/^[0-9A-Za-z]{6,20}$/g) || !name.value
        .match(/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,16}$/g)) {
        return
    }
    if (code.value != sum) {
        return
    }
    if (auto.checked == true) {
        $.post('http://localhost:8080/login', {
            name: name.value,
            psw: psw.value,
            phone: phone.value,
            status: 'in'
        }, function(res) {
            window.location.href = '../view/login.html'
        })

    }

}