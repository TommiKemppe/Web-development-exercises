<h1>Page3</h1>

<h2>Variables</h2>
<?php
$fname="Jim";
echo 'Hello '.$fname;
?>

<h2>Arrays</h2>
<?php
$fnames=array('Jimi', 'Lisa', 'Ann');
?>
<p><?php print_r($fnames); ?></p>
<p><?php echo $fnames[0].' is first'; ?></p>

<h2>Assosiative array</h2>
<?php
    $assoc_fnames=array('fin'=>'Ruotsi', 'swe'=>'Sverige', 'eng'=>'Sweden');
?>
<p>
    <?php echo 'The Finnish name for '.$assoc_fnames['eng'].' is '.$assoc_fnames['fin']; ?>
</p>

<h2>Two dimensional array (kind of)</h2>
<?php
$persons=array(
    array('fn'=>'Jimi', 'ln'=>'Lindström'),
    array('fn'=>'Lisa', 'ln'=>'Jones'),
    array('fn'=>'Ann', 'ln'=>'Simpson'),
);
?>
<ul>
    <?php
    foreach($persons as $row){
        echo '<li>'.$row['fn'].' '.$row['ln'].'</li>';
    }
    ?>
</ul>