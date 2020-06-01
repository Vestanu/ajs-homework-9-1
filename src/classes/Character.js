
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  set stoned(value) {
    this.stoneStatus = (value === true);
  }

  get stoned() {
    return this.stoneStatus;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    let attack = this.attackValue;
    if ((this.type === 'Daemon') || (this.type === 'Magician')) {
      attack = (this.attackValue * (1 - 0.1 * (this.distance - 1)));
      if (this.stoned) attack -= (Math.log2(this.distance) * 5 * this.attackValue) / 100;
    }
    return Math.round(attack);
  }
}

export default Character;
