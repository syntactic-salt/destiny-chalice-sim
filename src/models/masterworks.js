import runes from './runes';

const masterworks = {
    arc: {
        id: 1,
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    solar: {
        id: 2,
        runes: [
            runes.cunning,
            runes.gluttony,
            runes.ambition,
            runes.pleasure,
            runes.excess,
            runes.wealth,
        ]
    },
    void: {
        id: 3,
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    range: {
        id: 4,
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    handling: {
        id: 5,
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    stability: {
        id: 6,
        runes: [ runes.pleasure, runes.excess, runes.wealth ],
    },
    reload: {
        id: 7,
        runes: [ runes.cunning, runes.gluttony, runes.ambition ],
    },
};

export default masterworks;
