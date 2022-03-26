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

import {BaseCommandInteraction, Client, ColorResolvable, MessageEmbed, User} from "discord.js";
import { Command } from "../Command";

export const About: Command = {
    name: "about",
    description: "View information about Dopey",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        let botUser: User = await client.user!.fetch(true);

        // @ts-ignore
        const aboutEmbed = new MessageEmbed()
            .setColor("B12525" as ColorResolvable)
            .setAuthor({ name: botUser.username, iconURL: botUser.avatarURL(), url: "https://dopey.sharp.wtf" })
            .addFields(
                { name: "Dope", value: "I love dope" }
            )
            .setFooter({ text: `Copyright © ${new Date().getFullYear()} Freedom 25`, iconURL: "https://dopey.sharp.wtf/f25-text.png" })
            .setTimestamp();


        await interaction.followUp({
            ephemeral: true,
            embeds: [aboutEmbed]
        });
    }
};