<?php
namespace app\index\controller;
use think\Controller;//视图
use \think\Db;//操作数据库要引入的模块
class Index extends Controller
{
    public function index()
    {
      /*
      模板视图
      */
      $this->view->engine->layout(true);
      return $this->fetch('login/login');

      /*$result = Db::table('user_info')->where('user_id','12356')->find();
      //echo $result['user_id'];
      var_dump($result);*/
      /*
      $user['id'] = $result['user_id'];
      $user['pwd'] = $result['user_pwd'];
      $this->assign('user', $user);
      return $this->view->fetch('login/test');
      */
    }
    public function regist()
    {
      $this->view->engine->layout(true);
      return $this->fetch('login/regist');
    }

}
