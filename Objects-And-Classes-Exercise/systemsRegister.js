function systemsRegister(arr) {
  //Създаваме празен обект
  let systemRegister = {};
  //Обхождаме входните данни
  for (let item of arr) {
    //деструктурираме стринга
    let [system, component, subcomponent] = item.split(" | ");
    //проверява ме дали има такова пропърти и ако не го създаваме
    if (!systemRegister.hasOwnProperty(system)) {
      systemRegister[system] = {};
    }
    //проверява ме дали има такова пропърти(компонент) и ако не го създаваме
    if (!systemRegister[system].hasOwnProperty(component)) {
      systemRegister[system][component] = [];
    }
    //добавяме подкомпонент
    systemRegister[system][component].push(subcomponent);
  }
  //сортираме като вземем първо ключовете а след това ключовете за вътрешния масив от компоненти за да определим дължината/броя
  // на всеки един от тях ако са равни ги сравняваме по втори критерии алфабетик
  let sortedSystem = Object.keys(systemRegister).sort((a, b) => Object.keys(systemRegister[b]).length - Object.keys(systemRegister[a]).length || a.localeCompare(b));
  //итерираме през сортирания масив за да изведем главната категория/регистер
  //вземаме ключовете на всеки компонент за да направим сортиране по брой на подкомпоненти
  sortedSystem.forEach((sys) => {
    console.log(sys);
    let sortedSubKeys = Object.keys(systemRegister[sys]).sort((a, b) => Object.keys(systemRegister[sys][b]).length - Object.keys(systemRegister[sys][a]).length);
    //интерираме през всеки компонент за да вземем всички прилежащи към него подкомпоненти
    sortedSubKeys.forEach((subComp) => {
      console.log(`|||${subComp}`);
      systemRegister[sys][subComp].forEach((x) => {
        console.log(`||||||${x}`);
      });
    });
  });
  // let sortedKeys = Object.keys(systemRegister).sort((a, b) => Object.keys(systemRegister[b]).length - Object.keys(systemRegister[a]).length || a.localeCompare(b));
  //   sortedKeys.forEach((key) => {
  //       console.log(key);
	// 	let sortedSubKeys = Object.keys(systemRegister[key]).sort((a, b) => Object.keys(systemRegister[key][b]).length - Object.keys(systemRegister[key][a]).length);
	// 	sortedSubKeys.forEach((subKey) => {
	// 		console.log(`|||${subKey}`);
	// 		systemRegister[key][subKey].forEach((subComponent) => {
	// 			console.log(`||||||${subComponent}`);				
	// 		});			
	// 	});
  //   });
}
systemsRegister([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
