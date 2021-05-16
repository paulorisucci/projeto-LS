const headers = [
    {
        name:"Brazil",
        id:0,
        Msrc :"../Brasil/img/Brasil_1.jpg",
        title:"Brazilian Destinations",
        description:`Brazil occupies a large area along the eastern coast of South America
        and includes much of the continent's interior.`,
        price:1700
    },
    {
        name:"Italy",
        id:1,
        Msrc:"../Italia/img/Vaticano2.png",
        title:"Italian Destinations",
        description: `Italy was the birthplace and heart of the Renaissance during the 1400s and 1500s.
        The Italian Renaissance marked the transition from the medieval period to the modern age as Europe recovered,
        economically and culturally, from the crises of the Late Middle Ages and entered the Early Modern Period.`,
        price:2000
    },
    {
        name:"Japan",
        id:2,
        Msrc:"../Japão/img/Japan_1.jpg",
        title:"Japanese Destinations",
        description: `Japan comprises 6,852 islands extending along the Pacific coast of Asia.
        It stretches over 3,000 km (1,900 mi) northeast–southwest from the Sea of Okhotsk to the East China Sea.`,
        price:3000
    }
]

const bars = [

    {
        id:"brasil",
        content1:"Rio de Janeiro",
        content2:"Salvador",
        content3:"Brasília"
    },
    {
        id:"italia",
        content1:"Positano",
        content2:"Venice",
        content3:"Florence"
    },
    {
      id: "italia",
      content1:"Hatsukaichi",
      content2:"Fujiyoshida",
      content3:"Shibuya"
    }

]

const mainBrasil = {
    "Barra da Tijuca":{
        id:"1",
        src:"img/Brasil_10.png",
        alt:"Rio",
        description:`Barra da Tijuca is a neighborhood or bairro in the West Zone of Rio de Janeiro, Brazil,
        located in the western portion of the city on the Atlantic Ocean. Barra is well known for its beaches,
        its many lakes and rivers, and its lifestyle.
        This neighbourhood represents 4.7% of the city population and 13% of the total area of Rio de Janeiro.`
    },
    "Brasilia":{
        id:"2",
        src:"img/Brasil_6.png",
        alt:"Farol",
        description:`Brasília is the federal capital of Brazil and seat of government of the Federal District.
        The city is located at the top of the Brazilian highlands in the country's center-western region.
        It was founded by President Juscelino Kubitschek on April 21, 1960, to serve as the new national capital.
        Brasília is estimated to be Brazil's third-most populous city.
         Among major Latin American cities, it has the highest GDP per capita`
    },
    "Salvador":{
        id:"3",
        src:"img/Brasil_2.png",
        alt:"Lagoa",
        description:`Salvador (English: Savior), also known as São Salvador da Bahia de Todos os Santos,
        is the capital of the Brazilian state of Bahia. With 2.9 million people (2017),
        it is the largest city proper in the Northeast Region and the 4th largest city proper
        in the country, after São Paulo, Rio de Janeiro and Brasília.`
    }
}

const mainJapao = {

    "Itsukushima Shrine":{
        id:"1",
        src:"img/Japan_4.jpg",
        alt:"Shrine",
        description:`Itsukushima Shrine is a Shinto shrine on the island of Itsukushima (popularly known as Miyajima),
        best known for its "floating" torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan.
        The shrine complex is listed as a UNESCO World Heritage Site, and the Japanese government
        has designated several buildings and possessions as National Treasures.`
    },
    "Famous Fuji":{
        id:"2",
        src: "img/Japan_2.png",
        alt: "Fuji",
        description: `Mount Fujiyoshida (About this soundlisten)), located on the island of Honshū,
        is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft).
        It is the second-highest volcano located on an island in Asia
        (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.
         Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708.`
    },
    "Shibuya crazy":{
        id:"3",
        src:"img/Japan_3.jpg",
        alt:"Shibuya",
        description: `Shibuya is a special ward in Tokyo, Japan. A major commercial and business centre,
        it houses the two busiest railway stations in the world, Shinjuku Station (southern half) and Shibuya Station.
        As of May 1, 2016, it has an estimated population of 221,801 and a population density of 14,679.09
        people per km² (38,018.7/sq mi). The total area is 15.11 km2 (5.83 sq mi).
        The name "Shibuya" is also used to refer to the shopping district which surrounds Shibuya Station.
        This area is known as one of the fashion centers of Japan, particularly for young people,
        and as a major nightlife area.`
    }

}

const mainItalia = {
    "Positano":{
        id:"1",
        src:"img/Positano.jpg",
        alt:"Positano",
        description:`Positano (Campanian: Pasitano) is a village and comune on the Amalfi Coast (Province of Salerno), in Campania,
        Italy, mainly in an enclave in the hills leading down to the coast. The first evidence of a settlement in
        Positano dates back to Prehistory, more precisely to the Upper Palaeolithic in which the
        "Grotto La Porta" was frequented by peoples of gatherers and hunters.`
    },
    "Florence":{
        id:"2",
        src:"img/Florence1.png",
        alt:"Florence",
        description:`Florence is a city in central Italy and the capital city of the Tuscany region.
        It is the most populated city in Tuscany, with 383,084 inhabitants in 2013, and over
        1,520,000 in its metropolitan area. Florence was a centre of medieval
        European trade and finance and one of the wealthiest cities of that era.`
    },
    "Venice":{
        id:"3",
        src:"img/veneza.jpg",
        alt:"Venice",
        description:`Venice is a city in northeastern Italy and the capital of the Veneto region.
        It is on a group of 118 small islands that are separated by canals and linked by over 400 bridges.
        The islands are in the shallow Venetian Lagoon, an enclosed bay lying between the mouths of the Po
        and the Piave rivers (more exactly between the Brenta and the Sile).
        In 2018, 260,897 people resided in the Comune di Venezia, of whom around 55,000
        live in the historical city of Venice (centro storico).`
    }
}

export {headers, bars, mainBrasil, mainItalia, mainJapao}