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
        runes: [ runes.joy, purpleRunes ],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    exodusDownClass: {
        id: 2,
        runes: [runes.joy, redRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    reverieDawnClass: {
        id: 3,
        runes: [runes.joy, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    opulentClass: {
        id: 4,
        runes: [runes.joy, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: [],
    },
    calusMini: {
        id: 5,
        runes: [runes.beast, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tracklessWaste: {
        id: 6,
        runes: [runes.beast, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    hardTruths: {
        id: 7,
        runes: [runes.beast, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    badReputation: {
        id: 8,
        runes: [runes.beast, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    twilightOath: {
        id: 9,
        runes: [runes.jubilation, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    beloved: {
        id: 10,
        runes: [runes.jubilation, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    fateCriesFoul: {
        id: 11,
        runes: [runes.jubilation, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    dreadfulVenture: {
        id: 12,
        runes: [runes.jubilation, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebArms: {
        id: 13,
        runes: [runes.cunning, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownArms: {
        id: 14,
        runes: [runes.cunning, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnArms: {
        id: 15,
        runes: [runes.cunning, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentArms: {
        id: 16,
        runes: [runes.cunning, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    tangledWebBoots: {
        id: 17,
        runes: [runes.gluttony, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownBoots: {
        id: 18,
        runes: [runes.gluttony, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnBoots: {
        id: 19,
        runes: [runes.gluttony, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentBoots: {
        id: 20,
        runes: [runes.gluttony, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    badOmens: {
        id: 21,
        runes: [runes.ambition, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    zenobiaD: {
        id: 22,
        runes: [runes.ambition, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    sleepless: {
        id: 23,
        runes: [runes.ambition, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    fixedOdds: {
        id: 24,
        runes: [runes.ambition, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebHelm: {
        id: 25,
        runes: [runes.war, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownHelm: {
        id: 26,
        runes: [runes.war, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnHelm: {
        id: 27,
        runes: [runes.war, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentHelm: {
        id: 28,
        runes: [runes.war, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    trust: {
        id: 29,
        runes: [runes.desire, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    austringer: {
        id: 30,
        runes: [runes.desire, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    walkingVigil: {
        id: 31,
        runes: [runes.desire, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    pribinaD: {
        id: 32,
        runes: [runes.desire, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    drang: {
        id: 33,
        runes: [runes.pride, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    theLastDance: {
        id: 34,
        runes: [runes.pride, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    anonymousAutumn: {
        id: 35,
        runes: [runes.pride, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    smugglersWord: {
        id: 36,
        runes: [runes.pride, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    tangledWebChest: {
        id: 37,
        runes: [runes.pleasure, purpleRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    exodusDownChest: {
        id: 38,
        runes: [runes.pleasure, redRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    reverieDawnChest: {
        id: 39,
        runes: [runes.pleasure, greenRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    opulentChest: {
        id: 40,
        runes: [runes.pleasure, blueRunes],
        masterworks: armorMasterworks,
        intrinsics: armorIntrinsics,
    },
    proeliumFR3: {
        id: 41,
        runes: [runes.excess, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    mainIngrdient: {
        id: 42,
        runes: [runes.excess, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    theEpicurean: {
        id: 43,
        runes: [runes.excess, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    erentilFR4: {
        id: 44,
        runes: [runes.excess, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    badlander: {
        id: 45,
        runes: [runes.wealth, purpleRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    parcelOfStardust: {
        id: 46,
        runes: [runes.wealth, redRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    imperialDecree: {
        id: 47,
        runes: [runes.wealth, greenRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
    dustRockBlues: {
        id: 48,
        runes: [runes.wealth, blueRunes],
        masterworks: weaponMasterworks,
        intrinsics: [],
    },
};

export default items;
