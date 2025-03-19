window.addEventListener("scroll",function(){
	
	let navbar=document.getElementById("top-navbar");
	
	navbar.classList.toggle("navtop", window.scrollY > 0);
})


window.addEventListener("scroll",function(){
	
	let header=document.getElementById("header");
	
	header.classList.toggle("sticky", window.scrollY > 0);
})

window.onscroll=function(){
	
	let btn=document.getElementById("fixed-btn");
	
	if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		
		btn.style.display="block"
	}
	else{
		
		btn.style.display="none"
	}
}

setTimeout(myFunction,2000);

function myFunction(){
	
	document.body.scrollTop="0px";
	document.documentElement.scrollTop="0px"
}

function open(){

    let headers = document.querySelector(".header-nav");

    headers.style.backgroundColor="#fff";
}

function myFunction1(){

    let  navbar = document.getElementById("header").classList.toggle("OpnCls")
}

 
 
AOS.init();


$('#home-content').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#customer').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
	center:true,
	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



let userPage = document.querySelector(".Userpage");

let loginPage = document.querySelector(".login-form");

let signup = document.querySelector(".singup");

function create(){

    userPage.style.display="none"
    loginPage.style.display="block"
}

function login(){

    userPage.style.display="none"
    signup.style.display="block"
}

function canlreg(){

    loginPage.style.display = "none"
    userPage.style.display = "block"
}

function canlsig(){

    signup.style.display = "none"
    userPage.style.display = "block"
}




const auth = firebase.auth();

const db = firebase.firestore();

const database = firebase.database();


let new_create = document.getElementById("crt");

new_create.addEventListener("click",function(){


    var frtName = document.getElementById("firstName").value;

    var lstName = document.getElementById("lastName").value;

    var em = document.getElementById("crt_em").value;

    var pas = document.getElementById("crt_pas").value;

    auth.createUserWithEmailAndPassword(em, pas).then(() =>{

        document.getElementById("message").innerHTML = "Account create successfully";
        document.getElementById("message").style.color = "#3CB815";
        loginPage.style.display = "none"
        userPage.style.display = "block"
    
    })
    .catch((error) => {

        document.getElementById("message").innerHTML = error.message;
        document.getElementById("message").style.color = "#ff0000";
    })



    db.collection("Fooduser").add({

        FirstName : frtName,
        LastName : lstName,
        Email : em

    })
    
})




let signIn = document.getElementById("signin");


signIn.addEventListener("click",function(){

    var sigem = document.getElementById("sig_em").value;

    var sigpas = document.getElementById("sig_pas").value;


    auth.signInWithEmailAndPassword(sigem, sigpas).then((userCredential) =>{

        document.getElementById("sig-message").innerHTML = "Signed in successfully";

        document.getElementById("sig-message").style.color = "#3CB815"

        userid = userCredential.user

        window.location.replace("offer.html")

    })

    .catch((error) =>{

        document.getElementById("sig-message").innerHTML = error.message;

        document.getElementById("sig-message").style.color = "#ff0000"
    })
    
    
})


function signout(){

    auth.signOut().then(() => {
    
      window.location.replace("products.html");
      
    })
      .catch((error) => {
    
        document.getElementById("demo").innerHTML=error.message;
      });
    
    }

let sing_name = document.getElementById("sign_user");

let sing_email = document.getElementById("sign_email");


db.collection("Fooduser").get().then((snapshot=>{

    snapshot.docs.forEach((doc =>{

        sing_name.innerHTML = doc.data().FirstName + " " + doc.data().LastName;

        sing_email.innerHTML = doc.data().Email;

    }))
    
}))




db.collection("Category").get().then((snaphsot)=>{

        let veiw = document.querySelector(".img-view");
    
        snaphsot.forEach((doc)=>{
    
            let food =doc.data()
    
    
            veiw.innerHTML += `<div class="col-lg-3 mb-4" data-aos="fade-up" data-aos-duration="500">
            <div class="products text-center">
                 <div class="products-content">
                 <img id="imgscr" src="${food.imgURL}">
               <div class="img-content">	
                 <a>New</a>
               </div>
             </div>
                 <h4 class="mt-3" id="foodnames">${food.prdName}</h4>
                 <a style="color: var(--brand2--)">₹<span id="food-amount">${food.rupees}.00</span></a>
                 <a style="text-decoration:line-through">₹<span id="food-mrp">${food.MRP}</span></a>
                <div class="d-flex mt-4 menu">
                  <p class="mx-auto m-2" onclick="viewcrd()" id="viewitem"><small><i class="fa-solid fa-eye me-1" style="color: var(--brand2--)"></i>View detail</small></p>
                   <p class="p"></p>
                  <p class="mx-auto m-2"><small><i class="fa-solid fa-cart-shopping me-1" style="color: var(--brand2--)"></i>Add to card</small></p>
                </div>
            </div>
           </div>`
        })
})


















    









