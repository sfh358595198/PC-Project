var list = document.getElementById("jxlist");
var page = 1;
var arr = [1, 2, 3, 4];
var box = document.querySelector('.pages');

function getData(page) {
    $.get("http://localhost:8080/recipe_zx?page=" + page, function(res) {
        list.innerHTML = "";
        var data = res.data
        for (var i = 0; i < data.length; i++) {
            list.innerHTML += ` <li class="item">
                                    <a href="${data[i].title_link}" class="cover"><img src="${data[i].img}" alt=""></a>
                                    <div class="relative">
                                        <a href="${data[i].title_link}" class="cookname">${data[i].title}</a>
                                        <a href="" class="author"><img src="${data[i].author_photo}" alt=""> ${data[i].author}</a>
                                        <a href="" class="proicon"><img src="${data[i].proimg}" alt=""></a>
                                        <div class="view-coll"> 
                                            <span class="view">${data[i].view}</span> <span class="collest">${data[i].collect}</span>
                                        </div>
                                    </div>
                                </li>`
        }
    })
}
getData(page);
$('.prev').css('display', "none")
$('.ali').click(function() {
    page = $(this).html()
    judge(page)
})
$('.prev').click(function() {
    if (page == 1) {
        judge(page)
    } else {
        page--;
        judge(page)
    }
})
$('.next').click(function() {
    if (page == 4) {
        judge(page)
    } else {
        page++;
        judge(page)
    }
})
$('.first').click(function() {
    judge(1)
})
$('.last').click(function() {
    judge(4)
})

function judge(page) {
    $('.ali').eq(page - 1).addClass('active').siblings().removeClass('active')
    if (page == 1) {
        $('.prev').css('display', "none")
    }
    if (page > 1) {
        $('.prev').css('display', 'block')
        $('.prev').html('上一页')
    }
    getData(page)
}