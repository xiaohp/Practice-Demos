// 获取 value
log($('.basic-single').val())
// 获取 text
log($('.basic-single').find("option:selected").text())

// 调试内容
var getTitle = function(){
    window.log = console.log.bind(console, '*** xiao')
    var params = {
        'type': 'limit_discount',
        'pagenum': 1
    }
    ajax('/misc/ajax_get_white_list_title', params, function(data){
        if (data.status == "OK") {
            log('OK', data)
        } else {
            log('other', data)
        }
    });
}
getTitle()



// 网上的设置指定值方案，可以设置 value 10 以内的值，不推荐使用
$(".js-example-basic-single").select2("val", "6"); 
$(".js-example-basic-single").select2("val", "selcet_name"); 

// 官方的设置方法，推荐使用
$("select.names").val('6'); 
$("select.names").trigger('change'); 


var setValue = function(){
    var selectValue = 5
    var t = document.querySelector('.js-example-basic-single')  
      
    for(i=0; i < t.length; i++){ //给select赋值  
        if(selectValue == t.options[i].value) {  
            t.options[i].selected = true  
        }  
    } 
      
}
setValue()
