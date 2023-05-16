import { Command } from "@sapphire/framework";
import { ApplicationCommandType } from "discord.js";

export class UserInfoCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerContextMenuCommand((builder) =>
      builder.setName("user info").setType(ApplicationCommandType.User)
    );
  }

  public async contextMenuRun(
    interaction: Command.ContextMenuCommandInteraction
  ) {
    await interaction.reply({
      content: `Getting userinfo...`,
      ephemeral: true,
      fetchReply: true,
    });

    setTimeout(() => {
      const user = interaction.user;

      return interaction.editReply({
        content: [`**Username:** ${user.username}`, `**ID:** ${user.id}`].join("\n"),
      });
    }, 1000 * 2);
  }
}
