const MIN_HEALTH = 0;
const MAX_HEALTH = 1000;

export default class Character {
  private _health: number;
  level: number;

  constructor() {
    this._health = MAX_HEALTH;
    this.level = 1;
  }

  get health(): number {
    return this._health;
  }

  set health(health: number) {
    if (health < MIN_HEALTH) {
      health = MIN_HEALTH;
    }

    if (health > MAX_HEALTH) {
      health = MAX_HEALTH;
    }

    this._health = health;
  }

  get alive(): boolean {
    return this.health > MIN_HEALTH;
  }

  equals(character: Character): boolean {
    return this === character;
  }

  increaseDamage(damage: number, percentage: number) {
    return damage + damage * (percentage / 100);
  }

  reduceDamage(damage: number, percentage: number) {
    return damage - damage * (percentage / 100);
  }

  attack(target: Character, damage: number) {
    if (this.equals(target)) {
      return;
    }

    if (target.level - this.level >= 5) {
      damage = this.reduceDamage(damage, 50);
    }

    if (this.level - target.level >= 5) {
      damage = this.increaseDamage(damage, 50);
    }

    target.receiveDamage(damage);
  }

  heal(heal: number) {
    this.receiveHeal(heal);
  }

  receiveDamage(damage: number) {
    this.health -= damage;
  }

  receiveHeal(heal: number) {
    if (!this.alive) {
      return;
    }

    this.health += heal;
  }
}
