const domarr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

function render(el) {
    const dom = document.getElementsByClassName(el)[0];
    const index = domarr.indexOf(el)
    fetch('http://localhost:8080/recipe_sc?typeof_id=' + index).then(response => {
        return response.json()
    }).then(res => {
        // console.log(res.data)
        var arr = Array.from(new Set(res.data.map(val => {
                return val.title
            })))
            // console.log(arr);
        var str = '';
        for (var i = 0; i < arr.length; i++) {
            str += `<div class="listbox">
                            <h3 class="smalltitle"><a href="">${arr[i]}</a></h3>
                            <ul class="desclist">`
            var arr1 = res.data.filter(val => {
                    return val.title == arr[i]
                })
                // console.log(arr1)
            var arr2 = arr1.map(val => {
                    return {
                        content: val.content,
                        url: val.catelink,
                        img: val.photo
                    }
                })
                // console.log(arr2);
            for (var j = 0; j < arr2.length; j++) {
                str += `<li class="item"><a href="${arr2[j].url}"><img src="${arr2[j].img}" alt="" onerror="this.src='../public/img/footimg.png';this.onerror=null"/><p>${arr2[j].content}</p></a></li>`
            }
            str += `<li class="itemmore"><a href="https://www.douguo.com/shicai/65/17">更多</a></li></ul></div>`
        }
        dom.innerHTML = str;
    })
}
for (var i = 0; i < domarr.length; i++) {
    render(domarr[i]);
}