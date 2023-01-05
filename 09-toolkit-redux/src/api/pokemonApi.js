import axios from 'axios';

export const pokemonApi = axios.create({
    baseUrl: 'https://pokeapi.co/api/v2'
});