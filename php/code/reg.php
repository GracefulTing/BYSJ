<?php 
$uid = $_POST['uid'];
$gender= $_POST['gender'];
$old= $_POST['old'];
$psw1= $_POST['psw1'];
$psw2= $_POST['psw2'];
$email = $_POST['email'];
$tel = $_POST['tel'];
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","")or die("数据库连接失败！");
mysqli_select_db($link,"bysj");
mysqli_set_charset($link,"utf8");
$sql="insert into login values('$uid','$gender','$old','$psw1','$psw2','$email','$tel') ";
$resource=mysqli_query($link,$sql);
mysqli_close($link);
echo"<script type='text/javascript'>alert('注册成功');window.location.href='../../html/log.html';</script>";
?>	





