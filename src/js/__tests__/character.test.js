import Character from '../characterClass';


test('should get character Bowman', () => {
  const bowman = new Character('name', 'Bowerman');
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

test('should get character Daemon', () => {
  const zombie = new Character('name', 'Zombie');
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

test('should get error for variable if name < 2', () => {
  const magician = new Character('o', 'Magician');

  expect(magician.message).toEqual('Name character must be > 2 and < 10 symbol');
});

test('should get error for variable if name > 10', () => {
  const magician = new Character('123456789101', 'Magician');

  expect(magician.message).toEqual('Name character must be > 2 and < 10 symbol');
});

test('should get error for type character', () => {
  const magician = new Character('Name', 'Magician1');

  expect(magician.message).toEqual('Incorrect type character');
});
