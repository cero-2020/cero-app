import { getRandom, calculateHP } from "./hero-helper";

// let hero = {
//     name: '',
//     level: 0,
//     heroClass: 'warrior, thief, wizard',
//     strength: 0,
//     protection: 0,
//     agility: 0,
//     magic: 0
// }

function fightProcess(hero1, hero2, logger) {
    let isHeroProtect = false;
    let isHeroDodged = false;

    let dmg = hero1.strength + hero1.magic;

    if (hero2.protection === 0 || hero1.heroClass === 'wizard') {
        isHeroProtect = false;
    } else {
        isHeroProtect = getRandom(10 * hero2.level) + 1 <= hero2.protection
    }

    if (hero2.agility === 0) {
        isHeroDodged = false;
    } else {
        isHeroDodged = getRandom(10 * hero2.level) + 1 <= hero2.agility
    }

    if (true === isHeroProtect) {
        dmg = Math.floor(dmg / 2);
        logger.push(`"${hero1.name}"(${hero1.hp}/${hero1.hpBase}) attacked "${hero2.name}"(${hero2.hp}/${hero2.hpBase}) but "${hero2.name}" was able to defend himself and block some damage.`)
    } else if (true === isHeroDodged) {
        dmg = Math.floor(dmg / 3);
        logger.push(`"${hero1.name}"(${hero1.hp}/${hero1.hpBase}) attacked "${hero2.name}"(${hero2.hp}/${hero2.hpBase}) but "${hero2.name}" dodged the hit and escaped most of the damage.`)
    } else {
        logger.push(`"${hero1.name}"(${hero1.hp}/${hero1.hpBase}) attacked "${hero2.name}"(${hero2.hp}/${hero2.hpBase}) and deal ${dmg} units of damage.`)
    }
    hero2.hp -= dmg;
}

export function fight(hero1, hero2) {
    hero1.hp = calculateHP(hero1.level, hero1.heroClass);
    hero2.hp = calculateHP(hero2.level, hero2.heroClass);
    hero1.hpBase = calculateHP(hero1.level, hero1.heroClass);
    hero2.hpBase = calculateHP(hero2.level, hero2.heroClass);

    let isHero1Cick = false;
    let logger = [];

    while(hero1.hp > 0 && hero2.hp > 0) {
        if (false === isHero1Cick) {
            fightProcess(hero1, hero2, logger);
            isHero1Cick = true;
        } else {
            fightProcess(hero2, hero1, logger);
            isHero1Cick = false;
        }
        if (hero1.hp <= 0) {
            logger.push(`"${hero1.name}" loose!`)
        }
        if (hero2.hp <= 0) {
            logger.push(`"${hero2.name}" loose!`)
        }
    }

    let isHero1Win = hero1.hp > 0;

    return {
        isHero1Win: isHero1Win,
        logger: logger
    }
}
