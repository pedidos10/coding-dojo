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

  attack(target: Character, damage: number) {
    target.receiveDamage(damage);
  }

  heal(target: Character, heal: number) {
    target.receiveHeal(heal);
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
