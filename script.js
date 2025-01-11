let score = 0; // Score initial

function startGame() {
    document.getElementById("welcome").classList.add("hidden"); // Masquer l'écran d'accueil
    document.getElementById("game").classList.remove("hidden"); // Afficher le jeu
}

function checkAnswer1() {
    const answer1 = document.getElementById("answer1").value.toLowerCase();
    const result1 = document.getElementById("result1");

    if (answer1 === "chocolat") { // Remplacer par le nom de gâteau préféré
        result1.textContent = "Correct ! Énigme 1 résolue.";
        result1.classList.add("correct");
        score += 10; // Ajoute des points pour la bonne réponse
        document.getElementById("puzzle1").classList.add("hidden");
        document.getElementById("puzzle2").classList.remove("hidden");
    } else {
        result1.textContent = "Incorrect, réessayez.";
    }
}

function checkAnswer2() {
    const answer2 = document.getElementById("answer2").value.toLowerCase();
    const result2 = document.getElementById("result2");

    if (answer2 === "vert") { // Remplacer par la couleur préférée attendue
        result2.textContent = "Correct ! Énigme 2 résolue.";
        result2.classList.add("correct");
        score += 10; // Ajoute des points pour la bonne réponse
        document.getElementById("puzzle2").classList.add("hidden");
        document.getElementById("puzzle3").classList.remove("hidden");
    } else {
        result2.textContent = "Incorrect, réessayez.";
    }
}

function checkAnswer3() {
    const answer3 = document.getElementById("answer3").value.toLowerCase();
    const result3 = document.getElementById("result3");

    if (answer3 === "chasse au trésor") { // Indice à deviner
        result3.textContent = "Correct ! Énigme 3 résolue.";
        result3.classList.add("correct");
        score += 10; // Ajoute des points pour la bonne réponse
        document.getElementById("puzzle3").classList.add("hidden");
        document.getElementById("puzzle4").classList.remove("hidden");
    } else {
        result3.textContent = "Incorrect, réessayez.";
    }
}

function checkAnswer4() {
    const answer4 = document.getElementById("answer4").value.toLowerCase();
    const result4 = document.getElementById("result4");

    // Si les réponses de deux joueurs sont correctes
    if (answer4 === "gâteau") { // Mots à deviner
        result4.textContent = "Correct ! Énigme 4 résolue.";
        result4.classList.add("correct");
        score += 10; // Ajoute des points pour la bonne réponse
        document.getElementById("puzzle4").classList.add("hidden");
        document.getElementById("final").classList.remove("hidden");
        document.getElementById("finalScore").textContent = score; // Afficher le score final
    } else {
        result4.textContent = "Incorrect, réessayez.";
    }
}
