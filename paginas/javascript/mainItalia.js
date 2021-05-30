import {header, bar, main, footer, financeiro, link, setValue, insertHeader, insertBar, insertMain, insertFooter} from './main.js'
import storage from './localStorage.js'

const italia = insertHeader(header, 1).then((italia) =>setValue(italia));
insertBar(bar, 1);
insertMain(main, 'mainItalia');
insertFooter(footer);

link.addEventListener("onclick", storage.load(italia));
