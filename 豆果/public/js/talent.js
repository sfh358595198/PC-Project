var num = 0;
var num1 = 1;
var tab;
$(".last").click(function() {
    $('.ali').eq(3).addClass('active').siblings().removeClass('active')
    getData(tab, 4)
})
$(".one").click(function() {
    $('.ali').eq(0).addClass('active').siblings().removeClass('active')
    getData(tab, 1)
})
$(".type-head a").click(function() {
    $(this).addClass('active').siblings().removeClass('active')
    tab = `'${$(this).html()}'`
    getData(tab)

    $('.ali').eq(0).addClass('active').siblings().removeClass('active')
})
$(".ali").click(function() {
    $(this).addClass('active').siblings().removeClass('active')
    getData(tab, $(this).html())

})
$(".next").click(function() {
    num++;
    num1++;
    if (num >= 4) {
        num = 0
    }
    if (num1 > 4) {
        num1 = 1
    }
    $('.ali').eq(num).addClass('active').siblings().removeClass('active');
    getData(tab, num1)
})

