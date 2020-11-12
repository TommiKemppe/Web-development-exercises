<?php include '../model/user_model.php'; ?>

<?php
    $users=get_users($_GET['id']);
    echo json_encode($users);
?>