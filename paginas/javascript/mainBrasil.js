import {createHeader, createBar, createMain, createFooter, header, bar, main, footer, brasil, setValue, link, bars, mainBrasil} from './main.js'
import storage from './localStorage.js'

header.insertAdjacentHTML("afterbegin",createHeader(brasil))
bar.insertAdjacentHTML("afterbegin", createBar(bars[0], brasil))

setValue(brasil)

for(let i in mainBrasil){
    main.insertAdjacentHTML("afterbegin", createMain(mainBrasil[i], i))
}

footer.insertAdjacentHTML("afterbegin",createFooter())

link.addEventListener("onclick", storage.load(brasil));
