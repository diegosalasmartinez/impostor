# Impostor

Un juego de palabras para grupos donde debes encontrar al impostor entre tus amigos.

## Que es Impostor?

Impostor es un juego de deduccion social diseñado para jugarse en persona con un grupo de amigos (3-10 jugadores). Es perfecto para fiestas, reuniones familiares o cualquier momento donde quieras un juego rapido y divertido que no requiera materiales fisicos, solo un dispositivo con navegador.

El concepto es simple: todos los jugadores reciben la misma palabra secreta, excepto uno - **el impostor** - quien solo conoce la categoria pero no la palabra exacta. A traves de rondas de discusion donde cada jugador dice palabras relacionadas, el grupo debe descubrir quien es el impostor, mientras el impostor intenta pasar desapercibido.

## Por que existe este juego?

Este proyecto nacio de la necesidad de tener un juego de grupo accesible que:

- **No requiere materiales**: Solo necesitas un telefono o tablet
- **Es facil de explicar**: Las reglas se aprenden en 1 minuto
- **Funciona offline**: Una vez cargada la pagina, no necesita internet
- **Es inclusivo**: Cualquier edad puede jugar, las palabras son simples
- **Crea momentos divertidos**: Las acusaciones y defensas generan risas

## Como jugar

### Preparacion

1. Abre la pagina en un dispositivo
2. Agrega los nombres de todos los jugadores (minimo 3, maximo 10)
3. Presiona "Iniciar Juego"

### Fase de Palabras

1. El dispositivo se pasa de jugador en jugador
2. Cada jugador presiona "Ver mi palabra" cuando solo el puede ver la pantalla
3. Los jugadores normales ven la **categoria** y la **palabra secreta**
4. El impostor solo ve la **categoria** (no la palabra)
5. Cada jugador confirma que vio su palabra y pasa al siguiente

### Fase de Discusion

1. Por turnos, cada jugador dice **una palabra relacionada** con la palabra secreta
2. El objetivo de los jugadores normales: dar pistas que demuestren que conocen la palabra, sin ser tan obvios que el impostor la adivine
3. El objetivo del impostor: escuchar las pistas y decir algo que suene relacionado sin delatarse

**Ejemplo:**
- Categoria: Animales
- Palabra: Perro
- Jugador 1: "Mascota" (buena pista)
- Jugador 2: "Ladra" (un poco obvio)
- Impostor: "Cuatro patas" (intenta adivinar basandose en las pistas)

### Fase de Votacion

1. El grupo discute quien creen que es el impostor
2. El host (quien tiene el dispositivo) selecciona al jugador que el grupo decidio expulsar
3. Se revela si el expulsado era el impostor o no

### Resultado

- **Ganan los jugadores**: Si expulsan al impostor
- **Gana el impostor**: Si expulsan a un jugador inocente

### Multiples Rondas

El juego esta diseñado para jugarse en multiples rondas con los mismos jugadores. Despues de cada ronda:

- Se muestra quien fue expulsado y quien era el impostor real
- Se muestra la palabra que era
- Se actualiza el **marcador** con las victorias de cada jugador
- Puedes presionar "Siguiente Ronda" para jugar otra vez con una nueva palabra y un nuevo impostor aleatorio

## Estrategias

### Para jugadores normales:
- Da pistas que muestren que conoces la palabra, pero no tan obvias
- Si dices algo muy especifico ("tiene cuatro ruedas" para "Carro"), el impostor podria adivinarlo
- Observa las reacciones de los demas cuando dan sus pistas

### Para el impostor:
- Escucha atentamente las primeras pistas para deducir la palabra
- Da pistas vagas pero que suenen relacionadas con la categoria
- Si crees que adivinaste la palabra, da una pista mas especifica para no parecer sospechoso
- Acusa a otros para desviar la atencion

## Tecnologias

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- TypeScript - Logica del juego
- localStorage - Persistencia del estado del juego

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para produccion
pnpm build

# Previsualizar build de produccion
pnpm preview
```

## Estructura del Proyecto

```
src/
├── data/
│   └── words.ts        # Categorias y palabras en español
├── lib/
│   └── gameState.ts    # Logica del juego y estado
├── layouts/
│   └── Layout.astro    # Layout principal
├── pages/
│   ├── index.astro     # Pagina de inicio (agregar jugadores)
│   └── game.astro      # Pagina del juego (todas las fases)
└── styles/
    └── global.css      # Estilos globales con Tailwind
```
