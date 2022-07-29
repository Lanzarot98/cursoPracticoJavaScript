var arrayDeSuscripcion =[
    "free", "Solo puedes tomar los cursos gratis",
    "basic" ,"Puedes tomar casi todos los cursos de Platzi durante un mes",
    "expert" ,"Puedes tomar casi todos los cursos de Platzi durante un año",
    "expertplus","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
]
  
  
function getSubscriptionType(subscription) {
    let pos = arrayDeSuscripcion.indexOf(subscription.toLowerCase());
    if (arrayDeSuscripcion[pos]){
      console.log(arrayDeSuscripcion[pos+1]);
      return;
    } 
    console.warn("El plan no existe")
}

getSubscriptionType('free');
 