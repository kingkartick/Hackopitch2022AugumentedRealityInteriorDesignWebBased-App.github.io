 
                  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
                  import { getDatabase ,ref,set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
              
                  const firebaseConfig = {
                   apiKey: "AIzaSyDnJvHGINzFRY4Tbv3KPUL5G7-RPasbK9Q",
                   authDomain: "roomy2-8afff.firebaseapp.com",
                   databaseURL: "https://roomy2-8afff-default-rtdb.asia-southeast1.firebasedatabase.app",
                   projectId: "roomy2-8afff",
                   storageBucket: "roomy2-8afff.appspot.com",
                    messagingSenderId: "519049376654",
                   appId: "1:519049376654:web:c50a78b952cbd22f66aadf",
                   measurementId: "G-F1XQKD5GMX"
                    };
                
                  // Initialize Firebase
                  const app = initializeApp(firebaseConfig);
                  
                  const db = getDatabase(app);
                 
  
                  let clk = document.getElementById("dataEntry");
                  clk.addEventListener("click",function dataentry(){
                         const mail = localStorage.getItem("email");
                         const email = mail.replace(".com","com")


                         const Name =document.getElementById("name").value;
                         const contact = document.getElementById("Contact").value;
                         const city =document.getElementById("City").value;

                         if(document.getElementById("height0")){var height1= document.getElementById("height0").value; var weidth1= document.getElementById("weidth0").value; var texture1= document.getElementById("texturein0").value; } else {var height1 = "0";var weidth1 = "0"; var texture1 ="notSelected";}
                         if(document.getElementById("height1")){var height2= document.getElementById("height1").value; var weidth2= document.getElementById("weidth1").value;var texture2= document.getElementById("texturein1").value;} else {var height2 = "0";var weidth2 = "0"; var texture2 ="notSelected";}
                         if(document.getElementById("height2")){var height3= document.getElementById("height2").value; var weidth3= document.getElementById("weidth2").value;var texture3= document.getElementById("texturein2").value;} else {var height3 = "0";var weidth3 = "0"; var texture3 ="notSelected";}
                         if(document.getElementById("height3")){var height4= document.getElementById("height3").value; var weidth4= document.getElementById("weidth3").value;var texture4= document.getElementById("texturein3").value;} else {var height4 = "0";var weidth4 = "0"; var texture4 ="notSelected";}
                         if(document.getElementById("height4")){var height5= document.getElementById("height4").value; var weidth5= document.getElementById("weidth4").value;var texture5= document.getElementById("texturein4").value;} else {var height5 = "0";var weidth5 = "0"; var texture5="notSelected";}
                         set(ref(db,`users/`+email),{name:localStorage.getItem("userName"),Contact:contact, name:Name,City:city,wall1:{Height1:height1,Weidth1:weidth1,Texture1:texture1},wall2:{Height2:height2,Weidth2:weidth2,Texture2:texture2},wall3:{Height3:height3,Weidth3:weidth3, Texture3:texture3}, wall4:{Height4:height4,Weidth4:weidth4, Texture4:texture4}, wall5:{Height5:height5,Weidth5:weidth5,Texture5:texture5}});
                         
                         window.confirm("Your Order Is Taken you can check details from order Summary page");
                         const bck = document.getElementById("backbtn");
                       

                        })

             
               
                btn = document.getElementById("submit");
                const imagelist = [];
                btn.addEventListener('click',function(){
                var noOfWalls = document.getElementById("noOfWalls").value;
                i = 0;
                for (i;i<noOfWalls;i++)
                { const ol = document.getElementById("areaOfWalls");
                  const list  = document.createElement("li");
                  const input = document.createElement("INPUT");
                  const body = document.getElementById("body");
                  body.style.height="100%";
                  input.setAttribute("id","height"+i);
                  input.setAttribute("type","number");
                  input.setAttribute("placeholder",'height of wall in ft');

                  const input2 = document.createElement("INPUT");
                  input2.setAttribute("id","weidth"+i);
                  input2.setAttribute("type","number");
                  input2.setAttribute("placeholder",'weidth of wall in ft');
                  list.append(input);
                  list.append(input2);

                  const input3 = document.createElement("INPUT");
                  input3.setAttribute("id","texturein"+i);
                  input3.setAttribute("placeholder",'Select the texture Image');
                  list.append(input);
                  list.append(input3);
                  
                  
                  
                  
                  list.style.padding="1rem";
                  list.style.fontSize='2rem';
                  list.style.color='white';
                  ol.append(list)
                  const cartlist = localStorage.getItem("chosenDesigns");
                  const cartArray = JSON.parse(cartlist);
                  console.log(cartArray);
                  console.log(cartArray.length);
                 var idl = 0;
                 for(const ele of cartArray){
                     
                     idl++
                     var img =document.createElement("IMG");
                     img.setAttribute("class",i+"texture");
                     img.style.height="95px";
                     img.style.width="85px";
                     img.style.padding="10px";
                     img.setAttribute("src",ele);
                     list.append(img);
                    
                    

                     }
                     
                    }
                 

                    var textureput1 = document.getElementById("texturein0"); 
                  var options1 = document.getElementsByClassName("0texture");
                  for(var opt1 of options1){
                      opt1.onclick = function(){
                        this.style.padding = null;
                        textureput1.value = this.getAttribute("src");
                        this.style.padding = "5px";
                        this.style.backgroundColor ="aliceblue";
                      } 
                  }
                  var textureput2 = document.getElementById("texturein1"); 
                  var options2 = document.getElementsByClassName("1texture");
                  for(var opt2 of options2){
                      opt2.onclick = function(){
                        this.style.padding = null;
                        textureput2.value = this.getAttribute("src");
                        this.style.padding = "5px";
                        this.style.backgroundColor ="aliceblue";
                      } 
                  }
                  var textureput3 = document.getElementById("texturein2"); 
                  var options3 = document.getElementsByClassName("2texture");
                  for(var opt3 of options3){
                      opt3.onclick = function(){
                        textureput3.value = this.getAttribute("src");
                        this.style.padding = "5px";
                        this.style.backgroundColor ="aliceblue";
                      } 
                  }
                  var textureput4 = document.getElementById("texturein3"); 
                  var options4 = document.getElementsByClassName("3texture");
                  for(var opt4 of options4){
                      opt4.onclick = function(){
                        textureput4.value = this.getAttribute("src");
                        this.style.padding = "5px";
                        this.style.backgroundColor ="aliceblue";
                      } 
                  }
                  var textureput5 = document.getElementById("texturein4"); 
                  var options5 = document.getElementsByClassName("4texture");
                  for(var opt5 of options5){
                      opt5.onclick = function(){
                        textureput5.value = this.getAttribute("src");
                        this.style.padding = "5px";
                        this.style.backgroundColor ="aliceblue";
                      } 
                  }
                
                } 
                 );
                 
                
