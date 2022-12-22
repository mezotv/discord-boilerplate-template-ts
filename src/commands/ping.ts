import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, Client, CommandInteraction }  from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Displays the clients ping"),


  async execute(interaction: CommandInteraction , client: Client ) {
    const pingembed = new EmbedBuilder()

      .setColor("#5865f4")
      .setTitle(":ping_pong:  Pong!")
      .addFields(
        {
          name: "**Api** latency",
          value: `> **${Math.round(client.ws.ping)}**ms`,
          inline: false,
        }
      )
      .setTimestamp();

      // There
      const button: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setLabel('Discord Ping')
          .setStyle(5)
          .setEmoji('💻')
          .setURL('https://discordstatus.com/'),
      );

    await interaction.reply({
      embeds: [pingembed],
      components: [button],
    });
    setTimeout(() => {
      button.components[0].setDisabled(true);
      interaction.editReply({ embeds: [pingembed], components: [button] });
    }, 120000);
  },
};
