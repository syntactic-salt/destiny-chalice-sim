import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RuneToItemCalc from '../rune-to-item-calc/rune-to-item-calc';
import ItemToRuneCalc from '../item-to-rune-calc/item-to-rune-calc';
import styles from './calc-group.scss';

export default function CalcGroup() {
    return (
        <Tabs className={styles.calcGroup}
              selectedTabClassName={styles.calcGroupTabSelected}
              selectedTabPanelClassName={styles.calcGroupTabPanelSelected}
              forceRenderTabPanel={true}>
            <div className={styles.calcGroupTabPanelGroup}>
                <TabPanel className={styles.calcGroupTabPanel}>
                    <ItemToRuneCalc  className={styles.calcGroupCalc} />
                </TabPanel>
                <TabPanel className={styles.calcGroupTabPanel}>
                    <RuneToItemCalc className={styles.calcGroupCalc} />
                </TabPanel>
            </div>
            <TabList className={styles.calcGroupTabs}>
                <Tab className={styles.calcGroupTab}>Choose Item</Tab>
                <Tab className={styles.calcGroupTab}>Choose Runes</Tab>
            </TabList>
        </Tabs>
    );
}
