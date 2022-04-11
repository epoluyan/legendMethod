const charactersTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

const characters = {
  Bowerman: { attack: 25, defense: 25 },
  Swordsman: { attack: 40, defense: 10 },
  Magician: { attack: 10, defense: 40 },
  Daemon: { attack: 10, defense: 40 },
  Undead: { attack: 25, defense: 25 },
  Zombie: { attack: 40, defense: 10 },
};

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defense = null;

    if (this.name.length < 2 || this.name.length > 10) {
      return new Error('Name character must be > 2 and < 10 symbol');
    }

    if (!charactersTypes.includes(this.type)) {
      return new Error('Incorrect type character');
    }

    switch (this.type) {
      case 'Bowerman':
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Bowerman.attack;
        this.defense = characters.Bowerman.defense;
        break;
      case 'Swordsman':
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Swordsman.attack;
        this.defense = characters.Swordsman.defense;
        break;
      case 'Magician':
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Magician.attack;
        this.defense = characters.Magician.defense;
        break;
      case 'Daemon':
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Daemon.attack;
        this.defense = characters.Daemon.defense;
        break;
      case 'Undead':
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Undead.attack;
        this.defense = characters.Undead.defense;
        break;
      default:
        // eslint-disable-next-line no-underscore-dangle
        this.attack = characters.Zombie.attack;
        this.defense = characters.Zombie.defense;
    }
  }

  levelUp() {
    if (this.level === 0) {
      return;
    }
    this.level += 1;
    this.attack = (this.attack / 100) * 20;
    this.defense = (this.defense / 100) * 20;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    }
  }
}
