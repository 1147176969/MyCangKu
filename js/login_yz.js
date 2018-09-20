$(function(){
     // 账户登录正则=============================================================
    var min_num = 6;//账号密码最短  长度
    var max_num = 15;//账号密码最长  长度
    var $user_account = $('.user_name');  //用户名
    var $user_password = $('.user_password');//用户密码
    var $login_btn = $('#login_btn');//登录按钮
    var sys_account = 6666666;  //账号假数据  用于模拟登陆
    var sys_password = 6666666; //账号假数据  用于模拟登陆
    var headlogo = [
        // {"src": "images/.jpg"}  //更换头像
    ];
    var username; //更改用户名
    // 账号验证
    $user_account.blur(function(){
    if($user_account.val().length === 0){
        $('.account_fail_tip').css('opacity', 1);
        $user_account.css('border','1px solid red');
        // $user_account.val('');
    //  }else if($user_account.val().length <= max_num && $user_account.val().length >=min_num){
    //      $('.account_fail_tip').css('opacity', 1);
    //      $('.account_fail_tip span').text('兄嘚，账号长度为6-15位哦');
    //      $user_account.val('');
    }else if($user_account.val().length >=1){
        $('.account_fail_tip').css('opacity', 0);
        $user_account.css('border','1px solid #b2b2b2');
        // $user_account.val('');
    }});
    $user_password.blur(function(){
    if($user_password.val().length === 0){
        $('.password_fail_tip').css('opacity', 1);
        $user_password.css('border','1px solid red');
        // $user_password.val('');
    //  }else if($user_account.val().length < max_num && $user_account.val().length >min_num){
    //      $('.account_fail_tip').css('opacity', 1);
    //      $('.account_fail_tip span').text('兄嘚，密码长度为6-15位哦');
    //      $user_password.val('');
    }else if($user_password.val().length >=1){
        $('.password_fail_tip').css('opacity', 0);
        $user_password.css('border','1px solid #b2b2b2');
        // $user_password.val('');
    }});
    // 模拟登录 
    $lis = $('.wait_online_li');
    $buy_tip = $('.wait_online_login_btn');
    $login_btn.click(function(){
        console.log($user_account.val());
        console.log($user_password.val());
        console.log(sys_account);
        if($user_account.val() == sys_account && $user_password.val() == sys_password){  
            $('.account_login_model').hide();
            username=$user_account.val();
            console.log('用户名为' + username);
        }else if($user_account.val().length === 0 && $user_password.val().length === 0) {
            $('.account_fail_tip').css('opacity', 1);
            $user_account.css('border','1px solid red');
            $('.password_fail_tip').css('opacity', 1);
            $user_password.css('border','1px solid red');
        }
    });
    // 注册验证
    $tel = $('.tel');
    $yzm = $('.yzm');
    $reg_password = $('.password');
    $again_password = $('.again_password');
    $tel.blur(function(){
        if($tel.val().length === 0){
            $('.tel_tip').css('opacity', 1);
            $tel.css('border','1px solid red');
            $('.fail_icon').show();
            $(this).val('');
        }else if($tel.val().length >=1){
            $('.tel_tip').css('opacity', 0);
            $tel.css('border','1px solid #ccc');
            $('.fail_icon').hide();
    }});
    $yzm.blur(function(){
        if($yzm.val().length === 0){
            $('.yzm_tip').css('opacity', 1);
            $yzm.css('border','1px solid red');
            $(this).val('');
        }else if($yzm.val().length >=1){
            $('.yzm_tip').css('opacity', 0);
            $yzm.css('border','1px solid #ccc');
    }});
    $reg_password.blur(function(){
        if($reg_password.val().length === 0){
            $('.password_tip').css('opacity', 1);
            $reg_password.css('border','1px solid red');
            $('.psw_fail_icon').show();
            $(this).val('');
        }else if($tel.val().length >=1){
            $('.password_tip').css('opacity', 0);
            $reg_password.css('border','1px solid #ccc');
            $('.psw_fail_icon').hide();
    }});
    $again_password.blur(function(){
        if($again_password.val().length === 0){
            $('.again_password_tip').css('opacity', 1);
            $again_password.css('border','1px solid red');
            $('.again_fail_icon').show();
            $(this).val('');
        }else if($again_password.val().length >=1){
            $('.again_password_tip').css('opacity', 0);
            $again_password.css('border','1px solid #ccc');
            $('.again_fail_icon').hide();
        }
    });
});