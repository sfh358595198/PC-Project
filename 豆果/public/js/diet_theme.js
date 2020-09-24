const allsite = document.getElementById('allsite')

$.get('http://localhost:8080/diet_theme1', function(res) {
    console.log(res);
    for (var j = 0; j < res.data.length; j++) {
        // console.log(res.data[r].title);
        allsite.innerHTML += `
        <li class="asone"> 
        <div class="aspc">
                        <a href="http://www.douguo.com/site/lifetips" target="_blank">
                           <img src="${res.data[j].img}" alt="生活小窍门"></a>
                    </div>
                    <h3>
                        <a href="http://www.douguo.com/site/lifetips" target="_blank">${res.data[j].title}</a>
                    </h3>
                    <p>${res.data[j].describe}</p>
                    <div class="allthe rb3">
                        <span>
                            <a href="http://www.douguo.com/site/lifetips" target="_blank">${res.data[j].allthe}</a>
                        </span>
                    </div>
                    <a class="catelink" href="http://www.douguo.com/site/lifetips" target="_blank"></a>
    </li>
        `
    }

})