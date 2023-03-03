var templateCard = document.querySelector("#templateCard");
var cards = document.querySelector(".container-cards");
var cardGameName = document.querySelector(".card-gameName");
var cardStars = document.querySelector(".card-stars");
var fragment = document.createDocumentFragment();
var cardImage = document.querySelector(".card-image");
var rate = document.querySelector("#rate")

// Plantilla de constructor

class Game {
    constructor(name, image, category, assessment, synopsis, characteristics, description, minimumRequirements, RecommendedRequirements) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.assessment = assessment;
        this.synopsis = synopsis;
        this.characteristics = characteristics;
        this.description = description;
        this.minimumRequirements = minimumRequirements;
        this.RecommendedRequirements = RecommendedRequirements;
    }
}

// Funciones de plantilla para minimos y maximos requisitos

function MinimumRequirements(so, procesador, memoria, graficos, directx, red, almacenamiento){
    this.so = so;
    this.procesador = procesador;
    this.memoria = memoria;
    this.graficos = graficos;
    this.directx = directx;
    this.red = red;
    this.almacenamiento = almacenamiento;
}

function RecommendedRequirements(so, procesador, memoria, graficos, directx, red, almacenamiento){
    this.so = so;
    this.procesador = procesador;
    this.memoria = memoria;
    this.graficos = graficos;
    this.directx = directx;
    this.red = red;
    this.almacenamiento = almacenamiento;
}

// variables objeto de requisitos minimos

var minimumRequirementsFifa = new MinimumRequirements("Windows 10 64-bits", "Intel Core i5 6600k or AMD Ryzen 5 1600", "8 GB de RAM", "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570", "Versión 12", "Conexión de banda ancha a Internet", "100 GB de espacio disponible")

var minimumRequirementsGOW = new MinimumRequirements("Windows 10 64-bits", " Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)", "8 GB de RAM", "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)", " Versión 11", "Conexión de banda ancha a Internet", "70 GB de espacio disponible")

var minimumRequirementsHogwarts = new MinimumRequirements("Windows 10 64-bits", " Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)", "16 GB de RAM", "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB", "Versión 12", "Conexión de banda ancha a Internet", "85 GB de espacio disponible")

var minimumRequirementsSpiderman = new MinimumRequirements("Windows 10 64-bits", " Intel Core i3-4160, 3.6 GHz or AMD equivalent", "8 GB de RAM", "NVIDIA GTX 950 or AMD Radeon RX 470", "Versión 12", "Conexión de banda ancha a Internet", "75 GB de espacio disponible")

// variables objeto de requisitos recomendados

var recommendedRequirementsFifa = new RecommendedRequirements("Windows 10 64-bits", "Intel Core i7 6700 or AMD Ryzen 7 2700X", "12 GB de RAM", " NVIDIA GeForce GTX 1660 or AMD Radeon RX 5600 XT", "Versión 12", "Conexión de banda ancha a Internet", "100 GB de espacio disponible")

var recommendedRequirementsGOW = new RecommendedRequirements("Windows 10 64-bits", "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)", "8 GB de RAM", "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)", "Versión 11", "Conexión de banda ancha a Internet", "70 GB de espacio disponible")

var recommendedRequirementsHogwarts = new RecommendedRequirements("Windows 10 64-bits", " Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)", "16 GB de RAM", "NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770", "Versión 12", "Conexión de banda ancha a Internet", "85 GB de espacio disponible")

var recommendedRequirementsSpiderman = new RecommendedRequirements("Windows 10 64-bits", "Intel Core i5-4670, 3.4 Ghz or AMD Ryzen5 1600, 3.2 Ghz", "16 GB de RAM", " NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB", "Versión 12", "Conexión de banda ancha a Internet", "75 GB de espacio disponible")


// Objetos de juego

var fifa = new Game("Fifa 23", new URL("http://127.0.0.1:5500/infinity-Games-main/images/games/img-08.jpg"), "sports", "5", "FIFA 23 te trae todo el realismo del Juego de Todos con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina, que estarán disponibles durante la temporada, equipos de clubes femeniles, el Cross-Play* y mucho más.",["JcJ en linea", "Un jugador", "JcJ en pantalla dividida", "Cooperativo en linea", "Logros de Infinity Games"],"FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA, y lanzada en todo el mundo el 30 de septiembre de 2022 para PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X. /S y Google Stadia. Sin embargo, los jugadores que reservaron la Ultimate Edition recibieron tres días de acceso anticipado y pudieron jugar el juego a partir del 27 de septiembre.", minimumRequirementsFifa, recommendedRequirementsFifa)

var GOW = new Game("God of War", new URL("http://127.0.0.1:5500/infinity-Games-main/images/games/img-18.jpg"), "action", "4", "Habiendo consumado su venganza contra los dioses el Olimpo años atrás, Kratos ahora vive como un hombre en el reino de los dioses y los monstruos nórdicos. En este hostil e inhóspito mundo, debe pelear por sobrevivir... y enseñarle a su hijo a hacer lo mismo.",["Un jugador", "Logros Infinity Games", "Compatible con mando"],"Hogwarts Legacy es un juego de rol de acción de 2023 desarrollado por Avalanche Software y publicado por Warner Bros. Games bajo su sello Portkey Games. El juego está ambientado en el universo Wizarding World, basado en las novelas de Harry Potter, y fue lanzado para PlayStation 5, Windows y Xbox Series X/S en 2023. Su lanzamiento está programado para PlayStation 4, Xbox One y Nintendo Switch más adelante en 2023.", minimumRequirementsGOW, recommendedRequirementsGOW)

var hogwarts = new Game("Hogwarts Legacy", new URL("http://127.0.0.1:5500/infinity-Games-main/images/games/img-18.jpg"), "adventure", "4.5", "Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",["Un jugador", "Logros Infinity Games", "Compatible con mando"],"God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE). Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento entre generaciones de la serie. Es la novena entrega de la saga de God of War, la novena cronológicamente y la secuela de God of War de 2018. Basado libremente en la mitología nórdica, el juego se desarrolla en la antigua Escandinavia y presenta al protagonista de la serie Kratos y su hijo adolescente Atreus. Concluyendo la era nórdica de la serie, el juego cubre el Ragnarök, el evento escatológico que es central en la mitología nórdica y se predijo que sucedería en el juego anterior después de que Kratos matara al dios Æsir Baldur.", minimumRequirementsHogwarts, recommendedRequirementsHogwarts)

var spiderman = new Game("Marvel Spider-Man", new URL("http://127.0.0.1:5500/infinity-Games-main/images/games/img-18.jpg"), "action", "5", "Marvel Spider-Man Remasterizado nos presenta una historia original llena de acción en la que veremos cómo las vidas de Peter Parker y Spider-Man chocan entre sí. Juega con un Peter Parker más experimentado que lucha contra organizaciones criminales y villanos emblemáticos en la Nueva York deMarvel",["Un jugador", "Logros Infinity Games", "Compatible con mando"],"Marvel's Spider-Man es un videojuego de acción y aventura basado en el popular superhéroe hómonimo de la editorial Marvel Comics.​ Fue desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment en exclusiva para la consola PlayStation ​ Se trata del primer videojuego licenciado desarrollado por Insomniac.​ Su lanzamiento internacional se produjo el 7 de septiembre de 2018.", minimumRequirementsSpiderman, recommendedRequirementsSpiderman)

// Funcion para cargar objeto de juego a template

const gamesArray = [GOW, fifa, hogwarts, spiderman]
const gamesIndex = gamesArray.findIndex((item) => item.name === Game.name)

function agregarJuego() {
    if (gamesIndex === -1) {
        gamesArray.push(Game);
    } else {
        gamesArray[gamesIndex].gamesIndex++;
    }

    mostrarJuego()

}

const mostrarJuego = () => {

    gamesArray.forEach((item) => {
        const clone = templateCard.content.cloneNode(true);
        clone.querySelector(".card-gameName").textContent = item.name;
        clone.querySelector(".card-image").src = item.image;
        clone.querySelector("#rate").textContent = item.assessment;
        fragment.appendChild(clone)
    })

    cards.appendChild(fragment)
}

mostrarJuego()

