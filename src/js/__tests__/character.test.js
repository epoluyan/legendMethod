import Bowerman from '../bowermanClass';
import Magician from '../magicianClass';
import Zombie from '../zombieClass';


test('should get character Bowman', () => {
  const bowman = new Bowerman('name', 'Bowerman');
  // const bowman = new Character('name', 'Bowerman');
  const result = {
    name: 'name',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };

  expect(bowman).toEqual(result);
});

test('should get character Zombie', () => {
  const zombie = new Zombie('name', 'Zombie');
  const result = {
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };

  expect(zombie).toEqual(result);
});

test.skip('should get error for variable if name < 2', () => {
  const magician = new Magician('o', 'Magician');

  expect(magician.message).toThrow('Name character must be > 2 and < 10 symbol');
  expect(magician).toThrow();
});

test.skip('should get error for variable if name > 10', () => {
  const magician = new Magician('123456789101', 'Magician');

  expect(magician.message).toThrow('Name character must be > 2 and < 10 symbol');
  expect(magician).toThrow();
});

test.skip('should get error for type character', () => {
  const magician = new Magician('Name', 'Magician1');

  expect(magician.message).toThrow('Name character must be > 2 and < 10 symbol');
  expect(magician).toThrow();
});

test('should check method levelUp', () => {
  const magician = new Magician('name', 'Magician');
  magician.levelUp();
  const result = {
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 2,
    defense: 8,
  };

  expect(magician).toEqual(result);
});

test('should check method levelUp if level = 0', () => {
  const magician = new Magician('name', 'Magician');
  magician.level = 0;
  magician.levelUp();
  const result = {
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 0,
    attack: 10,
    defense: 40,
  };

  expect(magician).toEqual(result);
});

test('should check method damage', () => {
  const magician = new Magician('name', 'Magician');
  magician.damage(10);
  const result = {
    name: 'name',
    type: 'Magician',
    health: 94,
    level: 1,
    attack: 10,
    defense: 40,
  };

  expect(magician).toEqual(result);
});

test('should check method damage if health < 0', () => {
  const magician = new Magician('name', 'Magician');
  magician.health = -1;
  magician.damage(30);
  const result = {
    name: 'name',
    type: 'Magician',
    health: -1,
    level: 1,
    attack: 10,
    defense: 40,
  };

  expect(magician).toEqual(result);
});
