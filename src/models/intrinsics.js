import runes from './runes';

const intrinsics = {
    restorative: {
        name: 'Restorative Armor',
        runes: [ runes.beast, runes.gluttony, runes.desire, runes.excess ],
    },
    heavy: {
        name: 'Heavy Armor',
        runes: [ runes.jubilation, runes.ambition, runes.pride, runes.wealth ],
    },
    mobile: {
        name: 'Mobile Armor',
        runes: [ runes.joy, runes.cunning, runes.war, runes.pleasure ],
    },
};

export default intrinsics;
