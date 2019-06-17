import runes from './runes';

const masterworks = {
    arc: {
        id: 1,
        name: 'Arc Damage Resistance',
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    solar: {
        id: 2,
        name: 'Solar Damage Resistance',
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
        name: 'Void Damage Resistance',
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    range: {
        id: 4,
        name: 'Range',
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    handling: {
        id: 5,
        name: 'Handling',
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    stability: {
        id: 6,
        name: 'Stability',
        runes: [ runes.pleasure, runes.excess, runes.wealth ],
    },
    reload: {
        id: 7,
        name: 'Reload',
        runes: [ runes.cunning, runes.gluttony, runes.ambition ],
    },
};

export default masterworks;
