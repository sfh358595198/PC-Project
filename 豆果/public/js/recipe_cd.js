var list = document.getElementById('list')

if (window.location.search != "") {
    var pages = window.location.search.split('=')[2]
    var tab = window.location.search.split('=')[1].substring(0, 14)
}
if (tab == 'recipe_menu_zx') {
    $(".new").addClass('active').siblings().removeClass('active')
    $('.ali').eq(0).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=0')
    $('.ali').eq(1).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=12')
    $('.ali').eq(2).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=24')
    $('.ali').eq(3).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=36')
    $('.last').attr('href', '"recipe_cd.html?tab=recipe_menu_zx&page=36')
} else {
    $(".hot").addClass('active').siblings().removeClass('active')
}
if (pages == 12) {
    $('.ali').eq(1).addClass("active").siblings().removeClass("active")

} else if (pages == 24) {
    $('.ali').eq(2).addClass("active").siblings().removeClass("active")

} else if (pages == 36) {
    $('.ali').eq(3).addClass("active").siblings().removeClass("active")

}
$('.next').click(function() {
    if (tab == 'recipe_menu_zr') {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zr&page=12')
    } else if (tab == 'new') {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=12')
    }

    if (tab == 'hot' && pages == 12) {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zr&page=24')
    } else if (tab == 'hot' && pages == 24) {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zr&page=36')
    } else if (tab == 'hot' && pages == 36) {
        alert('没有更多了！')
    }

    if (tab == 'recipe_menu_zx' && pages == 12) {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=24')
    } else if (tab == 'new' && pages == 24) {
        $(this).attr('href', 'recipe_cd.html?tab=recipe_menu_zx&page=36')
    } else if (tab == 'new' && pages == 36) {
        alert('没有更多了！')
    }
})

function getData(tab = "recipe_menu_zr", pages = 0) {
    $.get('http://localhost:8080/recipe_cd?tab=' + tab + '&page=' + pages, function(res) {
        var data = res.data
        for (var i = 0; i < data.length; i++) {
            list.innerHTML += `<li>
                                    <a href="../view/recipe_desc2.html" class="menu-item">
                                    <img src="${data[i].img}" alt="" class="web-100">
                                    <div class="menu-info">
                                    <p class="text-lips">${data[i].title}</p>
                                    <p class="rnum">${data[i].rnum}</p>
                                    </div>
                                    </a>
                                </li>`
        }
    })
}
getData(tab, pages)