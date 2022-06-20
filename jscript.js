function randomnum()
		{
			var num1=Math.floor(Math.random()*10)+1;
			var num2=Math.floor(Math.random()*10)+1;
			document.getElementById("n1").innerHTML=num1;
			document.getElementById("n2").innerHTML=num2;
		}

		
		function addnum()
		{
			var res=document.getElementById("result").value;
			
			var no1=parseInt(document.getElementById("n1").innerHTML);
			var no2=parseInt(document.getElementById("n2").innerHTML);
			sum=no1+no2;
			
			if(res=="")
			{
				alert("Please Add numbers");
				document.form1.result.focus();
			}
			else if(res==sum)
			{
				//alert("Correct Captcha!");
				return true;
				//document.getElementById("simple").innerHTML="Captcha is Correct!";
				
			}
			else
			{
				alert("InCorrect Captcha!");
				document.form1.result.focus();
				return false;
				//document.getElementById("result").innerHTML="";
			}

		}

		
		function inWords () 
		{

			var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
			var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

			var num=document.getElementById("loan").value;
	
    		if ((num = num.toString()).length > 9) return 'overflow';
    		let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    		
    		if (!n) return; var str = '';
    		str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    		str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    		str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    		str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    		str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rs ' : '';
    
    		document.getElementById("words").innerHTML=str;
		}

		/*document.getElementById('loan').onkeyup = function ()
		{
    		document.getElementById('words').innerHTML = inWords(document.getElementById('loan').value);
		}*/

		function ValidMail(mailtext)
		{
			var format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if (mailtext.value.match(format)) {

				//alert("Email is Valid !");
				//document.form1.mail.focus();
				return true;
			}
			else
			{
				alert("Email is Invalid !");
				document.form1.mail.focus();
				return false;
			}
		}

		function finalgo()
		{
			var check= ValidMail(document.form1.mail) && addnum();
			var c=inWords();
			if(check)
			{
			  var a = store();
			  //window.location.href="ty.html";
			  window.open("ty.html","_blank");
			}
			else
			{
				alert("Invalid Credentials!");
			}
		}

		function store()
		{
			//Variable to pass
			var fn = document.getElementById("name").value;
			var sendmail=document.getElementById("mail").value;
		
			//Save to Local storage
			localStorage.setItem("fn", fn);
			localStorage.setItem("sendmail", sendmail);
			return true;

		}