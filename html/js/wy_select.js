(function($){
    $.fn.extend({
        "wy_inselect":function(options){
            if(!isValid(options)) return this;
            var $Id = $(this);
            var last;
            $Id.find(".wyinput-drop").css("width",$(".wyinput-group input").outerWidth()+"px").hide();
            $Id.find(".wyinput-group input").keyup(function(event){
                last = event.timeStamp;
                setTimeout(function(){    //设时延迟0.5s执行
                    if(last-event.timeStamp==0)
                    //如果时间差为0（也就是你停止输入0.5s之内都没有其它的keyup事件发生）
                    {
                        var arr= searchIndex($Id,options);
                        loadDrop($Id,arr);
                    }
                },500);
            })
            $Id.find(".wyinput-drop").delegate(".drop-line a","click",function(){
                var html=$(this).html();
                $(this).parents(".wyinput-drop").siblings(".wyinput-group").find("input").val(html);
                $Id.find(".wyinput-drop").hide()
            })

        }
    })

    //监测参数是否合法
    function isValid(options){
        return !options || (options　&& typeof options === "object")?true:false;
    }

    //加载下拉框
    function loadDrop($Id,arr){
        var html = "";
        if(arr.length == 0){
            $Id.find(".wyinput-drop").hide().html("");
            return;
        }
        $.each(arr,function(idx,obj){
            html+='<p class="drop-line">' + '<a href="#">'+obj.name+'</a></p>';
        })
        $Id.find(".wyinput-drop").html(html).show();
    }

    //模糊查询
    function searchIndex($Id,options){
        var $input = $Id.find(".wyinput-group input");
        var keywords = $input.val();
        var arr=[];
        if(keywords==""||keywords==" "){
            return arr;
        }
        $.each(options,function(idx,obj){
            if(obj.name.indexOf(keywords)>=0){
                arr.push({name:obj.name});
            }
        })
        $Id.find(".wyinput-group .wyinput-btn").click(function(){
            var value = $(".wyinput-group input").val();
            switch(value){
                case '菜谱':
                    window.location.href = "../html/caipu.html";
                    break;
                case '运动':
                    window.location.href = "../html/sports.html";
                    break;
                case '心理':
                    window.location.href = "../html/psychology.html";
                    break;
                case '交流':
                    window.location.href = "../html/communicate.html";
                    break;
                default:
                    alert('你所查询的没有结果！');
                    break;
            }
            $(".wyinput-group input").val('');
            $(".wyinput-group input").attr('placeholder',"请输入关键字");
        })
        return arr;
    }

})(window.jQuery)