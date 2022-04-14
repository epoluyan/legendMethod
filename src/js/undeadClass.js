import Character from './characterClass';

export default class Bowerman extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
  }
}
