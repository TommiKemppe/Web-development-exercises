<?php
function get_users($id=null){
    $users_data=array(
        array('id'=>1, 'fn'=>'Jim', 'ln'=> 'Jones'),
        array('id'=>2, 'fn'=>'Lisa', 'ln'=> 'Smith'),
        array('id'=>3, 'fn'=>'Ann', 'ln'=> 'Simpson'),   
    );
    if($id===null){
        return $users_data;
    }
    else{
        return $users_data[$id];
    }
}

function add_user($data){
    var_dump(http_response_code());
}

function update_user($id, $insert_data){
    var_dump(http_response_code());
}

function delete_user($id){
    var_dump(http_response_code());
}
?>