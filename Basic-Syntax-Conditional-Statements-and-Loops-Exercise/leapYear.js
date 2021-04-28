function leapYear(year) {
    let checkYear = Number(year);
    if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0)  {
        console.log(`yes`);
    }
    else {
        console.log(`no`);
    }
}
leapYear(1984);
leapYear(2003);
leapYear(2001);
leapYear(4);