<?php
namespace app\index\controller;
use think\Controller;
use \think\Session;
use \think\Request;
use \think\Db;
class Main extends controller
{
  public function init()
  {
    if(empty(Session::get('user_id')))
    {
      return $this->redirect('http://localhost:8080/thinkphp/public/');
    }
  }
    public function main()
    {
      Main::init();//判断登陆是否合法
      //页面展示
      /*
      $this->view->engine->layout(true);
      return $this->fetch('main');
      */
      $user_id = Session::get('user_id');
      $result = Db::table('user_bill_data')->where('user_id', $user_id)->select();

      $this->assign('user_id', $user_id);
      $this->assign('addBill', $result);

      //$this->view->engine->layout(true);
      return $this->fetch('showadd');
      /*echo "Hola ".$user_id."\n";
      $result = Db::table('user_bill_data')->where('user_id', $user_id)->select();
      var_dump($result);
      echo count($result);*/

      /*$zhuan_zhang = $result['zhuan_zhang']/($result['zhuan_zhang'] +
                      $result['can_yin'] +
                      $result['sheng_huo_yong_pin'] +
                      $result['jiao_tong'] +
                      $result['jiao_fei'] +
                      $result['yu_le'] +
                      $result['jiao_yu'] +
                      $result['qi_ta']);
      echo $zhuan_zhang;*/
    }
    public function payBillAdd()//手动添加账单函数
    {
      Main::init();//判断登陆是否合法

      define('NOW_TIME',      $_SERVER['REQUEST_TIME']);
      define('REQUEST_METHOD',$_SERVER['REQUEST_METHOD']);
      define('IS_POST',       REQUEST_METHOD =='POST' ? true : false);

      if(IS_POST)
      {
        $zhuan_zhang = Request::instance()->post('zhuan_zhang');
        $can_yin = Request::instance()->post('can_yin');
        $sheng_huo_yong_pin = Request::instance()->post('sheng_huo_yong_pin');
        $jiao_tong = Request::instance()->post('jiao_tong');
        $jiao_fei = Request::instance()->post('jiao_fei');
        $yu_le = Request::instance()->post('yu_le');
        $jiao_yu = Request::instance()->post('jiao_yu');
        $qi_ta = Request::instance()->post('qi_ta');
        $data = ['user_id' => Session::get('user_id'),
                'date' => date("Y-m-d H:i:s"),
                 'zhuan_zhang' => $zhuan_zhang,
                 'can_yin' => $can_yin,
                 'sheng_huo_yong_pin' => $sheng_huo_yong_pin,
                 'jiao_tong' => $jiao_tong,
                 'jiao_fei' => $jiao_fei,
                 'yu_le' => $yu_le,
                 'jiao_yu' => $jiao_yu,
                 'qi_ta' =>  $qi_ta];
        if(Db::table('user_bill_data')->insert($data) == 1)
        {
          echo "<script  type='text/javascript'>alert('添加成功！');window.location.href='main';</script>";
        }
        else
        {
          echo "<script  type='text/javascript'>alert('添加失败！');window.location.href='main';</script>";
        }
      }

    }
    public function getPayBill()
    {

    }
    public function b()
    {

      $this->view->engine->layout(true);
      return $this->fetch('longin/login');
    }
}
