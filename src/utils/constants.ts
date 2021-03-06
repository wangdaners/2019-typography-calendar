export const IS_DEBUG = (() => {
    return location.port === '8100';
    // return true;
})();
if (IS_DEBUG) {
    console.log('THIS IS IN DEBUG MODE.');
}

export const VERSION = '1.2.1';
export const LAST_AVAILABLE_DATE = '2019-02-14';

export const DPR = 2;
export const IMAGE_DPR = 3;

export const DESIGN_WIDTH = 375;

export const STORE_KEY = {
    TORN_DATE: 'tornDate',
    HISTORY_PAGE: 'historyPage',
    FIRST_OPEN: 'firstOpen',
    FIRST_TEAR: 'firstTear',
    FIRST_HISTORY_SHAKE: 'firstHistoryShake'
};

export const NOTIIFICATION_ID_DAILY = 1;
