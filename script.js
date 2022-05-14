//defino el objeto villano
class Villano{
    constructor(nombre,peligrosidad, armas, vidas){
        this.nombre = nombre
        this.peligrosidad = peligrosidad
        this.armas = armas
        this.vidas = vidas
    }
}
let villanos =[]
//controlo que el storage esta vacio o no y lo creo
if(localStorage.getItem('villanos')){
    villanos= JSON.parse(localStorage.getItem('villanos'))
}else{
localStorage.setItem('villanos',JSON.stringify(villanos))
}
let formVillanos =document.querySelector('#formulario')
let divVillanos = document.querySelector('#divVillanos')
let botonVillano =document.querySelector('#botonVillano')
//capto los datos de los villanos  y los cargo al array villanos y lo almaceno a localStorage
formVillanos.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formVillano = new FormData(e.target)
   // console.log(formVillano.get('nombre'))
    //console.log(formVillano.get('peligrosidad'))
    //console.log(formVillano.get('armas'))
   // console.log(formVillano.get('vidas'))
    const villano =new Villano(formVillano.get('nombre'),formVillano.get('peligrosidad'),formVillano.get('armas'),formVillano.get('vidas'))
    console.log(villano)
    villanos.push(villano)
    console.log(villanos)
    localStorage.setItem('villanos',JSON.stringify(villanos))
    formVillanos.reset()
})
//recupero los datos y los despliego en el DOM
botonVillano.addEventListener('click',()=>{
    let villanosStorage= JSON.parse(localStorage.getItem('villanos'))
    villanosStorage.forEach(villano => {
        divVillanos.innerHTML += `
        <div class="card text-white bg-success mb-3 " style="max-width: 20rem;">
  <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><h4>${villano.nombre}</h4></font></font></div>
  <div class="card-body">
    <h6 class="card-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Su arma es :${villano.armas}</font></h6>
    <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tiene ${villano.vidas} vidas y su peligrosidad es de : ${villano.peligrosidad}</font></font></p>
  </div>
</div>
        
        `
    })
})
//funcion de bienvenida al sitio
function entraNombre (){
    let entrada = document.getElementById("entrada").value
    let entrNombre = document.getElementById("entrNombre")
    entrNombre.innerHTML = `HOLA ${entrada}`
    
}