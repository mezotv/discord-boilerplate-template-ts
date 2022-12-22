import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

// interface ClientType {
//   commands: Map<string, {
//     data: SlashCommandBuilder,
//     execute(interaction: CommandInteraction, client: any): Promise<void>,
//   }>
// }
// Lemme try something
// yea but i wanted to keep it as simple as my js boilerplate bot
module.exports = (client: any, interaction: CommandInteraction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    command.execute(interaction, client);
  } catch (err) {
    if (err) console.error(err);
    interaction.reply({
      content: "An error occurred while executing that command.",
      ephemeral: true,
    });
  }
};
