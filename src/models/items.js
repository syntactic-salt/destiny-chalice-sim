import runes from './runes';
import masterworks from './masterworks';
import intrinsics from './intrinsics';

const { arc, void: voyd, solar, range, handling, stability, reload } = masterworks;
const armorMasterworks = [arc, solar, voyd];
const weaponMasterworks = [reload, handling, range, stability];
const { heavy, mobile, restorative } = intrinsics;
const armorIntrinsics = [ heavy, mobile, restorative ];
const purpleRunes = [runes.joy, runes.beast, runes.jubilation];
const redRunes = [runes.cunning, runes.gluttony, runes.ambition];
const greenRunes = [runes.war, runes.desire, runes.pride];
const blueRunes = [runes.pleasure, runes.excess, runes.wealth];

const items = {
    tangledWebClass: {
        id: 1,
        name: 'Tangled Web Class Armor',
        runes: [ runes.joy, purpleRunes ],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    exodusDownClass: {
        id: 2,
        name: 'Exodus Down Class Armor',
        runes: [runes.joy, redRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    reverieDawnClass: {
        id: 3,
        name: 'Reverie Dawn Class Armor',
        runes: [runes.joy, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    opulentClass: {
        id: 4,
        name: 'Opulent Class Armor',
        runes: [runes.joy, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    calusMini: {
        id: 5,
        name: 'Calus MINI-Tool',
        runes: [runes.beast, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tracklessWaste: {
        id: 6,
        name: 'Trackless Waste',
        runes: [runes.beast, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    hardTruths: {
        id: 7,
        name: 'Hard Truths',
            runes: [runes.beast, greenRunes],
            masterworks: weaponMasterworks,
        intrinsics: [],
    },
    badReputation: {
        id: 8,
        name: 'Bad Reputation',
            runes: [runes.beast, blueRunes],
            masterworks: weaponMasterworks,
        intrinsics: [],
    },
    twilightOath: {
        id: 9,
        name: 'Twilight Oath',
            runes: [runes.jubilation, purpleRunes],
            masterworks: weaponMasterworks,
        intrinsics: [],
    },
    beloved: {
        id: 10,
        name: 'Beloved',
            runes: [runes.jubilation, redRunes],
            masterworks: weaponMasterworks,
        intrinsics: [],
    },
    fateCriesFoul: {
        id: 11,
        name: 'Fate Cries Foul',
        runes: [runes.jubilation, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    dreadfulVenture: {
        id: 12,
        name: 'Dreadful Venture',
        runes: [runes.jubilation, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebArms: {
        id: 13,
        name: 'Tangled Web Arms',
        runes: [runes.cunning, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownArms: {
        id: 14,
        name: 'Exodus Down Arms',
        runes: [runes.cunning, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnArms: {
        id: 15,
        name: 'Reverie Dawn Arms',
        runes: [runes.cunning, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentArms: {
        id: 16,
        name: 'Opulent Arms',
        runes: [runes.cunning, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    tangledWebBoots: {
        id: 17,
        name: 'Tangled Web Boots',
        runes: [runes.gluttony, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownBoots: {
        id: 18,
        name: 'Exodus Down Boots',
        runes: [runes.gluttony, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnBoots: {
        id: 19,
        name: 'Reverie Dawn Boots',
        runes: [runes.gluttony, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentBoots: {
        id: 20,
        name: 'Opulent Boots',
        runes: [runes.gluttony, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    badOmens: {
        id: 21,
        name: 'Bad Omens',
        runes: [runes.ambition, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    zenobiaD: {
        id: 22,
        name: 'Zenobia-D',
        runes: [runes.ambition, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    sleepless: {
        id: 23,
        name: 'Sleepless',
        runes: [runes.ambition, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    fixedOdds: {
        id: 24,
        name: 'Fixed Odds',
        runes: [runes.ambition, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebHelm: {
        id: 25,
        name: 'Tangled Web Helm',
        runes: [runes.war, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownHelm: {
        id: 26,
        name: 'Exodus Down Helm',
        runes: [runes.war, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnHelm: {
        id: 27,
        name: 'Reverie Dawn Helm',
        runes: [runes.war, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentHelm: {
        id: 28,
        name: 'Opulent Helm',
        runes: [runes.war, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    trust: {
        id: 29,
        name: 'Trust',
        runes: [runes.desire, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    austringer: {
        id: 30,
        name: 'Austringer',
        runes: [runes.desire, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    walkingVigil: {
        id: 31,
        name: 'Walking Vigil',
        runes: [runes.desire, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    pribinaD: {
        id: 32,
        name: 'Pribina-D',
        runes: [runes.desire, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    drang: {
        id: 33,
        name: 'Drang (Baroque)',
        runes: [runes.pride, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    theLastDance: {
        id: 34,
        name: 'The Last Dance',
        runes: [runes.pride, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    anonymousAutumn: {
        id: 35,
        name: 'Anonymous Autumn',
        runes: [runes.pride, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    smugglersWord: {
        id: 36,
        name: 'Smuggler\'s Word',
        runes: [runes.pride, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebChest: {
        id: 37,
        name: 'Tangled Web Chest',
        runes: [runes.pleasure, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownChest: {
        id: 38,
        name: 'Exodus Down Chest',
        runes: [runes.pleasure, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnChest: {
        id: 39,
        name: 'Reverie Dawn Chest',
        runes: [runes.pleasure, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentChest: {
        id: 40,
        name: 'Opulent Chest',
        runes: [runes.pleasure, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    proeliumFR3: {
        id: 41,
        name: 'Proelium FR3',
        runes: [runes.excess, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    mainIngrdient: {
        id: 42,
        name: 'Main Ingredient',
        runes: [runes.excess, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    theEpicurean: {
        id: 43,
        name: 'The Epicurean',
        runes: [runes.excess, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    erentilFR4: {
        id: 44,
        name: 'Erentil FR4',
        runes: [runes.excess, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    badlander: {
        id: 45,
        name: 'Badlander',
        runes: [runes.wealth, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    parcelOfStardust: {
        id: 46,
        name: 'Parcel of Stardust',
        runes: [runes.wealth, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    imperialDecree: {
        id: 47,
        name: 'Imperial Decree',
        runes: [runes.wealth, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    dustRockBlues: {
        id: 48,
        name: 'Dust Rock Blues',
        runes: [runes.wealth, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
};

export default items;
