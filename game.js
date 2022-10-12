import Character from './domain.js';

export default class Game
{
    start()
    {
        console.log('game started');
    }
}

export class GameSavingData
{
    enter()
    {
        console.log('loading');
    }
}

export function loadGameData()
{
    console.log('game is loaded');
}

export function saveGameData()
{
    console.log('game is saved');
}