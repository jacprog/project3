				 //Words validation, first name, last name, city
				 //for contact page
				 
				        function validateText(textBox) 
						{
						var x = textBox.value; //name is id in HTML in varaiable
						var wordCheck = /^[a-zA-Z]{1,15}$/; //Regex testing
						
						    if(wordCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("This is not a valid entry, please enter letters only, max 15 letters");
						    } 
						}

				 //URL Validation
				 		 function validateUrl()
				        {
				        var x = url.value; //email is id in HTML
						var urlCheck = /^(www)[.][a-zA-Z]{1,25}[.][a-zA-Z]{2,3}$/; //Regex testing
						
						    if(urlCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 		
						    	alert("Please enter a URL in the following format: www.example.com");

						    } 
						}
				 
				 //Email Validation
				        function validateEmail()
				        {
				        var x = email.value; //email is id in HTML
						var emailCheck = /^[a-zA-Z]{1,25}[@][a-zA-Z]{1,25}[.][a-zA-Z]{2,3}$/; //Regex testing
						
						    if(emailCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("Please enter in a valid Email address");
						    } 
						}
     
				 //Zip Code Validation
						function validateZip() 
						{
						var x = zip.value; //zip is id in HTML
						var zipCodePattern = /^\d{5}$/; //Regex testing, \5 = any digit, {5} = need 5 digit
						
						    if(zipCodePattern.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("This is not a valid Zip, please enter in a 5 digit number");
						    } 
						}
						
					//Phone validation
						function validatePhone() 
						{
						var x = phone.value; //zip is id in HTML
						var zipCodePattern = /^\d{3}[-]\d{3}[-]\d{4}$/; //Regex testing
						
						    if(zipCodePattern.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("Please enter a phone mumber in the following format: 000-000-0000");
						    } 
						}

						
					//Number of Samoflanges check
								function validateNumber() 
						{
						var x = number.value; //number is id in HTML
						var numCheck = /^[1-9][0-9]?$|^100$/; //Regex testing found on stack overflow
						
						    if(numCheck.test(x)) 
						    {
						    ; //do nothing, imput is good
						    }
						    else
						    { 
								alert("Please enter a number between 1 and 100");
						    } 
						}
						
//*********************************************************************************
//All required field present see page 509, 511, book
//*********************************************************************************	
							// get values by id function
					var $ = function (id) {
    					return document.getElementById(id);
					}
						
// validation, checking all fields: if all isValid = true, then ok to submit infos
						
 							var submitInfo = function () {
 
								var isValid = true;
								
					//Check first name field
								if ($("Fname").value == "") {
									$("Fname_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("Fname_error").firstChild.nodeValue = "";
								}  
					//Check last name field
								if ($("Lname").value == "") {
									$("Lname_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("Lname_error").firstChild.nodeValue = "";
								}  
					//Check email field
									if ($("email").value == "") {
									$("email_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("email_error").firstChild.nodeValue = "";
								}  
					//check url field
								if ($("url").value == "") {
									$("url_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("url_error").firstChild.nodeValue = "";
								}  
					//check adress field
								if ($("mailAddie").value == "") {
									$("adress_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("adress_error").firstChild.nodeValue = "";
								}  
					//check city field
								if ($("city").value == "") {
									$("city_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("city_error").firstChild.nodeValue = "";
								}  
			
					//State validation
								if ($("state").value == "") {
									$("state_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("state_error").firstChild.nodeValue = "";
								}  
					//Zip validation
								if ($("zip").value == "") {
									$("zip_error").firstChild.nodeValue = "This field is required.";
									isValid = false;
								} else {
									$("zip_error").firstChild.nodeValue = "";
								}


	
	
								//Submit form OK to submit Note: cant call button submit, it will overide JS
								if (isValid) {
									$("contactInfo").submit(); 
								}
							}
								
								//Submit  on click of button
								window.onload = function () {
  								  $("getit").onclick = submitInfo;
							}
			
							
					
