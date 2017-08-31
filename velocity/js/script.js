 /**
 * Created by Administrator on 2016/9/30.
 */
(function ($) {
    //定义变量（动画元素，事件变量）
    var container = $(".container");
    var box = $(".box");
    var buddy = $(".buddy");
    var pop = $(".pop");
    var open = $(".btn");
    var close = $(".close");
    var imgs = pop.find('img');
    //自定义动画
    $.Velocity.RegisterUI('lin.slideUpIn',{
        defaultDuration:500,
        calls:[
            [{opacity:[1,0],translateY:[0,100]}]
        ]
    });
    $.Velocity.RegisterUI('lin.slideDownOut',{
        defaultDuration:300,
        calls:[
            [{opacity:[0,1],translateY:[100,0]}]
        ]
    });
    $.Velocity.RegisterUI('lin.scaleIn',{
        defaultDuration:300,
        calls:[
            [{opacity:[1,0],translateY:[1,0.3]}]
        ]
    });
    $.Velocity.RegisterUI('lin.scaleOut',{
        defaultDuration:300,
        calls:[
            [{opacity:[0,1],translateY:[0.3,1]}]
        ]
    });
    //动画进来序列
    var seqInit = [{
        elements:container,
        properties:'lin.slideUpIn',
        options:{
            delay:300
        }
    },{
        elements:box,
        properties:'lin.slideUpIn',
        options:{
            sequenceQueue:false
        }
    },{
        elements:buddy,
        properties:'lin.slideUpIn',
        options:{
            sequenceQueue:false,
            delay:60
        }
    }];

    //查看按钮点击后动画序列
    var seqClick = [
        {
            elements:container,
            properties:'lin.slideDownOut'
        },{
            elements:box,
            properties:'lin.slideDownOut',
            options:{
                sequenceQueue:false
            }
        },{
            elements:container,
            properties:'lin.slideUpIn'
        },{
            elements:pop,
            properties:'lin.slideUpIn',
            options:{
                sequenceQueue:false
            }
        },{
            elements:imgs,
            properties:'lin.scaleIn'
        }
    ];
    //关闭按钮点击后动画序列
    var seqClose = [
        {
            elements:imgs,
            properties:'lin.scaleOut'
        },
        {
            elements:container,
            properties:'lin.slideDownOut'
        },{
            elements:pop,
            properties:'lin.slideDownOut',
            options:{
                sequenceQueue:false
            }
        },{
            elements:container,
            properties:'lin.slideUpIn'
        },{
            elements:box,
            properties:'lin.slideUpIn',
            options:{
                sequenceQueue:false
            }
        }
    ];
    //动画初始化序列绑定
    $.Velocity.RunSequence(seqInit);
    //查看课程按钮点击序列绑定
    open.on('click', function () {
        $.Velocity.RunSequence(seqClick);
    });
    //关闭按钮点击序列绑定
    close.on('click', function () {
        $.Velocity.RunSequence(seqClose);
    });

})(jQuery);