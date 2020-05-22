

function calculateTip() {
	var billAmtString = document.getElementById("billamount").value;
	var serviceQual = document.getElementById("servicequality").value;
	var billTipString = (billAmtString * serviceQual);
	billTipString = billTipString.toFixed(2);
	var billAmt = Number(billAmtString);
	var billTip = Number(billTipString);
	var billTotalPlusTip = billAmt + billTip;
	console.log(billTotalPlusTip);
	
	document.querySelector('#billtotal').textContent = '$' + billAmt;
	document.querySelector('#billtip').textContent = '$' + billTip;
	document.querySelector('#billtotalplustip').textContent = '$' + billTotalPlusTip;
}

document.getElementById("calculate").onclick = function() {
	calculateTip();
}