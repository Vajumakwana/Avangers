//last updated
var lastopened = document.getElementById("lastopened");
    lastopened.innerHTML = document.lastModified;
//navbar
    //without internet
    function chngmenu() {
        
        window.navigator.vibrate(300);
        
        let nav = document.querySelector(".sidebar"); 
        let navbtn = document.getElementById('icon').src; 

                if (navbtn.indexOf('close.png')!=-1) {
                    document.getElementById('icon').src  = 'menu.png';
                    nav.classList.remove("active");
                }
                 else {
 
                    document.getElementById('icon').src = 'close.png';
                    nav.classList.add("active");
                    
               }
        
            }
       
        
    //with internet
    /*
    let nav = document.querySelector(".sidebar"); 
    let navbtn = document.getElementById('icon');
    
    navbtn.addEventListener('click',function(e){
            
            window.navigator.vibrate(300); 
            if($('.sidebar').hasClass("active")) { 
                
                nav.classList.remove("active");
                document.getElementById('icon').style ="transform:rotate(0deg)";
            }
            else { 
                nav.classList.add("active");
                document.getElementById('icon').style ="transform:rotate(180deg)";
            }
        
    });
    */
    
//login-signup
 
        //email vaidation
        let email = document.getElementById("email"); 
        
             //   document.getElementById("submit").disabled = true;
        email.addEventListener('input',function(e){
            
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
            if(!this.value == ""){
                if (!expr.test(this.value)) {
                 email.style = "border-bottom:2px solid red";
                }
                else{
                     email.style = "border-bottom:2px solid green";
                    } 
            }else{
                    
            }
        });
     /*   
        //password validation
        let pass = document.getElementById("password"); 
        function show(){
                    temp = document.querySelector("#password");
                      if (temp.type === "password") {
                            temp.type = "text";
                        }
                        else {
                            temp.type = "password";
                        }
                }
                
        pass.addEventListener('input',function(e){
             
             var expr2 = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/; 
            if(!this.value == ""){
                if (!expr2.test(this.value)) {
                perror.innerHTML = "Week Password."; 
                perror.style.color = "red";
                //document.getElementById("submit").disabled = true;
               
                 document.getElementById("submit").innerHTML ='<i class="fa fa-spinner fa-spin"></i>';  
               }else{
                    perror.innerHTML = "Strong Password";
                    perror.style.color = "green";
                    document.getElementById("submit").innerHTML = "Go"; 
                
               }
                
            }else{
                    perror.innerHTML = "";
                    
            }
        });
*/