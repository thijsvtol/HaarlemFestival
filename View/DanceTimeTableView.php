<?php 
require_once("Autoloader.php");
class DanceTimeTableView
{
	private $DanceTimeTableController;
	private $DanceTimeTableModel;

	public function __construct($danceTimeTableController, $danceTimeTableModel)
	{
		$this->DanceTimeTableController = $danceTimeTableController;
		$this->DanceTimeTableModel = $danceTimeTableModel;
	}

	//output to html
	public function output(){
		$page = "";
		$page .= $this->Header();
		$page .= $this->Body();
		$page .= $this->Footer();
		return $page;
	}

	private function Header(){
		return $this->DanceTimeTableController->GetConfig()->GetHeader("Index"). "
		<link rel='stylesheet' type='text/css' href='DanceStyle.css'>. 
		<script src='Javascript.js'></script> ";
	}

	private function Body(){
		//setnav()
		return "
		<div id='main'>
			<div class='container-fluid'>
			  <div class='row'>
			    <div class='col-sm-1' ></div>
			    <div class='col-sm-10'>
				    <div class='dropdown'>
					  <button onclick='ToggleAdvanced()' class='dropbtn Search'>Advanced Search</button>
					  <div id='AdvancedSearch' class='dropdown-content'>
					  <h3>Artists:</h3>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>Hardwell</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Armin</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>Martin Garrix</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>Tiësto</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>Nickey Romero</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>AfroJack</label><br/>

					   	<h3>Locations:</h3>
					   	<input type='checkbox' name='check_list[]' value='Hardwell'><label>Hardwell</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Caprera Openluchttheater</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Jopenkerk</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Xo the Club</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Caprera</label><br/>
					   	<input type='checkbox' name='check_list[]' value='Armin'><label>Lichtenfabriek</label>

					   	<a href='AdvancedDanceSearch.php'><i class='SearchNow'>Search Dance event</i></a>
					  </div>
					</div>
			    
				    <div class='Days'>
						<div class='Day'>Friday</div>
						<div class='Day'>Saturday</div>
						<div class='Day'>Sunday</div>
				    </div>
			    	<TABLE class='ArtistTimeTable'> 
					  <THEAD>
					    <TR>
					      <TH></TH>
					      <TH>14:00</TH>
					      <TH>14:30</TH> 
					      <TH>15:00</TH>
					      <TH>15:30</TH>  
					      <TH>16:00</TH>
					      <TH>16:30</TH>
					      <TH>17:00</TH>
					      <TH>17:30</TH>
					      <TH>18:00</TH>
					      <TH>18:30</TH>
					      <TH>19:00</TH>
					      <TH>19:30</TH>
					      <TH>20:00</TH>
					      <TH>20:30</TH>
					      <TH>21:00</TH>
					      <TH>21:30</TH>
					      <TH>22:00</TH>
					      <TH>22:30</TH>
					      <TH>23:00</TH>
					      <TH>23:30</TH>
					      <TH>00:00</TH>
					      <TH>00:30</TH>
					      <TH>01:00</TH>
					      <TH>01:30</TH>
					      <TH>02:00</TH>
					    </TR>
					  </THEAD>
					  <TBODY>
					    <TR>
					      <TD>location</TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='11' class='Event'>
					        <div class='AddText'>Armin van Buuren <br>€ 75</div>
					        <div class='Add'><input class='AddButton' type='Button' name='Add' value='+'></div>
					      </TD>
					      <TD colspan='1' class=''></TD>
					    </TR>
					    <TR>
					      <TD>location</TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='11' class='Event'>
					        <div class='AddText'>Armin van Buuren <br>€ 75</div>
					        <div class='Add'><input class='AddButton' type='Button' name='Add' value='+'></div>
					      </TD>
					      <TD colspan='1' class=''></TD>
					    </TR>
					    <TR>
					      <TD>location</TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='1' class=''></TD>
					      <TD colspan='11' class='Event'>
					        <div class='AddText'>Armin van Buuren <br>€ 75</div>
					        <div class='Add'><input class='AddButton' type='Button' name='Add' value='+'></div>
					      </TD>
					      <TD colspan='1' class=''></TD>
					    </TR>
					   </TBODY>
					  </TABLE>
					  <div class='Special'>
							<h2>Special Tickets</h2>
							<table>
								<tr><td>All-Acces Pass Friday</td><td>&euro; 125,--</td><td>Add to cart</td></tr>
								<tr><td>All-Acces Pass Saturday</td><td>&euro; 150,--</td><td>Add to cart</td></tr>
								<tr><td>All-Acces Pass Sunday</td><td>&euro; 150,--</td><td>Add to cart</td></tr>
								<tr><td>All-Acces Pass (Fri-Sat-Sun)</td><td>&euro; 250,--</td><td>Add to cart</td></tr>
							</table>
							<p>* The capacity of the Club sessions is very limited. Availability for All-Access pas holders can not be garanteed due to safety regulations.</p>
						</div>
						<a href='DanceTimeTable.php'><div class='ProceeToCheckout'>Proceed to checkout</div>
						</a>
			    <div class='col-sm-1'></div>
			  </div>
			</div>
			
		</div>
		<div class='modal fade' id='Artists' role='dialog'>
    <div class='modal-dialog ModalWidth'>
    
      <!-- Modal content-->
      <div class='modal-content'>
        <div class='modal-header'>
          <button type='button' class='close' data-dismiss='modal'>&times;</button>
          <h4 class='modal-title'>Hardwell</h4>
        </div>
        <div class='modal-body ModalHeight'>
          <div class='ArtistInfo'>
            <img src='Images/Artists/Hardwell.png'>
            <br>
            Genre: Dance, House
            <br>
            <h4>Known for:</h4>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> 
          </div>
          <div>
            <p>Robbert van de Corput or Hardwell was born on the 7th of january 1988 in Breda. He’s one of the Leading DJ's in the Dance scene. With numbers popular all over the world, like Apollo, Follow me and Power. This summer he will play his DJ-set in Haarlem!
            </p>
            <h4>Optredens:</h4>
            <table>
              <tr><td>Location:</td><td>Time</td><td>Price</td><td></td></tr>
              <tr><td>Jopenkerk</td><td>Friday 23:01:00</td><td>20</td> <td></td></tr>
              <tr><td>Caperea Openluchttheater</td><td>Friday 23:01:00</td><td>20</td> <td></td></tr>
              <tr><td>Xo the Club</td><td>Friday 23:01:00</td><td>20</td><td></td></tr>
            </table>
          </div>
          <div class='ArtistTickets'></div>
        </div>
      </div>
      
    </div>
	</div>
	
		";
	}

	private function Footer(){
		return "
		<div class='Footer'>
			<p id='DesignedBy'>Designed by: Chris Lips, Thijs van Tol, Tim Gras, Stan Roozendaal en Stef Robbe
			<image class='MediaIcons' src='Images/instagram-icon-black.png'>
			<image class='MediaIcons' src='Images/facebook-icon.png'>
			</p>
		</div>
		</body></html> ";
	}
}
?>