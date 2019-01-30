var t = "";
function pay(){
    var xp = t.split("||");
	  var pr = parseInt(xp[2]);
	  var amount = pr * 100;
	  var email = xp[1];
	  var product = t[0];
      var handler = PaystackPop.setup({
         key:'pk_test_ccb78c39f39b80d0b47734286a4a2d1d9dcc3ab1',
         email:email,
         amount:amount,
         metadata:{
         	custom_fields:[
         	  {
         	  	display_name:"Product",
         	  	variable_name:"product_name",
         	  	value:product
         	  }
         	]
         },
         callback:function(response){
           alert("Transaction Complete");
         },
         onClose:function(){
           alert("Transaction Cancelled");
         }
      });
      handler.openIframe();
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
              if (!('permission' in windows)){
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
