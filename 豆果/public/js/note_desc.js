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
const bus = new Vue();
Vue.component('my-ipt', {
    data() {
        return {
            msg: ''
        }
    },
    template: `
        <div class="comment">
            <textarea type="text" class="ipt"  v-model.trim="msg"></textarea>   
            <button class="btn"  disabled v-if="msg==''">发布</button>
            <button class="btn btn1" @click="send()" v-else>发布</button>
        </div>
    `,
    methods: {
        send() {
            bus.$emit('send-data', this.msg)
        }
    },
})
Vue.component('my-list', {
    data() {
        return {
            arr: []
        }
    },
    template: `
        <div class="comment1">
            <ul v-if="arr.length">
                <li v-for="(item,index) in arr" :key="index" class="footer-item">
                    {{item.title}}
                    <div>
                        <my-good @send-num="getdata" :index="index" :good="item.good"></my-good>
                        <button @click="remove(index)" class="del">删除</button>
                    </div>
                </li>    
            </ul>
            <h4 class="text" v-else>暂无数据</h4>
        </div>
        
    `,
    mounted() {
        const that = this;
        bus.$on('send-data', (data) => {
            that.arr.push({
                title: data,
                good: 0
            })
        })
    },
    methods: {
        getdata(data, index) {
            this.arr[index].good = data
        },
        remove(i) {
            this.arr.splice(i, 1)
        }
    }
})
Vue.component('my-good', {
    props: ['index', 'good'],
    template: `
        <button @click="send" class="good">{{good}}</button>
    `,
    methods: {
        send() {
            this.good++;
            this.$emit('send-num', this.good, this.index)
        }
    }
})
new Vue({
    el: "#app",
});
var box = document.querySelector('#left');
var banner = document.getElementById('banner');
var title = document.querySelector('.location-title')
var arr = [];
for (var a = 0; a < 5;) { //生成五个随机数
    var index = Math.ceil(Math.random() * 250);
    for (var i = 0; i < arr.length; i++) {
        if (index == arr[i]) {
            break
        }
    }
    arr.push(index);
    a++;
}
for (var i = 0; i < arr.length; i++) { //随机渲染五条数据
    fetch('http://localhost:8080/note?detail_id=' + arr[i]).then(response => {
        return response.json()
    }).then(res => {
        if (res.data[0] != undefined) {
            banner.innerHTML += `
                <div id="text">
                    <a href="note_desc.html?id=${res.data[0].id}" >
                        <img src="${res.data[0].img}" alt="">
                    <a/>
                    <div class="banner_title">
                        <a href="note_detail.html?id=${res.data[0].id}" >
                            <p>${res.data[0].title}</p>
                        <a/>
                        <div class="like">
                            ${res.data[0].flag==1 ? '<img class="love" data-change="0" data-id=' + res.data[0].id + ' src="https://cp1.douguo.com/static/nweb/images/liked.png?v=9" alt="">' : '<img class="love" data-change="0" data-id=' + res.data[0].id + ' src="https://cp1.douguo.com/static/nweb/images/like2.png?v=9" alt="">'}
                        <span class="txt">${res.data[0].love}</span>
                        </div>
                    </div>
                </div>
            `
        }
    })
}


fetch('http://localhost:8080/note?detail_id=' + window.location.search.split('=')[1]).then(
    response => { //详情页面
        return response.json()
    }).then(res => {
    box.innerHTML = `
            <div class="banner" style="background-image: url('${res.data[0].img}');"></div>
            <h3>${res.data[0].title}</h3>
            <div class="user">
                <div class="user-left">
                    <img src="${res.data[0].author_photo}" alt="">
                    <span class="user_name">${res.data[0].author}</span>
                    <p class="focus"><span>+</span> <span>关注</span></p>
                </div>
                <div class="user-right">
                    <span class="praise">${res.data[0].flag==1 ? '<img class="love" data-change="1" data-id=' + res.data[0].id + ' src="https://cp1.douguo.com/static/nweb/images/liked.png?v=9" alt="">' : '<img class="love" data-change="1" data-id=' + res.data[0].id + ' src="https://cp1.douguo.com/static/nweb/images/ylike.png?v=7" alt="">'}<span class="txt">${res.data[0].love}</span></span>
                    <span class="collect"><img src="https://cp1.douguo.com/static/nweb/images/star1.png?1" alt=""> 收藏</span>
                </div>
            </div>
            `;
    title.innerHTML = '' + res.data[0].title + ''
})
setTimeout(() => {
    var love = document.querySelectorAll('.love');
    var span = document.querySelectorAll('.txt');
    for (let i = 0; i < love.length; i++) {
        love[i].onclick = function(e) {
            fetch('http://localhost:8080/note?flag=' + e.target.dataset.id).then(response => {
                return response.json()
            }).then(res => {
                var index = parseInt(res.data[0].love) + 1;
                var index1 = parseInt(res.data[0].love) - 1;
                if (res.data[0].flag == 1) {
                    this.setAttribute('src', 'https://cp1.douguo.com/static/nweb/images/like2.png?v=9')
                    fetch('http://localhost:8080/note?id=' + e.target.dataset.id + '&i=' + index1 +
                        '&k=' + 0 + '').then(response => {
                        return response.json()
                    }).then(res => {
                        fetch('http://localhost:8080/note?flag=' + e.target.dataset.id).then(
                            response => {
                                return response.json();
                            }).then(res => {
                            span[i].innerHTML = res.data[0].love
                        })
                    })
                } else {
                    this.setAttribute('src', 'https://cp1.douguo.com/static/nweb/images/liked.png?v=9');
                    fetch('http://localhost:8080/note?id=' + e.target.dataset.id + '&i=' + index +
                        '&k=' + 1 + '').then(response => {
                        return response.json()
                    }).then(res => {
                        fetch('http://localhost:8080/note?flag=' + e.target.dataset.id).then(
                            response => {
                                return response.json();
                            }).then(res => {
                            span[i].innerHTML = res.data[0].love
                        })
                    })
                }
            })
        }
    }
}, 1000);