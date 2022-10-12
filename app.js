import Game, { GameSavingData, loadGameData as loadGame, saveGameData as saveGame } from './game.js';

const game = new Game();
game.start();

const openSaveGame = new GameSavingData();
openSaveGame.enter();

loadGame();
saveGame();
