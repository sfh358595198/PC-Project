var list = document.getElementById("jxlist")
var tabs = 'recipe_jx';
if (window.location.search != "") {
    var pages = window.location.search.split('=')[2]
    var tabs = window.location.search.split('=')[1].substring(0, 9)
}
if (tabs == 'recipe_zx') {
    $('.title').html('最新菜谱')
    $('.ali').eq(0).attr('href', 'menu.html?tab=recipe_zx&page=0')
    $('.ali').eq(1).attr('href', 'menu.html?tab=recipe_zx&page=24')
    $('.ali').eq(2).attr('href', 'menu.html?tab=recipe_zx&page=48')
    $('.ali').eq(3).attr('href', 'menu.html?tab=recipe_zx&page=72')
    $('.last').attr('href', 'menu.html?tab=recipe_zx&page=72')
}

if (pages == 24) {
    $('.ali').eq(1).addClass("active").siblings().removeClass("active")
} else if (pages == 48) {
    $('.ali').eq(2).addClass("active").siblings().removeClass("active")
} else if (pages == 72) {
    $('.ali').eq(3).addClass("active").siblings().removeClass("active")
}

$('.next').click(function() {
    if (tabs == 'jixuan') {
        $(this).attr('href', 'menu.html?tab=recipe_jx&page=24')
    } else if (tabs == 'zuixin') {
        $(this).attr('href', 'menu.html?tab=recipe_zx&page=24')
    }

    if (tabs == 'jixuan' && pages == 24) {
        $(this).attr('href', 'menu.html?tab=recipe_jx&page=48')
    } else if (tabs == 'jixuan' && pages == 48) {
        $(this).attr('href', 'menu.html?tab=recipe_jx&page=72')
    } else if (tabs == 'jixuan' && pages == 72) {
        alert('没有更多了！')
    }

    if (tabs == 'zuixin' && pages == 24) {
        $(this).attr('href', 'menu.html?tab=recipe_zx&page=48')
    } else if (tabs == 'zuixin' && pages == 48) {
        $(this).attr('href', 'menu.html?tab=recipe_zx&page=72')
    } else if (tabs == 'zuixin' && pages == 72) {
        alert('没有更多了！')
    }
})

function getData(page = 0, tab) {
    $.get('http://localhost:8080/index?tab=' + tab + '&page=' + page, function(res) {
        console.log(res);
        var data = res.data
        for (var i = 0; i < data.length; i++) {
            list.innerHTML += `
            <li class="item">
          <a href="${data[i].title_link}" class="cover"><img src="${data[i].img}" alt=""></a>
          <div class="relative">
            <a href="${data[i].title_link}" class="cookname">
              ${data[i].title}
            </a>
            <a href="" class="author">
              <img src="${data[i].author_photo}" alt=""> ${data[i].author}           
            </a>
            <a href="" class="proicon">
              <img src="${data[i].proimg}" alt="">
            </a>
            <div class="view-coll"> 
              <span class="view">${data[i].view}</span>
              <span class="collest">${data[i].collect}</span>
            </div>
          </div>
        </li>
            `
        }
    })
}
getData(pages, tabs)