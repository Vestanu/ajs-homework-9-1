import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';
import Magician from '../classes/Magician';

test('Маг наносит урон с ближнего расстояния без дурмана', () => {
  const magician = new Magician('Max');
  magician.distance = 1;
  expect(magician.attack).toBe(10);
});

test('Маг наносит урон с ближнего расстояния c дурманом', () => {
  const magician = new Magician('Max');
  magician.distance = 1;
  magician.stoned = true;
  expect(magician.attack).toBe(10);
});

test('Маг наносит урон со среднего расстояния без дурмана', () => {
  const magician = new Magician('Max');
  magician.distance = 3;
  expect(magician.attack).toBe(8);
});

test('Маг наносит урон со среднего расстояния c дурманом', () => {
  const magician = new Magician('Max');
  magician.distance = 3;
  magician.stoned = true;
  expect(magician.attack).toBe(7);
});

test('Маг наносит урон с большого расстояния без дурмана', () => {
  const magician = new Magician('Max');
  magician.distance = 7;
  expect(magician.attack).toBe(4);
});

test('Маг наносит урон с большого расстояния c дурманом', () => {
  const magician = new Magician('Max');
  magician.distance = 7;
  magician.stoned = true;
  expect(magician.attack).toBe(3);
});

test('Демон наносит урон с ближнего расстояния без дурмана', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 1;
  expect(daemon.attack).toBe(10);
});

test('Демон наносит урон с ближнего расстояния с дурманом', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 1;
  daemon.stoned = true;
  expect(daemon.attack).toBe(10);
});

test('Демон наносит урон со среднего расстояния без дурмана', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 4;
  expect(daemon.attack).toBe(7);
});

test('Демон наносит урон со среднего расстояния с дурманом', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 4;
  daemon.stoned = true;
  expect(daemon.attack).toBe(6);
});

test('Демон наносит урон с дальнего расстояния без дурмана', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 8;
  expect(daemon.attack).toBe(3);
});

test('Демон наносит урон с дальнего расстояния с дурманом', () => {
  const daemon = new Daemon('Max');
  daemon.distance = 8;
  daemon.stoned = true;
  expect(daemon.attack).toBe(1);
});

test('Зомби наносит урон с ближнего расстояния', () => {
  const zombie = new Zombie('Max');
  zombie.distance = 1;
  expect(zombie.attack).toBe(40);
});

test('Зомби наносит урон со среднего расстояния', () => {
  const zombie = new Zombie('Max');
  zombie.distance = 4;
  expect(zombie.attack).toBe(40);
});

test('Зомби наносит урон с дальнего расстояния', () => {
  const zombie = new Zombie('Max');
  zombie.distance = 9;
  expect(zombie.attack).toBe(40);
});
