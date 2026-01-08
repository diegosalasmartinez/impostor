export interface WordCategory {
    category: string;
    words: string[];
}


export const wordCategories: WordCategory[] = [
    {
        category: "Objetos cotidianos",
        words: [
            "Celular", "Llaves", "Mochila", "Sillón", "Reloj", "Zapatillas", "Botella", "Auriculares", "Cuaderno", "Libro",
            "Laptop", "Tablet", "Televisor", "Control remoto", "Cargador", "Cartera", "Billetera", "Lentes", "Paraguas", "Toalla",
            "Cepillo", "Peine", "Almohada", "Manta", "Lámpara", "Ventilador", "Espejo", "Mesa", "Silla", "Cama",
            "Basurero", "Escoba", "Trapeador", "Caja", "Bolso", "Agenda", "Lápiz", "Lapicero", "Regla", "Calculadora",
            "Termo", "Mochila escolar", "Ropa", "Chaqueta", "Gorra", "Sombrero", "Zapatos", "Sandalias", "Maleta"
        ]
    },
    {
        category: "Lugares",
        words: [
            "Parque", "Supermercado", "Cine", "Oficina", "Playa", "Hospital", "Escuela", "Restaurante",
            "Biblioteca", "Gimnasio", "Banco", "Aeropuerto", "Terminal", "Estadio", "Teatro", "Museo", "Iglesia", "Mercado",
            "Farmacia", "Panadería", "Hotel", "Hostal", "Piscina", "Plaza", "Calle", "Avenida", "Puente", "Montaña",
            "Bosque", "Río", "Lago", "Desierto", "Isla", "Puerto", "Centro comercial", "Universidad", "Laboratorio",
            "Consultorio", "Comisaría", "Estación de policía", "Estación de bomberos", "Zoológico", "Acuario",
            "Parque de diversiones", "Discoteca", "Bar", "Cafetería", "Oficina pública"
        ]
    },
    {
        category: "Profesiones y roles",
        words: [
            "Doctor", "Policía", "Chef", "Bombero", "Maestro", "Astronauta", "Pintor", "Escritor",
            "Ingeniero", "Arquitecto", "Abogado", "Enfermero", "Dentista", "Veterinario", "Mecánico", "Electricista",
            "Carpintero", "Panadero", "Pastelero", "Cajero", "Vendedor", "Gerente", "Administrador", "Contador",
            "Periodista", "Reportero", "Fotógrafo", "Camarógrafo", "Actor", "Actriz", "Cantante", "Músico",
            "Director", "Productor", "Editor", "Diseñador", "Programador", "Desarrollador", "Analista", "Tester",
            "Guardia", "Seguridad", "Conductor", "Chofer", "Piloto", "Capitán", "Marinero", "Soldado"
        ]
    },
    {
        category: "Comida y bebidas",
        words: [
            "Pizza", "Sushi", "Ensalada", "Café", "Helado", "Agua", "Fruta", "Chocolate",
            "Hamburguesa", "Papas fritas", "Hot dog", "Sandwich", "Tacos", "Burritos", "Empanada", "Ceviche",
            "Arroz", "Fideos", "Lasaña", "Sopa", "Caldo", "Pollo frito", "Carne asada", "Pescado",
            "Torta", "Pastel", "Flan", "Gelatina", "Galletas", "Brownies", "Cupcake", "Donas",
            "Yogur", "Leche", "Jugo", "Refresco", "Gaseosa", "Té", "Cerveza", "Vino",
            "Batido", "Smoothie", "Pan", "Pan integral", "Pan dulce", "Croissant", "Queso", "Mantequilla"
        ]
    },
    {
        category: "Animales",
        words: [
            "Perro", "Gato", "León", "Elefante", "Pájaro", "Pez", "Serpiente",
            "Tigre", "Oso", "Lobo", "Zorro", "Mono", "Gorila", "Chimpancé", "Jirafa", "Cebra",
            "Rinoceronte", "Hipopótamo", "Camello", "Caballo", "Burro", "Vaca", "Toro", "Cerdo",
            "Oveja", "Cabra", "Gallina", "Gallo", "Pato", "Águila", "Búho", "Loro",
            "Delfín", "Ballena", "Tiburón", "Pulpo", "Medusa", "Cangrejo", "Langosta", "Tortuga",
            "Cocodrilo", "Lagarto", "Iguana", "Rana", "Sapo", "Mariposa", "Abeja", "Hormiga"
        ]
    },
    {
        category: "Acciones",
        words: [
            "Correr", "Saltar", "Hablar", "Comer", "Dormir", "Leer", "Escribir", "Cantar",
            "Bailar", "Caminar", "Nadar", "Conducir", "Viajar", "Escuchar", "Mirar", "Observar",
            "Pensar", "Buscar", "Encontrar", "Perder", "Comprar", "Vender", "Pagar", "Cobrar",
            "Abrir", "Cerrar", "Entrar", "Salir", "Subir", "Bajar", "Empujar", "Jalar",
            "Construir", "Romper", "Arreglar", "Limpiar", "Cocinar", "Servir", "Cortar", "Mezclar",
            "Lavar", "Secar", "Planchar", "Doblar", "Ordenar", "Desordenar"
        ]
    },
    {
        category: "Sentimientos y emociones",
        words: [
            "Alegría", "Tristeza", "Miedo", "Sorpresa", "Amor", "Enojo",
            "Felicidad", "Nervios", "Vergüenza", "Orgullo", "Celos", "Culpa",
            "Ansiedad", "Calma", "Confianza", "Esperanza", "Frustración", "Aburrimiento",
            "Ternura", "Satisfacción", "Soledad", "Euforia", "Pánico", "Ilusión"
        ]
    },
    {
        category: "Videojuegos",
        words: [
            "Minecraft", "Fortnite", "GTA", "FIFA", "Call of Duty", "Among Us", "Zelda", "Mario Bros",
            "Pokemon", "League of Legends", "Valorant", "Counter Strike", "Dota", "Roblox", "Clash Royale",
            "Clash of Clans", "Free Fire", "PUBG", "The Sims", "Need for Speed", "God of War",
            "Red Dead Redemption", "Assassins Creed", "Resident Evil", "Silent Hill", "Metal Gear",
            "Mortal Kombat", "Street Fighter", "Tekken", "Final Fantasy", "Skyrim", "Fall Guys",
            "Overwatch", "Apex Legends", "Rocket League", "Plants vs Zombies", "Candy Crush",
            "Angry Birds", "Subway Surfers", "Temple Run", "Cyberpunk", "Elden Ring", "Dark Souls"
        ]
    },
    {
        category: "Películas",
        words: [
            "Titanic", "Avatar", "Matrix", "Jurassic Park", "Harry Potter", "El Padrino", "Toy Story", "Star Wars",
            "Gladiador", "Rocky", "Inception", "Interstellar", "Batman", "Spiderman", "Avengers", "Iron Man",
            "Thor", "Capitán América", "Joker", "Deadpool", "Shrek", "Madagascar", "Kung Fu Panda",
            "Frozen", "Coco", "Up", "Wall E", "Cars", "Buscando a Nemo", "Ratatouille",
            "Piratas del Caribe", "El Hobbit", "El Señor de los Anillos", "Transformers", "Terminator",
            "Alien", "Depredador", "Rambo", "Volver al Futuro", "Indiana Jones", "Matrix Reloaded"
        ]
    },
    {
        category: "Series",
        words: [
            "Breaking Bad", "Game of Thrones", "Stranger Things", "La Casa de Papel", "Friends", "The Simpsons",
            "The Walking Dead", "Naruto", "Dragon Ball", "One Piece", "Attack on Titan", "Death Note",
            "The Office", "How I Met Your Mother", "Modern Family", "The Big Bang Theory",
            "Vikings", "Peaky Blinders", "Dark", "Black Mirror", "Better Call Saul", "Dexter",
            "Lost", "Prison Break", "House", "Grey's Anatomy", "Suits", "Sherlock", "Wednesday",
            "The Boys", "Arcane", "Chernobyl", "Money Heist Korea", "Loki", "WandaVision"
        ]
    },
    {
        category: "Celebridades y actores",
        words: [
            "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Tom Cruise", "Johnny Depp",
            "Will Smith", "Robert Downey Jr", "Dwayne Johnson", "Scarlett Johansson",
            "Chris Evans", "Chris Hemsworth", "Emma Watson", "Daniel Radcliffe",
            "Jennifer Lawrence", "Keanu Reeves", "Morgan Freeman", "Matt Damon",
            "Natalie Portman", "Gal Gadot", "Ryan Reynolds", "Hugh Jackman",
            "Zendaya", "Timothee Chalamet", "Margot Robbie", "Tom Holland",
            "Beyonce", "Taylor Swift", "Shakira", "Bad Bunny", "Rihanna"
        ]
    },
    {
        category: "Países",
        words: [
            "Perú", "México", "Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "Bolivia",
            "Estados Unidos", "Canadá", "España", "Francia", "Italia", "Alemania", "Portugal",
            "Inglaterra", "Irlanda", "Escocia", "Japón", "China", "Corea del Sur", "India",
            "Australia", "Nueva Zelanda", "Rusia", "Ucrania", "Egipto", "Marruecos", "Sudáfrica",
            "Nigeria", "Kenya", "Turquía", "Grecia", "Suecia", "Noruega", "Finlandia", "Dinamarca",
            "Holanda", "Bélgica", "Suiza", "Austria", "Polonia", "República Checa", "Hungría"
        ]
    },
    {
        category: "Marcas y empresas",
        words: [
            "Apple", "Google", "Microsoft", "Amazon", "Meta", "Facebook", "Instagram", "WhatsApp",
            "Nike", "Adidas", "Puma", "Reebok", "Coca Cola", "Pepsi", "McDonalds", "Burger King",
            "KFC", "Subway", "Starbucks", "Nestle", "Samsung", "Sony", "LG", "Huawei",
            "Xiaomi", "Intel", "AMD", "Nvidia", "PlayStation", "Xbox", "Nintendo",
            "Netflix", "Disney", "HBO", "Spotify", "Uber", "Airbnb", "Tesla", "Toyota",
            "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi"
        ]
    },
    {
        category: "Historia",
        words: [
            "Dinosaurios", "Egipto antiguo", "Imperio romano", "Imperio griego", "Edad media",
            "Renacimiento", "Revolución francesa", "Revolución industrial",
            "Primera guerra mundial", "Segunda guerra mundial", "Guerra fría",
            "Descubrimiento de América", "Colonización", "Independencia",
            "Imperio inca", "Civilización maya", "Civilización azteca",
            "Piratas", "Vikingos", "Caballeros", "Castillos", "Faraones",
            "Gladiadores", "Samurais", "Conquistadores", "Exploradores",
            "Reyes", "Reinas", "Emperadores", "Presidentes", "Dictaduras",
            "Democracia", "Monarquía", "Feudalismo", "Esclavitud", "Abolición",
            "Imperios", "Batallas", "Tratados", "Revoluciones"
        ]
    }
];

export function getCategoryNames(): string[] {
    return wordCategories.map(c => c.category);
}

export function getRandomCategory(selectedCategories?: string[]): WordCategory {
    let availableCategories = wordCategories;

    if (selectedCategories && selectedCategories.length > 0) {
        availableCategories = wordCategories.filter(c =>
            selectedCategories.includes(c.category)
        );
    }

    if (availableCategories.length === 0) {
        availableCategories = wordCategories;
    }

    const randomIndex = Math.floor(Math.random() * availableCategories.length);
    return availableCategories[randomIndex];
}

export function getRandomWord(category: WordCategory): string {
    const randomIndex = Math.floor(Math.random() * category.words.length);
    return category.words[randomIndex];
}
