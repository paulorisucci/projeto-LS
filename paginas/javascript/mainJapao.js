import { bars, mainJapao } from './database.js'
import {createHeader, createBar, createMain, createFooter, header, bar, main, footer, japao, setValue} from './main.js'
import storage from './localStorage.js'


header.insertAdjacentHTML("afterbegin",createHeader(japao))
bar.insertAdjacentHTML("afterbegin", createBar(bars[2], japao))

setValue(japao)

for(let i in mainJapao){
    main.insertAdjacentHTML("afterbegin", createMain(mainJapao[i], i))
}

footer.insertAdjacentHTML("afterbegin",createFooter())

link.addEventListener("onclick", storage.load(japao))