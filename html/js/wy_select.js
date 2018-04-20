// (function($){
//     $.fn.extend({
//         "wy_inselect":function(options){
//             if(!isValid(options)) return this;
//             var $Id = $(this);
//             var last;
//             $Id.find(".wyinput-drop").css("width",$(".wyinput-group input").outerWidth() - 12 +"px").hide();
//             $Id.find(".wyinput-group input").keyup(function(event){
//                 last = event.timeStamp;
//                 setTimeout(function(){    //设时延迟0.5s执行
//                     if(last-event.timeStamp==0)
//                     //如果时间差为0（也就是你停止输入0.5s之内都没有其它的keyup事件发生）
//                     {
//                         var arr= searchIndex($Id,options);
//                         loadDrop($Id,arr);
//                     }
//                 },500);
//             })
//             $Id.find(".wyinput-drop").delegate(".drop-line a","click",function(){
//                 var html=$(this).html();
//                 $(this).parents(".wyinput-drop").siblings(".wyinput-group").find("input").val(html);
//                 $Id.find(".wyinput-drop").hide()
//             })

//         }
//     })

//     //监测参数是否合法
//     function isValid(options){
//         return !options || (options　&& typeof options === "object")?true:false;
//     }

//     //加载下拉框
//     function loadDrop($Id,arr){
//         var html = "";
//         if(arr.length == 0){
//             $Id.find(".wyinput-drop").hide().html("");
//             return;
//         }
//         $.each(arr,function(idx,obj){
//             html+='<p class="drop-line">' + '<a href="#">'+obj.name+'</a></p>';
//         })
//         $Id.find(".wyinput-drop").html(html).show();
//     }

//     //模糊查询
//     function searchIndex($Id,options){
//         var $input = $Id.find(".wyinput-group input");
//         var keywords = $input.val();
//         var arr=[];
//         if(keywords==""||keywords==" "){
//             return arr;
//         }
//         $.each(options,function(idx,obj){
//             if(obj.name.indexOf(keywords)>=0){
//                 arr.push({name:obj.name});
//             }
//         })
//         $Id.find(".wyinput-group .wyinput-btn").click(function(){
//             var value = $(".wyinput-group input").val();
//             switch(value){
//                 case '菜谱':
//                     window.location.href = "../html/caipu.html";
//                     break;
//                 case '运动':
//                     window.location.href = "../html/sports.html";
//                     break;
//                 case '心理':
//                     window.location.href = "../html/psychology.html";
//                     break;
//                 case '交流':
//                     window.location.href = "../html/communicate.html";
//                     break;
//                 default:
//                     alert('你所查询的没有结果！');
//                     break;
//             }
//             $(".wyinput-group input").val('');
//             $(".wyinput-group input").attr('placeholder',"请输入关键字");
//         })
//         return arr;
//     }

// })(window.jQuery)

$("#chooseKey").bind('input propertychange',function(){
    /*这个是全部数据的数组*/
    var arr = ['菜谱','运动','心理','交流','补气血','养生菜谱','运动器材', '心理疾病','心理健康','养生交流','蔬菜'];
    /*这个数组我是防止出现重复的数据进行数据去重复后的新数组*/
    var arrNew = [];
    var i;
    for(i=0;i<arr.length;i++){
        var arrItems=arr[i];
    　　  /*判断元素是否存在于arrNew中，如果不存在则插入到arrNew的最后*/
    　　  if($.inArray(arrItems,arrNew)==-1) {
    　　　　    arrNew.push(arrItems);
            /*console.log(arrNew);*/                                                    
        }
    }
    /*这是将input中输入的数据有关联的全部加入新生成的div中显示出来*/
    for(i=0;i<arrNew.length;i++){
        var arrWord = arrNew[i].toString();
        /*console.log(arrWord);*/
        if(((arrWord.indexOf($('#chooseKey').val())) > -1) && ($('#chooseKey').val().length > 0)){
            var addArrWord = "<div class=auto-screening-prompt>" + arrWord + "</div>";
            $("#autoScreening").append(addArrWord);
            $("#autoScreening").removeClass("auto-hidden");
        }
    }
    /*将显示出来的div的内容去重复，input内容变动时去重复*/
    $(".auto-screening-prompt").each(function(){
        if($(this).text().indexOf($('#chooseKey').val()) < 0){
            $(this).remove();
        }
        else if($('#chooseKey').val().length == 0){
            $("#autoScreening").addClass("auto-hidden");
            $(".auto-screening-prompt").remove();
        }
    }); 
    /*弹出的提示div去重复*/
    $(".auto-screening-prompt").each(function(i, iText){
        var iTextHtml = iText.innerHTML;
        $(".auto-screening-prompt").each(function(j, jText){
            var jTextHtml = jText.innerHTML;
            if (i < j && iTextHtml == jTextHtml) {
                $(this).remove();
            }
        });
    });    
    /*点击div获取文本传值*/
    $(".auto-screening-prompt").on("click",function(){
        $("#chooseKey").val($(this).text());
        $("#autoScreening").addClass("auto-hidden");
        $(".auto-screening-prompt").remove();
    })        
})