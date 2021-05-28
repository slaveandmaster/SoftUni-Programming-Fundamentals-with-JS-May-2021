function gramophone(firstStr,secondStr,thirdStr) {
    let band = firstStr;
    let album = secondStr;
    let songName = thirdStr;
    //The plate makes a full rotation every 2.5 seconds.
    //song duraiton
    let duration = (album.length * band.length) * songName.length / 2
    let rotations = Math.ceil(duration / 2.5);
    //output
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); //The plate was rotated 167 times.
