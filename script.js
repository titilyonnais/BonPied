fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cardContainer');
        data.produits.forEach(sneakers => {
            container.innerHTML += `
                <div class="card large-4">
                    <div class="imageContainer relative">
                        <div class="descContainer absolute w100 flex justifyCenter alignCenter cWhite">
                            <p class="w80">${sneakers.description}</p>
                        </div>
                        <img alt="" src="${sneakers.image}" class="w100">
                    </div>
                    <div class="textCard flex flexColumn alignStart relative g20">
                        <div class="flex spaceBetween alignCenter w100">
                            <p class="w50 weight500 size20">${sneakers.nom}</p>
                            <p class="weight600 size24">${sneakers.price} €</p>
                        </div>
                        <div class="buttonProduct flex alignCenter bRadiusMax g5 bgGreen cWhite cursorPointer selectNone" id="boutonClic">
                            <img alt="" src="assets/plus.svg">
                            <p>Ajouter au panier</p>
                        </div>
                    </div>
                </div>
            `;
        });

        let count = 0;
        const bagCounter = document.querySelector('.nombreClics');
        const buttons = document.querySelectorAll('.buttonProduct');

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                count++;
                bagCounter.textContent = count;

                button.innerHTML = `
                    <img alt="" src="assets/check.svg">
                    <p>Ajouté au panier</p>
                `;
            });
        });

data.services.forEach(sneakers => {
            document.getElementById('services').innerHTML += `
                <div class="servicesCard large-4">
            <h3 class="size28 weight600 cBlack">${sneakers.nom}</h3>
            <p class="size20">${sneakers.description}</p>
        </div>
            `;
        });


        data.temoignages.forEach(sneakers => {
            const etoilesPleines = '★'.repeat(sneakers.note);
            const etoilesVides = '☆'.repeat(5 - sneakers.note);
            const etoiles = etoilesPleines + etoilesVides;

            document.getElementById('temoignages').innerHTML += `
                <div class="temoignageCard large-4 flex flexColumn g10">
                    <div class="flex spaceBetween alignCenter">
                        <p class="size24 weight600">${sneakers.prenom}</p>
                        <div class="flex">
                            <p class="note weight600 size24">${etoiles}</p>
                        </div>
                    </div>
                    <p class="size20">${sneakers.typeExperience}</p>
                    <p>${sneakers.commentaire}</p>
                </div>
            `;
        });
    });

let clics = 0;
let nombreClics = document.getElementById("nombreClics")
let boutonClic = document.getElementById("boutonClic")

function comptage() {
    clics++;
    nombreClics.textContent = clics;
}

boutonClic.addEventListener("click", comptage);


let croix = document.getElementById("removeBanderolle");

croix.addEventListener("click", () => {
    console.log("Croix cliquée !");
})
