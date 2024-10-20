document.getElementById("submit").addEventListener("click", function () {
    const basePrice = 100;

    const education = document.getElementById("education").value;
    let educoef = 1;

    switch (education) {
        case "bachelor":
            educoef = 1.5;
            break;
        case "college":
            educoef = 1.2;
            break;
        case "high_school":
            educoef = 1.05;
            break;
        case "middle_school":
            educoef = 0.9;
            break;
    }

    const networth = document.getElementById("networth").value;
    let netcoef = 1;

    switch (networth) {
        case "upper_class":
            netcoef = 2;
            break;
        case "middle_class":
            netcoef = 1.5;
            break;
        case "lower_class":
            netcoef  = 1.2;
            break;
    }

    const caste = document.getElementById("caste").value;
    let castecost = 0;

    switch (caste) {
        case "brahmin":
            castecost = 100;
            break;
        case "kshatriya":
            castecost = 50;
            break;
        case "vaishya":
            castecost = 20;
            break;
        case "shudra":
            castecost = 10;
            break;
        case "varna":
            castecost = -50;
            break;
    }

    let skillcost = 0;
        if (document.getElementById("music").checked) skillcost += 10;
        if (document.getElementById("cook").checked) skillcost += 20;
        if (document.getElementById("easygoing").checked) skillcost += 15;
        if (document.getElementById("sing").checked) skillcost += 10;

    const age = document.getElementsByName("age");
    let agecoef = 1;

    for (const input of age) {
        if (input.checked) {
            agecoef = parseFloat(input.value);
            break;
        }
    }

    let finalPrice = basePrice;

    finalPrice *= educoef;
    finalPrice *= netcoef;
    finalPrice += castecost;
    finalPrice += skillcost;
    finalPrice *= agecoef;

    let reputationcoef = 0;
    if (document.getElementById("gossparents").checked) reputationcoef += finalPrice * 0.15;
    if (document.getElementById("gosscharacter").checked) reputationcoef += finalPrice * 0.1;
    if (document.getElementById("gossgeneral").checked) reputationcoef += 20;

    finalPrice -= reputationcoef;

    document.getElementById("result").innerText = `Price: $${finalPrice.toFixed(2)}`;
});
