import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-table';

import {
    isMultiColorActive, defaultColor, themeColorStorageKey, isDarkSwitchActive,
} from './constants/defaultValues';

const color = (isMultiColorActive || isDarkSwitchActive) && localStorage.getItem(themeColorStorageKey) ?
    localStorage.getItem(themeColorStorageKey) :
    defaultColor;
    
if(typeof window !== 'undefined')
{
    localStorage.setItem(themeColorStorageKey, color);

}

const render = () => {
    import(`./assets/css/sass/themes/gogo.${ color }.scss`).then(x => {
        require('./AppRenderer');
    });
};

export default render;
