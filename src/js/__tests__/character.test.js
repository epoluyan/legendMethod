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
