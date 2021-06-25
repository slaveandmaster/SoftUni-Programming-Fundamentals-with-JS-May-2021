function cats(params) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (let index = 0; index < params.length; index++) {
    let [name, age] = params[index].split(" ");
    cats.push(new Cat(name, age));
  }
 for (let cat of cats) {
     cat.meow();
 }
}
cats(["Mellow 2", "Tom 5"]);
