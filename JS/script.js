const cajaOferta = document.getElementById("oferta")
const imgBomba = document.getElementById("bomba")
const imgExplosion = document.getElementById("explosion")
const btnNos = document.getElementById("nosotros")
const nosTxt = document.getElementById("nosotrostxt")
const principal = document.getElementById("principal")
const btnNuestras = document.getElementById("nuestras")

function verPrincipal(){
    nosTxt.classList.add("d-none")
    principal.classList.remove("d-none")
}

function verNosotros(){
    nosTxt.classList.remove("d-none")
    principal.classList.add("d-none")
}

const botonesNav = document.getElementsByClassName("navbar-nav")

for (let boton of botonesNav ){

   const links = boton.getElementsByClassName("nav-link")
          
         for (let link of links){
            
            
           if (link.getAttribute("href") == "#nosotrostxt") {
                link.addEventListener("click", function() {
                    verNosotros()
                })
           }
           else{
                link.addEventListener("click", function() {
                      verPrincipal()
                })

           }


         }
  


}


cajaOferta.addEventListener("mouseover",function (){
   
    //alert("alalalalala");
    imgBomba.classList.add("d-none")
    imgExplosion.classList.remove("d-none");
})
cajaOferta.addEventListener("mouseout",function (){
   
   // alert("alalalalala");
    imgExplosion.classList.add("d-none")
    imgBomba.classList.remove("d-none");
})


const botonesCard = document.getElementsByClassName("card-body")

for (let boton of botonesCard){
        boton.getElementsByClassName("btn")[0].innerText = "MAS INFO"
        boton.getElementsByClassName("btn")[0].addEventListener("click",function(){
        var cajatexto = document.getElementById("validationTextarea");
        var epadre = boton.getElementsByClassName("btn")[0].parentElement;
        var nombreMoto = epadre.getElementsByClassName("card-title")[0].textContent
        cajatexto.innerText = "QUIERO MAS INFO SOBRE " + nombreMoto
    
    }
    )
}

