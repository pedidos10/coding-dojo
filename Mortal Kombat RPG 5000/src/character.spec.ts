import Character from "./character";

describe("Character", () => {
  it("should be alive when created", () => {
    const character = new Character();

    expect(character.alive).toBeTruthy();
  });

  it("should have health equal to 1000 when created", () => {
    const character = new Character();

    expect(character.health).toBe(1000);
  });

  it("should have level 1 when created", () => {
    const character = new Character();

    expect(character.level).toBe(1);
  });

  it("should be able to damage other character", () => {
    const attacker = new Character();
    const target = new Character();

    attacker.attack(target, 100);

    expect(target.health).toBe(900);
  });

  it("should subtract target health when receiving damage", () => {
    const target = new Character();

    target.receiveDamage(100);

    expect(target.health).toBe(900);
  });

  it("should kill a character when received damage is greater or equal actual health", () => {
    const target = new Character();

    target.receiveDamage(1100);

    expect(target.health).toBe(0);
    expect(target.alive).toBeFalsy();
  });

  it("should increase target health when receiving heal", () => {
    const target = new Character();

    target.receiveDamage(500);

    target.receiveHeal(100);

    expect(target.health).toBe(600);
  });

  it("should not heal a dead character", () => {
    const target = new Character();

    target.receiveDamage(1100);
    target.receiveHeal(100);

    expect(target.alive).toBeFalsy();
    expect(target.health).toBe(0);
  });

  it("healing cannot raise health above 1000", () => {
    const target = new Character();

    target.receiveHeal(100);

    expect(target.health).toBe(1000);
  });

  it("a character can't attack himself", () => {
    const attacker = new Character();

    attacker.attack(attacker, 100);

    expect(attacker.health).toBe(1000);
  });

  it("a character can only heal himself", () => {
    const character = new Character();

    character.receiveDamage(100);
    character.heal(100);

    expect(character.health).toBe(1000);
  });

  it("if the target is 5 or more levels above the attacker, damage is reduced by 50%", () => {
    const target = new Character();
    const attacker = new Character();

    target.level = 6;
    attacker.attack(target, 100);

    expect(target.health).toBe(950);
  });

  it("if the target is 5 or more levels below the attacker, damage is increased by 50%", () => {
    const target = new Character();
    const attacker = new Character();

    attacker.level = 6;
    attacker.attack(target, 100);

    expect(target.health).toBe(850);
  });
});
