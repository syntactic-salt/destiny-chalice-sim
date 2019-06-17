import runes from './runes';

const intrinsics = {
    restorative: {
        id: 1,
        name: 'Restorative Armor',
        runes: [ runes.beast, runes.gluttony, runes.desire, runes.excess ],
    },
    heavy: {
        id: 2,
        name: 'Heavy Armor',
        runes: [ runes.jubilation, runes.ambition, runes.pride, runes.wealth ],
    },
    mobile: {
        id: 3,
        name: 'Mobile Armor',
        runes: [ runes.joy, runes.cunning, runes.war, runes.pleasure ],
    },
};

export default intrinsics;
