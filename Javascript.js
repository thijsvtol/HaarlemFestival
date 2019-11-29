
function ToggleAdvanced() {
  var x = document.getElementById('AdvancedSearch');
  if (x.style.display === "block") {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function AddToCart(eventId, typeEvent, amount) {
     $.ajax({ url: 'AddToCart.php',
     data: {eventId: eventId,typeEvent: typeEvent, amount:amount},
     type: 'post',
     success: function(output) {
                   ShowPopup();
     }
	});
}

function RemoveFromCart(self,eventId, typeEvent) {
     $.ajax({ url: 'RemoveFromCart.php',
     data: {eventId: eventId,typeEvent: typeEvent},
     type: 'post',
     success: function(output) {
     	ShoppingCartmin(output);
     	self.parentNode.style.display='none';
     }
	});
}

function ShowPopup() {
  	var popup = document.getElementById("myPopup");
  	setTimeout( popup.style.display = 'block', 10000);
  	setTimeout(function () {
  	popup.style.display = 'none';
    }, 2000);
  	
}
function ToEvent(src){
	if (src == "Historic") {
		location.href = "Historic.php";
	}
	if (src == "Jazz") {
		location.href = "jazz.php";
	}
	if (src == "Dance") {
		location.href = "Dance.php";
	}
	if (src == "Food") {
		location.href = "food.php";
	}
}

function showTickets(){
	location.href = ("historicOrderTickets.php");
}

function SelectedDay(date){
	var elem = document.getElementById(date);
	var slides = document.getElementsByClassName("HideTimeTable");

	for(var i = 0; i < slides.length; i++)
	{
	  slides[i].style.display = "none";
	}
	elem.style.display = "block";
}

function ShoppingCartPlus(){
	var number = parseInt(document.getElementById("shoppingcartCount").innerHTML);
	number = number + 1;
	document.getElementById("shoppingcartCount").innerHTML = number;
}

function ShoppingCartmin(amount){
	var number = parseInt(document.getElementById("shoppingcartCount").innerHTML);
	number = number - amount;
	document.getElementById("shoppingcartCount").innerHTML = number;

}
