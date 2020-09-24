var sccontent = document.querySelector(".sc-content");
var a = 28
var c = a + 28
$(window).bind("scroll", function() {
    var scrollTop = $(this).scrollTop();　　
    var scrollHeight = $(document).height();　　
    var windowHeight = $(this).height();
    // console.log(scrollHeight-scrollTop-windowHeight )
    if (scrollHeight - scrollTop - windowHeight == 0) {
        get(c)
    }
});

function get(b) {
    $.get("http://localhost:8080/shopp?id=" + b, function(res) {
        //   console.log(res)
        for (var i = 0; i < res.data.length; i++) {
            sccontent.innerHTML += `<li>
                                        <a href="mall_desc.html">
                                          <img src="${res.data[i].img}" alt="">
                                          <h2>${res.data[i].title}</h2>
                                          <p>
                                            <span class="price1">${res.data[i].new_price}</span>
                                            <span class="price2">${res.data[i].old_price}</span>
                                            <span class="price3">${res.data[i].volume}</span>
                                          </p>
                                        </a>
                                      </li>`;
        }
    })
}
get(28)