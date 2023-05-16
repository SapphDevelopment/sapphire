import { Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';

export class ReadyListener extends Listener {
  public run(client: Client) {
    const { username, id } = client.user!;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
  }
}