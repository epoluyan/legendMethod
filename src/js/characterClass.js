export default class Character {
  constructor(name, type) {
    const charactersTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    this.name = name;
    this.type = type;

    if (this.name.length < 2 || this.name.length > 10 || typeof (name) !== 'string') {
      throw new Error('Name character must be > 2 and < 10 symbol');
    } else {
      this.name = name;
    }


    if (!charactersTypes.includes(type)) {
      throw new Error('Incorrect type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
