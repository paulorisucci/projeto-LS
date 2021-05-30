import {header, bar, main, footer, financeiro, link, setValue, insertHeader, insertBar, insertMain, insertFooter} from './main.js'
import storage from './localStorage.js'

const brasil = insertHeader(header, 0).then((brasil) =>setValue(brasil));
insertBar(bar, 0);
insertMain(main, 'mainBrasil');
insertFooter(footer);

link.addEventListener("onclick", storage.load(brasil));
