<?php

    $Firstname=$_POST['Firstname'];
    $Lastname=$_POST['Lastname'];
    $USN=$_POST['USN'];
    $Password=$_POST['Password'];
    $Password2=$_POST['Password2'];

    $conn= new mysqli('localhost','root','','results');
    if($conn->connect_error){
        die('connection failed :' .$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into signup(Firstname,Lastname,USN,Password,Password2)
        values(?,?,?,?,?)");
        $stmt->bind_param("sssss",$Firstname,$Lastname,$USN,$Password,$Password2);
        $execval=$stmt->execute();
        echo $execval;
        echo "registered successfully";
        $stmt->close();
        $conn->close();
    }
    

 ?>