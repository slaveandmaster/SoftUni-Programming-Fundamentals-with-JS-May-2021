function destinationMapper(input) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
    let destinations = [];
    let points = 0;

    match = pattern.exec(input);
    while (match != null) {
        destinations.push(match[2]);
        points += Number(match[2].length);
        match = pattern.exec(input);

    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");