<?php 
    function insertData($sql){
        # 链接数据库
        $mysqli = new mysqli("localhost","root","","bysj");
        # 测试是否链接成功
        if($mysqli->connect_errno){  //0表示成功,什么都没有
            die($mysqli->connect_error);
        }
         
        # 设置utf8
        $mysqli->query("set names utf8");
        # 执行sql语句
        $result = $mysqli->query($sql);
 
        class User{
            public $weight;
            public $sleep;
            public $xinqing;
            public $food;
            public $state;
        }
        if($result->num_rows){
            $data = $result->fetch_all(MYSQLI_ASSOC);
 
            $user = new User();
 
        }
        echo json_encode($data);
        # 断开连接
        $mysqli->close();
    }
 
    # 准备sql语句
    $sql = "INSERT INTO chart (sleep,xinqing,food,state) values ($_POST[sleep]','$_POST[xinqing]','$_POST[food]','$_POST[state]')";
    insertData($sql);
    header("Location:../../html/chartshow.html");
?>
