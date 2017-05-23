var grandTotal = 0;
var optionsCost;
var sizeCost;
var salesTax;
var finalCost;
var shippingCost;
		/*
		 
		function count(orderForm, lineNumber, itemCost) {
				orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;
				orderForm.line_sum[lineNumber].value = Math.ceil(orderForm.line_sum[lineNumber].value * 1000) / 1000;
				orderForm.line_sum[lineNumber].value = Math.floor(orderForm.line_sum[lineNumber].value * 1000) / 1000;
				orderForm.line_sum[lineNumber].value = Math.round(orderForm.line_sum[lineNumber].value * 100) / 100;
				if (orderForm.line_sum[lineNumber].value == "NaN") {
					alert("Error:\nYou may only enter numbers...\nPlease retry");
					orderForm.line[lineNumber].value = orderForm.line[lineNumber].value.substring(0, orderForm.line[lineNumber].value.length - 1);
					orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;
					if (orderForm.line_sum[lineNumber].value == "0")
						orderForm.line_sum[lineNumber].value = "";
				} else {
					var grandTotal = 0;
					for ( i = 0; i < orderForm.line_sum.length; i++) {
						grandTotal += Math.ceil(orderForm.line_sum[i].value * 1000) / 1000;
					}
					grandTotal = Math.round(grandTotal * 1000) / 1000;
					orderForm.grand_total.value = "$ " + grandTotal;
					decimal(orderForm);
				}
			
			
		};//End of Count Function
		*/function calculateGrandTotal(){
			finalCost = 0.00;
			optionsCost = 0.00;
			salesTax = 0.00;
			sizeCost = 0.00;
			shippingCost = 0.00;
			optionsCost = orderForm.partTotal.value;
			shippingCost = orderForm.GraphicsTotal.value;
			sizeCost = orderForm.line_shipping.value;
			if (sizeCost == undefined || shippingCost == undefined || optionsCost == undefined){
				alert("You left one or more of the sections blank");
				return;
			}
			else{
				
			
			//Cost w/out sales tax
				
				salesTax = accounting.unformat(optionsCost) + accounting.unformat(shippingCost) + accounting.unformat(sizeCost);
				salesTax = salesTax * 0.06;
				document.orderForm.tax_sum.value = accounting.formatMoney(salesTax);
				
				finalCost = accounting.unformat(optionsCost) + accounting.unformat(shippingCost) + accounting.unformat(sizeCost) + accounting.unformat(salesTax);
			
				document.orderForm.grand_total.value = accounting.formatMoney(finalCost);
			}
		}
		
		function count(orderForm, lineNumber, itemCost) {
			var storage;
				storage = orderForm.line[lineNumber].value * itemCost;
				
				orderForm.line_sum[lineNumber].value = Math.ceil(orderForm.line_sum[lineNumber].value * 1000) / 1000;
				orderForm.line_sum[lineNumber].value = Math.floor(orderForm.line_sum[lineNumber].value * 1000) / 1000;
				orderForm.line_sum[lineNumber].value = Math.round(orderForm.line_sum[lineNumber].value * 100) / 100;
				orderForm.line_sum[lineNumber].value = accounting.formatMoney(storage);
				if (orderForm.line_sum[lineNumber].value == "NaN") {
					alert("Error:\nYou may only enter numbers...\nPlease retry");
					orderForm.line[lineNumber].value = orderForm.line[lineNumber].value.substring(0, orderForm.line[lineNumber].value.length - 1);
					orderForm.line_sum[lineNumber].value = orderForm.line[lineNumber].value * itemCost;
					if (orderForm.line_sum[lineNumber].value == "0")
						orderForm.line_sum[lineNumber].value = "";
				} else {
				var grandTotal = 0;
					for ( i = 0; i < orderForm.line_sum.length; i++) {
						grandTotal += accounting.unformat(orderForm.line_sum[i].value);
					
					}
			
					orderForm.partTotal.value = accounting.formatMoney(grandTotal);
				
			}
		}
	/*	function partTotalAmount(orderForm, lineNumber, itemCost) {
			var totalforparts = 0;
			for (i = 0; i < orderForm.line_sum.length-4; i++){
				totalforparts += Math.ceil(orderForm.line_sum[i].value *1000) /1000;
			}
			totalforparts = Math.round(totalforparts * 100) / 100;
			orderForm.partTotal.value = "$" + grandTotal;
		}*/
			 function setGraphics(size){
			 	var price = 0.00;
			 	document.getElementById("myGraphics").value = size;
			 	if (size == "Nvidia GTX 960"){
			 		price = 160.90;
			 		document.getElementById("lineGraphics").value = accounting.formatMoney(price);
			 	}else if (size == "Nvidia GTX 970"){
			 		price = 210.90;
			 		document.getElementById("lineGraphics").value = accounting.formatMoney(price);
			 	}
			 	else if(size == "Nvidia GTX 980"){
			 		price = 240.90;
			 		document.getElementById("lineGraphics").value = accounting.formatMoney(price);
			 	}
			 	}
			
			function shippingCost(){
		var shipDropDown = document.getElementById("theShipper");
		var price;
		var displayShipper = document.getElementById("OutputofCode");
				console.log("help");
			if (shipDropDown.options[shipDropDown.selectedIndex].text == "1 Day Rushing"){
				console.log("please");
				price = parseFloat(30.80);
					displayShipper.value = "1 Day Rush - $30.80";
					
					document.orderForm.line_shipping.value = accounting.formatMoney(price);
				}else if (shipDropDown.options[shipDropDown.selectedIndex].text == "2-3 Business Days"){
					
				console.log("please");
				price = parseFloat(15.95);
					displayShipper.value = "2-3 Business Days - $15.95";
					
					document.orderForm.line_shipping.value = accounting.formatMoney(price);
				}
				else{
					
				console.log("please");
				price = parseFloat(0.00);
					displayShipper.value = "5-8 Business Days - Free";
					
					document.orderForm.line_shipping.value = accounting.formatMoney(price);
				} 
		}
		function init() {
			 	document.orderForm.reset();
			 	document.orderForm.line[0].select();
			 	document.orderForm.line[0].focus();
			 	document.confirmationForm.order.value = "";
			 	orderForm.partTotal.value = "$0.00";
			 }
			function get_data(orderForm){
				
				var order_data = "This Order is ...\n";
				
				for (i = 0; i < orderForm.line.length; i++){
					if(orderForm.line[i] == ""){
					orderForm.line[i].value = "0.00";
					}
					else{
					order_data += "Line " + i + ", Quantity = "+ orderForm.line[i].value + " - Price = " + orderForm.line_sum[i].value +"\n";
					
					if(orderForm.grand_total.value == "") {
						orderForm.grand_total.value = "Whoopsies, please put in an order or get out of my shop"; 
					}
				}
				}
					order_data += "Graphics Card = " + orderForm.GraphicsTotal.value + "\n";
					order_data += "Shipping = " + orderForm.shippingDisplay.value + "\n";
					order_data += "Sales Tax = " + orderForm.tax_sum.value + "\n";
				
				
				
				order_data += "Total Order Value = " + orderForm.grand_total.value;
				
				document.confirmationForm.order.value = order_data;
				
			}
			
			//Runs init when page loads
			window.onload = init;
			
