function ToggleAdvanced() {
	var x = document.getElementById('AdvancedSearch');
	if (x.style.display === "block") {
	  x.style.display = 'none';
	} else {
	  x.style.display = 'block';
	}
}
  
function ToggleAdvancedJazz() {
	var x = document.getElementById('AdvancedFilter');
	if (x.style.display === "block") {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}
  
function Hide(){
	document.getElementById('AdvancedFilter').style.display = 'none';
	document.getElementById('Friday').style.visibility = 'hidden';
	document.getElementById('Saturday').style.visibility = 'hidden';
	document.getElementById('Sunday').style.visibility = 'hidden';
	document.getElementById('Friday1').style.display = 'none';
	document.getElementById('Saturday1').style.display = 'none';
	document.getElementById('Sunday1').style.display = 'none';
}
  
function ShowDate(day) {
	if(day == 1){
		document.getElementById('Thursday').style.visibility = 'unset';
		document.getElementById('Thursday1').style.display = 'block';
		document.getElementById('Friday').style.visibility = 'hidden';
		document.getElementById('Friday1').style.display = 'none';
		document.getElementById('Saturday').style.visibility = 'hidden';
		document.getElementById('Saturday1').style.display = 'none';
		document.getElementById('Sunday').style.visibility = 'hidden';
		document.getElementById('Sunday1').style.display = 'none';
	}
	else if(day == 2){
		document.getElementById('Friday').style.visibility = 'unset';
		document.getElementById('Friday1').style.display = 'block';
		document.getElementById('Thursday').style.visibility = 'hidden';
		document.getElementById('Thursday1').style.display = 'none';
		document.getElementById('Saturday').style.visibility = 'hidden';
		document.getElementById('Saturday1').style.display = 'none';
		document.getElementById('Sunday').style.visibility = 'hidden';
		document.getElementById('Sunday1').style.display = 'none';
	}
	else if(day == 3){
		document.getElementById('Saturday').style.visibility = 'unset';
		document.getElementById('Saturday1').style.display = 'block';
		document.getElementById('Friday').style.visibility = 'hidden';
		document.getElementById('Friday1').style.display = 'none';
		document.getElementById('Thursday').style.visibility = 'hidden';
		document.getElementById('Thursday1').style.display = 'none';
		document.getElementById('Sunday').style.visibility = 'hidden';
		document.getElementById('Sunday1').style.display = 'none';
	}
	else if(day == 4){
		document.getElementById('Sunday').style.visibility = 'unset';
		document.getElementById('Sunday1').style.display = 'block';
		document.getElementById('Friday').style.visibility = 'hidden';
		document.getElementById('Friday1').style.display = 'none';
		document.getElementById('Saturday').style.visibility = 'hidden';
		document.getElementById('Saturday1').style.display = 'none';
		document.getElementById('Thursday').style.visibility = 'hidden';
		document.getElementById('Thursday1').style.display = 'none';
	}
}

function JazzAddToCart(){
	var inputs = document.getElementsByTagName('input');

	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].type.toLowerCase() == 'text') {
			if(inputs[i].value >0){
				id = inputs[i].id;
				amount = inputs[i].value;
				amount = parseInt(amount);
				AddToCart(id, 4, amount)
			}
		}
	}
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].type.toLowerCase() == 'text') {
			if(inputs[i].value >0){
				inputs[i].value = 0;
			}
		}
	}
}

function FoodAddToCart(eventId, typeEvent) {
	var childAmount = GetChildrenTicketCount();
	var adultAmount = GetNormalTicketCount();

	AddToCartExtraInfo(eventId, typeEvent, childAmount, 0);
	AddToCartExtraInfo(eventId, typeEvent, adultAmount, 1);
}

function TimeTablePDF(id){
	var win = window.open("CreateTimeTablePDF.php?id="+id, '_blank');
  win.focus();
}

function AddToCart(eventId, typeEvent, amount, special) {
	if (amount > 0) {
     $.ajax({ url: 'AddToCart.php',
     data: {eventId: eventId,typeEvent: typeEvent, amount:amount, special:special},
     type: 'post',
     success: function(output) {
                   ShowPopup();
                   ShoppingCartPlus(amount);
			}
		});
	}
}

function FoodAddToCartHelper(count) {
	// grab variables necessary to put ticket in session
	var childAmount = parseInt(document.getElementById('pplBelow12' + count).value);
	var adultAmount = parseInt(document.getElementById('pplAbove12' + count).value);
	var extraInfo = document.getElementById('extraInfo' + count).value;
	var id = document.getElementById('pickSession' + count).value;
	var date = document.getElementById('date' + count).value;

	var startTimeSelect = document.getElementById('pickSession' + count);
	var startTime = startTimeSelect.options[startTimeSelect.selectedIndex].text;
	
	FoodAddToCart(id, childAmount, adultAmount, startTime, date, extraInfo);

}

function FoodAddToCart(eventId, childAmount, adultAmount, startTime, date, extraInfo) {
	var amount = childAmount + adultAmount;
	if (amount > 0) {
		$.ajax({ url: 'AddToCartFood.php',
		data: {eventId: eventId, childAmount: childAmount, adultAmount: adultAmount,  startTime: startTime, date: date, extraInfo: extraInfo},
		type: 'post',
		success: function(output) {
				ShowPopup();
				ShoppingCartPlus(amount);
			}
		});		
	}
}

function SelectedDate(count, id) {
	var date = document.getElementById('pickDay' + count).value;
	var time = document.getElementById('pickSession' + count);
	time.disabled = false;
	while (time.firstChild) {
		time.removeChild(time.firstChild);
	}

	$.ajax({ url: 'FoodHelper.php',
	data: {date: date, id: id},
	type: 'post',
	success: function(output) {
		output = JSON.parse(output);
		for(var i = 0; i < output.length; i++) {
			var opt = output[i];
			var el = document.createElement("option");
			el.textContent = String(opt.SessionStartTime);
			el.textContent
    		el.value = opt.Id;
			time.appendChild(el);
		}

	}
});
}

function RemoveFromCart(self, eventId, typeEvent, price) {
     $.ajax({ url: 'RemoveFromCart.php',
		data: {eventId: eventId, typeEvent: typeEvent},
		type: 'post',
		success: function(output) {
			var parent = self.parentNode;
			var parenttickets = parent.parentNode;
			ShoppingCartmin(output);
			self.parentNode.remove(); 
				if(parenttickets.children.length == 0){
					var eventday = parenttickets.parentNode;
					eventday.remove();
				}
			var totalamount = parseFloat(document.getElementById("TotalAmount").innerHTML).toFixed(2);
			var remove = totalamount - (price * output);
			document.getElementById("TotalAmount").innerHTML = remove.toFixed(2);
		}
	});
}

function FoodRemoveFromCart(self, eventId, typeEvent, price, amountType) {
	$.ajax({ url: 'RemoveFromCartFood.php',
	data: {eventId: eventId, typeEvent: typeEvent, amountType: amountType},
	type: 'post',
	success: function(output) {
		output = parseInt(output);
		
		var parent = self.parentNode;
		var parenttickets = parent.parentNode;

		ShoppingCartmin(output);
		self.parentNode.remove(); 

		if (parenttickets.children.length == 0) {
			var eventday = parenttickets.parentNode;
			eventday.remove();
		}

		// get current totalAmounts
		var totalAmount = String(document.getElementById("TotalAmount").innerHTML);
		var totalFoodAmount = String(document.getElementById("TotalFoodAmount").innerHTML);
		
		// replace comma with period because parseFloat doesn't 'take' comma's ...
		totalAmount = totalAmount.replace(',', '.');
		totalFoodAmount = totalFoodAmount.replace(',', '.');
		
		// parse it to float
		totalAmount = parseFloat(totalAmount);
		totalFoodAmount = parseFloat(totalFoodAmount);
		
		// calculate new totalAmount
		var removeTotal = totalAmount - (10 * output);
		var removeFoodTotal = totalFoodAmount - (price * output);
		console.log(totalAmount, output, totalFoodAmount, price);
		
		// round down to 2 numbers behind comma
		removeTotal = removeTotal.toFixed(2);
		removeFoodTotal = removeFoodTotal.toFixed(2);

		// replace period with comma again
		removeTotal = String(removeTotal).replace('.', ',');
		removeFoodTotal = String(removeFoodTotal).replace('.', ',');

		// replace html element with new totalAmount
		document.getElementById("TotalAmount").innerHTML = removeTotal;
		document.getElementById("TotalFoodAmount").innerHTML = removeFoodTotal;
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
		location.href = "Jazz.php";
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

function ShoppingCartPlus(amount){
	var number = parseInt(document.getElementById("shoppingcartCount").innerHTML);
	number = number + amount;
	document.getElementById("shoppingcartCount").innerHTML = number;
}

function ShoppingCartmin(amount){
	var number = parseInt(document.getElementById("shoppingcartCount").innerHTML);
	number = number - amount;
	document.getElementById("shoppingcartCount").innerHTML = number;

}

function ShoppingCartPlusJazz(id){
	var amount = document.getElementById(id).value; 
	amount++;
	document.getElementById(id).value = amount;
}

function ShoppingCartMinJazz(id){
	var amount = document.getElementById(id).value; 
	if (amount >0){
		amount--;
		document.getElementById(id).value = amount;
	}
}

function cartAmountPlus(count){
	var indentifier = "amountNumber".concat(count);
	var number = parseInt(document.getElementById(indentifier).value);
	number = number + 1;
	document.getElementById(indentifier).value = number;
}

function cartAmountMinus(count){
	var indentifier = "amountNumber".concat(count);
	var number = parseInt(document.getElementById(indentifier).value);
	if (number > 0) {
		number = number - 1;
		document.getElementById(indentifier).value = number;
	}	
}

function GetTicketAmount(count){
	var indentifier = "amountNumber".concat(count);
	var number = parseInt(document.getElementById(indentifier).value);
	return	number;
}

function ShowHideJazzFilter(){
	var x = document.getElementById('Toggle');
  	if (x.style.display === "block") {
    	x.style.display = 'none';
  	} else {
    	x.style.display = 'block';
  	}
}