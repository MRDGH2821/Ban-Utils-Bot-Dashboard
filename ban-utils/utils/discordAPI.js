const axios = require('axios');

const discordAPIConfig = {
  baseURL: 'https://discord.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const discordAPI = axios.create(discordAPIConfig);

const fetchUser = async (accessToken) => {
  discordAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const response = await discordAPI.get('/users/@me');
  return response.data;
};

const fetchServers = async (accessToken) => {
  discordAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const response = await discordAPI.get('/users/@me/guilds');
  return response.data;
};

const fetchBans = async (accessToken, serverId) => {
  discordAPI.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const response = await discordAPI.get(`/guilds/${serverId}/bans`);
  return response.data;
};

module.exports = {
  fetchUser,
  fetchServers,
  fetchBans,
};