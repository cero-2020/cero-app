import wizard_3 from '../src/images/player_magic_3.svg';
import thief_3 from '../src/images/player_thief_3.svg';
import warrior_3 from '../src/images/player_warrior_3.svg';
import {getRandom} from "../../src/hero-logic/hero-helper";

export const HeroImage = (heroClass) => {
    let rand = getRandom(3);
    switch (heroClass) {
        case "wizard":
            switch (rand) {
                // case 0:
                //     return wizard_1;
                // case 1:
                //     return wizard_2;
                default:
                    return wizard_3;
            }
        case "thief":
            switch (rand) {
                // case 0:
                //     return thief_1;
                // case 1:
                //     return thief_2;
                default:
                    return thief_3;
            }
        default:
            switch (rand) {
                // case 0:
                //     return warrior_1;
                // case 1:
                //     return warrior_2;
                default:
                    return warrior_3;
            }
    }
}