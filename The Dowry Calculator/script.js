document.getElementById("submit").addEventListener("click", function () {
    const basePrice = 100;

    const education = document.getElementById("education").value;
    let educationCoefficient = 1;

    switch (education) {
        case "bachelor":
            educationCoefficient = 1.5;
            break;
        case "college":
            educationCoefficient = 1.2;
            break;
        case "high_school":
            educationCoefficient = 1.05;
            break;
        case "middle_school":
            educationCoefficient = 0.9;
            break;
    }

    const networth = document.getElementById("networth").value;
    let networthCoefficient = 1;

    switch (networth) {
        case "upper_class":
            networthCoefficient = 2;
            break;
        case "middle_class":
            networthCoefficient = 1.5;
            break;
        case "lower_class":
            networthCoefficient = 1.2;
            break;
    }

    const caste = document.getElementById("caste").value;
    let castePrice = 0;

    switch (caste) {
        case "brahmin":
            castePrice = 100;
            break;
        case "kshatriya":
            castePrice = 50;
            break;
        case "vaishya":
            castePrice = 20;
            break;
        case "shudra":
            castePrice = 10;
            break;
        case "varna":
            castePrice = -50;
            break;
    }

    let skillsPrice = 0;
        if (document.getElementById("music").checked) skillsPrice += 10;
        if (document.getElementById("cook").checked) skillsPrice += 20;
        if (document.getElementById("easygoing").checked) skillsPrice += 15;
        if (document.getElementById("sing").checked) skillsPrice += 10;

    const ageInputs = document.getElementsByName("age");
    let ageCoefficient = 1;

    for (const input of ageInputs) {
        if (input.checked) {
            ageCoefficient = parseFloat(input.value);
            break;
        }
    }

    let finalPrice = basePrice;

    finalPrice *= educationCoefficient;
    finalPrice *= networthCoefficient;
    finalPrice += castePrice;
    finalPrice += skillsPrice;
    finalPrice *= ageCoefficient;

    let reputationModifier = 0;
    if (document.getElementById("gossparents").checked) reputationModifier += finalPrice * 0.15;
    if (document.getElementById("gosscharacter").checked) reputationModifier += finalPrice * 0.1;
    if (document.getElementById("gossgeneral").checked) reputationModifier += 20;

    finalPrice -= reputationModifier;

    document.getElementById("result").innerText = `Price: $${finalPrice.toFixed(2)}`;
});
