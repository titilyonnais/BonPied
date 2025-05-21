fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        data.produits.forEach(sneakers => {
            document.getElementById('cardContainer').innerHTML += `
            <div class="card">
                <div class="imageContainer">
                    <div class="descContainer">
                        <p class="desc">${sneakers.description}</p>
                    </div>
                    <img alt=""
                         src="${sneakers.image}">
                </div>
                <div class="textCard">
                    <div class="text">
                        <p>${sneakers.nom}</p>
                        <p>${sneakers.price} €</p>
                    </div>
                    <div class="buttonProduct">
                        <img alt="" src="assets/plus.svg">
                        <p>Ajouter au panier</p>
                    </div>
                </div>
            </div>
            `;
        });

        // ✅ Attacher les événements après avoir injecté le HTML
        const buttons = document.querySelectorAll('.buttonProduct');
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                button.innerHTML = `
                    <p>Ajouté au panier</p>
                    <img alt="" src="assets/check.svg">
                `;
            });
        });
    })
