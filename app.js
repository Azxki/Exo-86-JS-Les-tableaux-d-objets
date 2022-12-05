/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [peugeot, citroen, ford], // Vos voitures dans cette propriété !
}

for (let i = 0; i < voitures.collection.length; i++) {
    console.log(voitures.collection[i]);
    console.log(voitures.collection[i].ouvrirPorte());
}

let span = document.createElement('span');

let para = document.querySelector("p").appendChild(span);

para.innerHTML = "Citroen " + citroen.color + "<br>"
para.innerHTML += "Ford " + ford.color + "<br>"
para.innerHTML += "Peugeot " + peugeot.color


// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


