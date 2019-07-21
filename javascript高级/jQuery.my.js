; (function () {

    // 封装$css选择器
    function jQuery(selecter) {
        return new Init(selecter);
    };

    // 构造函数，jq对象要求是一个位数组，用数字做属性名
    function Init(selecter) {

        let dom = document.querySelectorAll(selecter);
        for (let i = 0; i < dom.length; i++) {
            // 
            this[i] = dom[i];
        };
        // 伪数据还需要一个lenght
        this.length = dom.length;
        console.log(this);
        return this;
    };



    // 封装一个each遍历函数
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        }
    };


    // 封装css方法。两种情况，一种是获取属性名，一种是设置属性
    Init.prototype.css = function (property, value) {
        // document.body.style.backgroundColor = '#000';

        // 把带单位的用数组装起来

        if (value == undefined) {
            return window.getComputedStyle(this[0])[property]
        } else {
            let pxAarry = ['width', 'height', 'left', 'top'];
            for (let i = 0; i < this.length; i++) {
                // 判断如果需要带单位的属性名在数组里面
                if (pxAarry.indexOf(property) !== -1) {
                    // 如果数组里面有，那就判断值是否有带单位,如果没有带单位，就给单位-- 因为indexof是字符串的方法，需要把value转换成字符串
                    if (value.toString().indexOf('px') === -1) {
                        this[i].style[property] = value + 'px';
                    } else {
                        // 否则就不用加单位
                        this[i].style[property] = value;
                    }

                } else {
                    // 否则就不用带单位的
                    this[i].style[property] = value;
                };
            };
        };
        return this;
    };


    // 封装添加类名的方法
    Init.prototype.addClass = function (className) {
        // box.classList.add('类名')
        // for(let i = 0;i < this.length;i++){
        //     this[i].classList.add(className);
        // };
        this.each(function (i, t) {
            t.classList.add(className);
        });

        return this;
    };


    // 封装移除类名的方法
    Init.prototype.removeClass = function (className) {
        // for (let i = 0; i < this.length; i++) {
        //     this[i].classList.remove(className);
        // };
        this.each(function (i, t) {
            t.classList.remove(className);
        });
        return this;
    };



    // 封装切换类名的方法
    Init.prototype.toggleClass = function (className) {
        // for (let i = 0; i < this.length; i++) {
        //     this[i].classList.toggle(className)
        // };
        this.each((i,t)=>{
            t.classList.toggle(className);
        });
        return this;
    };




    window.$ = window.jQuery = jQuery;


})();
let box = $('.box');
console.log(box);
box.css('width', 200);
box.css('height', 200);
box.css('background', 'red');
box.addClass('font');
box.removeClass('b');
box.toggleClass('c')

console.log(box);



