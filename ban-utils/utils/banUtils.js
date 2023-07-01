import { discordAPIConfig } from './discordAPI';

export const copyBans = async (sourceServerId, targetServerId) => {
  try {
    const sourceBansResponse = await fetch(
      `${discordAPIConfig.baseUrl}/guilds/${sourceServerId}/bans`,
      {
        headers: {
          Authorization: `Bot ${discordAPIConfig.botToken}`,
        },
      }
    );

    const sourceBans = await sourceBansResponse.json();

    for (let ban of sourceBans) {
      await fetch(
        `${discordAPIConfig.baseUrl}/guilds/${targetServerId}/bans/${ban.user.id}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bot ${discordAPIConfig.botToken}`,
          },
          body: JSON.stringify({
            delete_message_days: 0,
            reason: ban.reason,
          }),
        }
      );
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
};