$(function () {
    //热门分类===tab栏切换
    // 定义一个变量count为0,用于下面动画中的->marginTop的值的变化->实现动画效果
    var margin_count = 0;
    // 获取到商品列表的父级  当前margin-top 为 0
    $hot_classify_right_wrap = $('.hot_classify_right_wrap');
    /* 获取到左侧tab切换按钮 */
    $hot_classify_tab = $('.hot_classify_tab');
    /* 获取到右侧内容的商品列表*/
    $classify_right_list = $('.classify_right_list');
    /* 设置点击事件 */
    var margin_count = $classify_right_list.height();
    $hot_classify_tab.click(function () {
        var i = $(this).index()
        $hot_classify_right_wrap.stop().animate({
            marginTop: (-i * margin_count)
        });
        $(this).addClass('current').siblings().removeClass('current');
        $hot_classify_tab.eq(i).css('backgroundColor', '#fff').css('color', '#e9af46').siblings().css('backgroundColor', '#f4f4f4').css('color', '#666');
    })
    // 商品列表中产品的移入效果
    $classify_right_list.children('li').mouseenter(function () {
        $(this).stop().animate({opacity:.5},500,function () {  
            $(this).stop().animate({opacity:1});
        });
    })
    // 商品列表中产品的移出效果
    $classify_right_list.children('li').mouseleave(function () {
        $(this).css('opacity', 1);
    })
    // 账号===移入移出
    var $person_account = $('.person_account');
    var $account_login = $('.account_login');
    var $account_close = $('.account_close');
    $person_account.mouseenter(function () {
        $account_login.show().stop().animate({
            width: 280
        }, 300);
    });
    $person_account.mouseleave(function () {
        $account_login.hide().stop().animate({
            width: 0
        }, 300);
    });
    $account_close.click(function () {
        $account_login.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 购物袋===移入移出
    var $shopping_bag = $('.shopping_bag');
    var $shopping_bag_login = $('.shopping_bag_login');
    var $shopping_bag_close = $('.shopping_bag_close');
    $shopping_bag.click(function () {
        $shopping_bag_login.show().stop().animate({
            width: 280
        }, 300);
    })
    $shopping_bag.mouseleave(function () {
        $shopping_bag_login.hide().stop().animate({
            width: 0
        }, 300);
    })
    $shopping_bag_close.click(function(){
        $shopping_bag_login.hide().stop().animate({width:0},300);
    })
    // 优惠券===移入移出
    var $asset = $('.asset');
    var $my_asset = $('.my_asset');
    $asset.mouseenter(function () {
        $my_asset.show().stop().animate({
            width: 100
        }, 300);
    });
    $asset.mouseleave(function () {
        $my_asset.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 品牌收藏===移入移出
    var $brand = $('.brand');
    var $my_brand = $('.my_brand');
    $brand.mouseenter(function () {
        $my_brand.show().stop().animate({
            width: 100
        }, 300);
    });
    $brand.mouseleave(function () {
        $my_brand.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 商品收藏===移入移出
    var $star = $('.star');
    var $my_star = $('.my_star');
    $star.mouseenter(function () {
        $my_star.show().stop().animate({
            width: 100
        }, 300);
    });
    $star.mouseleave(function () {
        $my_star.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 我的足迹===移入移出
    var $foot_print = $('.foot_print');
    var $my_footprint = $('.my_footprint');
    $foot_print.mouseenter(function () {
        $my_footprint.show().stop().animate({
            width: 100
        }, 300);
    });
    $foot_print.mouseleave(function () {
        $my_footprint.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 会员反馈===移入移出
    var $survey = $('.survey');
    var $my_survey = $('.my_survey');
    $survey.mouseenter(function () {
        $my_survey.show().stop().animate({
            width: 100
        }, 300);
    });
    $survey.mouseleave(function () {
        $my_survey.hide().stop().animate({
            width: 0
        }, 300);
    });
    // 返回顶部===移入移出
    var $back_top = $('.back_top');
    var $my_top = $('.my_top');
    $back_top.mouseenter(function () {
        $my_top.show().stop().animate({
            width: 100
        }, 300);
    });
    $back_top.mouseleave(function () {
        $my_top.hide().stop().animate({
            width: 0
        }, 300);
    });
    //新热卖  移入移出
    $('.new_hot_li').mouseenter(function(){
        $('.collect_brand').show();
        $(this).siblings().find('.collect_brand').hide();
        $(this).stop().animate({opacity:.5},500,function(){
            $(this).stop().animate({opacity:1});
        });
    });
    $('.new_hot_li').mouseleave(function(){
        $('.collect_brand').hide();
        $(this).css('opacity', 1);
    });
    // 即将上线 移入移出
    $('.wait_online_li').mouseenter(function(){
        $('.wait_online_login').show();
        $(this).siblings().find('.wait_online_login').hide();
    });
    $('.wait_online_li').mouseleave(function(){
        $('.wait_online_login').hide();
    });

    // 点击开售提醒
    var $user_account = $('.user_name');
    var $user_password = $('.user_password');
    $('.wait_online_login_btn').click(function(){
        $('.account_login_model').show().stop().animate({left:360},300,function(){
            $('.account_login_model').show().stop().animate({top:-180});
        });
        $('.full_screen').show();
    })
    $('.close_login').click(function(){
        $('.account_login_model').show().stop().animate({top:350},300,function(){
            $('.account_login_model').show().stop().animate({left:-810});
        });
        $('.account_fail_tip').css('opacity', 0);
        $('.password_fail_tip').css('opacity', 0);
        $user_account.val('');
        $user_password.val('');
        $user_password.css('border','1px solid #b2b2b2');
        $user_account.css('border','1px solid #b2b2b2');
        console.log($user_account.val());
        // console.log($('#login_btn'));
        $('.full_screen').hide();
    });
    var flag = true;
    $('.more_login').click(function () {
        // $('.account_login_model').css('height', 540);
        // $('.more_login_found').show();
        // if($('.account_login_model').height() === 540) {
        //     $('.more_login_found').hide();
        // }
        if(flag){
            $('.account_login_model').css('height', 540);
            $('.more_login_found').show();
            flag = false;
        } else {
            $('.account_login_model').css('height', 520);
            $('.more_login_found').hide();
            flag = true;
        }
    })
    //轮播图参数
    $('.shutter').shutter({
        shutterW: 1900, // 容器宽度
        shutterH: 360, // 容器高度
        isAutoPlay: true, // 是否自动播放
        playInterval: 3000, // 自动播放时间
        curDisplay: 3, // 当前显示页
        fullPage: false // 是否全屏展示
    });
    $('.shutter').mouseenter(function () {  
        $('.shutter-btn li.prev').show();
        $('.shutter-btn li.next').show();
    });
    $('.shutter').mouseleave(function () {  
        $('.shutter-btn li.prev').hide();
        $('.shutter-btn li.next').hide();
    });
    // 购物袋移入移出
    $shopcar_develop = $('.shopcar_develop');
    $shopcar = $('.shopcar');
    $shopcar.mouseenter(function () {
        $shopcar.css('borderBottom', '1px solid #fff').css('height', '35')
        .css('backgroundColor', '#fff');
        $shopcar_develop.show().css('top',103);
        
    });
    $shopcar.mouseleave(function () {
        $shopcar.css('borderBottom', '1px solid #999').css('height', 30);
        $shopcar_develop.css('top',94);
        $shopcar_develop.hide();
    });
    $shopcar_develop.mouseenter(function () {  
        $shopcar.css('borderBottom', '1px solid #fff').css('height', '35')
        .css('backgroundColor', '#fff');
        $shopcar_develop.show().css('top',103);
    });
    $shopcar_develop.mouseleave(function () {
        $shopcar_develop.hide();
        $shopcar_develop.css('top',94);
        $shopcar.css('height', '30').css('borderBottom', '1px solid #999');
    });

    // 快捷导航栏
    $more_develop = $('.more_develop');
    $more = $('.more');
    $more.mouseenter(function () {
        $more.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff')
        .css('height',30);
        $more_develop.show().css('top',30);
    });
    $more.mouseleave(function () {  
        $more.css('border', '1px solid #f5f5f5').css('backgroundColor', '#f5f5f5').css('height',28);
        $more_develop.hide().css('top',29);
    });
    $more_develop.mouseenter(function () {  
        $more.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff')
        .css('height',30);
        $more_develop.show().css('top',30);
    });
    $more_develop.mouseleave(function () {
        $more.css('border', '1px solid #f5f5f5').css('backgroundColor', '#f5f5f5').css('height',28);
        $more_develop.hide().css('top',29);
    });
    // 手机版移入移出
    $iphone_develop = $('.iphone_develop_wrap');
    $iphone = $('.iphone');
    $iphone.mouseenter(function () {
        $iphone.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $iphone_develop.show().css('top',29);
    });
    $iphone.mouseleave(function () {  
        $iphone.css('border', '1px solid #f5f5f5').css('backgroundColor', '#f5f5f5');
        $iphone_develop.hide().css('top',30);
    });
    $iphone_develop.mouseenter(function () {  
        $iphone.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $iphone_develop.show().css('top',29);
    });
    $iphone_develop.mouseleave(function () {
        $iphone.css('border', '1px solid #f5f5f5').css('backgroundColor', '#f5f5f5');
        $iphone_develop.hide().css('top',30);
    });
    // 客户服务 
    $customer_develop = $('.customer_develop');
    $customer = $('.customer');
    $customer.mouseenter(function () {  
        $customer.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $customer_develop.show().css('top',28);
    });
    $customer.mouseleave(function () {  
        $customer.css('border', '1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $customer_develop.hide();
    });
    $customer_develop.mouseenter(function () {  
        $customer.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $customer_develop.show().css('top',28);
    });
    $customer_develop.mouseleave(function () {  
        $customer.css('border', '1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $customer_develop.hide();
    });
    // 会员俱乐部 
    $vipclub_develop = $('.vipclub_develop');
    $vipclub = $('.vipclub');
    $vipclub.mouseenter(function () {  
        $vipclub.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $vipclub_develop.show().css('top',28);
    });
    $vipclub.mouseleave(function () {  
        $vipclub.css('border', '1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $vipclub_develop.hide();
    });
    $vipclub_develop.mouseenter(function () {  
        $vipclub.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $vipclub_develop.show().css('top',28);
    });
    $vipclub_develop.mouseleave(function () {  
        $vipclub.css('border', '1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $vipclub_develop.hide();
    });
    // 我的特卖 
    $hotbuy_develop = $('.hotbuy_develop');
    $hotbuy = $('.hotbuy');
    $hotbuy.mouseenter(function () {  
        $hotbuy.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $hotbuy_develop.show().css('top',31);
    });
    $hotbuy.mouseleave(function () {  
        $hotbuy.css('border','1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $hotbuy_develop.hide();
    });
    $hotbuy_develop.mouseenter(function () {  
        $hotbuy.css('borderTop', '1px solid #ddd')
        .css('borderLeft', '1px solid #ddd')
        .css('borderRight', '1px solid #ddd')
        .css('borderBottom','1px solid #fff')
        .css('backgroundColor', '#fff');
        $hotbuy_develop.show().css('top',31);
    });
    $hotbuy_develop.mouseleave(function () {  
        $hotbuy.css('border', '1px solid #f5f5f5')
        .css('backgroundColor', '#f5f5f5');
        $hotbuy_develop.hide();
    });
    // 签到 
    $sign_develop = $('.sign_develop');
    $sign = $('.sign');
    $sign.mouseenter(function () {  
        $sign_develop.show();
    });
    $sign.mouseleave(function () {  
        $sign_develop.hide();
    });
    $sign_develop.mouseenter(function () {  
        $sign_develop.show();
    });
    $sign_develop.mouseleave(function () {  
        $sign_develop.hide();
    });
});
