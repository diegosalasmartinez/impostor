export interface WordCategory {
  category: string;
  words: string[];
}

export const wordCategories: WordCategory[] = [
  {
    category: "Animales",
    words: ["Perro", "Gato", "Elefante", "Leon", "Tigre", "Oso", "Lobo", "Zorro", "Conejo", "Caballo", "Vaca", "Cerdo", "Oveja", "Cabra", "Gallina", "Pato", "Aguila", "Buho", "Loro", "Pinguino"]
  },
  {
    category: "Comida",
    words: ["Pizza", "Hamburguesa", "Sushi", "Pasta", "Tacos", "Ensalada", "Bistec", "Sopa", "Sandwich", "Arroz", "Pan", "Queso", "Pollo", "Pescado", "Huevos", "Panqueques", "Helado", "Chocolate", "Manzana", "Platano"]
  },
  {
    category: "Deportes",
    words: ["Futbol", "Basquetbol", "Tenis", "Golf", "Natacion", "Correr", "Ciclismo", "Boxeo", "Lucha", "Beisbol", "Hockey", "Voleibol", "Rugby", "Cricket", "Esqui", "Surf", "Patineta", "Gimnasia", "Arqueria", "Esgrima"]
  },
  {
    category: "Peliculas",
    words: ["Titanic", "Avatar", "El Origen", "Matrix", "Gladiador", "Tiburon", "Rocky", "Aliens", "Terminator", "Jurassic Park", "Star Wars", "El Senor de los Anillos", "Harry Potter", "Frozen", "Shrek", "Buscando a Nemo", "El Padrino", "Pulp Fiction", "Forrest Gump", "El Club de la Pelea"]
  },
  {
    category: "Paises",
    words: ["Estados Unidos", "Canada", "Mexico", "Brasil", "Argentina", "Reino Unido", "Francia", "Alemania", "Italia", "Espana", "Japon", "China", "India", "Australia", "Egipto", "Sudafrica", "Rusia", "Suecia", "Grecia", "Tailandia"]
  },
  {
    category: "Profesiones",
    words: ["Doctor", "Maestro", "Ingeniero", "Chef", "Piloto", "Enfermera", "Abogado", "Contador", "Arquitecto", "Bombero", "Policia", "Cientifico", "Artista", "Musico", "Escritor", "Fotografo", "Dentista", "Veterinario", "Mecanico", "Electricista"]
  },
  {
    category: "Instrumentos Musicales",
    words: ["Piano", "Guitarra", "Violin", "Bateria", "Flauta", "Saxofon", "Trompeta", "Chelo", "Arpa", "Clarinete", "Trombon", "Acordeon", "Banjo", "Ukulele", "Armonica", "Xilofono", "Bajo", "Oboe", "Gaita", "Organo"]
  },
  {
    category: "Vehiculos",
    words: ["Carro", "Autobus", "Tren", "Avion", "Helicoptero", "Barco", "Motocicleta", "Bicicleta", "Camion", "Camioneta", "Submarino", "Cohete", "Tranvia", "Taxi", "Ambulancia", "Carro de Bomberos", "Scooter", "Yate", "Canoa", "Globo Aerostatico"]
  },
  {
    category: "Cosas del Hogar",
    words: ["Silla", "Mesa", "Sofa", "Cama", "Lampara", "Espejo", "Reloj", "Television", "Refrigerador", "Microondas", "Horno", "Tostadora", "Licuadora", "Aspiradora", "Lavadora", "Librero", "Cortinas", "Alfombra", "Almohada", "Cobija"]
  },
  {
    category: "Ropa",
    words: ["Camisa", "Pantalones", "Vestido", "Falda", "Chaqueta", "Abrigo", "Sueter", "Jeans", "Shorts", "Calcetines", "Zapatos", "Botas", "Sandalias", "Sombrero", "Bufanda", "Guantes", "Corbata", "Cinturon", "Reloj", "Lentes de Sol"]
  },
  {
    category: "Materias Escolares",
    words: ["Matematicas", "Ciencias", "Historia", "Geografia", "Espanol", "Arte", "Musica", "Educacion Fisica", "Biologia", "Quimica", "Fisica", "Literatura", "Filosofia", "Psicologia", "Economia", "Computacion", "Idiomas", "Teatro", "Fotografia", "Astronomia"]
  },
  {
    category: "Clima",
    words: ["Soleado", "Lluvioso", "Nublado", "Ventoso", "Nevado", "Tormentoso", "Neblinoso", "Humedo", "Seco", "Caliente", "Frio", "Helado", "Trueno", "Relampago", "Granizo", "Tornado", "Huracan", "Arcoiris", "Escarcha", "Ventisca"]
  },
  {
    category: "Partes del Cuerpo",
    words: ["Cabeza", "Mano", "Pie", "Brazo", "Pierna", "Ojo", "Oreja", "Nariz", "Boca", "Cuello", "Hombro", "Codo", "Rodilla", "Dedo", "Dedo del Pie", "Espalda", "Pecho", "Estomago", "Corazon", "Cerebro"]
  },
  {
    category: "Frutas",
    words: ["Manzana", "Platano", "Naranja", "Fresa", "Uva", "Sandia", "Mango", "Pina", "Durazno", "Pera", "Cereza", "Limon", "Lima", "Coco", "Kiwi", "Papaya", "Mora Azul", "Frambuesa", "Aguacate", "Granada"]
  },
  {
    category: "Verduras",
    words: ["Zanahoria", "Brocoli", "Espinaca", "Tomate", "Papa", "Cebolla", "Ajo", "Pimiento", "Pepino", "Lechuga", "Maiz", "Chicharos", "Frijoles", "Apio", "Coliflor", "Berenjena", "Calabacin", "Champiñon", "Esparragos", "Col"]
  },
  {
    category: "Colores",
    words: ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Rosa", "Cafe", "Negro", "Blanco", "Gris", "Dorado", "Plateado", "Turquesa", "Guinda", "Azul Marino", "Verde Azulado", "Coral", "Magenta", "Beige"]
  },
  {
    category: "Bebidas",
    words: ["Agua", "Cafe", "Te", "Jugo", "Refresco", "Leche", "Cerveza", "Vino", "Coctel", "Licuado", "Limonada", "Chocolate Caliente", "Malteada", "Bebida Energetica", "Te Helado", "Espresso", "Capuchino", "Mojito", "Margarita", "Champana"]
  },
  {
    category: "Festividades",
    words: ["Navidad", "Halloween", "Pascua", "Dia de Gracias", "Ano Nuevo", "San Valentin", "Dia de la Independencia", "Dia de las Madres", "Dia del Padre", "Dia del Trabajo", "Dia de Muertos", "San Patricio", "Januca", "Diwali", "Ano Nuevo Chino", "Carnaval", "Cinco de Mayo", "Dia del Nino", "Cumpleanos", "Aniversario"]
  },
  {
    category: "Emociones",
    words: ["Feliz", "Triste", "Enojado", "Asustado", "Sorprendido", "Emocionado", "Nervioso", "Confundido", "Orgulloso", "Celoso", "Agradecido", "Esperanzado", "Ansioso", "Aburrido", "Solitario", "Avergonzado", "Frustrado", "Contento", "Asombrado", "Decepcionado"]
  },
  {
    category: "Superheroes",
    words: ["Hombre Arana", "Batman", "Superman", "Mujer Maravilla", "Iron Man", "Capitan America", "Thor", "Hulk", "Pantera Negra", "Aquaman", "Flash", "Linterna Verde", "Wolverine", "Deadpool", "Viuda Negra", "Ojo de Halcon", "Ant-Man", "Doctor Strange", "Bruja Escarlata", "Vision"]
  },
  {
    category: "Videojuegos",
    words: ["Minecraft", "Fortnite", "Call of Duty", "GTA", "FIFA", "Mario", "Zelda", "Pokemon", "Tetris", "Pac-Man", "Sonic", "Halo", "God of War", "Resident Evil", "Final Fantasy", "Mortal Kombat", "Street Fighter", "Overwatch", "League of Legends", "Among Us"]
  },
  {
    category: "Lugares Famosos",
    words: ["Torre Eiffel", "Estatua de la Libertad", "Big Ben", "Coliseo", "Gran Muralla China", "Taj Mahal", "Piramides", "Machu Picchu", "Cristo Redentor", "Opera de Sydney", "Stonehenge", "Torre de Pisa", "Monte Rushmore", "Puente Golden Gate", "Acropolis", "Burj Khalifa", "Empire State", "Cataratas del Niagara", "Gran Canon", "Gran Barrera de Coral"]
  },
  {
    category: "Criaturas Miticas",
    words: ["Dragon", "Unicornio", "Fenix", "Sirena", "Hombre Lobo", "Vampiro", "Zombie", "Gigante", "Elfo", "Enano", "Trol", "Hada", "Grifo", "Centauro", "Minotauro", "Pegaso", "Kraken", "Ciclope", "Esfinge", "Yeti"]
  },
  {
    category: "Herramientas",
    words: ["Martillo", "Destornillador", "Llave Inglesa", "Pinzas", "Sierra", "Taladro", "Cinta Metrica", "Nivel", "Cincel", "Lima", "Lija", "Prensa", "Tornillo de Banco", "Escalera", "Carretilla", "Pala", "Rastrillo", "Hacha", "Palanca", "Tijeras"]
  },
  {
    category: "Postres",
    words: ["Pastel", "Pay", "Galleta", "Brownie", "Cupcake", "Dona", "Helado", "Cheesecake", "Pudin", "Mousse", "Tiramisu", "Macaron", "Eclair", "Creme Brulee", "Churros", "Waffle", "Crepa", "Tarta", "Flan", "Gelato"]
  },
  {
    category: "Objetos de Oficina",
    words: ["Computadora", "Teclado", "Raton", "Monitor", "Impresora", "Escritorio", "Silla de Oficina", "Lapiz", "Pluma", "Grapadora", "Clips", "Post-it", "Carpeta", "Archivero", "Telefono", "Calculadora", "Regla", "Borrador", "Sacapuntas", "Cinta Adhesiva"]
  },
  {
    category: "Generos Musicales",
    words: ["Rock", "Pop", "Jazz", "Clasica", "Hip Hop", "Reggaeton", "Salsa", "Cumbia", "Banda", "Ranchera", "Electronica", "Metal", "Country", "Blues", "R&B", "Funk", "Reggae", "Bachata", "Merengue", "Corridos"]
  },
  {
    category: "Lugares de la Ciudad",
    words: ["Hospital", "Escuela", "Banco", "Supermercado", "Restaurante", "Parque", "Cine", "Teatro", "Museo", "Biblioteca", "Gimnasio", "Estacion de Tren", "Aeropuerto", "Hotel", "Gasolinera", "Farmacia", "Panaderia", "Carniceria", "Iglesia", "Plaza"]
  },
  {
    category: "Electrodomesticos",
    words: ["Refrigerador", "Lavadora", "Secadora", "Lavavajillas", "Microondas", "Horno", "Estufa", "Cafetera", "Licuadora", "Tostadora", "Plancha", "Aspiradora", "Ventilador", "Aire Acondicionado", "Calentador", "Exprimidor", "Batidora", "Freidora de Aire", "Robot de Cocina", "Purificador de Agua"]
  },
  {
    category: "Juguetes",
    words: ["Muneca", "Carro de Juguete", "Peluche", "Lego", "Rompecabezas", "Pelota", "Patineta", "Bicicleta", "Videojuego", "Trompo", "Yoyo", "Canicas", "Avion de Juguete", "Tren de Juguete", "Robot", "Figura de Accion", "Casa de Munecas", "Plastilina", "Crayones", "Juego de Mesa"]
  }
];

export function getRandomCategory(): WordCategory {
  const randomIndex = Math.floor(Math.random() * wordCategories.length);
  return wordCategories[randomIndex];
}

export function getRandomWord(category: WordCategory): string {
  const randomIndex = Math.floor(Math.random() * category.words.length);
  return category.words[randomIndex];
}
