import { getRandom } from "./hero-helper";
import { createSoul } from "./create-soul";

const name1 = ['Bomb', 'Chronic', 'Epic', 'Catastrophic', 'Amusing', 'Madden', 'Melancholic', 'Tattered', 'Crying', 'Compulsive', 'Thirsty', 'Exhausted', 'Throbbing', 'Obstinate', 'Disapproving'];
const name2 = ['devil', 'hairline', 'kid', 'daddy', 'director', 'amanita', 'hump', 'mandarin', 'horse-breeder', 'smoke', 'bike', 'sock', 'nose', 'rooster', 'drink'];

function createBase(level, st_base, pr_base, ag_base, ma_base, st_max, pr_max, ag_max, ma_max) {
    st_base = st_base * level;
    pr_base = pr_base * level;
    ag_base = ag_base * level;
    ma_base = ma_base * level;

    st_max = st_max * level;
    pr_max = pr_max * level;
    ag_max = ag_max * level;
    ma_max = ma_max * level;

    let st = st_base + getRandom(st_max - st_base === 0 ? 0 : st_max - st_base + 1);
    let pr = pr_base + getRandom(pr_max - pr_base === 0 ? 0 : pr_max - pr_base + 1);
    let ag = ag_base + getRandom(ag_max - ag_base === 0 ? 0 : ag_max - ag_base + 1);
    let ma = ma_base + getRandom(ma_max - ma_base === 0 ? 0 : ma_max - ma_base + 1);

    let name = name1[getRandom(name1.length)] + ' ' + name2[getRandom(name2.length)];

    return {
        strength: st,
        protection: pr,
        agility: ag,
        magic: ma,
        level: level,
        name: name
    }
}

export function createBaseWarrior(level) {
    let obj = createBase(level, 6, 6, 2, 0, 10, 10, 6, 0)
    obj.heroClass = 'warrior';
    return obj;
}

export function createBaseThief(level) {
    let obj =  createBase(level, 6, 2, 6, 0, 10, 6, 10, 0)
    obj.heroClass = 'thief';
    return obj;
}

export function createBaseWizard(level) {
    let obj =  createBase(level, 0, 2, 2, 6, 0, 4, 6, 10)
    obj.heroClass = 'wizard';
    return obj;
}

function heroParamsToNum(hero) {
    hero.level = Number(hero.level);
    hero.strength = Number(hero.strength);
    hero.protection = Number(hero.protection);
    hero.agility = Number(hero.agility);
    hero.magic = Number(hero.magic);
    return hero;
}
function recalculateBasePoint(hero1, hero2) {
    let st_base = Math.ceil((hero1.strength + hero2.strength) / (2 * hero1.level));
    st_base = getRandom(101) > 50 ? st_base + 1 : st_base;

    let pr_base = Math.ceil((hero1.protection + hero2.protection) / (2 * hero1.level));
    pr_base = getRandom(101) > 50 ? pr_base + 1 : pr_base;

    let ag_base = Math.ceil((hero1.agility + hero2.agility) / (2 * hero1.level));
    ag_base = getRandom(101) > 50 ? ag_base + 1 : ag_base;

    let ma_base = Math.ceil((hero1.magic + hero2.magic) / (2 * hero1.level));
    ma_base = getRandom(101) > 50 ? ma_base + 1 : ma_base;

    return {
        st_base: st_base,
        pr_base: pr_base,
        ag_base: ag_base,
        ma_base: ma_base
    }
}

// let hero = {
//     name: '',
//     level: 0,
//     heroClass: 'warrior, thief, wizard',
//     strength: 0,
//     protection: 0,
//     agility: 0,
//     magic: 0
// }
export function heroEvolution(hero1, hero2) {
    hero1 = heroParamsToNum(hero1);
    hero2 = heroParamsToNum(hero2);

    if (hero1.level !== hero2.level) {
        return null;
    }

    let newLevel = Number(hero1.level) + 1;

    let obj = {}
    let newPoint = recalculateBasePoint(hero1, hero2);
    // console.log(newPoint);
    if (newPoint.ag_base >= newPoint.ma_base && newPoint.ag_base > newPoint.pr_base && newPoint.ma_base < 6) {
        obj = createBase(newLevel, newPoint.st_base, newPoint.pr_base, newPoint.ag_base, newPoint.ma_base, 10, 6, 10, 0)

        obj.strength = obj.strength > 10 * newLevel ? 10 * newLevel : obj.strength;
        obj.protection = obj.protection > 6 * newLevel ? 6 * newLevel : obj.protection;
        obj.agility = obj.agility > 10 * newLevel ? 10 * newLevel : obj.agility;
        obj.magic = 0;
        obj.heroClass = 'thief';
    } else if ((newPoint.ma_base >= newPoint.ag_base && newPoint.ma_base > newPoint.pr_base) || newPoint.ma_base >= 6) {
        obj = createBase(newLevel, newPoint.st_base, newPoint.pr_base, newPoint.ag_base, newPoint.ma_base, 0, 4, 6, 10)

        obj.strength = 0;
        obj.protection = obj.protection > 4 * newLevel ? 4 * newLevel : obj.protection;
        obj.agility = obj.agility > 6 * newLevel ? 6 * newLevel : obj.agility;
        obj.magic = obj.magic > 10 * newLevel ? 10 * newLevel : obj.magic;
        obj.heroClass = 'wizard';
    } else {
        obj = createBase(newLevel, newPoint.st_base, newPoint.pr_base, newPoint.ag_base, newPoint.ma_base, 10, 10, 6, 0)
        obj.strength = obj.strength > 10 * newLevel ? 10 * newLevel : obj.strength;
        obj.protection = obj.protection > 10 * newLevel ? 10 * newLevel : obj.protection;
        obj.agility = obj.agility > 6 * newLevel ? 6 * newLevel : obj.agility;
        obj.magic = 0;
        obj.heroClass = 'warrior';
    }
    obj.soul = createSoul(obj.name, obj.level, obj.heroClass, obj.strength, obj.protection, obj.agility, obj.magic);
    return obj;
}

export function createRandomHero(level) {
    let obj = {};
    let rand = getRandom(2);

    switch (rand) {
        case 0:
            obj = createBaseThief(level);
            break;
        case 1:
            obj = createBaseWizard(level);
            break;
        default:
            obj = createBaseWarrior(level);
    }
    obj.soul = createSoul(obj.name, obj.level, obj.heroClass, obj.strength, obj.protection, obj.agility, obj.magic);
    return obj;
}