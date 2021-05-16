import { bars, mainItalia } from './database.js'
import {createHeader, createBar, createMain, createFooter, header, bar, main, footer, italia, setValue} from './main.js'
import storage from './localStorage.js'

header.insertAdjacentHTML("afterbegin",createHeader(italia))
bar.insertAdjacentHTML("afterbegin", createBar(bars[1], italia))

setValue(italia)
for(let i in mainItalia){
    main.insertAdjacentHTML("afterbegin", createMain(mainItalia[i], i))
}

footer.insertAdjacentHTML("afterbegin",createFooter())

link.addEventListener("onclick", storage.load(italia))