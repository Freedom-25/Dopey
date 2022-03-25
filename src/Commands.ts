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

import { Command } from "./Command";
import { TestDope } from "./commands/TestDope";
import { Invite } from "./commands/Invite";
import { About } from "./commands/About";

export const Commands: Command[] = [TestDope, Invite, About];