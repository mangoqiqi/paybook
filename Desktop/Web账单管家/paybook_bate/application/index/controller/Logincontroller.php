<?php
namespace app\index\controller;
use think\Controller;
use \think\Request;
use \think\Db;
use \think\Session;
class LoginController extends Controller
{
/*
  define('NOW_TIME',      $_SERVER['REQUEST_TIME']);
  define('REQUEST_METHOD',$_SERVER['REQUEST_METHOD']);
  define('IS_GET',        REQUEST_METHOD =='GET' ? true : false);
  define('IS_POST',       REQUEST_METHOD =='POST' ? true : false);
  define('IS_PUT',        REQUEST_METHOD =='PUT' ? true : false);
*/
  //处理登录
  public function signin()
  {
    define('NOW_TIME',      $_SERVER['REQUEST_TIME']);
    define('REQUEST_METHOD',$_SERVER['REQUEST_METHOD']);
    define('IS_POST',       REQUEST_METHOD =='POST' ? true : false);
    if(IS_POST)
    {
      $user_id = Request::instance()->post('user_id');
      $user_pwd = Request::instance()->post('user_pwd');
      $result = Db::table('user_info')->where('user_id', $user_id)->find();
      if(!empty($result))
      {
        if(md5($user_pwd) === $result['user_pwd'])
        {
          //echo "成功";
          Session::set('user_id',$user_id);
          Session::set('user_pwd',$user_pwd);
          //echo Session::get('user_id').Session::get('user_pwd');
          //echo __MAIN__;
          return $this->redirect('http://localhost:8080/thinkphp/public/index/main/main');
        }
      }
    }//echo $_SERVER["HTTP_REFERER"];
      return $this->redirect($_SERVER["HTTP_REFERER"]);
  }

  public function autoLogin($user){
    /* 记录登录SESSION */
    $auth = array(
      'uid'       => $user['id'],
      'num'    => $user['num'],
      'role'      => 'user' , //记录用户类型
    );
    session('user_auth', $auth);
    session('user_auth_sign', data_auth_sign($auth));
  }

  /*
  * 用户注册
  */
  public function signup()
  {
    define('NOW_TIME',      $_SERVER['REQUEST_TIME']);
    define('REQUEST_METHOD',$_SERVER['REQUEST_METHOD']);
    define('IS_POST',       REQUEST_METHOD =='POST' ? true : false);
    if(IS_POST)
    {
      $user_id = Request::instance()->post('user_id');
      $user_pwd = Request::instance()->post('user_pwd');
      $result = Db::table('user_info')->where('user_id', $user_id)->find();
      if(!empty($result))
      {
          //echo $_SERVER["HTTP_REFERER"];
          return $this->error('账号已注册！','index/index');
          //return $this->redirect($_SERVER["HTTP_REFERER"]);
      }
      else
      {
        $data = ['user_id' => $user_id, 'user_pwd' => md5($user_pwd)];
        $result = Db::table('user_info')->insert($data);
        //var_dump($result);exit(0);
        if($result === 1)
        {
          $this->success('注册成功，正在前往登陆...','index/index');
        }
        else {
          $this->error('注册失败！');
        }
      }
    }
    else
    {
        //return $this->redirect($_SERVER["HTTP_REFERER"]);//重定向
        $this->error('请先登陆！','index/index');
    }
  }

  public function logout(){
    if(is_user_login()){
      $User = M('user') ;
      session('user_auth', null);
      session('user_auth_sign', null);
      session('[destroy]');
      $this->success('登出成功！', U('signin'));
    } else {
      $this->redirect('signin');
    }
  }

  //忘记密码
  public function wjpas(){
    if(IS_GET){
      $this->display();
    }
    if(IS_POST){
      $User = M('user') ;
      $num = I('num') ;
      $data['password'] = md5(I('password')) ;
      $email = I('email') ;
      $datanum = $User->where(array('num'=>$num))->find();
      if ($datanum){
        if ($email === $datanum['email']) {
          $User->where(array('num'=>$num))->save($data); // 根据条件更新记录
          $this->success('密码修改成功',U('signin')) ;
        }else{
          $this->error('邮箱填写不正确,请重新填写');
          exit();
        }
      }else{
        $this->error('用户不存在，请注册',U('signup'));
      }
    }
  }
}
?>
