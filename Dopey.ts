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

import {Client, Intents} from "discord.js";
import ready from "./src/listeners/Ready";
import interactionCreate from "./src/listeners/InteractionCreate";

const {token} = require("./security.json");

const BOT = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

ready(BOT);
interactionCreate(BOT);


BOT.login(token);
