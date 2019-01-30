var t = "";
var p = "";
var a = "";
var total = 0;
function pay(){
    var spl = t.split("||");
    if (p == "" && a == ""){
      p += spl[0];
      a += spl[1];
    }
    else{
      p += "," + spl[0];
      a += "," + spl[1];
    }
}
function cl(){
  document.getElementById("cart").style.visibility='hidden';
}
function cart(){
   document.getElementById("cart").style.visibility='visible';
   var docx = document.getElementById("cartlist");
   if (p != ""){
      var pr = p.split(",");
      var am = a.split(",");
      total = 0;
      docx.innerHTML = "";
      for (var cnt=0;cnt<=am.length-1;cnt++){
        docx.innerHTML += '<tr><td class="item"><div>'+ pr[cnt] +'</div></td><td class="price"><font color="black">NGN</font> ' + am[cnt] +'</div></td></tr>';
        total = total + parseInt(am[cnt]);
      }
      docx.innerHTML += '<tr><td class="total"><div>Total</div></td><td class="totalamount"><font color="black">NGN</font> '+ total +'</div></td></tr>';
      docx.innerHTML += '<tr><td colspan="2" style="padding-top:40px"><center><button class="checkout" onclick="paywithpaystack()">Checkout</button></center></td></tr>';
   }
   else{
      docx.innerHTML = '<tr><td class="item"><center>Nothing available yet</center></td></tr>';
   }
}
function notify(){
	var interv = setTimeout(function(){
      if (Notification.permission === "granted"){
			var options = {
              body:'Thanks for visiting TechStrap. Here, we give you the most affordable products. Shop now and stand a chance to win rewards',
              icon:'strap.png',
              dir:'ltr'
			};
			var notification = new Notification("Welcome",options);
		}
		else if (Notification.permission !== "denied"){
            Notification.requestPermission(function(permission){
              if (!('permission' in window)){
                 Notification.permission = permission;
              }
              if (permission === "granted"){
              	 var options = {
                   body:'Thanks for visiting TechStrap. Here, we give you the most affordable products. Shop now and stand a chance to win rewards',
                   icon:'strap.png',
                   dir:'ltr'
			     };
			     var notification = new Notification("Welcome",options);
              }
          });
		}
	},5000);
}
