const itemPossibilityGenerator = (itemParameters) => {
    let items = Object.values(itemParameters);
    let tempItems = [];
    const itemMap = new Map();

    items.forEach(({ intrinsics, name, masterworks, runes }) => {
        let item = { name, masterwork: 'Random' };

        if (intrinsics) {
            item.intrinsic = 'Random';
        }

        itemMap.set([ runes[0] ], item);
        runes[1].forEach((rune) => {
            item = { name };

            if (intrinsics) {
                intrinsics.forEach(({ runes: intrinsicRunes, name: intrinsicName }) => {
                    if (intrinsicRunes.includes(rune)) {
                        item.intrinsic = intrinsicName;
                    }
                });
            }

            itemMap.set([ runes[0], rune ], { ...item, masterwork: 'Random' });

            item.masterworks = masterworks;
            item.runes = [ runes[0], rune ];

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

                itemMap.set([ ...runes, rune ], item);
            });
        });
    });

    return itemMap;
};

export default itemPossibilityGenerator;
