import { getRandomCategory, getRandomWord } from '../data/words';

export interface Player {
  id: string;
  name: string;
  isImpostor: boolean;
  hasSeenWord: boolean;
}

export interface PlayerScore {
  name: string;
  odj: string;
  wins: number;
  impostorWins: number;
}

export interface GameState {
  players: Player[];
  playerScores: PlayerScore[];
  category: string;
  word: string;
  impostorId: string;
  currentPlayerIndex: number;
  phase: 'setup' | 'reveal' | 'discussion' | 'voting' | 'results';
  ejectedPlayerId: string | null;
  round: number;
}

const GAME_STATE_KEY = 'impostor_game_state';

export function createGame(playerNames: string[]): GameState {
  const category = getRandomCategory();
  const word = getRandomWord(category);
  const impostorIndex = Math.floor(Math.random() * playerNames.length);

  const players: Player[] = playerNames.map((name, index) => ({
    id: crypto.randomUUID(),
    name,
    isImpostor: index === impostorIndex,
    hasSeenWord: false,
  }));

  const playerScores: PlayerScore[] = playerNames.map((name, index) => ({
    name,
    odj: players[index].id,
    wins: 0,
    impostorWins: 0,
  }));

  const gameState: GameState = {
    players,
    playerScores,
    category: category.category,
    word,
    impostorId: players[impostorIndex].id,
    currentPlayerIndex: 0,
    phase: 'reveal',
    ejectedPlayerId: null,
    round: 1,
  };

  saveGameState(gameState);
  return gameState;
}

export function startNewRound(state: GameState): GameState {
  const category = getRandomCategory();
  const word = getRandomWord(category);
  const impostorIndex = Math.floor(Math.random() * state.playerScores.length);

  const players: Player[] = state.playerScores.map((score, index) => ({
    id: score.odj,
    name: score.name,
    isImpostor: index === impostorIndex,
    hasSeenWord: false,
  }));

  const newState: GameState = {
    ...state,
    players,
    category: category.category,
    word,
    impostorId: players[impostorIndex].id,
    currentPlayerIndex: 0,
    phase: 'reveal',
    ejectedPlayerId: null,
    round: state.round + 1,
  };

  saveGameState(newState);
  return newState;
}

export function saveGameState(state: GameState): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  }
}

export function loadGameState(): GameState | null {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(GAME_STATE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return null;
}

export function clearGameState(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(GAME_STATE_KEY);
  }
}

export function markPlayerSeen(playerId: string): GameState | null {
  const state = loadGameState();
  if (!state) return null;

  const playerIndex = state.players.findIndex(p => p.id === playerId);
  if (playerIndex !== -1) {
    state.players[playerIndex].hasSeenWord = true;
    state.currentPlayerIndex = playerIndex + 1;

    if (state.players.every(p => p.hasSeenWord)) {
      state.phase = 'discussion';
    }
  }

  saveGameState(state);
  return state;
}

export function startVoting(): GameState | null {
  const state = loadGameState();
  if (!state) return null;

  state.phase = 'voting';
  saveGameState(state);
  return state;
}

export function ejectPlayer(playerId: string): GameState | null {
  const state = loadGameState();
  if (!state) return null;

  state.ejectedPlayerId = playerId;
  state.phase = 'results';

  const impostorWon = playerId !== state.impostorId;

  state.playerScores.forEach(score => {
    const player = state.players.find(p => p.id === score.odj);
    if (!player) return;

    if (player.isImpostor) {
      if (impostorWon) {
        score.wins++;
        score.impostorWins++;
      }
    } else {
      if (!impostorWon) {
        score.wins++;
      }
    }
  });

  saveGameState(state);
  return state;
}

export function didImpostorWin(state: GameState): boolean {
  return state.ejectedPlayerId === null || state.ejectedPlayerId !== state.impostorId;
}
