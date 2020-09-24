var cyhStep = document.getElementById('cyhStep');
// 紫芋发糕的做法步骤
fetch('http://localhost:8080/index', {
    method: 'GET'
}).then(response => {
    // console.log(response);
    return response.json()
}).then(res => {
    // console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
        cyhStep.innerHTML += `
      <div class="cyh-step-item">
        <img class="cyh-sI-left" src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        <div class="cyh-sI-right">
          <div>${res.data[i].buzhou}</div>
        </div>
      </div>
    `
    }
}).catch(error => {
    console.log(error);
})

// 紫芋发糕的其他做法
const ul = document.querySelector('.cyh-elsePra-list');
console.log(ul);
fetch('http://localhost:8080/else', {
    method: 'GET'
}).then(response => {
    // console.log(response);
    return response.json()
}).then(res => {
    console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
        ul.innerHTML += `
      <li class="cyh-elsePra-item">
        <a href="#" class="cyh-item-img">
          <img src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        </a>
        <div>
          <a href="#" class="cyh-elseItem-name">${res.data[i].name}</a>
          <a href="#" class="cyh-elseItem-anthor">${res.data[i].author}</a>
        </div>
      </li>
    `
        const lis = document.getElementsByTagName('li');
        if (i == 2 || i == 5) {
            lis[i].classList.add('cyh-elsePra-item1')
        }
    }
}).catch(error => {
    console.log(error);
})

// 紫芋发糕的相关推荐
const list1 = document.getElementById('cyh-relatedPra-lists1');
fetch('http://localhost:8080/related', {
    method: 'GET'
}).then(response => {
    // console.log(response);
    return response.json()
}).then(res => {
    console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
        list1.innerHTML += `
      <li class="cyh-relatedPra-item">
        <a href="#" class="cyh-item-img">
          <img src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        </a>
        <div>
          <a href="#" class="cyh-relatedItem-name">${res.data[i].name}</a>
          <a href="#" class="cyh-relatedItem-anthor">${res.data[i].author}</a>
        </div>
      </li>
    `
        const lis1 = document.querySelectorAll('.cyh-relatedPra-item');
        if (i == 2 || i == 5) {
            lis1[i].classList.add('cyh-relatedPra-item1')
        }
    }
}).catch(error => {
    console.log(error);
})

// 评论
const ul2 = document.querySelector('.cyh-comms');
console.log(ul2);
fetch('http://localhost:8080/comment', {
    method: 'GET'
}).then(response => {
    // console.log(response);
    return response.json()
}).then(res => {
    console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
        ul2.innerHTML += `
      <li class="cyh-comms-item clearfix">
        <img src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        <div class="cyh-author-comment">
          <div class="cyh-auC-name">${res.data[i].name}</div>
          <div class="cyh-auC-commtxt">${res.data[i].commtxt}</div>
          <div class="cyh-auC-time">${res.data[i].time}</div>
          <a href="###" class="cyh-auC-relay">回复</a>
        </div>
      </li>
    `
    }
}).catch(error => {
    console.log(error);
})

// 糖醋香菇条的做法步骤
var cyhStep2 = document.getElementById('cyhStep2');
fetch('http://localhost:8080/step2', {
        method: 'GET'
    }).then(response => {
        // console.log(response);
        return response.json()
    }).then(res => {
        // console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
            cyhStep2.innerHTML += `
      <div class="cyh-step-item">
        <img class="cyh-sI-left" src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        <div class="cyh-sI-right">
          <div>${res.data[i].buzhou}</div>
        </div>
      </div>
    `
        }
    }).catch(error => {
        console.log(error);
    })
    // 糖醋香菇条的相关推荐
const lists2 = document.getElementById('cyh-relatedPra-lists2');
fetch('http://localhost:8080/related2', {
    method: 'GET'
}).then(response => {
    return response.json()
}).then(res => {
    // console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
        lists2.innerHTML += `
      <li class="cyh-relatedPra-item">
        <a href="#" class="cyh-item-img">
          <img src="${res.data[i].image}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/>
        </a>
        <div>
          <a href="#" class="cyh-relatedItem-name">${res.data[i].name}</a>
          <a href="#" class="cyh-relatedItem-anthor">${res.data[i].author}</a>
        </div>
      </li>
    `
        const lis1 = document.querySelectorAll('.cyh-relatedPra-item');
        if (i == 2 || i == 5) {
            lis1[i].classList.add('cyh-relatedPra-item1')
        }
    }
}).catch(error => {
    console.log(error);
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
// lazyLoadInit({
//     coverColor: "white",
//     coverDiv: "",
//     offsetBottom: 0,
//     offsetTopm: 0,
//     showTime: 500,
//     onLoadBackEnd: function(i, e) {
//         // console.log("onLoadBackEnd:"+i);
//     },
//     onLoadBackStart: function(i, e) {
//         // console.log("onLoadBackStart:"+i);
//     }
// });
// 刷新页面回到顶部
window.onunload  =   function ()  { 
    window.scrollTo(0, 0);
}