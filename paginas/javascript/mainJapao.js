import {header, bar, main, footer, financeiro, link, setValue, insertHeader, insertBar, insertMain, insertFooter} from './main.js'
import storage from './localStorage.js'

const japao = insertHeader(header, 2).then((japao) =>setValue(japao));
insertBar(bar, 2);
insertMain(main, 'mainJapao');
insertFooter(footer);

link.addEventListener("onclick", storage.load(japao));
