fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        data.produits.forEach(sneakers => {
            document.getElementById('cardContainer').innerHTML += `
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
                        <div class="buttonProduct flex alignCenter bRadiusMax g5 bgGreen cWhite">
                            <img alt="" src="assets/plus.svg">
                            <p>Ajouter au panier</p>
                        </div>
                    </div>
                </div>
            `;
        });

        // Ajout événements
        const buttons = document.querySelectorAll('.buttonProduct');
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                button.innerHTML = `
                    <p>Ajouté au panier</p>
                    <img alt="" src="assets/check.svg">
                `;
            });
        });

        data.services.forEach(sneakers => {
            document.getElementById('services').innerHTML += `
                <div class="large-4">
            <h3 class="size28 weight600 cGreen">${sneakers.nom}</h3>
            <p class="size20">${sneakers.description}</p>
        </div>
            `;
        });


        data.temoignages.forEach(sneakers => {
            document.getElementById('temoignages').innerHTML += `
                <div class="temoignageCard large-4 flex flexColumn g10">
                    <div class="flex spaceBetween alignEnd">
                        <p class="size24 weight600 cGreen">${sneakers.prenom}</p>
                        <div class="flex">
                            <img src="assets/star.svg" alt=""/>
                            <p class="note size20 weight600">${sneakers.note}/5</p>
                        </div>
                    </div>
                    <p class="typeExperience size24">${sneakers.typeExperience}</p>
                    <p class="size20">${sneakers.commentaire}</p>
                </div>
            `;
        });
    });
