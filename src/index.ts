import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits, Partials } from "discord.js";
import { SapphireConfig } from "./typings/index";
import { config } from "./config.js";

import "dotenv/config";

export default class SapphireBot extends SapphireClient {
  public config: SapphireConfig;
  constructor() {
    super({
      intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
      ],
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User,
      ],
      loadMessageCommandListeners: true,
    });
    this.config = config;
  }

  public async loadClient() {
    try {
      this.login(this.config.client.token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }
}

const DiscordClient = new SapphireBot();
DiscordClient.loadClient();

export { DiscordClient };
