function loadingBar(percent) {
    let bar = percent / 10;
    if (percent == 100) {
        console.log(`100% Complete!`);
        console.log('['+'%'.repeat(10)+']');
    }
    else {
        console.log(percent+'% ['+'%'.repeat(bar)+'.'.repeat(10 - bar)+']');
        console.log(`Still loading...`)
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);