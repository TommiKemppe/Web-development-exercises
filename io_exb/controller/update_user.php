<?php include '../model/user_model.php'; ?>

<?php
    //print_r($_POST);
    $id=$_POST['id'];
    $insert_data=array(
        'fn'=>$_POST['fn'],
        'ln'=>$_POST['ln'],
    );
    update_user($id, $insert_data);
?>