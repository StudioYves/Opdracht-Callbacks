const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(callback, 3000);
}

const klaarMetHuiswerk = () => {
    console.log("Kijk Paps, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);
