<?php

header('Content-Type: application/json');
$content = json_encode($_POST) . "\r\n";

$filename = './db.json';

//$fp = fopen($filename, 'a+');

if (is_writable($filename)) {

    // 在这个例子里，我们将使用添加模式打开$filename，
    // 因此，文件指针将会在文件的末尾，
    // 那就是当我们使用fwrite()的时候，$somecontent将要写入的地方。
    if (!$handle = fopen($filename, 'a+')) {
        echo json_encode(['code'=>0, 'msg'=>'不能打开文件']);
        exit;
    }

    // 将$somecontent写入到我们打开的文件中。
    if (fwrite($handle, $content) === FALSE) {
        echo json_encode(['code'=>0, 'msg'=>'不能写入到文件']);
        exit;
    }

    echo json_encode(['code'=>1, 'msg'=>'success'], JSON_FORCE_OBJECT);

    fclose($handle);

} else {

    echo json_encode(['code'=>0, 'msg'=>'文件不可写']);

}
