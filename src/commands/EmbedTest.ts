/*                           °#O°
                            o#@@@o
                           o@####@o
                          *@#@@@##@*
 *o°..                    ###@@@@###                    .°°**
 .o@@@#OOo*°.            .##@@@@@@##.            .°*oO##@@#o
    *#@@@@@@##o*°         ###@@@@###         .*oO#@@@@@@#*
      .o##@@@@@@@#O*.     *@#@@@##@*     .*O#@@@@@@@@#o.
         .*O#@@@@@@@#O*.   o######o   .*O@@@@@@@@#O*.
             .°oO#@@@@@@o.  o@@@@*  .o@@@@@@#Oo°.
                  ..°*oO##o  °OO°  o##Oo*°..
.°*oOO###########OOooo*°°..        ..°°**ooOO###########OOo*°.
  ..°°***ooooOOooooo****°.          .°****oooooOOoooo***°°..
                 .°*ooOoo°.        .°oOOoo*°.
             °oO##Ooo°.                .°ooO##Oo°
    __________  ________________  ____  __  ___   ___   ______
   / ____/ __ \/ ____/ ____/ __ \/ __ \/  |/  /  |__ \ / ____/
  / /_  / /_/ / __/ / __/ / / / / / / / /|_/ /   __/ //___ \
 / __/ / _, _/ /___/ /___/ /_/ / /_/ / /  / /   / __/____/ /
/_/   /_/ |_/_____/_____/_____/\____/_/  /_/   /____/_____/
      Copyright © 2022 Freedom 25 - All Rights Reserved    */

import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
const { MessageEmbed } = require('discord.js');

export const EmbedTest: Command = {
    name: "embed",
    description: "Sends a test embed.",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const testEmbed = new MessageEmbed()
            .setColor('#289548')
            .setTitle('Test embed')
            .setURL('https://dopey.sharp.wtf')
            .setAuthor({ name: 'Dopey#4200', iconURL: 'https://dopey.sharp.wtf/dopey-green.png', url: 'https://dopey.sharp.wtf' })
            .setDescription('This is where the description would go, and it is above anything else in the body of the embed.')
            .addFields(
                { name: 'Non-Inline field title', value: 'Value goes here' },
                { name: '\u200B', value: '\u200B' }, // Creates blank space in embed
                { name: 'Inline field title', value: 'Value goes here', inline: true },
                { name: 'Second inline field title', value: 'Value goes here', inline: true }
            )
            .setFooter({ text: 'Copyright © 2022 Freedom 25', iconURL: 'https://dopey.sharp.wtf/f25-text.png' })
            .setTimestamp();


        await interaction.followUp({
            ephemeral: true,
            embeds: [testEmbed]
        });
    }
};