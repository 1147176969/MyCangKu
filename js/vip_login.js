// 
$(function () {
    // 切换登录
    var $tab_login = $('.tab_login');
    // 两种登录模式
    var $wraps = $('.login_found');
    // 
    var $found = $('.found'); 
    // 设置点击事件
    $tab_login.click(function () { 
        var i = $(this).index();
        // $(this).find('h5').addClass('current');
        $wraps.eq(i).addClass('show').siblings().removeClass('show');
        $(this).css('backgroundColor', '#f10180').siblings().css('backgroundColor', '#fff');
    });
    var flag = true;
    $('.more_login').click(function () {
        if(flag){
            $('.login_model').css('height', 500);
            $('.more_login_found').show();
            flag = false;
        } else {
            $('.login_model').css('height', 450);
            $('.more_login_found').hide();
            flag = true;
        }
    });
    // 二维码移入
    var $ewm = $('.get_ewm');
    var $tel_tip = $('.sm_tel_tip');

    $ewm.mouseenter(function () {  
        $(this).stop().animate({left : 20},300,function () {  
            $tel_tip.css('display', 'block');
        });
    })
    $ewm.mouseleave(function () {  
        $tel_tip.css('display', 'none');
        $(this).stop().animate({left : 60},300);
    });

    // 非空验证
    var $login_account = $('.login_account');
    var $account_password = $('.account_password');
    var $account_tip = $('.account_fail_tip');
    var $password_tip = $('.password_fail_tip');
    // 
    $login_account.blur(function(){
        if($login_account.val().length === 0){
            $('.fail_show').css('display', 'block');
            $login_account.css('border','1px solid red');
            $account_tip.css('display', 'block');
            $(this).val('');
        }else if($login_account.val().length >=1){
            $('.fail_show').css('display', 'none');
            $login_account.css('border','1px solid #ccc');
            $account_tip.css('display', 'none');
    }});
    $account_password.blur(function(){
        if($account_password.val().length === 0){
            $('.psw_fail_show').css('display', 'block');
            $account_password.css('border','1px solid red');
            $password_tip.css('display', 'block');
            $(this).val('');
        }else if($account_password.val().length >=1){
            $('.psw_fail_show').css('display', 'none');
            $account_password.css('border','1px solid #ccc');
            $password_tip.css('display', 'none');
    }});
})
