let cardDeck;

function generatePage(modpacks, statusType)
{
    let packCount = 0;
    let doc = document.getElementById("append-here");

    modpacks.modpacks.sort((a, b) => (a.name > b.name ? 1 : -1));
    modpacks.modpacks.forEach(pack => {

        
        console.log(pack.status + " : " + statusType);
        if(statusType == "all" || pack.status == statusType)
        {
            if(packCount % modpacks.columns == 0)
            {
                cardDeck = document.createElement("div");
                cardDeck.className = "card-deck";
                doc.appendChild(cardDeck);
            }
            
            if(statusType == "playing") {
                addBlank();
            }

            let card = document.createElement("div")
            card.className = "card " + pack.status;
            cardDeck.appendChild(card);
            
            let link = document.createElement("a")
            link.href = pack.link;
            card.appendChild(link);
            
            let img = document.createElement("img")
            img.src = pack.icon;
            img.className = "card-img-top";
            link.appendChild(img);
            
            packCount++;
        }
    });

    let blanks;

    if(statusType == "playing") {
        addBlank();
    } else {
        blanks = modpacks.columns - packCount % modpacks.columns;
    }

    if(blanks != 6)
        for(let i = 0; i < blanks; i++) {
            addBlank();
        }
}
    
function addBlank() {
    let card = document.createElement("div")
    card.className = "card ";
    card.style = "background-color:#121212;";
    cardDeck.appendChild(card);

    console.log("blank added")
}