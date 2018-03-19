<?php 
    function selectData($sql){
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
    $sql = "SELECT * FROM  chart";
    selectData($sql);
 
?>