import runes from './runes';
import masterworks from './masterworks';
import intrinsics from './intrinsics';

const { arc, void: voyd, solar, range, handling, stability, reload } = masterworks;
const armorMasterworks = [ arc, solar, voyd ];
const weaponMasterworks = [ reload, handling, range, stability ];
const { heavy, mobile, restorative } = intrinsics;
const armorIntrinsics = [ heavy, mobile, restorative ];

const items = {
    tangledWebClass: {
       name: 'Tangled Web Class Armor',
       runes: [
           runes.joy,
           [ runes.joy, runes.beast, runes.jubilation ],
        ],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownClass: {
        name: 'Exodus Down Class Armor',
        runes: [
            runes.joy,
            [ runes.cunning, runes.gluttony, runes.ambition ],
        ],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnClass: {
        name: 'Reverie Dawn Class Armor',
        runes: [
            runes.joy,
            [ runes.war, runes.desire, runes.pride ],
        ],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentClass: {
        name: 'Opulent Class Armor',
        runes: [
            runes.joy,
            [ runes.pleasure, runes.excess, runes.wealth ],
        ],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
};

export default items;
