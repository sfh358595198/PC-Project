const mbfour = document.getElementById('mb40')
const list = document.getElementById('theme')
const warp_tab = document.getElementsByClassName('type-header')[0]
const subion = document.getElementById('submission')
const allsite = document.getElementById('allsite')
const right_site = document.getElementById('right-site')
const page = document.getElementById('page')
    // const aon=document.getElementsByClassName('aon')[0]+ 
window.onload = function() {
    var app = new Vue({
        el: '#app',
        data() {
            return {
                model: {
                    total: 120, //总页数
                    size: 10, //每页显示条目个数不传默认10
                    page: 1, //当前页码
                }
            }
        },
        methods: {
            //页码切换执行方法
            pageFn(val = 0) {
                this.model.page = val;
                console.log(val);
                this.getlist(val - 1)
            },
            getlist(page = 0, limit = 10) {
                mbfour.innerHTML = '';
                axios.get('http://localhost:8080/diet_article?limit=' + limit + '&page=' + page).then(res => {
                    var res = res.data.data;
                    console.log(res);
                    for (var i = 0; i < res.length; i++) {
                        mbfour.innerHTML += `
                            <li class="article clearfix">
                                <div class="article-img br8">
                                    <a href="diet_desc.html">
                                        <img src="${res[i].img}" alt="">
                                    </a>
                                </div>
                                <div class="article-info">
                                    <a class="title" href="diet_desc.html"
                                        title="健康开心果，全民开心GO！">${res[i].title}</a>
                                    <p class="from">
                                        来自：
                                        <a href="http://www.douguo.com/site/shijiedaka">${'食界大咖秀'}</a>
                                        主题站
                                    </p>
                                    <p class="createtime">${res[i].createtime}</p>
                                    <a class="sall" href="diet_desc.html">${'查看全文'}</a>
                                </div>
                            </li>
                        `
                    }
                })
            }
        }
    })
}


function right() {
    $.get('http://localhost:8080/diet_theme', function(res) {
        console.log(res);
        for (var r = 0; r < res.data.length; r++) {
            theme.innerHTML += `
        <li> 
         <div class="theme-img br6">
        <a href="${res.data[r].catelink}">
            <img src="${res.data[r].img}" alt="">
        </a>
    </div>
    <a class="theme-title text-lips" href="${res.data[r].catelink}">${res.data[r].title}</a>
    <p class="content text-clamp">${res.data[r].describe}</p>
    </li>
        `
        }
    })
}
right()