
var copyContent = function() {
    var tr = $('tr')
    for (var i = 0; i < 15; i++) {
        tr.clone().appendTo("tbody")
    }
}

var determineDropDirection = function() {
    $(".dropdown-menu").each(function() {
        // 设置样式后可计算出实际高度
        $(this).css({
            visibility: "hidden",
            display: "block",
        })
        // 统一初始化为下拉菜单
        $(this).parent().removeClass("dropup")
        // 页面顶部菜单保持向下
        if ($(this).offset().top * 2 < $(document).height()) {
            $(this).removeAttr("style")
            return
        }
        // 判断菜单在页面位置，如果位置不够则向上展开
        if ($(this).offset().top + $(this).outerHeight() > $(window).height() + $(window).scrollTop()) {
            $(this).parent().addClass("dropup")
        }
        // 还原属性设置
        $(this).removeAttr("style")
    })
}


var __main = function() {
    // 复制列表
    copyContent()
    // 首次初始化
    determineDropDirection()
    // 绑定鼠标进入时初始化，列表内容变动时需要更新
    $('body').on('mouseenter', '.dropdown', function(e) {
        determineDropDirection()
    })
}


$(document).ready(function() {
    __main()
})
