<?php
require_once( "Autoloader.php");
class DanceTimeTableModel
{
	private $CurrentUser;
	function __construct(){
	}

	//get currentuser
	public function GetCurrentUser(){
		return $this->CurrentUser;
	}

	//set currentuser
	public function SetCurrentUser($value){
		$this->CurrentUser = $value;
	}
}
?>