<?php 
$username = $_POST['username'];
$password = $_POST['password'];
header("content-type:text/html;charset=utf-8");
if($username == "")  
{  
    echo "请填写用户名";  
    echo"<script type='text/javascript'>alert('请填写用户名');
            location='../../html/log.html';  
            </script>";  
}  
else if($password == ""){   
    echo"<script type='text/javascript'>alert('请填写密码');location='../../html/log.html';</script>"; 
}else{   
	$link=mysqli_connect("localhost","root","")or die("数据库连接失败！");
    mysqli_select_db($link,"bysj");
    mysqli_set_charset($link,"utf8");
    $sql="select * from login where uid='$username' and psw1='$password'";
    $resource=mysqli_query($link,$sql);
    $colum1= mysqli_fetch_assoc($resource); 
    mysqli_close($link);
    // if(($colum1['uid'] == $username) && ($colum1['psw1'] == $password)){    
    //     echo"<script type='text/javascript'>alert('登陆成功');window.location.href='../../html/index.html';</script>"; 
    // }else    
    //     echo"<script type='text/javascript'>alert('密码错误');location='../../html/log.html';</script>";   
    // } 
    if($colum1['gender'] == '女'){
        echo"<script type='text/javascript'>sessionStorage.setItem('sex','女');</script>"; 
    }else{
        echo"<script type='text/javascript'>sessionStorage.setItem('sex','男');</script>"; 
    }
    if(($colum1['uid'] == $username) && ($colum1['psw1'] == $password)){    
        echo"<script type='text/javascript'>alert('登陆成功');
        if(sessionStorage.getItem('from') == 'index'){
            window.location.href='../../html/index.html';
        }else{
            window.location.href='../../html/communicate.html';
        }
        sessionStorage.setItem('state','$username');</script>"; 
    }else    
        echo"<script type='text/javascript'>alert('密码错误');location='../../html/log.html';</script>";   
    } 
?>  