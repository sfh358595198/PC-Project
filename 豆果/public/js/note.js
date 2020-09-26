var num = 0;

function getdata() {
    var list = document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
        num += 30;
        fetch('http://localhost:8080/note?tab=' + (num - 30)).then(response => {
            return response.json()
        }).then(res => {
            res.data.forEach((item, index, all) => {
                list[i].innerHTML += `
                    <div class="box">
                        <a href="note_desc.html?id=${item.id}">
                        <img class="lazyload" data-src="${item.img}"  alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null">
                        </a>
                        <div class="title">
                            <div class="title-text">${item.title}</div>
                            <div class="title-user">
                                <div class="title-left"><img class="lazyload" data-src="${item.author_photo}"  alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null">${item.author.length>12?item.author.slice(0,12)+'..':item.author}</div>
                                <div class="title-right">${item.flag==1 ? '<img  class="love lazyload" data-id=' + item.id + ' data-i=' + item.love + ' data-src="https://cp1.douguo.com/static/nweb/images/liked.png?v=9"alt=""><span class="txt">' + item.love + '</span>' : '<img class="love lazyload"  data-id=' + item.id + ' data-i=' + item.love + ' data-src="https://cp1.douguo.com/static/nweb/images/like2.png?v=9"alt=""><span class="txt">' + item.love + '</span>'}</div>
                            </div>
                        </div>
                    </div>
                    `
            });
        })
    }
}
getdata()

function good() {
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
    }, 5000);
}
window.addEventListener('scroll', function() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
        getdata();
        good();
    }
}, false);
good();