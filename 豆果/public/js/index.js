var note = document.querySelector(".note-list");
var node = document.querySelector(".node");
var search = document.querySelector(".all_search");
var hot = document.querySelector(".hot");
var drList = document.querySelector(".dr-list");
var article = document.querySelector(".article-lists");
var mlist = document.querySelector(".m-list");
var works = document.querySelector(".u-works");

//每日精选菜谱
fetch("http://localhost:8080/box").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        note.innerHTML += `<li class="item">
                                      <a href="./recipe_desc1.html">
                                        <img class="z-imgs" src="${res.data[i].img}" alt="">
                                        <h6 class="br4">${res.data[i].title}</h6>
                                      </a>
                                      <a href=#}">
                                      <span> by </span>
                                        <span class="br4">${res.data[i].author}</span>
                                      </a>
                                      <a href="#">
                                        <img class="proicon" src="${res.data[i].proimg}" alt="">
                                      </a>
                                </li>`;
    }
}).catch(err => {
    console.log(err)
})

//笔记
fetch("http://localhost:8080/node").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        node.innerHTML += `<li class="item">
                                  <a href="./recipe_desc1.html">
                                    <img class="imgs" src="${res.data[i].img}" alt="">
                                    <h6 class="br4">${res.data[i].title}</h6>
                                  </a>
                                  <a href="#">
                                    <span>by</span>
                                    <span class="br4">${res.data[i].author}</span>
                                  </a>
                                  <a href="#">
                                    <img class="proicon" src="https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png"
                                      alt="">
                                  </a>
                              </li>`;
    }
}).catch(err => {
    console.log(err)
})

//大家都在搜
fetch("http://localhost:8080/search").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        search.innerHTML += `<li><a href="${res.data[i].connect}">${res.data[i].name}</a></li>`;
    }
}).catch(err => {
    console.log(err)
})

//热门食材
fetch("http://localhost:8080/hot").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        hot.innerHTML += `<li>
                            <a href="#">
                              <img src="${res.data[i].img}" alt="">
                              <p class="br4">${res.data[i].name}</p>
                            </a>
                          </li>`;
    }
}).catch(err => {
    console.log(err)
})

//豆果达人
fetch("http://localhost:8080/talent").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        drList.innerHTML += `<li>
                                <a href="#">
                                <img class="r-img" src="${res.data[i].author_photo}" alt="">
                                <a class="d-title" href="#">${res.data[i].author}</a>
                                <a href="#">
                                  <img class="proicon" src="https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png" alt="">
                                </a>
                                <p>${res.data[i].fans}</p>
                                </a>
                                <a href="login.html" class="gz">
                                  <span class="addicon"> + </span>
                                  关注
                                </a>
                            </li>`;
    }
}).catch(err => {
    console.log(err)
})

//精彩主题文章
// fetch("http://localhost:8080/article")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res.data);
//     for (var i = 0; i < res.data.length; i++) {
//       article.innerHTML += `
//       <li>
//       <a href="#"> <span class="posint"></span>${res.data[i].name} </a>
//     </li>
//       `;
//     }
//   });

//商城精选
fetch("http://localhost:8080/mall").then((response) => {
    return response.json();
}).then((res) => {
    // console.log(res.data);
    for (var i = 0; i < 3; i++) {
        mlist.innerHTML += `<li>
                              <a href="mall_desc.html">
                                  <img src="${res.data[i].img}" alt="">
                                  <p>${res.data[i].title}</p>
                                  </a>
                                  <span>${res.data[i].new_price}</span>
                                  <i>${res.data[i].volume}</i>
                            </li>`;
    }
}).catch(err => {
    console.log(err)
})

// 大家的作品
fetch("http://localhost:8080/works").then((response) => {
    return response.json();
}).then((res) => {
    //  console.log(res.data);
    for (var i = 0; i < res.data.length; i++) {
        works.innerHTML += `<li>
                                    <div class="l-works">
                                    <a href="recipe_desc1.html"> 
                                    <img width="110px" src="${res.data[i].img}" alt="">
                                    </a>
                                      <div class="n-works">
                                      <a href="note.html">
                                        <p>${res.data[i].name}</p>
                                      <span>${res.data[i].name1} </span>
                                      </a>
                                      </div>
                                    </div>
                                    <div class="r-works">
                                    <a href="#"> <img width="110px" src="${res.data[i].imgs1}" alt=""></a>
                                    <a href="#"> <img width="110px" src="${res.data[i].imgs2}" alt=""></a>
                                    <a href="#"> <img width="110px" src="${res.data[i].imgs3}" alt=""></a>
                                    </div>
                                </li>`;
    }
}).catch(err => {
    console.log(err)
})
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});