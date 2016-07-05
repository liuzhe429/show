<?php
class pv {
	  public function getpv_count() {
		$data = json_decode(file_get_contents("pv.json"));
		$data_contant = json_decode(file_get_contents("constant.json"));
		$data->click = number_format($data->click)+1;
		$add_time = $data_contant->add_time;
		$new_time = strtotime("now");
		
		$x = $new_time-strtotime($add_time);
		
		$y=3600*24;
		$radians = atan2($x,$y)*4/3.14;
		$sum = $radians * $data_contant->randpv;

		$pv_count = $sum + $data->click;

		//$data_contant->randpv = rand(500,30000);
        //$data_contant->add_time = date('Y-m-d H:i:s',time());
		//$data_contant->randpv = rand(500,30000);
        $fp = fopen("pv.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
		return number_format($pv_count);
	}
}
?>
