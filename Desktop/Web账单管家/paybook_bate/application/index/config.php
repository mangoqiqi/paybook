<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    // +----------------------------------------------------------------------
    // | 应用设置
    // +----------------------------------------------------------------------

    "view_replace_str" => [
      '__PUBLIC__' => '/public/',
      '__ROOT__' => '/',
      '__INDEX__' => 'http://127.0.0.1:8080/thinkphp/public/static/pay',//静态资源
      '__LOGIN__' => 'http://localhost:8080/thinkphp/public/index/LoginController/signin',//注册控制器
      '__REGISETPPAGE__' => 'http://127.0.0.1:8080/thinkphp/public/index/index/regist',//登录页面
      '__REGISET__' => 'http://127.0.0.1:8080/thinkphp/public/index/LoginController/signup',//登陆控制器
      '__MAIN__' => 'http://127.0.0.1:8080/thinkphp/public/index/main/mian',//主页面控制器
    ]
];
