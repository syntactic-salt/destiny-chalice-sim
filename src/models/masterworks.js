import runes from './runes';

const masterworks = {
    arc: {
        name: 'Arc Damage Resistance',
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    solar: {
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
        name: 'Void Damage Resistance',
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    range: {
        name: 'Range',
        runes: [ runes.war, runes.desire, runes.pride ],
    },
    handling: {
        name: 'Handling',
        runes: [ runes.joy, runes.beast, runes.jubilation ],
    },
    stability: {
        name: 'Stability',
        runes: [ runes.pleasure, runes.excess, runes.wealth ],
    },
    reload: {
        name: 'Reload',
        runes: [ runes.cunning, runes.gluttony, runes.ambition ],
    },
};

export default masterworks;
