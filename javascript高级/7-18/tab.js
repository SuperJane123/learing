// 用es6的语法来写，class
class Tab {
    // 会变的属性有：
    // 选择器：navSelector
    // 内容：contnetSelector
    // 选择器样式：navClass
    // 内容样式：contentClass

    // 属性写在constructor里面
    constructor(opt) {
        // 设置默认值
        opt = opt || {};
        this.navSelector = opt.navSelector || '.nav > li';
        this.contnetSelector = opt.contnetSelector || '.content';
        this.navClass = opt.navClass || 'acticve';
        this.contentClass = opt.contentClass || 'show';
        this.type = opt.type || 'mouseover';

    };
    // 描写事件方法
    addEvent() {
        // 要提前保存一个实例对象的this
        let _this = this; 
        // 获取属性
        let lis = document.querySelectorAll(this.navSelector);
        let contents = document.querySelectorAll(this.contnetSelector);
        // 注册事件
        lis.forEach((e, i) => {
            e.addEventListener(this.type, function () {
                // 遍历每个li
                lis.forEach(e => {
                    e.classList.remove(_this.navClass);
                });
                this.classList.add(_this.navClass);
                // 遍历每个内容
                contents.forEach(e => {
                    e.classList.remove(_this.contentClass);
                });
                contents[i].classList.add(_this.contentClass);

            });

        });
    };


    // 描写移除类名，给自己添加类名方法
    changeNavClass (lis,currentLi){
        lis.forEach(e=>{
            e.classList.remove(this.navClass);
        });
        currentLi.classList.add(this.navClass);
    };

    changeContentClass(content,currentConent){
        content.forEach(e=>{
            e.classList.remove(this.contentClass);
        });
        currentConent.classList.add(this.contentClass);
    }


};