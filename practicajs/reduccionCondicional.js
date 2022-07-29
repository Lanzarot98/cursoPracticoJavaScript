// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 

//consertir este bloque de codigo con solo if:
// const getSubscriptionType = (subscription) => {
//     if (subscription == 'Free') {
//         console.log("Solo puedes tomar los cursos gratis");
//     } else if (subscription == 'Basic') {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     } else if (subscription == 'Expert') {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     } else if (subscription == 'ExpertDuo') {
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//     } else { console.log(No existe ese tipo de suscripción);}
// }

// const getSubscriptionType = (subscription) => {
//     if (subscription == 'Free') {
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     } 
//     if (subscription == 'Basic') {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         return;
//     }
//     if (subscription == 'Expert') {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     } 
//     if (subscription == 'ExpertDuo') {
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         return;
//     }

//     console.warn('Ese tipo de suscripción no existe');
// }

// getSubscriptionType('Free');

// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este 
// comportamiento con arrays o objetos y un solo condicional. 

const typesOfSubscription = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

// console.log(typesOfSubscription.ExpertDuo);
// console.log(typesOfSubscription['free']); // también podemos acceder a los objetos como si fueran arrays

const subscriptionExample = 'free';
typesOfSubscription[subscriptionExample]; // esto me retornara el valor del componente free


//solucion a solo un condicional: 
const getSubscriptionType = subscription => {
    if (typesOfSubscription[subscription.toLowerCase()]) {
        console.log(typesOfSubscription[subscription.toLowerCase()]);
        return;
    }
    console.warn('Ese tipo de suscripción no existe');
}

getSubscriptionType("Basic");


