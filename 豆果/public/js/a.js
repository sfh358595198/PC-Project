Vue.component('articlenav', {
    data() {
        return {
            articlenav: ['精选', '最新', '菜单', '食材', '智能找菜', '分类']
        }
    },
    template: ` <div class="articlenav">
    <ul class="articlenav-list">
        <li v-for="item in articlenav"><a href="#">{{item}}</a></li>
    </ul>
    </div>`,
})
Vue.component('maincontent', {
    data() {
        return {
            res: null,
            data0: null, //title
            data0d: null,
            data1: [], //畜类content
            data2: [],
            data3: [],
            data4: [],
            data5: [],
            data6: [],
            data7: [],
            data8: [],
            data9: [],
            data10: [],
            data11: [],
            data12: [],
            data13: [],
            data14: [],
            data15: [],
            data16: [],
            bool: false, //判断展开或收起
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
        }
    },
    template: ` 
    <div class="main"> 
        <div class="sidewrap">
            <div class="item" v-for="(data0,index) in data0">
                <li @click="expend1(data0)" class="title">
                    <span></span><span>{{data0}}</span>
                </li>  
                <ul class="clearfix contentBox" v-show="data0d == data0">
                    <li v-for="(data1,index) in data1" v-show="data0d == '畜类'" @click="send(data1.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data1.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data2,index) in data2" v-show="data0d == '禽类'" @click="send(data2.content)"><a class="seletshicai" shicaiid="1"><span class="">{{data2.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data3,index) in data3" v-show="data0d == '蛋类'" @click="send(data3.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data3.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data4,index) in data4" v-show="data0d == '鱼类'" @click="send(data4.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data4.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data5,index) in data5" v-show="data0d == '虾蟹贝类'" @click="send(data5.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data5.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data6,index) in data6" v-show="data0d == '其他水产'" @click="send(data6.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data6.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data7,index) in data7" v-show="data0d == '根茎类蔬菜'" @click="send(data7.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data7.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data8,index) in data8" v-show="data0d == '瓜果类蔬菜'" @click="send(data8.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data8.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data9,index) in data9" v-show="data0d == '茎叶类蔬菜'" @click="send(data9.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data9.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data10,index) in data10" v-show="data0d == '豆制品'" @click="send(data10.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data10.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data11,index) in data11" v-show="data0d == '菌菇类'" @click="send(data11.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data11.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data12,index) in data12" v-show="data0d == '水果类'" @click="send(data12.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data12.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data13,index) in data13" v-show="data0d == '坚（干）果类'" @click="send(data13.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data13.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data14,index) in data14" v-show="data0d == '乳制品 甜品'" @click="send(data14.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data14.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data15,index) in data15" v-show="data0d == '乳类'" @click="send(data15.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data15.content}}</span></a></li>
                </ul>
                <ul class="clearfix  contentBox" v-show="data0d == data0">
                    <li v-for="(data16,index) in data16" v-show="data0d == '面类'" @click="send(data16.content)"><a href="javascript:void(0);" class="seletshicai" shicaiid="1"><span class="">{{data16.content}}</span></a></li>
                </ul>
            </div>
        </div>
        <div class="rightbox">
			<div class="iptBox">
				<div class="newgle"></div>
				<div class="newgld"></div>
				<div class="mjword mll pts">
					<p class="glomy mr15 showtitle">从左侧的列表中选择食材</p>
					<p class="glomy mr15 showselect">你已经选择的食材</p>
					<p class="keywordlists inblok"></p>
				<!--<span>虾&nbsp;&nbsp;<a class="closeshicai">&nbsp;×&nbsp;</a></span></p> -->
                <!--<button type="button" class="submitshicai btndl mlm">智能匹配</button> -->
				</div>
			</div>
		</div>
  </div>`,
    mounted() {
        axios.get('http://localhost:8080/').then(res => {
            this.res = res
            this.data0Fn()
            this.data1Fn()
            this.data2Fn()
            this.data3Fn()
            this.data4Fn()
            this.data5Fn();
            this.data6Fn();
            this.data7Fn();
            this.data8Fn();
            this.data9Fn();
            this.data10Fn();
            this.data11Fn();
            this.data12Fn();
            this.data13Fn();
            this.data14Fn();
            this.data15Fn();
            this.data16Fn();

        }).catch(err => {
            console.log(err)
        });
    },
    methods: {
        expend1(d) {
            this.data0d = d
            console.log(this.data0i)
        },
        data0Fn() {
            this.data0 = this.res.data.data
            this.data0 = this.data0.map(val => {
                return val.title
            })
            const arr = []
            for (var i = 0; i < this.data0.length; i++) {
                if (arr.indexOf(this.data0[i]) == -1) {
                    arr.push(this.data0[i])
                }
            }
            this.data0 = arr;
            console.log(this.res.data.data)
        },
        data1Fn() {
            this.data1.splice(0, 1, this.res.data.data)
            this.data1 = this.data1[0].splice(0, 20)
        },
        data2Fn() {
            this.data2.splice(0, 1, this.res.data.data)
            this.data2 = this.data2[0].splice(0, 16, this.res.data.data[0, 16])
        },
        data3Fn() {
            this.data3.splice(0, 1, this.res.data.data)
            this.data3 = this.data3[0].splice(0, 4, this.res.data.data[0, 4])
        },
        data4Fn() {
            this.data4.splice(0, 1, this.res.data.data)
            this.data4 = this.data4[0].splice(0, 17, this.res.data.data[0, 17])
        },
        data5Fn() {
            this.data5.splice(0, 1, this.res.data.data)
            this.data5 = this.data5[0].splice(0, 20, this.res.data.data[0, 20])
            console.log(this.res.data.data)

        },
        data6Fn() {
            this.data6.splice(0, 1, this.res.data.data)
            this.data6 = this.data6[0].splice(0, 8, this.res.data.data[0, 8])
        },
        data7Fn() {
            this.data7.splice(0, 1, this.res.data.data)
            this.data7 = this.data7[0].splice(0, 15, this.res.data.data[0, 15])
        },
        data8Fn() {
            this.data8.splice(0, 1, this.res.data.data)
            this.data8 = this.data8[0].splice(0, 17, this.res.data.data[0, 17])
            console.log(this.data8)

        },
        data9Fn() {
            this.data9.splice(0, 1, this.res.data.data)
            this.data9 = this.data9[0].splice(0, 17, this.res.data.data[0, 17])
            console.log(this.res.data.data)
        },
        data10Fn() {
            this.data10.splice(0, 1, this.res.data.data)
            this.data10 = this.data10[0].splice(0, 8, this.res.data.data[0, 8])
        },
        data11Fn() {
            this.data11.splice(0, 1, this.res.data.data)
            this.data11 = this.data11[0].splice(0, 15, this.res.data.data[0, 15])
        },
        data12Fn() {
            this.data12.splice(0, 1, this.res.data.data)
            this.data12 = this.data12[0].splice(0, 22, this.res.data.data[0, 22])
        },
        data13Fn() {
            this.data13.splice(0, 1, this.res.data.data)
            this.data13 = this.data13[0].splice(0, 20, this.res.data.data[0, 20])
        },
        data14Fn() {
            this.data14.splice(0, 1, this.res.data.data)
            this.data14 = this.data14[0].splice(0, 2, this.res.data.data[0, 2])
        },
        data15Fn() {
            this.data15.splice(0, 1, this.res.data.data)
            this.data15 = this.data15[0].splice(0, 8, this.res.data.data[0, 8])
        },
        data16Fn() {
            this.data16.splice(0, 1, this.res.data.data)
            this.data16 = this.data16[0].splice(0, 4, this.res.data.data[0, 4])
        },
        send(d) {
            console.log(d)
        }
    }
})
new Vue({
    el: "#app",
})