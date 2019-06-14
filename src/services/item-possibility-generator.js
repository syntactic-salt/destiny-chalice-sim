const itemPossibilityGenerator = (itemParameters) => {
    let items = Object.values(itemParameters);
    let tempItems = [];
    const possibilities = {};

    items.forEach(({ intrinsics, name, masterworks, runes }) => {
        let item = { name, masterwork: 'Random' };

        if (intrinsics) {
            item.intrinsic = 'Random';
        }

        let runeKey = [ runes[0].id ].toString();
        possibilities[runeKey] = [ ...possibilities[runeKey] || [], item ];
        runes[1].forEach((rune) => {
            item = { name };

            if (intrinsics) {
                intrinsics.forEach(({ runes: intrinsicRunes, name: intrinsicName }) => {
                    if (intrinsicRunes.includes(rune)) {
                        item.intrinsic = intrinsicName;
                    }
                });
            }

            runeKey = [runes[0].id, rune.id].toString();
            possibilities[runeKey] = [...possibilities[runeKey] || [], { ...item, masterwork: 'Random' }];

            item.masterworks = masterworks;
            item.runes = [runes[0], rune];

            tempItems.push(item);
        });
    });

    tempItems.forEach(({ intrinsic, name, masterworks, runes }) => {
        masterworks.forEach(({ name: masterworkName, runes: masterworkRunes }) => {
            masterworkRunes.forEach((rune) => {
                const item = {
                    name,
                    masterwork: masterworkName
                };

                if (intrinsic) {
                    item.intrinsic = intrinsic;
                }

                possibilities[[runes[0].id, runes[1].id, rune.id].toString()] = [item];
            });
        });
    });

    return possibilities;
};

export default itemPossibilityGenerator;
