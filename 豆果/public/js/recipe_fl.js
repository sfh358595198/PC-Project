const domarr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen'];

function render(el) {
    const dom = document.getElementsByClassName(el)[0];
    const index = domarr.indexOf(el)
    fetch('http://localhost:8080/recipe_fl?typeof_id=' + index).then(response => {
        return response.json()
    }).then(res => {
        var arr = Array.from(new Set(res.data.map(val => {
            return val.title
        })))
        var str = '';
        for (var i = 0; i < arr.length; i++) {
            str += `<h3 class = "smalltitle">${arr[i]}</h3><ul class="list">`
            var arr1 = res.data.filter(val => {
                return val.title == arr[i]
            })
            var arr2 = arr1.map(val => {
                return {
                    content: val.content,
                    url: val.url
                }
            })
            if (arr2.length <= 21) {
                for (var j = 0; j < arr2.length; j++) {
                    str += `<li class="item"><a href="${arr2[j].url}">${arr2[j].content}</a></li>`
                }
                str += `</ul>`
            } else {
                for (var j = 0; j < 21; j++) {
                    str += `<li class="item"><a href="${arr2[j].url}">${arr2[j].content}</a></li>`
                }
                for (var j = 21; j < arr2.length; j++) {
                    str += `<li class="item" style="display:none"><a href="${arr2[j].url}">${arr2[j].content}</a></li>`
                }
                str += `<li class="itemmore" onclick="getmore()"><span>更多 <img src="https://i1.douguo.com//upload/banner/1577964642.png" alt=""></span></li>`
                str += `</ul>`
            }
        }
        dom.innerHTML = str;
    })
}

function getmore() {
    const el = event.target;
    const name = el.localName;
    const num = name == 'li' ? 0 : name == 'span' ? 1 : 2;
    var list = '';
    switch (num) {
        case 0:
            list = el.parentNode.children;
            if (el.className.indexOf('active') != -1) {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'none';
                }
                el.classList.remove('active');
                el.children.innerHTML = '更多 <img src="https://i1.douguo.com//upload/banner/1577964642.png" alt="">'
            } else {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'block';
                }
                el.classList.add('active');
                el.children.innerHTML = '收起 <img src="https://i1.douguo.com//upload/banner/1577964646.png" alt="">'
            }
            break;
        case 1:
            list = el.parentNode.parentNode.children;
            if (el.parentNode.className.indexOf('active') != -1) {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'none';
                }
                el.parentNode.classList.remove('active');
                el.innerHTML = '更多 <img src="https://i1.douguo.com//upload/banner/1577964642.png" alt="">'
            } else {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'block';
                }
                el.parentNode.classList.add('active');
                el.innerHTML = '收起 <img src="https://i1.douguo.com//upload/banner/1577964646.png" alt="">'
            }
            break;
        case 2:
            list = el.parentNode.parentNode.parentNode.children;
            if (el.parentNode.parentNode.className.indexOf('active') != -1) {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'none';
                }
                el.parentNode.parentNode.classList.remove('active')
                el.parentNode.innerHTML = '更多 <img src="https://i1.douguo.com//upload/banner/1577964642.png" alt="">'
            } else {
                for (var i = 21; i < list.length - 1; i++) {
                    list[i].style.display = 'block';
                }
                el.parentNode.parentNode.classList.add('active')
                el.parentNode.innerHTML = '收起 <img src="https://i1.douguo.com//upload/banner/1577964646.png" alt="">'
            }
            break;
    }
}
for (var i = 0; i < domarr.length; i++) {
    render(domarr[i]);
}