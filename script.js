// Chargement du fichier JSON
fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cardContainer');

        // Génération des cartes produits
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
                        <div class="buttonProduct flex alignCenter bRadiusMax g5 bgGreen cWhite cursorPointer selectNone">
                            <img alt="" src="assets/plus.svg">
                            <p>Ajouter au panier</p>
                        </div>
                    </div>
                </div>
            `;
        });

        // compteur de clics total
        let count = 0;
        const bagCounter = document.querySelector('.nombreClics');

        // Bouton statique (hors JSON)
        const boutonClic = document.getElementById("boutonClic");
        if (boutonClic) {
            boutonClic.addEventListener("click", () => {
                count++;
                bagCounter.textContent = count;

                boutonClic.innerHTML = `
                    <img alt="" src="assets/check.svg">
                    <p>Ajouté au panier</p>
                `;
            });
        }

        // Boutons produits générés
        const buttons = document.querySelectorAll('.buttonProduct:not(#boutonClic)');
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

        // Services
        data.services.forEach(s => {
            document.getElementById('services').innerHTML += `
                <div class="servicesCard large-4">
                    <h3 class="size24 weight600 cBlack">${s.nom}</h3>
                    <p>${s.description}</p>
                </div>
            `;
        });

        // Témoignages
        data.temoignages.forEach(t => {
            const etoilesPleines = '★'.repeat(t.note);
            const etoilesVides = '☆'.repeat(5 - t.note);
            const etoiles = etoilesPleines + etoilesVides;

            document.getElementById('temoignages').innerHTML += `
                <div class="temoignageCard large-4 flex flexColumn g10">
                    <div class="flex spaceBetween alignCenter">
                        <p class="size24 weight600">${t.prenom}</p>
                        <div class="flex">
                            <p class="note weight600 size24">${etoiles}</p>
                        </div>
                    </div>
                    <p class="size20">${t.typeExperience}</p>
                    <p>${t.commentaire}</p>
                </div>
            `;
        });
    });


// Bandeau de livraison
const croix = document.getElementById("removeBanderolle");
const banderolle = document.getElementById("banderolle");

croix.addEventListener("click", () => {
    banderolle.classList.add("displayNone");
});