function addressBook(input) {
    let addresses = {};
    for (let line of input) {
        let [ name, address ] = line.split(":");
        addresses[name] = address;
    }
    let sorted = Object.entries(addresses).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name , addrss] of sorted) {
        console.log(`${name} -> ${addrss}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)