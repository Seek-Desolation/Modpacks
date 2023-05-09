fetch("./modpacks.json")
    .then(res => res.json())
    .then(modpacks => {
        generatePage(modpacks, "playing");
    });