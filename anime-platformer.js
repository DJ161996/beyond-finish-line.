(() => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlay-title');
  const overlayCopy = document.getElementById('overlay-copy');
  const startButton = document.getElementById('start-button');
  const customizationBack=document.getElementById('customization-back');
  const notice = document.getElementById('notice');
  const shopOverlay=document.getElementById('shop-overlay');
  const shopCoins=document.getElementById('shop-coins');
  const languageSelect=document.getElementById('language-select');
  const characterChoice=document.getElementById('character-choice');
  const boyChoice=document.getElementById('boy-choice');
  const girlChoice=document.getElementById('girl-choice');
  // Register the start control before the rest of the game boots so a later
  // non-critical setup error cannot leave the visible button inert.
  startButton.addEventListener('click',begin);
  const text={
    es:{brand:'✦ &nbsp; Aventura de supervivencia',gameName:'Beyond the<br>Finish Line',asideCopy:'Cruza la jungla, reúne monedas<br>y encuentra el camino a casa.',health:'❤️ Salud',heartCrystalFound:'¡Cristal de corazón! Salud restaurada: {health}%. ',attemptsLeft:'{count} intentos',retryLevel:'Reintentar este nivel',retryLevelCopy:'Perdiste este intento. Puedes probar una vez más en este nivel ({count} intento restante).',energy:'🍎 Energía',explorer:'Explorador skater',explorerGirl:'Exploradora',leafNinja:'Ninja de Konoha',leafNinjaGirl:'Kunoichi de Konoha',leafGearCopy:'Chaleco verde · banda de Konoha<br>Katon: fuego por la boca · R<br>Kirin: relámpago en la mano · T',tailsGear:'🦊 Tails · dos colas',tailsTailControl:'Giro de colas de Tails',tailsTailSpin:'¡Tails gira las colas!',tailsTailMiss:'¡El giro de colas no alcanzó a nadie!',tailsEnergyBombControl:'Lanzar bomba de energía de Tails',tailsBombLaunched:'¡Tails lanza una bomba de energía!',tailsBombRecharging:'La bomba de energía se está recargando.',voidGearCopy:'Mantén salto en el aire para volar. F/X: golpe con las colas. G/💥: bomba de energía contra clones (recarga: 1,5 s).',voidIntro:'Tails despierta en un vacío sin luz. La señal susurra desde la oscuridad… pero no está solo.',darkHandGrab:'¡Una mano oscura atrapó a Tails! Pulsa F/X para liberarte.',darkHandEscaped:'¡Tails se libera de la mano oscura con sus colas!',sonicCopyTouch:'¡La copia de Sonic te atravesó y desapareció!',sonicCopyBurst:'¡La copia de Sonic se deshizo al golpearla!',sonicNightmareIntro:'La señal se rompe. ¡Te has convertido en Tails! Alguien te espera en Green Hill…',sonicNightmareGearCopy:'Mantén salto en el aire para volar. Pulsa F/X para golpear con las colas.',tailsCallsSonic:'Tails: ¡Sonic! ¿Eres tú?',sonicDisappears:'Sonic se desvanece entre interferencias…',tailsCries:'Tails rompe a llorar…',sonicChasing:'¡Corre! ¡Sonic viene detrás de ti! Mantén pulsado →.',sonicCaughtTitle:'Sonic te alcanzó',sonicCaughtCopy:'Intenta correr sin detenerte para llegar a la meta.',sonicFinalTitle:'Así termina todo…',sonicFinalCopy:'Sonic te alcanzó. La señal se apaga.',sonicGearCopy:'Recoge anillos y salta sobre los Badniks.<br>Derrota al Dr. Eggman al final de Green Hill.',sonicRingQuest:'💍 Anillos de Green Hill',sonicRings:'💍 Anillos:',badnikHit:'¡Desactivaste un Badnik!',badnikDefeated:'¡Badnik destruido!',eggmanHit:'¡Golpeaste al Dr. Eggman! Le quedan {hp} puntos de vida.',eggmanAttack:'¡El ataque de Eggman te alcanzó!',eggmanDefeated:'¡Derrotaste al Dr. Eggman! Green Hill está a salvo.',sasukePowers:'🔥 Katon · ⚡ Kirin',sasukeJutsuControl:'Hacer sellos y lanzar fuego',sasukeFire:'¡Sellos de mano! ¡Katon: gran bola de fuego!',kirinControl:'Cargar y lanzar el relámpago Kirin',kirinLaunch:'¡Kirin! ¡Relámpago lanzado!',girlGearCopy:'Cabello rubio · gorra hacia atrás<br>Pantalón ancho · camisa corta',characterChoice:'Elige tu personaje',boyChoice:'👦 Chico',girlChoice:'👧 Chica',gearCopy:'Sudadera gris · mochila<br>¡Sigue adelante!',inventory:'🎒 Inventario',ammo:'Munición:',pistolMissing:'🔫 Pistola: no encontrada',pistolStored:'🔫 Pistola guardada',coins:'🪙 Monedas:',findWay:'Encuentra el camino',restart:'↺ Reiniciar',introTitle:'¡Aventura en la jungla!',introCopy:'Guía al explorador por la jungla, balancéate con las lianas, recoge monedas y enfréntate a lobos, osos y al jefe final.',beginLevel:'Empezar nivel',level0BriefingTitle:'Nivel 1 · Cruza la jungla',level0BriefingCopy:'Muévete con ←/→, salta con ESPACIO y agárrate a las lianas con E. Ataca con el hacha usando F; reúne monedas y llega a la meta.',level0BriefingTitle:'Nivel 1 · Islas entre las nubes',level0BriefingCopy:'Tienes una pistola con 15 balas: apunta con el mouse y haz clic, o pulsa G para disparar. Los pájaros rojos explotan al acercarse; esquívalos y ten cuidado con el diablo, que corre hacia ti.',level1BriefingTitle:'Nivel 2 · Mundo de Sonic',level1BriefingCopy:'¡Bienvenido a Green Hill! Reúne anillos, salta sobre los Badniks y derrota al Dr. Eggman. Usa ←/→ para correr y ESPACIO para saltar.',level2BriefingTitle:'Nivel 3 · La ciudad amurallada',level2BriefingCopy:'Cruza la ciudad y evita a los titanes. Los cristales de corazón recuperan salud y hay gas para volar durante 10 segundos. Derrota al titán final y llega a la salida.',level4BriefingTitle:'Nivel 5 · Reino Champiñón',level4BriefingCopy:'Cruza el Reino Champiñón, salta sobre los bloques y derrota a Bowser, el primer jefe. Muévete con ←/→, salta con ESPACIO y ataca con F.',marioGear:'Aventura del Reino Champiñón',marioGearCopy:'Recoge la Flor de Fuego y dispara con G o 🔥.<br>Salta sobre Goombas y Koopas; Bowser te espera.',bowserHit:'¡Golpeaste a Bowser! Le quedan {hp} puntos de vida.',bowserDefeated:'¡Bowser ha sido derrotado! El camino hacia la meta está libre.',bowserAttack:'¡La bola de fuego de Bowser te alcanzó!',marioFakeTitle:'¡Lo lograste! ¡Bowser derrotado!',marioFakeCopy:'¡Has completado el Reino Champiñón! Gracias por jugar.',marioContinue:'Continuar',marioReveal:'La imagen se estabiliza… ¡Mario estaba ahí todo este tiempo!',fireFlowerFound:'¡Flor de Fuego! Pulsa G o 🔥 para lanzar bolas de fuego.',fireFlowerStored:'🔥 Flor de Fuego conseguida',fireFlowerControl:'Lanzar bola de fuego Mario',marioFireLaunched:'¡Bola de fuego lanzada!',marioFightStart:'¡Mario viene por ti! ¡Usa las bolas de fuego y recoge estrellas!',marioAttack:'¡Mario te golpeó!',marioDefeated:'¡Derrotaste al Mario oscuro!',starPower:'¡Superestrella! Eres invulnerable por unos segundos.',helperArrived:'¡{name} llegó para ayudarte!',helper_luigi:'Luigi',helper_peach:'la princesa Peach',helper_toad:'Toad',level3BriefingTitle:'Nivel 4 · Aldea de la Hoja',level3BriefingCopy:'Avanza por la Aldea de la Hoja, enfréntate a sus ninjas y derrota a Naruto para proteger la aldea. Pulsa R para hacer sellos y lanzar fuego por la boca; T carga y lanza Kirin.',narutoHit:'¡Alcanzaste a Naruto! Le quedan {hp} puntos de vida.',narutoDefeated:'¡Naruto ha sido derrotado! La Aldea de la Hoja está a salvo.',ninjaHit:'¡Golpeaste al ninja renegado!',ninjaDefeated:'¡Ninja renegado derrotado!',ninjaAttack:'¡El ninja te golpeó!',ninjaJutsu:'¡El ninjutsu de chakra te alcanzó!',narutoAttack:'¡Naruto te golpeó!',start:'Empezar aventura',shopKicker:'Puesto de exploradores · antes del jefe',shopTitle:'Prepara tu equipo',shopCopy:'Revisa las monedas que reuniste. Aquí podrás comprar armas más fuertes; primero elegiremos juntos cuáles serán y cuánto costarán. Por ahora empiezas con el hacha.',yourCoins:'🪙 Tus monedas:',starterAxe:'Hacha de explorador · arma inicial',shopNote:'El catálogo de compras quedará listo para añadir las armas y precios que decidamos.',shopContinue:'Continuar hacia el jefe',mysteryHint:'Busca los lugares misteriosos para encontrar objetos y munición.',move:'moverse',jumpGrab:'saltar/agarrar',vine:'liana',axe:'hacha',pistol:'pistola',touchControls:'Controles táctiles',moveLeft:'Mover a la izquierda',moveRight:'Mover a la derecha',jump:'Saltar',ropeControl:'Agarrar o soltar la liana',axeControl:'Atacar con el hacha',shootControl:'Apuntar con el mouse y disparar',levelComplete:'¡Nivel {level} superado!',levelCopy:'Terminaste {name}. Prepárate: el siguiente tramo será aún más extraño.',gameWon:'¡Escapaste de la jungla!',gameWonCopy:'Completaste los {levels} niveles y reuniste {coins} monedas. ¡Lo lograste!',marioAftermathTitle:'Esto no termina todavía…',marioAftermathCopy:'La señal se ha perdido. Algo sigue observándote.',marioApparentWinTitle:'¡Has ganado!',marioApparentWinCopy:'Mario ha sido derrotado. El Reino Champiñón está a salvo.',tryAgain:'¡Inténtalo otra vez!',tryAgainCopy:'Te quedaste sin salud. Puedes intentarlo de nuevo y buscar una ruta más segura.',nextLevel:'Siguiente nivel',playAgain:'Jugar de nuevo',retry:'Volver a intentar',shopAhead:'¡El jefe está adelante!',grabbedVine:'¡Agarraste la liana! Usa ←/→ para balancearte y salta para soltarla.',releasedVine:'¡Te soltaste! Sigue moviéndote para llegar al otro lado.',axeMiss:'¡Agitaste el hacha! Acércate más al animal para golpearlo.',leopardDefeated:'¡Derrotaste al leopardo! ¡Corre hacia la meta!',bearFled:'¡El oso se retiró entre los árboles!',wolfFled:'¡El lobo huyó entre los arbustos!',leopardHit:'¡Impacto con {source}! Le quedan {hp} puntos al leopardo.',bearHit:'¡Golpe al oso! Le queda {hp} de fuerza.',wolfHit:'¡El lobo huyó del golpe!',needPistol:'Busca un lugar misterioso para encontrar la pistola.',emptyPistol:'La pistola no tiene balas.',shot:'¡Disparo! Balas restantes: {ammo}.',leopardAttack:'¡El leopardo te golpeó! Usa el hacha y esquiva.',bearAttack:'¡El oso te alcanzó! Evita sus zarpazos.',wolfAttack:'¡El lobo te alcanzó! Ahuyéntalo con F.',birdAttack:'¡Un pájaro te golpeó! Apártate o dispárale.',devilAttack:'¡El diablo te alcanzó! Aléjate y apunta bien.',sonicAttack:'¡Sonic pasó como un rayo y te golpeó!',devilDefeated:'¡Venciste al diablo! ¡Sigue cruzando las nubes!',sonicDefeated:'¡Venciste a Sonic! ¡El cielo vuelve a estar en calma!',birdDefeated:'¡El pájaro salió volando!',devilHit:'¡Le diste al diablo! Le quedan {hp} puntos de vida.',sonicHit:'¡Impacto! A Sonic le quedan {hp} puntos de vida.',birdHit:'¡Impactaste al pájaro! Le quedan {hp} puntos.',needPistol:'Busca un lugar misterioso para encontrar la pistola.',emptyPistol:'La pistola no tiene balas.',shot:'¡Disparo! Balas restantes: {ammo}.',goalBlocked:'¡El jefe bloquea el camino! Derrótalo para continuar.',energyLow:'Te falta energía para saltar.',stairsHint:'¡Sube las escaleras para llegar a las nubes!',gokuForm:'✨ Goku transformado',gemQuest:'✨ Busca la gema brillante',gokuTransform:'¡La gema te transformó en Goku! Acércate a Sonic y ataca con F o 👊.',kiBlast:'¡Ataque de energía!' ,gokuPunch:'¡Golpe de Goku! A Sonic le quedan {hp} puntos.',punchMiss:'Acércate a Sonic para golpearlo.',kameLabel:'Kamehameha',kameControl:'Lanzar Kamehameha',kameLaunched:'¡Kamehameha!',sonicKameHit:'¡Kamehameha! A Sonic le quedan {hp} puntos.',odmGear:'🗡 Equipo de maniobras',odmFlightMeter:'💨 Volando: {seconds} s',explosiveInventory:'💣 Cargas explosivas',explosiveAmmoLabel:'Cargas:',explosiveControl:'Disparar cargas explosivas con G',explosivesFound:'¡Encontraste 3 cargas explosivas! Apunta al titán final y dispara con G.',explosivesEmpty:'No te quedan cargas explosivas.',explosiveFired:'¡Carga disparada! Te quedan {ammo}.',titanBlastHit:'¡Explosión! Al titán le quedan {hp} puntos.',titanBossBlastHit:'¡Explosión directa! Al titán final le quedan {hp} puntos.',explosiveHint:'Pulsa G para lanzar las cargas explosivas; apunta al titán con el mouse.',odmControl:'Activar propulsores de humo y volar durante 10 segundos',odmHint:'Pulsa ESPACIO/↑ o el botón de salto para activar el gas durante 10 segundos; apunta con el mouse para dirigir el vuelo.',odmFlightStart:'¡Propulsores de humo activados! Apunta con el mouse para volar durante 10 segundos.',odmFlightActive:'Propulsores activos: {seconds} s.',odmFlightRefilling:'Los tanques se están recargando. Espera un momento.',odmTitanHooked:'¡Te enganchaste al titán! Ataca su nuca con F.',odmTooFar:'Ese punto está fuera del alcance corto del gancho (4.5 metros).',odmClickAnchor:'CLIC PARA ENGANCHAR',odmAimAtAnchor:'Apunta el mouse a una X brillante de la muralla para engancharte.',odmHookAbove:'Pasa el mouse sobre una X brillante de la muralla para elegir un punto alto.',bladeControl:'Atacar con las dos cuchillas',bladeMiss:'Acércate o engánchate a un titán para cortarlo.',titanHit:'¡Cuchillazo! Al titán le quedan {hp} puntos.',titanBossHit:'¡Cortaste al titán gigante! Le quedan {hp} puntos.',titanDefeated:'¡Titán eliminado!',titanBossDefeated:'¡Derrotaste al titán gigante! ¡Corre a la salida!',titanAttack:'¡El titán te golpeó! Perdiste salud; esquiva su siguiente ataque.',titanGrab:'¡El titán te atrapó y te está llevando a su boca!',titanEatenTitle:'¡Te devoró el titán!',titanEaten:'Un titán te atrapó. Inténtalo de nuevo y usa los ganchos para mantenerte en movimiento.',aimMouse:'Mueve el mouse para apuntar y haz clic para disparar.',energyAmmo:'Energía:',gemLabel:'Gema:',kiControl:'Lanzar energía con G o tocar ✨'},
    en:{brand:'✦ &nbsp; Survival adventure',gameName:'Beyond the<br>Finish Line',asideCopy:'Cross the jungle, collect coins<br>and find your way home.',health:'❤️ Health',heartCrystalFound:'Heart crystal! Health restored: {health}%. ',attemptsLeft:'{count} attempts',retryLevel:'Retry this level',retryLevelCopy:'You lost this attempt. You can try this level once more ({count} attempt remaining).',energy:'🍎 Energy',explorer:'Skater boy',explorerGirl:'Skater girl',leafNinja:'Hidden Leaf ninja',leafNinjaGirl:'Hidden Leaf kunoichi',leafGearCopy:'Green flak vest · Hidden Leaf headband<br>Fire Style: fire from the mouth · R<br>Kirin: lightning in hand · T',tailsGear:'🦊 Tails · twin tails',tailsTailControl:'Tails tail spin',tailsTailSpin:'Tails spins his twin tails!',tailsTailMiss:'The tail spin missed!',tailsEnergyBombControl:'Throw Tails energy bomb',tailsBombLaunched:'Tails throws an energy bomb!',tailsBombRecharging:'The energy bomb is recharging.',voidGearCopy:'Hold jump in midair to fly. F/X: tail strike. G/💥: energy bomb for clones (1.5 s recharge).',voidIntro:'Tails wakes in a lightless void. The signal whispers in the dark… but he is not alone.',darkHandGrab:'A dark hand has grabbed you! Press F/X to break free.',darkHandEscaped:'Tails breaks free from the dark hand with his tails!',sonicCopyTouch:'The Sonic copy passed through you and vanished!',sonicCopyBurst:'The Sonic copy shattered when you hit it!',darkHandHit:'The hand recoils. It has {hp} strength left.',darkHandDefeated:'The dark hand sinks away and vanishes.',voidSonicAttack:'Terrifying Sonic struck you!',voidSonicHit:'Sonic recoils, but is still standing! {hp} points remain.',voidSonicDefeated:'Sonic dissolves into the darkness. Run to the signal!',facelessAttack:'The faceless figure lunged at you!',facelessHit:'The faceless figure staggers…',facelessDefeated:'The figure dissolves into the shadows.',voidEcho:'A voice just like Tails whispers: “Come… I am here…”',sonicNightmareIntro:'The signal breaks. You have become Tails! Someone is waiting in Green Hill…',sonicNightmareGearCopy:'Hold jump while airborne to fly. Press F/X to strike with your tails.',tailsCallsSonic:'Tails: Sonic! Is that you?',sonicDisappears:'Sonic vanishes into the interference…',tailsCries:'Tails breaks down in tears…',sonicChasing:'Run! Sonic is right behind you! Hold →.',sonicCaughtTitle:'Sonic caught you',sonicCaughtCopy:'Keep running without stopping to reach the exit.',sonicFinalTitle:'This is how it all ends…',sonicFinalCopy:'Sonic caught you. The signal fades away.',sonicGearCopy:'Collect rings and jump on the Badniks.<br>Defeat Dr. Eggman at the end of Green Hill.',sonicRingQuest:'💍 Green Hill rings',sonicRings:'💍 Rings:',badnikHit:'You disabled a Badnik!',badnikDefeated:'Badnik destroyed!',eggmanHit:'You hit Dr. Eggman! He has {hp} health left.',eggmanAttack:'Eggman’s attack hit you!',eggmanDefeated:'You defeated Dr. Eggman! Green Hill is safe.',sasukePowers:'🔥 Fire Style · ⚡ Kirin',sasukeJutsuControl:'Form hand seals and use Fire Style',sasukeFire:'Hand seals! Fire Style: Fireball Jutsu!',kirinControl:'Charge and throw Kirin lightning',kirinLaunch:'Kirin! Lightning released!',girlGearCopy:'Blonde hair · backwards cap<br>Wide-leg pants · cropped shirt',characterChoice:'Choose your character',boyChoice:'👦 Boy',girlChoice:'👧 Girl',gearCopy:'Gray hoodie · backpack<br>Keep moving forward!',inventory:'🎒 Inventory',ammo:'Ammo:',pistolMissing:'🔫 Pistol: not found',pistolStored:'🔫 Pistol stored',coins:'🪙 Coins:',findWay:'Find the way',restart:'↺ Restart',introTitle:'Jungle adventure!',introCopy:'Guide the explorer through the jungle, swing on vines, collect coins, and face wolves, bears, and the final boss.',beginLevel:'Start level',level0BriefingTitle:'Level 1 · Through the jungle',level0BriefingCopy:'Move with ←/→, jump with SPACE, and grab vines with E. Attack with the axe using F; collect coins and reach the goal.',level0BriefingTitle:'Level 1 · Cloud Islands',level0BriefingCopy:'You have a pistol with 15 bullets: aim with the mouse and click, or press G to fire. Red birds explode when they get close; dodge them and watch out for the devil charging at you.',level1BriefingTitle:'Level 2 · Sonic’s World',level1BriefingCopy:'Welcome to Green Hill! Collect rings, jump on Badniks, and defeat Dr. Eggman. Use ←/→ to run and SPACE to jump.',level2BriefingTitle:'Level 3 · The Walled City',level2BriefingCopy:'Cross the city and avoid the Titans. Heart crystals restore health, and gas lets you fly for 10 seconds. Defeat the final Titan and reach the exit.',level4BriefingTitle:'Level 5 · Mushroom Kingdom',level4BriefingCopy:'Cross the Mushroom Kingdom, jump across the blocks, and defeat Bowser, the first boss. Move with ←/→, jump with SPACE, and attack with F.',marioGear:'Mushroom Kingdom adventure',marioGearCopy:'Collect the Fire Flower and shoot with G or 🔥.<br>Jump on Goombas and Koopas; Bowser waits ahead.',bowserHit:'You hit Bowser! He has {hp} health left.',bowserDefeated:'Bowser is defeated! The path to the goal is clear.',bowserAttack:'Bowser’s fireball hit you!',marioFakeTitle:'You did it! Bowser is defeated!',marioFakeCopy:'You completed the Mushroom Kingdom! Thanks for playing.',marioContinue:'Continue',marioReveal:'The picture stabilizes… Mario was there all along!',fireFlowerFound:'Fire Flower! Press G or 🔥 to throw fireballs.',fireFlowerStored:'🔥 Fire Flower collected',fireFlowerControl:'Throw a Mario fireball',marioFireLaunched:'Fireball launched!',marioFightStart:'Mario is coming for you! Use fireballs and collect stars!',marioAttack:'Mario hit you!',marioDefeated:'You defeated Dark Mario!',starPower:'Super Star! You are invulnerable for a few seconds.',helperArrived:'{name} is here to help!',helper_luigi:'Luigi',helper_peach:'Princess Peach',helper_toad:'Toad',level3BriefingTitle:'Level 4 · Hidden Leaf Village',level3BriefingCopy:'Travel through the Hidden Leaf Village, face its shinobi, and overcome Naruto to protect the village. Press R to form hand seals and breathe fire; press T to charge and throw Kirin.',narutoHit:'You hit Naruto! He has {hp} health left.',narutoDefeated:'Naruto is defeated! The Hidden Leaf Village is safe.',ninjaHit:'You hit the rogue ninja!',ninjaDefeated:'Rogue ninja defeated!',ninjaAttack:'The ninja hit you!',ninjaJutsu:'A chakra ninjutsu hit you!',narutoAttack:'Naruto struck you!',start:'Start adventure',shopKicker:'Explorer shop · before the boss',shopTitle:'Prepare your gear',shopCopy:'Check the coins you collected. You will be able to buy stronger weapons here; first, we will choose them and their prices together. For now, you start with the axe.',yourCoins:'🪙 Your coins:',starterAxe:'Explorer axe · starting weapon',shopNote:'The shop is ready for the weapons and prices we decide on.',shopContinue:'Continue to the boss',mysteryHint:'Look for mysterious places to find items and ammo.',move:'move',jumpGrab:'jump/grab',vine:'vine',axe:'axe',pistol:'pistol',touchControls:'Touch controls',moveLeft:'Move left',moveRight:'Move right',jump:'Jump',ropeControl:'Grab or release the vine',axeControl:'Attack with the axe',shootControl:'Fire the pistol',levelComplete:'Level {level} complete!',levelCopy:'You finished {name}. Get ready: the next part of the jungle will be harder.',gameWon:'You escaped the jungle!',gameWonCopy:'You completed all {levels} levels and collected {coins} coins. You did it!',marioAftermathTitle:'This is not over yet…',marioAftermathCopy:'The signal is gone. Something is still watching you.',marioApparentWinTitle:'You won!',marioApparentWinCopy:'Mario is defeated. The Mushroom Kingdom is safe.',tryAgain:'Try again!',tryAgainCopy:'You ran out of health. Try again and look for a safer route.',nextLevel:'Next level',playAgain:'Play again',retry:'Try again',shopAhead:'The boss is ahead!',grabbedVine:'You grabbed the vine! Use ←/→ to swing and jump to let go.',releasedVine:'You let go! Keep moving to reach the other side.',axeMiss:'You swung the axe! Get closer to hit an enemy.',leopardDefeated:'You defeated the leopard! Run for the goal!',bearFled:'The bear retreated into the trees!',wolfFled:'The wolf ran into the bushes!',leopardHit:'Hit with the {source}! The leopard has {hp} strength left.',bearHit:'You hit the bear! It has {hp} strength left.',wolfHit:'The wolf fled from the hit!',needPistol:'Search a mysterious place to find the pistol.',emptyPistol:'The pistol is out of ammo.',shot:'Shot fired! Ammo left: {ammo}.',leopardAttack:'The leopard hit you! Use the axe and dodge.',bearAttack:'The bear got you! Dodge its swipes.',wolfAttack:'The wolf got you! Scare it away with F.',fall:'Watch out for the gap! You lost some health.',coin:'Coin collected!',ammoFound:'You found more ammo! The pistol is back to 15 bullets.',pistolFound:'You found a pistol! Its magazine holds up to 15 bullets.',goalBlocked:'The boss is blocking the way! Defeat it to continue.',energyLow:'You need more energy to jump.',stairsHint:'Climb the stairs to reach the clouds!',devilAttack:'The devil struck you! Dodge and aim carefully.',sonicAttack:'Sonic dashed into you! Watch out for his speed.',devilDefeated:'You defeated the devil! Keep crossing the clouds!',sonicDefeated:'You defeated Sonic! The sky is peaceful again.',birdDefeated:'The bird flew away!',devilHit:'You hit the devil! {hp} health points left.',sonicHit:'Direct hit! Sonic has {hp} health points left.',birdHit:'You hit the bird! {hp} health points left.',aimMouse:'Move the mouse to aim; click to shoot.',gokuForm:'✨ Goku transformation',gemQuest:'✨ Find the shining gem',gokuTransform:'The gem transformed you into Goku! Get close to Sonic and attack with F or 👊.',kiBlast:'Energy blast!',gokuPunch:'Goku landed a punch! Sonic has {hp} health points left.',punchMiss:'Get close to Sonic to land a punch.',kameLabel:'Kamehameha',kameControl:'Fire Kamehameha',kameLaunched:'Kamehameha!',sonicKameHit:'Kamehameha hit! Sonic has {hp} health points left.',odmGear:'🗡 Maneuver gear',odmFlightMeter:'💨 Flying: {seconds}s',explosiveInventory:'💣 Explosive charges',explosiveAmmoLabel:'Charges:',explosiveControl:'Fire explosive charge with G',explosivesFound:'You found 3 explosive charges! Aim at the final Titan and fire with G.',explosivesEmpty:'You are out of explosive charges.',explosiveFired:'Charge fired! {ammo} remaining.',titanBlastHit:'Explosion! The Titan has {hp} health left.',titanBossBlastHit:'Direct explosion hit! The final Titan has {hp} health left.',explosiveHint:'Press G to fire explosive charges; aim at the Titan with the mouse.',odmControl:'Activate smoke thrusters to fly for a few seconds',odmHint:'Press SPACE/↑ or the jump button to fire the gas for 10 seconds; aim with the mouse to steer your flight.',odmFlightStart:'Smoke thrusters on! Aim with the mouse to fly for 10 seconds.',odmFlightActive:'Thrusters active: {seconds}s.',odmFlightRefilling:'The tanks are refilling. Wait a moment.',odmTitanHooked:'You are tethered to a Titan! Strike its nape with F.',odmTooFar:'That point is outside the hook’s short 4.5-meter range.',odmClickAnchor:'CLICK TO GRAPPLE',odmAimAtAnchor:'Point the mouse at a glowing X on the wall to grapple.',odmHookAbove:'Aim the mouse in the direction you want to fly.',bladeControl:'Attack with both blades',bladeMiss:'Get close to a Titan or grapple onto it to slash.',titanHit:'Blade strike! The Titan has {hp} health points left.',titanBossHit:'You slashed the giant Titan! {hp} health points remain.',titanDefeated:'Titan eliminated!',titanBossDefeated:'You defeated the giant Titan! Run for the exit!',titanAttack:'The Titan hit you! You lost health; dodge its next attack.',titanGrab:'The Titan grabbed you and is lifting you to its mouth!',titanEatenTitle:'The Titan ate you!',titanEaten:'A Titan caught you. Try again and use your hooks to keep moving.',energyAmmo:'Energy:',gemLabel:'Gem:',kiControl:'Fire an energy blast with G or tap ✨'}
  };
  let language='es',noticeKey='',noticeVars={},endResult='',marioEnding={active:false,haunted:false,timer:0};
  const tr=(key,vars={})=>{let value=text[language][key]??text.es[key]??key;for(const [name,replacement] of Object.entries(vars))value=value.replaceAll(`{${name}}`,replacement);return value};
  function say(key,vars={}){noticeKey=key;noticeVars=vars;notice.textContent=tr(key,vars)}
  function applyLanguage(){
    document.documentElement.lang=language;
    for(const el of document.querySelectorAll('[data-i18n]'))el.textContent=tr(el.dataset.i18n);
    for(const el of document.querySelectorAll('[data-i18n-html]'))el.innerHTML=tr(el.dataset.i18nHtml);
    for(const el of document.querySelectorAll('[data-i18n-aria]'))el.setAttribute('aria-label',tr(el.dataset.i18nAria));
    if(noticeKey)notice.textContent=tr(noticeKey,noticeVars);
    hud();
    updateAppearancePreview();
    if(overlay.dataset.result==='briefing')showLevelBriefing();
    if(finished){if(marioEnding.haunted)renderMarioHauntedScreen();else if(sonicEncounter.phase==='ending')renderSonicFinalScreen();else renderEndScreen()}
  }
  languageSelect.addEventListener('change',()=>{language=languageSelect.value;applyLanguage()});

  const world = { width: 56, height: 8.2, camera: 0, goalX: 53.5, goalY: 0 };
  const levels = [
    {name:{es:'Islas entre las nubes',en:'Cloud Islands'},ground:[[-10,54]],vines:[],stairs:[],secretSteps:[],logs:[],mysteries:[[2.8,.82,'ammo'],[8,.82,'ammo'],[13,.82,'ammo'],[18,.82,'ammo'],[23,.82,'ammo'],[28,.82,'ammo'],[34,.82,'ammo'],[39,.82,'ammo'],[44,.82,'ammo'],[46,.82,'ammo']],enemies:[[4,'bird'],[6.5,'bird'],[8,'bird'],[12,'bird'],[14,'bird'],[16,'bird'],[20,'bird'],[22,'bird'],[24,'bird'],[28,'bird'],[31,'bird'],[34,'bird'],[36,'bird'],[40,'bird'],[42,'bird'],[44,'bird']],bossX:48,coins:[[2,1.2],[5,2],[11.4,1.2],[13,2.2],[16,1.35],[20,1.55],[22,3.1],[26,1.25],[30,1.5],[33,2.3],[36.5,3.35],[40,1.8],[43,2.4],[46.5,1.2],[52,1.5]]},
    {name:{es:'La ciudad amurallada',en:'The Walled City'},ground:[[-10,54]],vines:[],stairs:[],secretSteps:[],logs:[],mysteries:[[5,.82,'heartCrystal'],[14,.82,'heartCrystal'],[22,.82,'heartCrystal'],[31,.82,'heartCrystal'],[34.5,.82,'heartCrystal'],[40,.82,'heartCrystal'],[45.8,.82,'explosive']],odmAnchors:[[3,5.5],[9,6],[15,5.3],[22,6.2],[29,5.5],[36,6.2],[43,5.6],[51,6]],enemies:[[8,'titan'],[17,'titan'],[27,'titan'],[37,'titan'],[44,'titan']],bossX:49,coins:[[3,1.1],[6,1.2],[12,1.1],[18,1.2],[24,1.1],[31,1.2],[38,1.1],[45,1.2],[52,1.1]]},
     {name:{es:'Aldea de la Hoja',en:'Hidden Leaf Village'},ground:[[-10,97]],goalX:92,vines:[],stairs:[],secretSteps:[],logs:[],mysteries:[[13,.82,'heartCrystal'],[33,.82,'heartCrystal'],[58,.82,'heartCrystal'],[78,.82,'heartCrystal']],enemies:[[14,'ninja'],[32,'ninja'],[51,'ninja'],[68,'ninja'],[80,'ninja']],bossX:86,bossHp:18,coins:[[2,1.2],[5,1.7],[9,1.1],[12,2.4],[16,1.25],[19,1.15],[22,1.8],[25,1.2],[29,1.5],[33,1.1],[37,1.7],[41,1.2],[46,1.6],[52,1.2],[56,1.4],[60,1.8],[64,1.2],[68,1.7],[73,1.3],[77,1.8],[82,1.2],[89,1.7]]},
      {name:{es:'Reino Champiñón',en:'Mushroom Kingdom'},ground:[[-10,82]],goalX:77,vines:[],stairs:[[14,1.7,1.4],[15.2,2.05,1.4],[34,1.8,1.6],[35.4,2.15,1.6],[54,1.7,1.4],[55.2,2.05,1.4]],secretSteps:[],logs:[],mysteries:[[11,.82,'fireFlower'],[17,.82,'heartCrystal'],[24,.82,'heartCrystal'],[30,.82,'heartCrystal'],[38,.82,'heartCrystal'],[47,.82,'heartCrystal'],[55,.82,'heartCrystal'],[63,.82,'heartCrystal'],[70,.82,'heartCrystal'],[75,.82,'heartCrystal']],stars:[[21,1.45],[33,1.65],[48,1.45],[59,1.65],[74,1.45]],enemies:[[8,'goomba'],[20,'koopa'],[31,'goomba'],[52,'koopa'],[62,'goomba']],bossX:42,bossType:'bowser',bossHp:20,coins:[[2,1.25],[5,1.8],[9,1.25],[13,2.8],[17,1.25],[22,1.35],[27,1.25],[32,2.8],[37,1.25],[42,1.45],[47,1.25],[52,2.7],[57,1.25],[62,1.6],[68,1.3],[75,1.2]]},
        {name:{es:'Green Hill ensangrentado',en:'Bloodstained Green Hill'},ground:[[-10,160]],goalX:154,vines:[],stairs:[],secretSteps:[],logs:[],voidPlatforms:[],mysteries:[],enemies:[],coins:[]},
        {name:{es:'El laboratorio subterráneo',en:'The Underground Laboratory'},ground:[[-10,52]],goalX:48,vines:[],stairs:[],secretSteps:[],logs:[],mysteries:[],enemies:[],coins:[],bossX:35,bossType:'voidSonic',bossHp:24},
  ];
   const savedRun=(()=>{try{return JSON.parse(localStorage.getItem('beyond-finish-line-save')||'null')}catch{return null}})();
   let levelIndex=0,checkpointX=-5.8,checkpointLevel=-1,checkpointNext=8,completedLevels=Array.isArray(savedRun?.completedLevels)?savedRun.completedLevels:[],ground=[],vines=[],stairs=[],secretSteps=[],logs=[],coins=[],mysteries=[],animals=[],boss=null,odmAnchors=[],voidPlatforms=[],voidEchoTimer=0,sonicCopyTimer=8,voidBlackoutTimer=0,voidBlackoutCooldown=0,voidBlackoutAlpha=0,portalEnding={active:false,timer:0,startX:0,startY:0},finalJumpscare={active:false,timer:0,shown:false},shopOpen=false,shopUsed=false,marioEncounter={x:68,phase:'off',timer:0},sonicEncounter={x:28,phase:'off',timer:0,mood:0},marioStars=[],marioLuckyBoxes=[],marioHelpers=[],marioFight={active:false,x:68,hp:70,maxHp:70,lastHit:0,fireTimer:0,boxTimer:5};
   let sonicTrail={phase:'off'},labSequence={phase:'walk',timer:0};
   function loadLevel(index){
        const level=levels[index];if(checkpointLevel!==index){checkpointLevel=index;checkpointX=-5.8;checkpointNext=8}ground=level.ground;stairs=level.stairs||[];secretSteps=level.secretSteps||[];logs=level.logs;odmAnchors=level.odmAnchors||[];voidPlatforms=(level.voidPlatforms||[]).map(([x,y,w,phase])=>({x,y,w,phase,crumbleAt:0,brokenUntil:0}));voidEchoTimer=index===5?5:0;sonicCopyTimer=index===5?7:0;voidBlackoutTimer=0;voidBlackoutCooldown=index===5?6:0;voidBlackoutAlpha=0;portalEnding={active:false,timer:0,startX:0,startY:0};finalJumpscare={active:false,timer:0,shown:false};overlay.classList.remove('portal-jumpscare');world.goalX=level.goalX||53.5;world.goalY=0;world.width=Math.max(index===4?42:56,world.goalX+2.5);world.camera=Math.max(-7,Math.min(world.goalX-6.24,checkpointX-4.32));shopUsed=false;shopOpen=false;marioEncounter={x:68,phase:index===3?'waiting':'off',timer:0};sonicEncounter={x:28,phase:index===4?'waiting':'off',timer:0,mood:0};marioStars=[];marioLuckyBoxes=[];marioHelpers=[];marioFight={active:false,x:68,hp:70,maxHp:70,lastHit:0,fireTimer:0,boxTimer:5,starTimer:4};shopOverlay?.classList.add('hidden');
    vines=level.vines.map(([x,y,length])=>({x,y,length,angle:0,velocity:0}));
    coins=level.coins.map(([x,y])=>({x,y,taken:false}));
    mysteries=level.mysteries.map(([x,y,kind])=>({x,y,kind,taken:false,phase:x*.7}));
        animals=level.enemies.map(([x,type],i)=>({x,startX:x,type,y:0,vy:0,grounded:true,direction:i%2?-1:1,vx:0,phase:i*1.7,walkPhase:i*.9,active:true,hp:type==='bowserJr'?10:type==='titan'?6:type==='faceless'?3:type==='darkHand'?2:(type==='bear'||type==='ninja'||type==='koopa'||type==='badnik')?2:1,lastHit:0,patrol:2+i%3,checkpoint:x}));
        boss=level.bossX?{x:level.bossX,y:index===0?1:0,baseY:index===0?1:0,type:level.bossType||(index===0?'devil':index===1?'titanBoss':'boss'),active:true,awake:true,hp:level.bossHp??(index===0?14:index===1?40:8),maxHp:level.bossHp??(index===0?14:index===1?40:8),grounded:true,direction:-1,vx:0,vy:0,phase:0,walkPhase:0,lastHit:0,checkpoint:level.bossX}:null;
      if(index===5&&boss){boss.active=false;boss.awake=false}
     animals.forEach(a=>{if(a.type==='bird'){a.y=2.1+(a.phase%3)*.75;a.baseY=a.y;a.grounded=false;a.hp=2}});
         sonicTrail={phase:index===4?'walk':'off'};labSequence={phase:'walk',timer:0,sonicX:0,attackCooldown:0};
       if(index===4)sonicEncounter={x:86,phase:'waiting',timer:0,mood:0,backFacing:true};
  }
  loadLevel(levelIndex);
      const player = {x:checkpointX,y:0,vy:0,grounded:true,health:100,coins:0,invulnerable:0,starPower:0,attackTime:0,attackCooldown:0,dashTimer:0,dashCooldown:0,dashCooldownBase:2.8,dashUpgrade:0,shieldCharges:0,airJumped:false,tailsFlight:2.8,energyBombCooldown:0,face:1,rope:null,swingVX:0,weapon:'axe',weaponDamage:1,pistol:false,ammo:0,fireFlower:false,explosiveLauncher:false,explosiveAmmo:0,shotFlash:0,kameCooldown:0,kameFlash:0,punchSide:1,character:'boy',hairStyle:'spiky',hairColor:'#25232b',eyeColor:'#36a1df',skinTone:'light',accessory:'none',odmGear:false,odmFlight:0,odmCooldown:0,smokeTimer:0,capturedBy:null,captureTimer:0};
      if(savedRun){player.coins=Math.max(0,Number(savedRun.coins)||0);player.health=Math.max(1,Math.min(100,Number(savedRun.health)||100));player.weaponDamage=Math.max(1,Math.min(5,Number(savedRun.weaponDamage)||1));player.dashUpgrade=Math.max(0,Math.min(3,Number(savedRun.dashUpgrade)||0));player.dashCooldownBase=Math.max(1.2,2.8-player.dashUpgrade*.4);player.shieldCharges=Math.max(0,Math.min(1,Number(savedRun.shieldCharges)||0));if(['spiky','short','long','curly'].includes(savedRun.hairStyle))player.hairStyle=savedRun.hairStyle;if(/^#[0-9a-f]{6}$/i.test(savedRun.hairColor||''))player.hairColor=savedRun.hairColor;if(/^#[0-9a-f]{6}$/i.test(savedRun.eyeColor||''))player.eyeColor=savedRun.eyeColor;if(['boy','girl'].includes(savedRun.character))player.character=savedRun.character;if(['none','cap','mask','cap-mask','glasses'].includes(savedRun.accessory)&&savedRun.accessoryChosen){player.accessory=savedRun.accessory;player.accessoryChosen=true}if(['light','medium','deep'].includes(savedRun.skinTone))player.skinTone=savedRun.skinTone}
       function saveRun(){try{localStorage.setItem('beyond-finish-line-save',JSON.stringify({levelIndex,checkpointX,checkpointNext,coins:player.coins,health:player.health,weaponDamage:player.weaponDamage,dashUpgrade:player.dashUpgrade,shieldCharges:player.shieldCharges,completedLevels,character:player.character,hairStyle:player.hairStyle,hairColor:player.hairColor,eyeColor:player.eyeColor,accessory:player.accessory,accessoryChosen:player.accessoryChosen,skinTone:player.skinTone,hasStarted:!characterChoicePending}))}catch{}}
    const bullets=[],explosions=[],smokePuffs=[],chakraShots=[];
   let audioContext=null;
   function prepareAudio(){const AudioEngine=window.AudioContext||window.webkitAudioContext;if(!AudioEngine)return;try{audioContext=audioContext||new AudioEngine();if(audioContext.state==='suspended')audioContext.resume()}catch{audioContext=null}}
  function scream(){if(!audioContext)return;try{const now=audioContext.currentTime,osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sawtooth';osc.frequency.setValueAtTime(380,now);osc.frequency.exponentialRampToValueAtTime(92,now+.52);gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.085,now+.045);gain.gain.exponentialRampToValueAtTime(.0001,now+.58);osc.connect(gain);gain.connect(audioContext.destination);osc.start(now);osc.stop(now+.6)}catch{}}
  function playEvilLaugh(){if(!audioContext)return;try{const now=audioContext.currentTime;for(let i=0;i<6;i++){const start=now+i*.22,osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sawtooth';osc.frequency.setValueAtTime(i%2?260:340,start);osc.frequency.exponentialRampToValueAtTime(i%2?125:165,start+.13);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(.055,start+.025);gain.gain.exponentialRampToValueAtTime(.0001,start+.16);osc.connect(gain);gain.connect(audioContext.destination);osc.start(start);osc.stop(start+.17)}}catch{}}
  function playMimicVoice(){try{if(!window.speechSynthesis||!window.SpeechSynthesisUtterance)return;window.speechSynthesis.cancel();const voice=new SpeechSynthesisUtterance(language==='es'?'Tails… ven… te estoy esperando…':'Tails… come… I am waiting…');voice.lang=language==='es'?'es-ES':'en-US';voice.rate=.68;voice.pitch=.48;voice.volume=.65;const voices=window.speechSynthesis.getVoices();voice.voice=voices.find(v=>v.lang.toLowerCase().startsWith(language==='es'?'es':'en'))||null;window.speechSynthesis.speak(voice)}catch{}}
  function playSonicWhisper(){try{if(!window.speechSynthesis||!window.SpeechSynthesisUtterance)return;window.speechSynthesis.cancel();const voice=new SpeechSynthesisUtterance(language==='es'?'Tails… ¿eres tú?':'Tails… is that you?');voice.lang=language==='es'?'es-ES':'en-US';voice.rate=.78;voice.pitch=.82;voice.volume=.62;const voices=window.speechSynthesis.getVoices();voice.voice=voices.find(v=>v.lang.toLowerCase().startsWith(language==='es'?'es':'en'))||null;window.speechSynthesis.speak(voice)}catch{}}
  function playBehindWhisper(){try{if(!window.speechSynthesis||!window.SpeechSynthesisUtterance)return;window.speechSynthesis.cancel();const voice=new SpeechSynthesisUtterance(language==='es'?'Tails… detrás de ti…':'Tails… behind you…');voice.lang=language==='es'?'es-ES':'en-US';voice.rate=.62;voice.pitch=.42;voice.volume=.75;const voices=window.speechSynthesis.getVoices();voice.voice=voices.find(v=>v.lang.toLowerCase().startsWith(language==='es'?'es':'en'))||null;window.speechSynthesis.speak(voice)}catch{}}
  const keys = {left:false,right:false,jump:false};
   let started=false,finished=false,jumpQueued=false,last=0,scale=1,viewW=12,viewH=8.2,attemptsLeft=2,retryingLevel=false,characterChoicePending=true,customizationOpen=false;

  function resize(){
    const rect=canvas.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.max(1,Math.round(rect.width*dpr)); canvas.height=Math.max(1,Math.round(rect.height*dpr));
    scale=canvas.height/viewH; viewW=canvas.width/scale;
  }
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(canvas);
  window.addEventListener('resize',resize); resize();

  function hud(){
    const weaponHints=document.getElementById('combat-weapon-hints');if(weaponHints)weaponHints.hidden=started&&!finished;
    document.getElementById('health-num').textContent=`${Math.ceil(player.health)}%`;
    document.getElementById('health-bar').style.width=`${player.health}%`;
    document.getElementById('attempts-count').textContent=tr('attemptsLeft',{count:attemptsLeft});
    document.getElementById('coins').textContent=player.coins;
      const explorerLabel=document.querySelector('.gear-head');if(explorerLabel)explorerLabel.textContent=tr(levelIndex>=4?'tailsGear':levelIndex===2?(player.character==='girl'?'leafNinjaGirl':'leafNinja'):levelIndex===3?'marioGear':(player.character==='girl'?'explorerGirl':'explorer'));const gearDescription=document.querySelector('.gear p');if(gearDescription)gearDescription.innerHTML=levelIndex===4?(language==='es'?'Camina por Green Hill hasta encontrar a Sonic.':'Walk through Green Hill until you find Sonic.'):levelIndex===5?(language==='es'?'Avanza por el pasillo. Ataca con F/X y esquiva los golpes de Sonic.':'Move down the corridor. Attack with F/X and dodge Sonic’s strikes.'):tr(levelIndex===2?'leafGearCopy':levelIndex===3?'marioGearCopy':player.character==='girl'?'girlGearCopy':'gearCopy');
      document.getElementById('pistol-item').textContent=levelIndex>=4?tr('tailsGear'):levelIndex===2?tr('sasukePowers'):player.fireFlower&&levelIndex===3?tr('fireFlowerStored'):player.explosiveLauncher?tr('explosiveInventory'):player.odmGear&&player.odmFlight>0?tr('odmFlightMeter',{seconds:Math.ceil(player.odmFlight)}):tr(player.odmGear?'odmGear':player.transformed?'gokuForm':player.pistol?'pistolStored':'pistolMissing');
    document.getElementById('ammo-count').textContent=player.explosiveLauncher?player.explosiveAmmo:player.transformed?'∞':player.pistol?player.ammo:'—';
    const ammoCap=document.getElementById('ammo-cap');if(ammoCap)ammoCap.textContent=player.explosiveLauncher?'3':'15';
      const ammoLine=document.getElementById('ammo-line');if(ammoLine)ammoLine.hidden=levelIndex===1||levelIndex===2||levelIndex===4||levelIndex===5||player.transformed||player.fireFlower||(player.odmGear&&!player.explosiveLauncher);
      const ammoLabel=document.querySelector('[data-i18n="ammo"]');if(ammoLabel)ammoLabel.textContent=tr(player.explosiveLauncher?'explosiveAmmoLabel':'ammo');const coinLabel=document.querySelector('.coins [data-i18n="coins"]');if(coinLabel)coinLabel.textContent=tr('coins');
      const axeButton=document.querySelector('[data-control="attack"]');if(axeButton){axeButton.hidden=player.pistol||levelIndex===4;axeButton.textContent=player.odmGear?'🗡️':player.transformed?'👊':levelIndex>=4?'🌀':'🪓';axeButton.setAttribute('aria-label',tr(player.odmGear?'bladeControl':player.transformed?'gokuPunch':levelIndex>=4?'tailsTailControl':'axeControl'))}
      const ropeButton=document.querySelector('[data-control="rope"]');if(ropeButton){ropeButton.hidden=levelIndex===4||(levelIndex===2||levelIndex===3)&&!player.odmGear;ropeButton.setAttribute('aria-label',tr(player.odmGear?'odmControl':'ropeControl'));if(player.odmGear)ropeButton.textContent='💨';else ropeButton.textContent='🪢'}
     const odmHint=document.getElementById('odm-hint');if(odmHint){odmHint.hidden=!player.odmGear;odmHint.textContent=tr(player.explosiveLauncher?'explosiveHint':'odmHint')}
      const shootButton=document.querySelector('[data-control="shoot"]');if(shootButton){shootButton.hidden=levelIndex===4||(!player.pistol&&!player.explosiveLauncher&&!player.fireFlower);shootButton.textContent=player.fireFlower&&levelIndex===3?'🔥':player.explosiveLauncher?'💣':'🔫';shootButton.setAttribute('aria-label',tr(player.fireFlower&&levelIndex===3?'fireFlowerControl':player.explosiveLauncher?'explosiveControl':'shootControl'))}
     const kameButton=document.querySelector('[data-control="kamehameha"]');if(kameButton){const sasukeMode=levelIndex===2;kameButton.hidden=!player.transformed&&!sasukeMode;kameButton.textContent=sasukeMode?'🔥':'🌊';kameButton.setAttribute('aria-label',tr(sasukeMode?'sasukeJutsuControl':'kameControl'))}
      const kirinButton=document.querySelector('[data-control="kirin"]');if(kirinButton){kirinButton.hidden=levelIndex!==2;kirinButton.setAttribute('aria-label',tr('kirinControl'))}
      const ropeKeyHint=document.getElementById('rope-key-hint'),vineHint=document.getElementById('vine-hint');if(ropeKeyHint)ropeKeyHint.hidden=levelIndex===2||levelIndex===3||levelIndex===4;if(vineHint)vineHint.hidden=levelIndex===2||levelIndex===3||levelIndex===4;
     document.getElementById('chapter').textContent=`${language==='es'?'Nivel':'Level'} ${levelIndex+1} · ${levels[levelIndex].name[language]}`;
     const map=document.getElementById('map-levels');if(map){map.innerHTML=levels.map((level,i)=>`<div class="map-level ${completedLevels.includes(i)?'done':''} ${i===levelIndex?'current':''}"><span class="map-dot">${completedLevels.includes(i)?'✓':i+1}</span><span>${level.name[language]}</span></div>`).join('');document.getElementById('map-title').textContent=language==='es'?'🗺️ Progreso':'🗺️ Progress'}
  }
  function reset(){
    marioEnding={active:false,haunted:false,timer:0};overlay.classList.remove('haunted','sonic-end');startButton.hidden=false;
     Object.assign(player,{x:checkpointX,y:0,vy:0,grounded:true,health:100,coins:0,invulnerable:0,starPower:0,attackTime:0,attackCooldown:0,dashTimer:0,dashCooldown:0,airJumped:false,tailsFlight:2.8,energyBombCooldown:0,face:1,rope:null,swingVX:0,weapon:'axe',pistol:false,ammo:0,fireFlower:false,explosiveLauncher:false,explosiveAmmo:0,shotFlash:0,transformed:false,shotCooldown:0,kameCooldown:0,kameFlash:0,sasukeSeal:0,sasukeCooldown:0,kirinCharge:0,kirinCooldown:0,odmGear:false,odmFlight:0,odmCooldown:0,smokeTimer:0,capturedBy:null,captureTimer:0});
    bullets.length=0;explosions.length=0;smokePuffs.length=0;chakraShots.length=0;
     loadLevel(levelIndex);
     finished=false;noticeKey='';notice.textContent='';hud();saveRun();
  }
   function end(win){
     started=false;finished=true;
     if(win&&!completedLevels.includes(levelIndex))completedLevels.push(levelIndex);
     saveRun();hud();
    endResult=win?'win':'lose';renderEndScreen();
     if(!win&&attemptsLeft>1){attemptsLeft--;retryingLevel=true;overlayTitle.textContent=tr('tryAgain');overlayCopy.textContent=tr('retryLevelCopy',{count:attemptsLeft});startButton.textContent=tr('retryLevel')}
     else if(!win)retryingLevel=false;
     const canReturnHome=(win&&levelIndex===levels.length-1)||(!win&&!retryingLevel);
     customizationBack.hidden=!canReturnHome;customizationBack.dataset.home=String(canReturnHome);
     if(canReturnHome)customizationBack.textContent=language==='es'?'⌂ Volver al inicio':'⌂ Back to start';
     overlay.dataset.result=win?'win':'lose';overlay.classList.remove('hidden');
  }
  function renderEndScreen(){
    if(endResult==='win'&&levelIndex<levels.length-1){overlayTitle.textContent=tr('levelComplete',{level:levelIndex+1});overlayCopy.textContent=tr('levelCopy',{name:levels[levelIndex].name[language]});startButton.textContent=tr('nextLevel')}
     else if(endResult==='win'&&levelIndex===5){overlayTitle.textContent=language==='es'?'¿Sonic…?':'Sonic…?';overlayCopy.textContent=language==='es'?'Por un instante, Tails creyó oír a su amigo. Entonces la señal volvió a llamarlo desde la oscuridad.':'For one moment, Tails thought he heard his friend. Then the signal called him back from the dark.';startButton.textContent=tr('playAgain');overlay.classList.add('haunted')}
    else if(endResult==='win'){overlayTitle.textContent=tr('gameWon');overlayCopy.textContent=tr('gameWonCopy',{levels:levels.length,coins:player.coins});startButton.textContent=tr('playAgain')}
    else if(endResult==='lose'){overlayTitle.textContent=tr('tryAgain');overlayCopy.textContent=tr('tryAgainCopy');startButton.textContent=tr('retry')}
  }
  function renderMarioHauntedScreen(){overlayTitle.textContent=tr('marioAftermathTitle');overlayCopy.textContent=tr('marioAftermathCopy');startButton.hidden=true;characterChoice.hidden=true}
  function renderSonicFinalScreen(){overlayTitle.textContent=language==='es'?'Sin señal':'No signal';overlayCopy.textContent='';startButton.hidden=true;characterChoice.hidden=true;overlay.classList.remove('haunted');overlay.classList.add('sonic-end')}
  function showLevelBriefing(){
    started=false;finished=false;endResult='';characterChoice.hidden=!characterChoicePending;
    overlayTitle.textContent=customizationOpen?(language==='es'?'Personaliza tu personaje':'Customize your character'):levels[levelIndex].name[language];
      overlayCopy.textContent=customizationOpen?(language==='es'?'Elige tu aspecto antes de jugar. La ropa se asignará automáticamente según el nivel.':'Choose your look before playing. Your outfit will be assigned automatically for each level.'):levelIndex===5?(language==='es'?'Avanza por el pasillo del laboratorio. Algo terrible está ocurriendo…':'Move down the laboratory corridor. Something terrible is happening…'):tr(`level${levelIndex}BriefingCopy`)===`level${levelIndex}BriefingCopy`?tr(levelIndex===4?'voidGearCopy':'gearCopy'):tr(`level${levelIndex}BriefingCopy`);
    characterChoice.hidden=!customizationOpen;
    customizationBack.hidden=!customizationOpen;
    customizationBack.dataset.home='false';customizationBack.textContent=language==='es'?'← Volver':'← Back';
    startButton.textContent=characterChoicePending&&!customizationOpen?(language==='es'?'Jugar':'Play'):customizationOpen?(language==='es'?`Comenzar nivel ${levelIndex+1}`:`Start level ${levelIndex+1}`):tr('beginLevel');
    overlay.dataset.result='briefing';overlay.classList.remove('hidden');
  }
  function begin(){
    prepareAudio();
    if(overlay.dataset.result==='marioFake'){
      overlay.classList.add('hidden');overlay.dataset.result='';startButton.textContent=tr('beginLevel');started=true;finished=false;endResult='';return;
    }
      if(overlay.dataset.result==='briefing'){
       if(characterChoicePending&&!customizationOpen){customizationOpen=true;characterChoice.hidden=false;customizationBack.hidden=false;overlayTitle.textContent=language==='es'?'Personaliza tu personaje':'Customize your character';overlayCopy.textContent=language==='es'?'Elige libremente el aspecto que quieras: peinado, colores, tono de piel y accesorios. La ropa cambia según el nivel.':'Choose the look you want: hairstyle, colors, skin tone, and accessories. Your outfit changes with each level.';startButton.textContent=language==='es'?'Comenzar nivel 1':'Start level 1';return}
       characterChoicePending=false;customizationOpen=false;characterChoice.hidden=true;started=true;finished=false;endResult='';if(levelIndex===0){player.pistol=true;player.ammo=15;player.weapon='pistol'}else if(levelIndex===1){player.odmGear=true;player.weapon='blades'}else if(levelIndex===2){player.odmGear=false;player.weapon='sasuke'}else if(levelIndex===3){player.odmGear=false;player.weapon='axe'}overlay.classList.add('hidden');overlay.dataset.result='';hud();saveRun();return;
    }
    if(finished&&endResult==='lose'&&retryingLevel){
      reset();
        if(levelIndex===0){player.pistol=true;player.ammo=15;player.transformed=false;player.weapon='pistol'}
       else if(levelIndex===1){player.pistol=false;player.transformed=false;player.odmGear=true;player.weapon='blades'}
       else if(levelIndex===2){player.pistol=false;player.transformed=false;player.odmGear=false;player.weapon='sasuke'}
      retryingLevel=false;customizationOpen=false;
      showLevelBriefing();return;
    }else if(finished&&overlay.dataset.result==='win'&&levelIndex<levels.length-1){
       if(!shopUsed){openLevelShop();return}
       attemptsLeft=2;
        levelIndex++;loadLevel(levelIndex);Object.assign(player,{x:-5.8,y:0,vy:0,grounded:true,rope:null,swingVX:0,tailsFlight:2.8,odmFlight:0,odmCooldown:0,invulnerable:0,kameCooldown:0,kameFlash:0,capturedBy:null,captureTimer:0});keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;
      if(levelIndex===0){player.pistol=true;player.ammo=15;player.transformed=false;player.weapon='pistol'}
       else if(levelIndex===1){player.pistol=false;player.ammo=0;player.transformed=false;player.odmGear=true;player.weapon='blades'}
       else if(levelIndex===2){player.pistol=false;player.transformed=false;player.odmGear=false;player.explosiveLauncher=false;player.fireFlower=false;player.weapon='sasuke'}
        else{player.pistol=false;player.transformed=false;player.odmGear=false;player.explosiveLauncher=false;player.explosiveAmmo=0;player.fireFlower=false;player.weapon='axe'}
       bullets.length=0;explosions.length=0;chakraShots.length=0;noticeKey='';notice.textContent='';prepareAudio();customizationOpen=false;saveRun();hud();
      showLevelBriefing();return;
    }else if(finished){levelIndex=0;attemptsLeft=2;retryingLevel=false;characterChoicePending=true;loadLevel(levelIndex);reset();showLevelBriefing();return}
    started=true;finished=false;endResult='';overlay.classList.add('hidden');overlay.dataset.result='';hud();
  }
   const hairStyleSelect=document.getElementById('hair-style'),hairColorSelect=document.getElementById('hair-color'),eyeColorSelect=document.getElementById('eye-color'),accessorySelect=document.getElementById('accessory-choice'),skinToneSelect=document.getElementById('skin-tone');
   function updateAppearancePreview(){
     player.hairStyle=hairStyleSelect.value;player.hairColor=hairColorSelect.value;player.eyeColor=eyeColorSelect.value;player.accessory=accessorySelect.value;player.skinTone=skinToneSelect.value;
     const scalp='M18 70 Q13 39 18 27 Q22 7 50 9 Q78 7 82 27 Q87 39 82 70 L76 86 L68 78 L65 53 Q50 40 35 53 L32 78 L24 86Z';
     const shapes={spiky:[scalp,'M22 53 Q24 29 49 29 Q75 29 78 53 L72 41 Q60 34 51 40 Q37 33 27 47Z'],short:[scalp,'M22 48 Q27 31 50 31 Q73 31 78 48 L70 43 Q60 40 51 43 Q38 39 30 47Z'],long:[scalp,'M21 54 Q21 26 49 28 Q77 27 79 54 L72 43 Q61 35 51 40 Q38 33 27 49Z'],curly:[scalp,'M22 52 Q22 28 49 29 Q76 28 78 52 L70 42 Q61 34 51 40 Q38 33 28 48Z']};
     const paths=shapes[player.hairStyle]||shapes.spiky;for(const [id,d] of [['preview-hair',paths[0]],['preview-fringe',paths[1]]]){const path=document.getElementById(id);path.setAttribute('d',d);path.setAttribute('fill',player.hairColor)}
     document.querySelectorAll('.appearance-preview ellipse').forEach(eye=>eye.setAttribute('fill',player.eyeColor));
     const cap=document.getElementById('preview-cap'),mask=document.getElementById('preview-mask'),glasses=document.getElementById('preview-glasses'),wearsCap=['cap','cap-mask'].includes(player.accessory),wearsMask=['mask','cap-mask'].includes(player.accessory);cap.style.display=wearsCap?'':'none';mask.style.display=wearsMask?'':'none';glasses.style.display=player.accessory==='glasses'?'':'none';
     const skinColors={light:'#f2d2bd',medium:'#b87955',deep:'#704b38'},skin=skinColors[player.skinTone]||skinColors.light,preview=document.querySelector('.appearance-preview');document.getElementById('preview-skin').setAttribute('fill',skin);preview.style.setProperty('--preview-skin',skin);preview.style.setProperty('--preview-outfit',levelIndex===0?(player.character==='girl'?'#d6b478':'#929592'):levelIndex===1?'#49694f':levelIndex===2?'#49694f':levelIndex===3?'#e13a35':'#f19a2e');preview.title=language==='es'?`Vista previa: apariencia y ropa del nivel ${levelIndex+1}`:`Preview: appearance and level ${levelIndex+1} outfit`;
     boyChoice.classList.toggle('selected',player.character==='boy');girlChoice.classList.toggle('selected',player.character==='girl');boyChoice.setAttribute('aria-pressed',String(player.character==='boy'));girlChoice.setAttribute('aria-pressed',String(player.character==='girl'));
     const en=language==='en';document.getElementById('hair-style-label').textContent=en?'Hairstyle':'Peinado';document.getElementById('hair-color-label').textContent=en?'Hair color':'Color de pelo';document.getElementById('eye-color-label').textContent=en?'Eye color':'Color de ojos';document.getElementById('accessory-label').textContent=en?'Accessory':'Accesorio';document.getElementById('skin-tone-label').textContent=en?'Skin tone':'Tono de piel';document.getElementById('outfit-note').textContent=en?'Outfit changes automatically with each level.':'La ropa cambia automáticamente en cada nivel.';
     const sets=en?[['Messy','Short','Long','Curly'],['Black','Brown','Blond','Red','Blue'],['Blue','Green','Violet','Brown','Red'],['Cap + mask','No accessories','Cap only','Mask only','Glasses'],['Light','Medium','Warm dark']]:[['Despeinado','Corto','Largo','Rizado'],['Negro','Castaño','Rubio','Pelirrojo','Azul'],['Azul','Verde','Violeta','Marrón','Rojo'],['Gorra y antifaz','Sin accesorios','Solo gorra','Solo antifaz','Lentes'],['Blanco','Moreno','Negro cálido']];
     [hairStyleSelect,hairColorSelect,eyeColorSelect,accessorySelect,skinToneSelect].forEach((select,i)=>[...select.options].forEach((option,j)=>option.textContent=sets[i][j]));
     saveRun();
   }
   [hairStyleSelect,hairColorSelect,eyeColorSelect,skinToneSelect].forEach(select=>select.addEventListener('change',updateAppearancePreview));accessorySelect.addEventListener('change',()=>{player.accessoryChosen=true;updateAppearancePreview()});
   function selectCharacter(character){player.character=character;updateAppearancePreview();hud()}
   boyChoice.addEventListener('click',()=>selectCharacter('boy'));girlChoice.addEventListener('click',()=>selectCharacter('girl'));
   customizationBack.addEventListener('click',()=>{
     if(customizationBack.dataset.home==='true'){
       levelIndex=0;attemptsLeft=2;retryingLevel=false;characterChoicePending=true;customizationOpen=false;checkpointLevel=-1;
       overlay.classList.remove('haunted','sonic-end');startButton.hidden=false;reset();showLevelBriefing();return;
     }
     customizationOpen=false;characterChoice.hidden=true;customizationBack.hidden=true;showLevelBriefing();
   });
   document.getElementById('restart').addEventListener('click',()=>{attemptsLeft=2;retryingLevel=false;customizationOpen=false;reset();if(levelIndex===0){player.pistol=true;player.ammo=15;player.weapon='pistol'}else if(levelIndex===1){player.odmGear=true;player.weapon='blades'}else if(levelIndex===2){player.weapon='sasuke'}hud();showLevelBriefing()});
    function refreshLevelShop(){
      shopCoins.textContent=player.coins;
      const attack=document.getElementById('buy-attack'),health=document.getElementById('buy-health'),shield=document.getElementById('buy-shield'),dash=document.getElementById('buy-dash');
      attack.disabled=player.coins<20||player.weaponDamage>=5;
      health.disabled=player.coins<15||player.health>=100;
      shield.disabled=player.coins<25||player.shieldCharges>0;
      dash.disabled=player.coins<20||player.dashUpgrade>=3;
      attack.textContent=player.weaponDamage>=5?(language==='es'?'Máximo':'Max'):'🪙 20';
      health.textContent=player.health>=100?(language==='es'?'Salud completa':'Full health'):'🪙 15';
      shield.textContent=player.shieldCharges?(language==='es'?'Activo':'Ready'):'🪙 25';
      dash.textContent=player.dashUpgrade>=3?(language==='es'?'Máximo':'Max'):'🪙 20';
   }
   function openLevelShop(){
     shopUsed=true;shopOpen=true;started=false;
     const es=language==='es';
     document.getElementById('shop-kicker').textContent=es?'Tienda entre niveles':'Between-level shop';
     document.getElementById('shop-title').textContent=es?'Mejora tu equipo':'Upgrade your gear';
     document.getElementById('shop-copy').textContent=es?'Usa las monedas recogidas para aumentar tu ataque o recuperar salud antes del siguiente nivel.':'Spend collected coins to increase your attack or restore health before the next level.';
     document.getElementById('shop-wallet-label').textContent=es?'🪙 Tus monedas:':'🪙 Your coins:';
     document.getElementById('attack-upgrade-name').textContent=es?'Ataque más fuerte':'Stronger attack';
     document.getElementById('attack-upgrade-desc').textContent=es?`Aumenta el daño (${player.weaponDamage} → ${Math.min(5,player.weaponDamage+1)}).`:`Increase damage (${player.weaponDamage} → ${Math.min(5,player.weaponDamage+1)}).`;
      document.getElementById('health-upgrade-name').textContent=es?'Recuperar salud':'Restore health';
      document.getElementById('health-upgrade-desc').textContent=es?'Recupera 35 puntos de salud.':'Restore 35 health points.';
      document.getElementById('shield-upgrade-name').textContent=es?'Escudo de emergencia':'Emergency shield';
      document.getElementById('shield-upgrade-desc').textContent=player.shieldCharges?(es?'Ya está listo para bloquear un golpe.':'Ready to block one hit.'):(es?'Bloquea el siguiente golpe.':'Blocks the next hit.');
      document.getElementById('dash-upgrade-name').textContent=es?'Impulso más rápido':'Faster dash';
      document.getElementById('dash-upgrade-desc').textContent=es?`Reduce recarga (${player.dashCooldownBase.toFixed(1)} s).`:`Reduce cooldown (${player.dashCooldownBase.toFixed(1)} s).`;
     document.getElementById('shop-continue').textContent=es?'Continuar al siguiente nivel':'Continue to next level';
     refreshLevelShop();shopOverlay.classList.remove('hidden');
   }
    document.getElementById('buy-attack').addEventListener('click',()=>{if(player.coins<20||player.weaponDamage>=5)return;player.coins-=20;player.weaponDamage++;document.getElementById('attack-upgrade-desc').textContent=language==='es'?`Aumenta el daño (${player.weaponDamage} → ${Math.min(5,player.weaponDamage+1)}).`:`Increase damage (${player.weaponDamage} → ${Math.min(5,player.weaponDamage+1)}).`;refreshLevelShop();hud();saveRun()});
    document.getElementById('buy-health').addEventListener('click',()=>{if(player.coins<15||player.health>=100)return;player.coins-=15;player.health=Math.min(100,player.health+35);document.getElementById('health-upgrade-desc').textContent=language==='es'?`Salud actual: ${Math.ceil(player.health)}%.`:`Current health: ${Math.ceil(player.health)}%.`;refreshLevelShop();hud();saveRun()});
    document.getElementById('buy-shield').addEventListener('click',()=>{if(player.coins<25||player.shieldCharges)return;player.coins-=25;player.shieldCharges=1;refreshLevelShop();hud();saveRun()});
    document.getElementById('buy-dash').addEventListener('click',()=>{if(player.coins<20||player.dashUpgrade>=3)return;player.coins-=20;player.dashUpgrade++;player.dashCooldownBase=Math.max(1.2,2.8-player.dashUpgrade*.4);document.getElementById('dash-upgrade-desc').textContent=language==='es'?`Reduce recarga (${player.dashCooldownBase.toFixed(1)} s).`:`Reduce cooldown (${player.dashCooldownBase.toFixed(1)} s).`;refreshLevelShop();hud();saveRun()});
   document.getElementById('shop-continue').addEventListener('click',()=>{shopOpen=false;shopOverlay.classList.add('hidden');begin()});
   function setKey(k,v){keys[k]=v;if(k==='jump'&&v){jumpQueued=true;if(player.odmGear)activateODMFlight()}}
   function dash(){if(!started||finished||player.dashCooldown>0||player.rope)return;player.dashTimer=.24;player.dashCooldown=player.dashCooldownBase;player.invulnerable=Math.max(player.invulnerable,.3);player.face=Number(keys.right)-Number(keys.left)||player.face||1}
  function toggleRope(){
    if(!started||finished)return;
    if(player.odmGear){activateODMFlight();return}
    if(player.rope){releaseRope();return}
    grabRope();
  }
  function activateODMFlight(){
    if(!started||finished||!player.odmGear)return;
    if(player.odmFlight>0){say('odmFlightActive',{seconds:Math.ceil(player.odmFlight)});return}
    if(player.odmCooldown>0){say('odmFlightRefilling');return}
    player.odmFlight=10;player.odmCooldown=10.8;player.smokeTimer=0;player.rope=null;player.grounded=false;player.vy=0;
    say('odmFlightStart');
  }
  function grabRope(){
    if(player.rope||!started)return false;
    if(player.odmGear)return false;
    const candidate=vines.find(v=>Math.abs(player.x-v.x)<.95&&player.y+1.85>v.y-v.length-.85&&player.y+1.85<v.y+.3);
    if(!candidate)return false;
    const length=candidate.length;
    candidate.angle=Math.asin(Math.max(-.72,Math.min(.72,(player.x-candidate.x)/length)));
    candidate.velocity=keys.left ? -.8 : keys.right ? .8 : 0;
    player.rope=candidate;player.grounded=false;player.vy=0;player.swingVX=0;
    say('grabbedVine');
    return true;
  }
  function releaseRope(){
    const vine=player.rope;if(!vine)return;
    player.swingVX=Math.max(-7,Math.min(7,vine.length*Math.cos(vine.angle)*vine.velocity));
    player.vy=Math.max(2.6,Math.min(8,vine.length*Math.sin(vine.angle)*vine.velocity+3.2));
    player.rope=null;player.grounded=false;
    say('releasedVine');
  }
  function attack(){
    if(!started||finished||player.attackCooldown>0||player.pistol)return;
    if(player.capturedBy){if(levelIndex>=4)tailsTailAttack();return}
    if(levelIndex>=4){tailsTailAttack();return}
    player.attackTime=.38;player.attackCooldown=player.transformed?.42:.58;
    if(player.odmGear){
      const target=[...animals.filter(a=>a.active&&a.type==='titan'),...(boss?.active&&boss.type==='titanBoss'?[boss]:[])].find(t=>Math.abs(t.x-player.x)<(player.rope?.target===t?3.2:2.1)&&player.y<t.y+5.4);
      if(target)damageEnemy(target,player.rope?.target===target?8:3,'blades');else say('bladeMiss');return;
    }
        if(player.transformed){
      player.punchSide=player.punchSide===1?-1:1;
      const target=boss?.active&&boss.type==='sonic'&&Math.abs(boss.x-player.x)<2.05&&Math.abs((boss.y+1)-(player.y+1.15))<2.1?boss:null;
      if(target)damageEnemy(target,3,'punch');else say('punchMiss');
      return;
    }
    const targetBoss=boss?.active&&Math.abs(boss.x-(player.x+player.face*.72))<1.55&&player.y<.85?boss:null;
    const target=animals.find(a=>a.active&&Math.abs(a.x-(player.x+player.face*.72))<(a.type==='bear'?.98:.92)&&player.y<.75);
    const hit=targetBoss||target;
    if(hit)damageEnemy(hit,player.weaponDamage,'hacha');
    else say('axeMiss');
  }
  function tailsTailAttack(){
    player.attackTime=.42;player.attackCooldown=.62;let hitCount=0;
    if(player.capturedBy?.type==='darkHand'){player.capturedBy=null;player.captureTimer=0;player.invulnerable=Math.max(player.invulnerable,.55);say('darkHandEscaped');return}
    for(const target of [...animals,...(boss?.active?[boss]:[])])if(target.active&&Math.abs(target.x-(player.x+player.face*.42))<1.7&&Math.abs(target.y-player.y)<2.2){damageEnemy(target,target.type==='voidSonic'?2:2,'tailsTail');hitCount++}
    if(!hitCount)say('tailsTailMiss');else say('tailsTailSpin');
  }
  function kamehameha(){
    if(levelIndex===2&&!player.transformed){sasukeJutsu();return}
    if(!started||finished||!player.transformed||player.kameCooldown>0)return;
    const direction=aim;player.kameCooldown=2.2;player.kameFlash=.42;
    bullets.push({x:player.x+direction.x*.72,y:player.y+1.42+direction.y*.72,vx:direction.x*12,vy:direction.y*12,life:1.45,kind:'kame'});
    say('kameLaunched');
  }
  function sasukeJutsu(){
     if(!started||finished||levelIndex!==2||player.sasukeCooldown>0)return;
    // Hold a recognizable sequence of hand seals, then release Sasuke's Fire Style jutsu.
    player.sasukeSeal=.38;player.sasukeCooldown=1.35;
  }
  function kirinJutsu(){
     if(!started||finished||levelIndex!==2||player.kirinCooldown>0||player.kirinCharge>0)return;
    player.kirinCharge=.24;player.kirinCooldown=1.45;
  }
  function damageEnemy(target,damage,source){
    const previousPhase=target.phase||1;
    target.hp=Math.max(0,target.hp-damage);
    if(target.maxHp>1)target.phase=target.hp<=target.maxHp*.5?2:1;
    if(target.phase===2&&previousPhase!==2){notice.textContent=language==='es'?'¡El jefe entra en su segunda fase!':'The boss enters phase two!';target.phaseFlash=1.2}
     if(target.hp===0){target.active=false;say(target.type==='eggman'?'eggmanDefeated':target.type==='badnik'?'badnikDefeated':target.type==='darkHand'?'darkHandDefeated':target.type==='faceless'?'facelessDefeated':target.type==='sonicCopy'?'sonicCopyBurst':target.type==='voidSonic'?'voidSonicDefeated':target.type==='bowser'?'bowserDefeated':target.type==='titanBoss'?'titanBossDefeated':target.type==='titan'?'titanDefeated':target.type==='devil'?'devilDefeated':target.type==='sonic'?'sonicDefeated':target.type==='boss'&&levelIndex===2?'narutoDefeated':target.type==='boss'?'leopardDefeated':target.type==='bird'?'birdDefeated':target.type==='ninja'?'ninjaDefeated':target.type==='bear'?'bearFled':'wolfFled');if(target.type==='bowser'&&levelIndex===3)showMarioFakeEnding()}
    else if(target.type==='titan'||target.type==='titanBoss')say(source==='explosive'?(target.type==='titanBoss'?'titanBossBlastHit':'titanBlastHit'):(target.type==='titanBoss'?'titanBossHit':'titanHit'),{hp:target.hp});
     else if(target.type==='devil')say('devilHit',{hp:target.hp});
     else if(target.type==='eggman')say('eggmanHit',{hp:target.hp});
     else if(target.type==='badnik')say('badnikHit');
     else if(target.type==='darkHand')say('darkHandHit',{hp:target.hp});
     else if(target.type==='faceless')say('facelessHit');
     else if(target.type==='voidSonic')say('voidSonicHit',{hp:target.hp});
    else if(target.type==='sonic')say(source==='punch'?'gokuPunch':source==='kame'?'sonicKameHit':'sonicHit',{hp:target.hp});
    else if(target.type==='boss'&&levelIndex===2)say('narutoHit',{hp:target.hp});
    else if(target.type==='bowser')say('bowserHit',{hp:target.hp});
    else if(target.type==='boss')say('leopardHit',{source:tr(source==='pistola'?'pistol':'axe'),hp:target.hp});
    else say(target.type==='bird'?'birdHit':target.type==='bear'?'bearHit':target.type==='ninja'?'ninjaHit':'wolfHit',{hp:target.hp});
  }
  function showMarioFakeEnding(){
    started=false;finished=false;overlayTitle.textContent=tr('marioFakeTitle');overlayCopy.textContent=tr('marioFakeCopy');startButton.textContent=tr('marioContinue');overlay.dataset.result='marioFake';overlay.classList.remove('hidden');
  }
    let aim={x:1,y:0};
   canvas.addEventListener('pointermove',e=>{
      const rect=canvas.getBoundingClientRect(),px=(e.clientX-rect.left)/rect.width*viewW+world.camera,py=viewH-(e.clientY-rect.top)/rect.height*viewH;
      const dx=px-(player.x+.25),dy=py-(player.y+1.25),length=Math.hypot(dx,dy)||1;aim={x:dx/length,y:dy/length};
    });
    canvas.addEventListener('pointerdown',e=>{
     if(e.button!==0)return;
      if(started&&!finished&&levelIndex===1&&player.odmGear){activateODMFlight();return}
     if(levelIndex===0)shoot();
   });
      function shoot(){
       if(!started||finished)return;
      if(levelIndex===5){tailsEnergyBomb();return}
      if(levelIndex===3&&player.fireFlower){if(player.shotCooldown>0)return;player.shotCooldown=.42;const direction=player.face;bullets.push({x:player.x+direction*.4,y:player.y+.92,vx:direction*8.5,vy:4.4,life:2,kind:'marioFire'});player.shotFlash=.12;say('marioFireLaunched');return}
     if(player.explosiveLauncher){
      if(player.explosiveAmmo<=0){say('explosivesEmpty');return}
      const direction=aim;player.explosiveAmmo--;player.shotFlash=.16;
      bullets.push({x:player.x+direction.x*.62,y:player.y+1.25+direction.y*.62,vx:direction.x*13,vy:direction.y*13,life:1.2,kind:'bomb'});
      say('explosiveFired',{ammo:player.explosiveAmmo});hud();return;
    }
     if(!player.pistol){say('needPistol');return}
    if(player.ammo<=0){say('emptyPistol');return}
    player.ammo--;player.shotFlash=.1;const direction=levelIndex>=0?aim:{x:player.face,y:0};bullets.push({x:player.x+direction.x*.5,y:player.y+1.3+direction.y*.5,vx:direction.x*17,vy:direction.y*17,life:.85,kind:'bullet'});
       say('shot',{ammo:player.ammo});hud();
   }
   function tailsEnergyBomb(){
     if(!started||finished||player.energyBombCooldown>0||player.capturedBy){if(player.energyBombCooldown>0)say('tailsBombRecharging');return}
     const direction=player.face||1;player.energyBombCooldown=1.5;player.shotFlash=.18;
     bullets.push({x:player.x+direction*.55,y:player.y+1.2,vx:direction*9.5,vy:.45,life:1.35,kind:'tailsEnergyBomb'});say('tailsBombLaunched');
   }
  window.addEventListener('keydown',e=>{
    if(['ArrowLeft','ArrowRight','ArrowUp',' '].includes(e.key))e.preventDefault();
    if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a')setKey('left',true);
    if(e.key==='ArrowRight'||e.key.toLowerCase()==='d')setKey('right',true);
    if(e.key==='ArrowUp'||e.key===' '||e.key.toLowerCase()==='w'){
      if(player.rope)releaseRope();else if(!grabRope())setKey('jump',true);
    }
    if(e.key.toLowerCase()==='e')toggleRope();
    if(e.key.toLowerCase()==='f'||e.key.toLowerCase()==='x')attack();
    if(e.key.toLowerCase()==='g'&&!player.transformed)shoot();
    if(e.key.toLowerCase()==='c')kamehameha();
    if(e.key.toLowerCase()==='r'&&levelIndex===2)sasukeJutsu();
     if(e.key.toLowerCase()==='t'&&levelIndex===2)kirinJutsu();
     if(e.key.toLowerCase()==='q'||e.key==='Shift')dash();
  });
  window.addEventListener('keyup',e=>{
    if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a')setKey('left',false);
    if(e.key==='ArrowRight'||e.key.toLowerCase()==='d')setKey('right',false);
    if(e.key==='ArrowUp'||e.key===' '||e.key.toLowerCase()==='w')setKey('jump',false);
  });
  for(const button of document.querySelectorAll('[data-control]')){
    const name=button.dataset.control;
     if(name==='kirin'){button.addEventListener('pointerdown',e=>{e.preventDefault();kirinJutsu()});continue}
    if(name==='dash'){button.addEventListener('pointerdown',e=>{e.preventDefault();dash()});continue}
    if(name==='attack'){button.addEventListener('pointerdown',e=>{e.preventDefault();attack()});continue}
    if(name==='shoot'){button.addEventListener('pointerdown',e=>{e.preventDefault();shoot()});continue}
    if(name==='kamehameha'){button.addEventListener('pointerdown',e=>{e.preventDefault();kamehameha()});continue}
    if(name==='rope'){button.addEventListener('pointerdown',e=>{e.preventDefault();toggleRope()});continue}
    button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);setKey(name,true)});
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,()=>setKey(name,false));
  }
  function hurt(amount,messageKey){
    if(player.starPower>0||player.invulnerable>0)return;
    if(player.shieldCharges>0){player.shieldCharges--;player.invulnerable=1.1;notice.textContent=language==='es'?'¡El escudo bloqueó el golpe!':'The shield blocked the hit!';hud();saveRun();return}
    player.health=Math.max(0,player.health-amount);player.invulnerable=1.05;say(messageKey);hud();saveRun();
    if(player.health<=0){
      if(checkpointX>-5.8){player.x=checkpointX;player.y=0;player.vy=0;player.grounded=true;player.rope=null;player.swingVX=0;player.health=55;player.invulnerable=2;player.dashTimer=0;notice.textContent=language==='es'?'¡Punto de control! Regresas con 55% de salud.':'Checkpoint! You return with 55% health.';hud();saveRun()}
      else end(false);
    }
  }

  // Draw with the camera focused on the player; each shape is flat, outlined anime art.
  function worldDraw(fn,x,y){ctx.save();ctx.translate((x-world.camera)*scale,canvas.height-y*scale);ctx.scale(scale,-scale);fn();ctx.restore()}
  function ellipse(x,y,rx,ry,fill,stroke='#28352e',lw=.018){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.lineWidth=lw;ctx.strokeStyle=stroke;ctx.stroke()}}
  function line(points,color,width=.025){ctx.beginPath();ctx.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)ctx.lineTo(points[i][0],points[i][1]);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke()}
   function drawSky(time){
            const cloudLevel=levelIndex===0,greenHillLevel=false,sonicNightmare=false,voidLevel=levelIndex===4,titanLevel=levelIndex===1,villageLevel=levelIndex===2,marioLevel=levelIndex===3;
           const nightmare=levelIndex===3&&marioEncounter.phase==='combat';
       const gradient=ctx.createLinearGradient(0,0,0,canvas.height);
      if(cloudLevel){gradient.addColorStop(0,'#537db7');gradient.addColorStop(.48,'#9bc9e8');gradient.addColorStop(1,'#e7eff0')}
          else if(levelIndex===5){gradient.addColorStop(0,'#08070b');gradient.addColorStop(.5,'#190b10');gradient.addColorStop(1,'#390b13')}
          else if(sonicNightmare){gradient.addColorStop(0,'#030307');gradient.addColorStop(.48,'#10040a');gradient.addColorStop(1,'#390713')}
         else if(greenHillLevel){gradient.addColorStop(0,'#32a9e8');gradient.addColorStop(.48,'#9be7ff');gradient.addColorStop(1,'#fff1b4')}
        else if(titanLevel){gradient.addColorStop(0,'#617381');gradient.addColorStop(.4,'#aab4b4');gradient.addColorStop(.75,'#d0c9b6');gradient.addColorStop(1,'#e4d7bd')}
        else if(villageLevel){gradient.addColorStop(0,'#527e9f');gradient.addColorStop(.42,'#91b8bc');gradient.addColorStop(.75,'#d5c49d');gradient.addColorStop(1,'#d9a875')}
        else if(marioLevel&&nightmare){gradient.addColorStop(0,'#08060d');gradient.addColorStop(.48,'#250711');gradient.addColorStop(1,'#64121d')}
        else if(marioLevel){gradient.addColorStop(0,'#51a9ee');gradient.addColorStop(.52,'#a7e6ff');gradient.addColorStop(1,'#efffc4')}
        else if(voidLevel){gradient.addColorStop(0,'#020207');gradient.addColorStop(.48,'#10040a');gradient.addColorStop(1,'#310710')}
       else{gradient.addColorStop(0,'#83b1ca');gradient.addColorStop(.38,'#c2d3d2');gradient.addColorStop(.68,'#9ba98a');gradient.addColorStop(1,'#536744')}
       ctx.fillStyle=gradient;ctx.fillRect(0,0,canvas.width,canvas.height);if(levelIndex===5)return;
       if(voidLevel){
         for(let layer=0;layer<3;layer++)for(let i=0;i<7;i++){
           const x=((i*211-layer*world.camera*5+canvas.width*2)%(canvas.width+280))-110;
           const y=canvas.height*(.19+layer*.105+(i%2)*.025),w=canvas.height*(.24+(i%3)*.055);
           const cloud=ctx.createLinearGradient(0,y-w*.14,0,y+w*.12);cloud.addColorStop(0,layer===0?'#bd1728':'#85101f');cloud.addColorStop(.58,'#4c0915');cloud.addColorStop(1,'#19060d');
           ctx.fillStyle=cloud;ctx.beginPath();ctx.ellipse(x,y,w*.52,w*.105,0,0,Math.PI*2);ctx.ellipse(x-w*.23,y+2,w*.23,w*.1,0,0,Math.PI*2);ctx.ellipse(x+w*.17,y+1,w*.3,w*.09,0,0,Math.PI*2);ctx.fill();
         }
         for(let layer=0;layer<3;layer++){ctx.beginPath();const base=canvas.height*(.69+layer*.055);ctx.moveTo(0,canvas.height);ctx.lineTo(0,base);for(let x=0;x<=canvas.width+24;x+=24){const wx=x/scale+world.camera;ctx.lineTo(x,base+Math.sin(wx*.16+layer*2)*canvas.height*.022+Math.sin(wx*.045)*canvas.height*.028)}ctx.lineTo(canvas.width,canvas.height);ctx.closePath();ctx.fillStyle=['#260912','#18070d','#0a0509'][layer];ctx.fill()}
         ctx.globalAlpha=1;return;
       }
     if(!nightmare){const sx=canvas.width*.77,sy=canvas.height*.18;const sun=ctx.createRadialGradient(sx,sy,2,sx,sy,canvas.height*.19);sun.addColorStop(0,'#fff3c7aa');sun.addColorStop(1,'#fff3c700');ctx.fillStyle=sun;ctx.fillRect(sx-canvas.height*.2,sy-canvas.height*.2,canvas.height*.4,canvas.height*.4)}
    // Hand-painted soft clouds and distant layered hills.
    for(let i=0;i<8;i++){
      const x=((i*177-world.camera*9)%(canvas.width+220)+canvas.width+220)%(canvas.width+220)-100;
      const y=canvas.height*(.12+(i%3)*.095),w=canvas.height*(.23+(i%2)*.09);
       const cloud=ctx.createLinearGradient(0,y-w*.1,0,y+w*.12);cloud.addColorStop(0,nightmare?'rgba(180,7,29,.9)':'rgba(255,255,248,.82)');cloud.addColorStop(1,nightmare?'rgba(24,2,10,.92)':'rgba(214,226,222,.48)');
      ctx.fillStyle=cloud;ellipse(x,y,w*.5,w*.1,ctx.fillStyle,null);ellipse(x-w*.17,y+2,w*.24,w*.1,ctx.fillStyle,null);ellipse(x+w*.17,y+1,w*.27,w*.09,ctx.fillStyle,null);
    }
     for(let layer=0;layer<3;layer++){
       ctx.beginPath();const base=canvas.height*(.58+layer*.075);ctx.moveTo(0,canvas.height);ctx.lineTo(0,base);
       for(let x=0;x<=canvas.width+30;x+=30){const wx=x/scale+world.camera;ctx.lineTo(x,base+Math.sin(wx*.16+layer*2)*canvas.height*.025+Math.sin(wx*.045)*canvas.height*.035)}
          ctx.lineTo(canvas.width,canvas.height);ctx.closePath();const hillShade=ctx.createLinearGradient(0,base,0,canvas.height);hillShade.addColorStop(0,nightmare?['#45121e','#35101c','#260b17'][layer]:cloudLevel?['#f4f6f2','#dce8e9','#c6d9e4'][layer]:sonicNightmare?['#42101a','#300b18','#200811'][layer]:greenHillLevel?['#59c549','#389a43','#287a45'][layer]:titanLevel?['#92948c','#777c7a','#5e6667'][layer]:marioLevel?['#91d255','#61b949','#47a047'][layer]:['#93a992','#718962','#536c48'][layer]);hillShade.addColorStop(1,nightmare?['#180711','#12060f','#0b050b'][layer]:cloudLevel?['#d8e8ef','#bfd4e1','#aec7d7'][layer]:sonicNightmare?['#1a060d','#10040a','#080308'][layer]:greenHillLevel?['#298647','#1c673e','#145238'][layer]:titanLevel?['#656c6d','#50595c','#3d484c'][layer]:marioLevel?['#5ebc48','#389a3d','#2e7837'][layer]:['#5f745d','#4b6540','#364d35'][layer]);ctx.fillStyle=hillShade;ctx.fill();
      if(layer===1){ctx.save();ctx.globalAlpha=.24;ctx.strokeStyle='#d8d2a9';ctx.lineWidth=1;for(let k=0;k<14;k++){const px=(k*113-world.camera*7)%(canvas.width+80);ctx.beginPath();ctx.moveTo(px,base+10);ctx.lineTo(px-24,base+canvas.height*.08);ctx.stroke()}ctx.restore()}
    }
    // Strong foreground ink-frame at the top, as in a painted anime shot.
      if(!titanLevel&&!marioLevel&&!sonicNightmare)for(let i=0;i<9;i++){
      const x=((i*131-world.camera*1.3)%(canvas.width+90)+canvas.width+90)%(canvas.width+90)-45;
      ctx.fillStyle=i%2?'#294431':'#36523a';ctx.beginPath();ctx.moveTo(x,0);ctx.quadraticCurveTo(x+22,canvas.height*.1,x+8,canvas.height*.23);ctx.lineTo(x-13,canvas.height*.12);ctx.closePath();ctx.fill();
      ctx.strokeStyle='#20372a';ctx.lineWidth=2;ctx.stroke();
    }
  }
  function drawTree(x,depth){
    worldDraw(()=>{
      const bark=ctx.createLinearGradient(-.15,0,.15,0);bark.addColorStop(0,'#392f28');bark.addColorStop(.3,'#806447');bark.addColorStop(.62,'#674c35');bark.addColorStop(1,'#3d342a');
      ctx.fillStyle=bark;ctx.strokeStyle='#302b24';ctx.lineWidth=.025;
      ctx.beginPath();ctx.moveTo(-.2,0);ctx.lineTo(-.13,3.78);ctx.lineTo(-.06,4.05);ctx.lineTo(.14,4.05);ctx.lineTo(.12,3.72);ctx.lineTo(.2,0);ctx.closePath();ctx.fill();ctx.stroke();
      line([[-.035,.3],[-.075,1.15],[-.02,1.62]],'#ad8b61',.018);line([[.07,.68],[.035,2.05],[.075,2.9]],'#40372b',.02);
      // Broad overlapping tropical crowns fill the skyline above the trail.
      for(const [dx,dy,r] of [[-.65,4.18,1.15],[.43,4.72,1.25],[-.18,5.08,1.18],[.92,4.08,.9]]){
        const canopy=ctx.createRadialGradient(dx-r*.22,dy+r*.18,.04,dx,dy,r);canopy.addColorStop(0,depth?'#8aa16a':'#88a966');canopy.addColorStop(.55,depth?'#617b4d':'#557946');canopy.addColorStop(1,depth?'#3f5938':'#334f33');
        ellipse(dx,dy,r,r*.58,canopy,'#30452f',.022);
        for(let leaf=0;leaf<7;leaf++){const lx=dx+Math.sin(leaf*7.3+dy)*r*.58,ly=dy+Math.cos(leaf*4.1+dx)*r*.34;ellipse(lx,ly,.1,.045,leaf%2?'#91ad69':'#718e52',null)}
      }
      line([[-.3,3.6],[-.05,4.12],[.27,4.28]],'#a4b87a',.025);
      // Long palm fronds overlap the rounded canopy for a dense jungle silhouette.
      for(const side of [-1,1]){
        const bx=side*.16,by=5.1;line([[bx,by],[bx+side*.18,5.72],[bx+side*.55,5.92]],'#415c38',.055);
        for(let leaf=0;leaf<5;leaf++){const t=leaf/4,ex=bx+side*(.25+t*.5),ey=5.36+t*.55;line([[bx+side*.14,5.3+t*.12],[ex,ey],[ex-side*.14,ey+.04]],leaf%2?'#617d43':'#799551',.045)}
      }
    },x,0);
  }
  function drawCityWall(x,tower=false){worldDraw(()=>{
    const stone=ctx.createLinearGradient(0,0,0,5.4);stone.addColorStop(0,'#92948e');stone.addColorStop(.18,'#666b6a');stone.addColorStop(1,'#3b4345');
    ctx.fillStyle=stone;ctx.strokeStyle='#343b3e';ctx.lineWidth=.045;ctx.fillRect(-3.1,0,6.2,tower?5.5:3.5);ctx.strokeRect(-3.1,0,6.2,tower?5.5:3.5);
    for(let row=0;row<(tower?8:5);row++)for(let col=0;col<6;col++){
      const xx=-3+col+(row%2)*.5,yy=.3+row*.58;if(yy>(tower?5.2:3.25))continue;
      ctx.strokeStyle='#a3a19688';ctx.lineWidth=.018;ctx.strokeRect(xx,yy,.88,.48);line([[xx+.12,yy+.37],[xx+.74,yy+.37]],'#343b3d',.016);
    }
    if(tower){ctx.fillStyle='#4b5253';ctx.beginPath();ctx.moveTo(-3.3,5.4);ctx.lineTo(-2.8,6.05);ctx.lineTo(2.8,6.05);ctx.lineTo(3.3,5.4);ctx.closePath();ctx.fill();ctx.stroke();
      for(let merlon=-2.7;merlon<=2.3;merlon+=1.25){ctx.fillStyle='#737875';ctx.fillRect(merlon,5.65,.55,.55);ctx.strokeRect(merlon,5.65,.55,.55)}
      ctx.fillStyle='#252c2e';ctx.fillRect(-.42,3.55,.84,1.45);ctx.strokeRect(-.42,3.55,.84,1.45);
    }
    ellipse(0,.12,.13,.12,'#403c35',null);
   },x,0)}
  function drawGreenHillPalm(x,time,corrupted=false){worldDraw(()=>{
    const sway=Math.sin(time*.001+x)*.04;ctx.save();ctx.rotate(sway);ctx.fillStyle=corrupted?'#4d131c':'#8a5b32';ctx.strokeStyle=corrupted?'#a31b2b':'#533a27';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.13,0);ctx.quadraticCurveTo(-.02,1.25,.12,2.15);ctx.lineTo(.3,2.15);ctx.quadraticCurveTo(.12,1.05,.12,0);ctx.closePath();ctx.fill();ctx.stroke();
    for(let leaf=0;leaf<7;leaf++){const angle=-Math.PI*.92+leaf*Math.PI*.31;ctx.save();ctx.translate(.2,2.1);ctx.rotate(angle);ctx.fillStyle=corrupted?(leaf%2?'#741323':'#ba1d2d'):(leaf%2?'#168a4a':'#27a952');ctx.strokeStyle=corrupted?'#3c0711':'#12663c';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(.28,-.42,.95,-.12);ctx.quadraticCurveTo(.58,.18,0,0);ctx.fill();ctx.stroke();line([[0,0],[.79,-.1]],corrupted?'#ef3942':'#8adb57',.025);ctx.restore()}
    ellipse(.18,.12,.42,.1,'#144f35aa',null);ctx.restore();
  },x,0)}
  function drawLeafVillageHouse(x,wide=false){worldDraw(()=>{
    const facade=ctx.createLinearGradient(0,0,0,3.4);facade.addColorStop(0,'#f3dfb8');facade.addColorStop(.65,'#d8bd91');facade.addColorStop(1,'#9e8060');ctx.fillStyle=facade;ctx.strokeStyle='#4f392f';ctx.lineWidth=.04;
    ctx.fillRect(-1.65,0,3.3,wide?3.25:2.55);ctx.strokeRect(-1.65,0,3.3,wide?3.25:2.55);
    ctx.fillStyle='#a94332';ctx.beginPath();ctx.moveTo(-1.95,wide?3.05:2.35);ctx.lineTo(-1.45,wide?3.72:3.02);ctx.lineTo(1.45,wide?3.72:3.02);ctx.lineTo(1.95,wide?3.05:2.35);ctx.closePath();ctx.fill();ctx.stroke();
    line([[-1.65,2.35],[1.65,2.35]],'#684738',.055);for(let w=-1;w<=1;w+=2){ctx.fillStyle='#49352d';ctx.fillRect(w*.65,.45,.44,1.15);ctx.strokeRect(w*.65,.45,.44,1.15);}
    ctx.fillStyle='#ede0bf';ctx.font='bold .28px sans-serif';ctx.textAlign='center';ctx.fillText('木ノ葉',0,wide?2.82:2.17);
   },x,0)}
  function drawMarioPipe(x,height=1.8){worldDraw(()=>{
    const pipe=ctx.createLinearGradient(-.36,0,.36,0);pipe.addColorStop(0,'#14713c');pipe.addColorStop(.22,'#24b34d');pipe.addColorStop(.68,'#4cdb52');pipe.addColorStop(1,'#126b38');
    ctx.fillStyle=pipe;ctx.strokeStyle='#155a32';ctx.lineWidth=.045;ctx.fillRect(-.31,0,.62,height);ctx.strokeRect(-.31,0,.62,height);
    ctx.fillRect(-.49,height-.35,.98,.38);ctx.strokeRect(-.49,height-.35,.98,.38);
    line([[-.32,.12],[-.32,height-.43]],'#89ef69',.035);line([[-.49,height-.08],[.49,height-.08]],'#83ed64',.035);
  },x,0)}
  function drawMarioBlock(x,y,question=false){worldDraw(()=>{
    ctx.fillStyle=question?'#f4ad32':'#bd6335';ctx.strokeStyle=question?'#8c481e':'#743a28';ctx.lineWidth=.035;ctx.fillRect(-.34,-.34,.68,.68);ctx.strokeRect(-.34,-.34,.68,.68);
    if(question){ctx.fillStyle='#fff0a3';ctx.font='bold .48px sans-serif';ctx.textAlign='center';ctx.fillText('?',0,-.08);for(const corner of [[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]])ellipse(corner[0],corner[1],.025,.025,'#ffe38a',null)}
    else{for(const seam of [-.12,.12])line([[-.31,seam],[.31,seam]],'#e79a5e',.022);line([[0,-.31],[0,-.13]],'#e79a5e',.022);line([[-.31,.13],[-.15,.13]],'#e79a5e',.022);line([[.15,-.11],[.31,-.11]],'#e79a5e',.022)}
  },x,y)}
  function drawMarioStar(star,time){if(star.taken)return;worldDraw(()=>{const spin=time*.002+star.phase;ctx.save();ctx.translate(0,Math.sin(time*.004+star.phase)*.08);ctx.rotate(spin);ctx.shadowColor='#fff24d';ctx.shadowBlur=24;ctx.fillStyle='#ffe53d';ctx.strokeStyle='#fff8b2';ctx.lineWidth=.035;ctx.beginPath();for(let point=0;point<10;point++){const angle=-Math.PI/2+point*Math.PI/5,r=point%2?.13:.34;const x=Math.cos(angle)*r,y=Math.sin(angle)*r;if(point===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ellipse(0,0,.055,.055,'#fff9c9',null)},star.x,star.y)}
  function drawMarioHelper(helper,time){worldDraw(()=>{
    const bob=Math.sin(time*.012+helper.phase)*.07;
    if(helper.type==='luigi'){ellipse(0,.8+bob,.33,.43,'#f0c694','#574238',.025);ctx.fillStyle='#33a34b';ctx.strokeStyle='#225f37';ctx.lineWidth=.025;ctx.beginPath();ctx.arc(0,1.04+bob,.3,Math.PI,Math.PI*2);ctx.lineTo(.29,1.04+bob);ctx.lineTo(-.29,1.04+bob);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#2766bb';ctx.fillRect(-.23,.15+bob,.46,.48);ellipse(-.1,.83+bob,.035,.05,'#24202a',null);ellipse(.1,.83+bob,.035,.05,'#24202a',null);line([[-.12,.61+bob],[0,.58+bob],[.12,.61+bob]],'#49302a',.025)}
    else if(helper.type==='peach'){ellipse(0,.79+bob,.34,.43,'#f2c3ae','#66423c',.025);ctx.fillStyle='#ed78a4';ctx.beginPath();ctx.moveTo(-.28,.5+bob);ctx.lineTo(.28,.5+bob);ctx.lineTo(.38,.06+bob);ctx.lineTo(-.38,.06+bob);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#edbb45';ctx.beginPath();ctx.moveTo(-.22,1.08+bob);ctx.lineTo(-.14,1.27+bob);ctx.lineTo(-.04,1.08+bob);ctx.lineTo(.06,1.27+bob);ctx.lineTo(.2,1.08+bob);ctx.closePath();ctx.fill();ellipse(-.1,.83+bob,.034,.048,'#36538a',null);ellipse(.1,.83+bob,.034,.048,'#36538a',null)}
    else{ellipse(0,.64+bob,.36,.4,'#f5f0dd','#80644e',.025);ctx.fillStyle='#e95367';ctx.strokeStyle='#923d50';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(0,.91+bob,.36,.18,0,Math.PI,Math.PI*2);ctx.fill();ctx.stroke();ellipse(-.12,.65+bob,.034,.05,'#27202a',null);ellipse(.12,.65+bob,.034,.05,'#27202a',null);ctx.fillStyle='#e95367';ctx.fillRect(-.2,.13+bob,.4,.36);ctx.strokeRect(-.2,.13+bob,.4,.36)}
    ellipse(0,.02+bob,.28,.07,'#14121a99',null);
  },helper.x,helper.y)}
  function drawMarioBattle(time){
    if(!marioFight.active)return;
    worldDraw(()=>{
      const face=marioFight.direction||-1,run=Math.sin(time*.02)*.09;ctx.save();ctx.scale(face,1);ctx.scale(1.32,1.32);
      // Shadow-dark clothes, blood-red cap and an enlarged grinning face.
      for(const side of [-1,1]){ctx.save();ctx.translate(side*.2,.67);ctx.rotate(side*run);ctx.fillStyle='#17101a';ctx.strokeStyle='#4a111d';ctx.lineWidth=.035;ctx.beginPath();ctx.roundRect(-.14,-.56,.29,.25,.06);ctx.fill();ctx.stroke();ctx.fillStyle='#282035';ctx.fillRect(-.16,-.33,.32,.38);ctx.restore()}
      ctx.fillStyle='#941c2b';ctx.strokeStyle='#210b13';ctx.lineWidth=.055;ctx.beginPath();ctx.moveTo(-.4,1.54);ctx.lineTo(-.55,1.27);ctx.lineTo(-.39,.72);ctx.lineTo(.38,.72);ctx.lineTo(.54,1.27);ctx.lineTo(.4,1.54);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#12121b';ctx.fillRect(-.3,.75,.6,.4);line([[-.18,1.49],[0,1.28],[.17,1.49]],'#d4b9a1',.055);
      ctx.fillStyle='#bca59c';ctx.beginPath();ctx.ellipse(0,1.92,.43,.46,0,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle='#d31c31';ctx.beginPath();ctx.moveTo(-.45,2.12);ctx.quadraticCurveTo(-.42,2.61,0,2.65);ctx.quadraticCurveTo(.42,2.61,.45,2.12);ctx.lineTo(.29,2.02);ctx.lineTo(-.29,2.02);ctx.closePath();ctx.fill();ctx.stroke();
      for(const side of [-1,1]){ellipse(side*.15,2.05,.105,.12,'#0c0810','#210b13',.025);ellipse(side*.15,2.05,.032,.04,'#ff142a',null)}
      ctx.fillStyle='#220811';ctx.beginPath();ctx.moveTo(-.3,1.83);ctx.quadraticCurveTo(0,1.63,.3,1.83);ctx.lineTo(.26,1.99);ctx.quadraticCurveTo(0,2.15,-.26,1.99);ctx.closePath();ctx.fill();ctx.fillStyle='#fff0dc';for(let tooth=0;tooth<6;tooth++){const tx=-.24+tooth*.08;ctx.beginPath();ctx.moveTo(tx,1.84);ctx.lineTo(tx+.06,1.84);ctx.lineTo(tx+.03,1.91+(tooth%2)*.04);ctx.closePath();ctx.fill()}
      ctx.restore();
      // Boss health bar.
      ctx.fillStyle='#130a13';ctx.fillRect(-.78,2.88,1.56,.16);ctx.fillStyle='#ea2638';ctx.fillRect(-.74,2.92,1.48*(marioFight.hp/marioFight.maxHp),.08);ctx.strokeStyle='#f2ddc8';ctx.lineWidth=.018;ctx.strokeRect(-.78,2.88,1.56,.16);
    },marioFight.x,0);
  }
  function drawMarioArenaBlood(time){
    if(marioEncounter.phase!=='combat')return;
    ctx.save();ctx.fillStyle='#10020866';ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<42;i++){const x=((i*131+Math.sin(time*.001+i)*25)%(canvas.width+50)+canvas.width+50)%(canvas.width+50)-25,y=((i*79+Math.cos(time*.0015+i)*22)%(canvas.height+40)+canvas.height+40)%(canvas.height+40)-20,r=3+(i*11)%18;ctx.fillStyle=i%3?'#68101ca8':'#a01823b8';ctx.beginPath();ctx.ellipse(x,y,r,r*.58,Math.sin(i)*.5,0,Math.PI*2);ctx.fill();if(i%2===0)ctx.fillRect(x-r*.22,y,r*.42,canvas.height*(.025+(i%4)*.012))}
    const edge=ctx.createLinearGradient(0,0,canvas.width,0);edge.addColorStop(0,'#9d102344');edge.addColorStop(.2,'#5c0a1700');edge.addColorStop(.8,'#5c0a1700');edge.addColorStop(1,'#9d102344');ctx.fillStyle=edge;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.restore();
  }
  function drawArenaRemains(x,variant,time){
    worldDraw(()=>{
      const sway=Math.sin(time*.002+x)*.025;ctx.save();ctx.rotate(sway);
      // Stylized fallen character silhouettes with deliberately missing pieces.
      ellipse(0,.1,.9,.15,'#5b0712cc',null);
      ctx.fillStyle=variant===1?'#35466c':'#29212d';ctx.strokeStyle='#110c16';ctx.lineWidth=.055;ctx.beginPath();ctx.ellipse(0,.29,.53,.19,-.08,0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle=variant===2?'#7a2434':'#a52b39';ctx.fillRect(-.35,.23,.18,.12);ctx.fillRect(.16,.24,.2,.1);
      // Neck stump, with a dark red scarf-like mark instead of graphic detail.
      ctx.fillStyle='#bd4e50';ctx.fillRect(-.08,.41,.16,.08);ctx.fillStyle='#17101b';ctx.fillRect(-.11,.47,.22,.045);
      // One or more absent limbs are represented by short torn-looking sleeves.
      if(variant!==0){ctx.fillStyle='#313041';ctx.beginPath();ctx.moveTo(-.38,.34);ctx.lineTo(-.62,.29);ctx.lineTo(-.57,.2);ctx.lineTo(-.4,.22);ctx.closePath();ctx.fill();ctx.fillStyle='#a52b39';ctx.fillRect(-.63,.25,.09,.09)}
      if(variant!==1){ctx.fillStyle='#29212d';ctx.fillRect(.27,.15,.28,.085);ctx.fillStyle='#a52b39';ctx.fillRect(.51,.15,.09,.085)}
      if(variant===2){ctx.fillStyle='#29212d';ctx.fillRect(-.4,.15,.22,.075);ctx.fillStyle='#a52b39';ctx.fillRect(-.47,.15,.08,.075)}
      ctx.restore();
    },x,0);
  }
  function drawMarioLuckyBox(box,time){worldDraw(()=>{const pulse=1+Math.sin(time*.008+box.phase)*.045;ctx.save();ctx.scale(pulse,pulse);ctx.shadowColor='#ffcf32';ctx.shadowBlur=18;ctx.fillStyle='#e9a52c';ctx.strokeStyle='#71391e';ctx.lineWidth=.05;ctx.fillRect(-.38,.12,.76,.76);ctx.strokeRect(-.38,.12,.76,.76);ctx.fillStyle='#ffe271';ctx.font='bold .56px sans-serif';ctx.textAlign='center';ctx.fillText('?',0,.68);for(const corner of [[-.27,.23],[.27,.23],[-.27,.77],[.27,.77]])ellipse(corner[0],corner[1],.035,.035,'#fff2a1',null);ctx.restore()},box.x,box.y)}
  function drawMarioReveal(time){
    const glitch=marioEncounter.phase==='glitch',turning=marioEncounter.phase==='turning',terror=turning||marioEncounter.phase==='rush'||marioEncounter.phase==='standoff',front=terror||marioEncounter.phase==='ready';
    const transform=turning?Math.min(1,marioEncounter.timer/1.25):0;
    const jitter=glitch?Math.sin(time*.071)*.13:turning?Math.sin(time*.052)*(.025+transform*.12):0;
    worldDraw(()=>{
       ctx.save();ctx.translate(jitter,0);
       if(turning){
         const pulse=1+Math.sin(time*.035)*(.015+transform*.035);
         ctx.translate(0,1.25);ctx.scale(pulse,pulse);ctx.translate(0,-1.25);
         ctx.globalAlpha=1;
         // Red corruption flickers around Mario as the transformation takes hold.
         ctx.globalAlpha=transform*(.18+Math.abs(Math.sin(time*.043))*.3);
         ctx.strokeStyle='#f21b35';ctx.lineWidth=.045;ctx.shadowColor='#f21b35';ctx.shadowBlur=18;
         for(let i=0;i<5;i++){const y=.75+i*.36,x=Math.sin(time*.03+i*2.4)*(.25+transform*.18);ctx.beginPath();ctx.moveTo(x-.32,y);ctx.lineTo(x+.32,y+Math.sin(time*.06+i)*.12);ctx.stroke()}
         ctx.shadowBlur=0;ctx.globalAlpha=1;
       }
       const step=Math.sin(time*.008)*.035+(turning?Math.sin(time*.05)*transform*.08:0);
      ellipse(0,.035,.42,.085,'#1b3427aa',null);
      for(const side of [-1,1]){ctx.save();ctx.translate(side*.15,.65);ctx.rotate(side*step);ctx.fillStyle='#3b2b2a';ctx.strokeStyle='#211c22';ctx.lineWidth=.03;ctx.beginPath();ctx.roundRect(-.15,-.55,.31,.19,.06);ctx.fill();ctx.stroke();ctx.fillStyle='#2764c8';ctx.beginPath();ctx.moveTo(-.14,-.37);ctx.lineTo(.14,-.37);ctx.lineTo(.17,.18);ctx.lineTo(-.16,.18);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore()}
      // Mario's red shirt, blue overalls and gloves, seen from behind as the player approaches.
      ctx.fillStyle='#e13a35';ctx.strokeStyle='#742b35';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.36,1.52);ctx.lineTo(-.48,1.38);ctx.lineTo(-.38,.73);ctx.lineTo(.38,.73);ctx.lineTo(.48,1.38);ctx.lineTo(.36,1.52);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#2869cb';ctx.strokeStyle='#193f83';ctx.beginPath();ctx.moveTo(-.27,1.03);ctx.lineTo(.27,1.03);ctx.lineTo(.22,.69);ctx.lineTo(-.22,.69);ctx.closePath();ctx.fill();ctx.stroke();
      for(const side of [-1,1]){line([[side*.22,1.49],[side*.34,1.23],[side*.35,.98]],'#e13a35',.18);ellipse(side*.36,.95,.1,.1,'#eee8da','#655249',.018);ctx.fillStyle='#e0a679';ctx.strokeStyle='#704a3d';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(side*.27,1.99,.075,.1,0,0,Math.PI*2);ctx.fill();ctx.stroke()}
      ctx.fillStyle='#e9b18b';ctx.strokeStyle='#714c3e';ctx.lineWidth=.03;ctx.beginPath();ctx.ellipse(0,1.9,.31,.37,0,0,Math.PI*2);ctx.fill();ctx.stroke();
      // Cap and back hair silhouette. The face only appears once Mario turns around.
      ctx.fillStyle='#25202a';ctx.beginPath();ctx.ellipse(0,2.03,.32,.29,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#df3432';ctx.strokeStyle='#76262f';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.36,2.14);ctx.quadraticCurveTo(-.32,2.53,0,2.57);ctx.quadraticCurveTo(.34,2.52,.37,2.15);ctx.lineTo(.24,2.08);ctx.lineTo(-.25,2.08);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#ef4c40';ctx.beginPath();ctx.ellipse(0,2.17,.4,.09,0,0,Math.PI*2);ctx.fill();ctx.stroke();
        if(front){
          if(terror){
            const corruption=turning?transform:1;
            ellipse(-.115,2.015,.038+.035*corruption,.055+.04*corruption,corruption>.55?'#fff':'#e9d8c8','#3c2a31',.018);
            ellipse(.115,2.015,.038+.035*corruption,.055+.04*corruption,corruption>.55?'#fff':'#e9d8c8','#3c2a31',.018);
            if(corruption>.25){ellipse(-.115,2.015,.018*corruption,.035*corruption,'#ed102c',null);ellipse(.115,2.015,.018*corruption,.035*corruption,'#ed102c',null)}
            line([[-.2,2.16],[-.12,2.21],[-.04,2.17]],'#482932',.026);line([[.04,2.17],[.12,2.21],[.2,2.16]],'#482932',.026);ellipse(0,1.82,.105, .15*corruption,'#1b1019','#47232c',.025)
          }
         else{ellipse(-.115,2.02,.038,.055,'#fff','#35252a',.012);ellipse(.115,2.02,.038,.055,'#fff','#35252a',.012);ellipse(-.105,2.02,.016,.035,'#20202a',null);ellipse(.125,2.02,.016,.035,'#20202a',null);ctx.fillStyle='#382328';ctx.beginPath();ctx.moveTo(-.23,1.91);ctx.quadraticCurveTo(-.1,1.76,0,1.88);ctx.quadraticCurveTo(.12,1.75,.25,1.91);ctx.lineTo(.18,1.98);ctx.quadraticCurveTo(0,1.88,-.18,1.98);ctx.closePath();ctx.fill();ctx.fillStyle='#fff';ctx.font='bold .12px sans-serif';ctx.textAlign='center';ctx.fillText('M',0,2.38)}
       }
      ctx.restore();
    },marioEncounter.x,0);
  }
  function drawMarioGlitch(time){
    if(marioEncounter.phase!=='glitch')return;
    const intensity=.12+Math.abs(Math.sin(time*.037))*.2;ctx.save();ctx.globalAlpha=intensity;ctx.fillStyle=Math.sin(time*.025)>0?'#f8fbff':'#ff264e';ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let band=0;band<19;band++){const y=(band*83+Math.floor(time*.42)%83)%canvas.height,h=2+(band%4)*2,x=Math.sin(time*.013+band*4.2)*canvas.width*.09;ctx.globalAlpha=.28+(band%3)*.1;ctx.fillStyle=band%2?'#39e9ff':'#ff2c83';ctx.fillRect(x,y,canvas.width*(.3+(band%5)*.14),h)}
    ctx.globalAlpha=.24;ctx.fillStyle='#080812';for(let y=0;y<canvas.height;y+=5)ctx.fillRect(0,y,canvas.width,1);ctx.restore();
  }
  function drawMarioJumpscare(time){
    if(marioEncounter.phase!=='jumpscare')return;
    const w=canvas.width,h=canvas.height,cx=w*.5,cy=h*.53,pulse=1+Math.sin(time*.045)*.025;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#050307';ctx.fillRect(0,0,w,h);
    // Blood-dark vignette, ragged pools, and long drips around the perimeter.
    const edge=ctx.createRadialGradient(cx,cy,h*.18,cx,cy,h*.78);edge.addColorStop(0,'#08060b');edge.addColorStop(.58,'#10060b');edge.addColorStop(.82,'#501018');edge.addColorStop(1,'#9b101f');ctx.fillStyle=edge;ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#8e101d';for(let i=0;i<20;i++){const x=(i*137+Math.sin(time*.02+i)*17)%w,y=i%2===0?0:h,r=8+(i*17)%22;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.fillRect(x-r*.35,y===0?0:y-r*.2,Math.max(3,r*.7),y===0?20+(i%4)*13:-(20+(i%4)*13))}
    // Sudden close-up: hollow black eyes with tiny red pupils and an unnaturally wide grin.
    ctx.translate(cx,cy);ctx.scale(pulse, pulse);ctx.fillStyle='#b6a49c';ctx.strokeStyle='#210e16';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-w*.23,-h*.29);ctx.quadraticCurveTo(-w*.2,-h*.49,0,-h*.46);ctx.quadraticCurveTo(w*.2,-h*.49,w*.23,-h*.29);ctx.lineTo(w*.2,h*.2);ctx.quadraticCurveTo(0,h*.39,-w*.2,h*.2);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#211017';ctx.beginPath();ctx.ellipse(-w*.095,-h*.08,w*.055,h*.09,-.2,0,Math.PI*2);ctx.ellipse(w*.095,-h*.08,w*.055,h*.09,.2,0,Math.PI*2);ctx.fill();ctx.fillStyle='#ed122b';ctx.beginPath();ctx.arc(-w*.095,-h*.08,Math.max(4,w*.008),0,Math.PI*2);ctx.arc(w*.095,-h*.08,Math.max(4,w*.008),0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#29131a';ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(-w*.15,-h*.2);ctx.lineTo(-w*.045,-h*.16);ctx.moveTo(w*.15,-h*.2);ctx.lineTo(w*.045,-h*.16);ctx.stroke();
    ctx.fillStyle='#210b13';ctx.beginPath();ctx.moveTo(-w*.16,h*.035);ctx.quadraticCurveTo(0,-h*.015,w*.16,h*.035);ctx.lineTo(w*.14,h*.18);ctx.quadraticCurveTo(0,h*.29,-w*.14,h*.18);ctx.closePath();ctx.fill();
    ctx.fillStyle='#f3e7d8';for(let tooth=0;tooth<9;tooth++){const tx=-w*.13+tooth*w*.032;ctx.beginPath();ctx.moveTo(tx,h*.035);ctx.lineTo(tx+w*.021,h*.035);ctx.lineTo(tx+w*.011,h*.095+(tooth%2)*h*.025);ctx.closePath();ctx.fill()}
    ctx.restore();
  }
  function drawSonicJumpscare(time){
    if(sonicEncounter.phase!=='jumpscare')return;
    const w=canvas.width,h=canvas.height,cx=w*.5,cy=h*.52,pulse=1+Math.sin(time*.05)*.035;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#020208';ctx.fillRect(0,0,w,h);
    const shade=ctx.createRadialGradient(cx,cy,h*.12,cx,cy,h*.8);shade.addColorStop(0,'#13060c');shade.addColorStop(.62,'#08050a');shade.addColorStop(1,'#8c0b1c');ctx.fillStyle=shade;ctx.fillRect(0,0,w,h);
    for(let i=0;i<34;i++){const x=(i*113+Math.sin(time*.019+i)*23+w*2)%(w+32)-16,y=i%2?0:h,r=4+(i*13)%19;ctx.fillStyle=i%3?'#7d101dbb':'#c0182bbb';ctx.beginPath();ctx.ellipse(x,y,r,r*.58,Math.sin(i)*.4,0,Math.PI*2);ctx.fill();if(i%2===0)ctx.fillRect(x-r*.22,y,r*.42,y===0?18+i%4*11:-(18+i%4*11))}
    ctx.translate(cx,cy);ctx.scale(pulse,pulse);
    // A battered blue hedgehog face with cracked, patchy fur and jagged quills.
    ctx.fillStyle='#102239';ctx.strokeStyle='#050710';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-w*.2,-h*.12);ctx.lineTo(-w*.39,-h*.31);ctx.lineTo(-w*.29,-h*.1);ctx.lineTo(-w*.43,-h*.18);ctx.lineTo(-w*.3,.01);ctx.lineTo(-w*.34,h*.18);ctx.lineTo(-w*.18,h*.29);ctx.lineTo(w*.2,h*.28);ctx.lineTo(w*.34,h*.1);ctx.lineTo(w*.3,-h*.11);ctx.lineTo(w*.42,-h*.28);ctx.lineTo(w*.23,-h*.17);ctx.lineTo(w*.15,-h*.38);ctx.lineTo(.02,-h*.23);ctx.lineTo(-w*.08,-h*.4);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#364957';ctx.beginPath();ctx.ellipse(0,.015,w*.245,h*.29,-.03,0,Math.PI*2);ctx.fill();
    // Ragged patches and pale, weathered areas across the face.
    ctx.fillStyle='#77807a';for(let i=0;i<8;i++){const px=Math.sin(i*5.1)*w*.19,py=Math.cos(i*3.7)*h*.19;ctx.beginPath();ctx.ellipse(px,py,w*(.018+i%3*.006),h*(.014+i%2*.008),i*.7,0,Math.PI*2);ctx.fill()}
    ctx.strokeStyle='#a81428';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-w*.15,-h*.22);ctx.lineTo(-w*.1,-h*.12);ctx.lineTo(-w*.16,-h*.04);ctx.moveTo(w*.23,-h*.1);ctx.lineTo(w*.18,.02);ctx.lineTo(w*.25,h*.08);ctx.stroke();
    for(const side of [-1,1]){ctx.fillStyle='#08040a';ctx.beginPath();ctx.ellipse(side*w*.095,-h*.055,w*.062,h*.085,side*.16,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f10e2c';ctx.beginPath();ctx.ellipse(side*w*.095,-h*.05,w*.021,h*.045,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff0e8';ctx.beginPath();ctx.arc(side*w*.1-w*.008,-h*.066,Math.max(3,w*.004),0,Math.PI*2);ctx.fill()}
    ctx.fillStyle='#080308';ctx.beginPath();ctx.moveTo(-w*.17,h*.08);ctx.quadraticCurveTo(0,h*.025,w*.17,h*.08);ctx.lineTo(w*.14,h*.2);ctx.quadraticCurveTo(0,h*.29,-w*.14,h*.2);ctx.closePath();ctx.fill();ctx.strokeStyle='#a51226';ctx.lineWidth=5;ctx.stroke();
    ctx.fillStyle='#e7ddd0';for(let tooth=0;tooth<9;tooth++){const tx=-w*.13+tooth*w*.032;ctx.beginPath();ctx.moveTo(tx,h*.08);ctx.lineTo(tx+w*.02,h*.08);ctx.lineTo(tx+w*.01,h*.14+(tooth%2)*h*.025);ctx.closePath();ctx.fill()}
    ctx.fillStyle='#a20d1d';ctx.beginPath();ctx.ellipse(-w*.2,h*.2,w*.035,h*.055,-.4,0,Math.PI*2);ctx.ellipse(w*.2,h*.2,w*.035,h*.055,.4,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
   function voidPlatformVisible(platform,time){if(platform.brokenUntil>time)return false;if(platform.crumbleAt&&time>=platform.crumbleAt){platform.brokenUntil=time+2600;platform.crumbleAt=0;return false}return Math.sin(time*.0017+platform.phase)>-.18}
   function drawVoidPlatforms(time){for(const platform of voidPlatforms){if(!voidPlatformVisible(platform,time))continue;worldDraw(()=>{ctx.shadowColor='#8e1323';ctx.shadowBlur=10;ctx.fillStyle='#211018';ctx.strokeStyle='#741629';ctx.lineWidth=.045;ctx.beginPath();ctx.roundRect(0,0,platform.w,.18,.09);ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.strokeStyle=platform.crumbleAt?'#ed283d':'#a32836';ctx.lineWidth=platform.crumbleAt ? .055 : .025;ctx.beginPath();ctx.moveTo(.18,.1);ctx.lineTo(.55,.035);ctx.lineTo(.82,.14);ctx.stroke();ctx.fillStyle='#6d111f';ctx.fillRect(platform.w*.55,.13,platform.w*.28,.025);if(platform.crumbleAt){ctx.strokeStyle='#ef6974';ctx.beginPath();ctx.moveTo(platform.w*.72,.16);ctx.lineTo(platform.w*.83,-.08);ctx.lineTo(platform.w*.94,.02);ctx.stroke()}},platform.x,platform.y)}}
   function drawVoidBlackout(){if(levelIndex!==5||voidBlackoutAlpha<=.01)return;const sx=(player.x-world.camera)*scale,sy=canvas.height-(player.y+1.05)*scale;const darkness=voidBlackoutAlpha;const veil=ctx.createRadialGradient(sx,sy,canvas.height*.025,sx,sy,canvas.height*.56);veil.addColorStop(0,`rgba(0,0,0,${darkness*.22})`);veil.addColorStop(.16,`rgba(0,0,0,${darkness*.64})`);veil.addColorStop(1,`rgba(0,0,0,${darkness})`);ctx.fillStyle=veil;ctx.fillRect(0,0,canvas.width,canvas.height)}
   function drawGround(){
      for(const [l,r] of ground){worldDraw(()=>{
           if(levelIndex===5){const floor=ctx.createLinearGradient(0,0,0,.7);floor.addColorStop(0,'#292126');floor.addColorStop(.22,'#151318');floor.addColorStop(1,'#08080c');ctx.fillStyle=floor;ctx.strokeStyle='#51202a';ctx.lineWidth=.035;ctx.fillRect(0,0,r-l,.58);ctx.strokeRect(0,0,r-l,.58);ctx.fillStyle='#50101b';ctx.fillRect(0,.48,r-l,.08);for(let i=0;i<(r-l)*.6;i++){const x=(i*3.17)%(r-l),y=.1+(i*11%27)/100;ctx.fillStyle=i%3?'#48111a99':'#71101d99';ctx.beginPath();ctx.ellipse(x,y,.13+(i%3)*.04,.025,0,0,Math.PI*2);ctx.fill()}return}
           if(levelIndex===4){const soil=ctx.createLinearGradient(0,0,0,.65);soil.addColorStop(0,'#171318');soil.addColorStop(.2,'#09090d');soil.addColorStop(1,'#030306');ctx.fillStyle=soil;ctx.strokeStyle='#410912';ctx.lineWidth=.035;ctx.fillRect(0,0,r-l,.48);ctx.strokeRect(0,0,r-l,.48);ctx.fillStyle='#540b17';ctx.fillRect(0,.43,r-l,.055);for(let stain=0;stain<Math.floor((r-l)*.42);stain++){const x=(stain*2.43)%(r-l),y=.08+(stain*17%31)/100,rx=.08+(stain%4)*.035;ctx.fillStyle=stain%3?'#71101dcc':'#a41523cc';ctx.beginPath();ctx.ellipse(x,y,rx,.025+(stain%3)*.012,Math.sin(stain)*.25,0,Math.PI*2);ctx.fill();if(stain%4===0)ctx.fillRect(x-rx*.2,y-.08,.045,.09)}return}
        if(levelIndex===0){
         const cloud=ctx.createLinearGradient(0,0,0,.7);cloud.addColorStop(0,'#f9fdff');cloud.addColorStop(.48,'#dcebf3');cloud.addColorStop(1,'#aac6d9');ctx.fillStyle=cloud;ctx.strokeStyle='#789bb4';ctx.lineWidth=.035;
         ctx.beginPath();ctx.roundRect(0,0,r-l,.58,.16);ctx.fill();ctx.stroke();
         for(let i=0;i<Math.floor((r-l)*1.3);i++)ellipse((i*47.3)%(r-l),.12+(i*13.2)%.3,.12,.035,i%2?'#ffffff99':'#a9c9dc88',null);
          return;
        }
          if(levelIndex===2){
          const path=ctx.createLinearGradient(0,0,0,.65);path.addColorStop(0,'#b68c64');path.addColorStop(.25,'#88674f');path.addColorStop(1,'#554238');ctx.fillStyle=path;ctx.strokeStyle='#42342d';ctx.lineWidth=.03;ctx.fillRect(0,0,r-l,.58);ctx.strokeRect(0,0,r-l,.58);
           for(let j=0;j<Math.floor((r-l)*1.5);j++){const px=(j*1.37)%(r-l),py=.08+(j%3)*.15;line([[px,py],[px+.46,py]],j%2?'#d0ad83':'#423b35',.02)}return;
         }
         if(levelIndex===3){
           const dirt=ctx.createLinearGradient(0,0,0,.68);dirt.addColorStop(0,'#a84d28');dirt.addColorStop(.18,'#874027');dirt.addColorStop(1,'#542d29');ctx.fillStyle=dirt;ctx.strokeStyle='#49272b';ctx.lineWidth=.03;ctx.fillRect(0,0,r-l,.58);ctx.strokeRect(0,0,r-l,.58);
           ctx.fillStyle='#69bd39';ctx.fillRect(0,.48,r-l,.18);ctx.fillStyle='#a1e653';ctx.fillRect(0,.55,r-l,.08);
           for(let j=0;j<Math.floor((r-l)*1.15);j++){const px=(j*.87)%(r-l),row=j%2;line([[px,.12+row*.2],[px+.43,.12+row*.2]],'#d47a42',.025);if(row===0)line([[px+.42,.12],[px+.42,.32]],'#d47a42',.025)}return;
         }
        if(levelIndex===1){
          const stone=ctx.createLinearGradient(0,0,0,.62);stone.addColorStop(0,'#777b79');stone.addColorStop(.2,'#555b5c');stone.addColorStop(1,'#383f42');ctx.fillStyle=stone;ctx.strokeStyle='#292e31';ctx.lineWidth=.025;ctx.fillRect(0,0,r-l,.58);ctx.strokeRect(0,0,r-l,.58);
          for(let j=0;j<Math.floor((r-l)*1.4);j++){const px=(j*1.13)%(r-l),row=j%2;line([[px,.08+row*.23],[px+.38,.08+row*.23]],'#90918a',.018)}
          return;
        }
      const soil=ctx.createLinearGradient(0,0,0,.58);soil.addColorStop(0,'#66533b');soil.addColorStop(.15,'#4d412f');soil.addColorStop(1,'#342f28');
      ctx.fillStyle=soil;ctx.strokeStyle='#302d23';ctx.lineWidth=.025;ctx.fillRect(0,0,r-l,.58);ctx.strokeRect(0,0,r-l,.58);
      // Tiny stones, roots and warm soil flecks add hand-painted ground texture.
      for(let j=0;j<Math.floor((r-l)*3);j++){const px=(j*37.17)%(r-l),py=.09+(j*13.73)%.39;ellipse(px,py,.018+(j%3)*.006,.009,j%2?'#8b7350':'#302d28',null)}
      line([[.1,.18],[.38,.23],[.61,.17]],'#806849',.016);
      const turf=ctx.createLinearGradient(0,.48,0,.7);turf.addColorStop(0,'#a0b66b');turf.addColorStop(.45,'#718d4c');turf.addColorStop(1,'#4d693e');ctx.fillStyle=turf;ctx.fillRect(0,.49,r-l,.18);
      for(let i=0;i<Math.floor((r-l)*2);i++){ctx.fillStyle=i%2?'#b3c77a':'#627e47';ctx.beginPath();ctx.moveTo(i*.5,.57);ctx.lineTo(i*.5+.04,.42);ctx.lineTo(i*.5+.08,.57);ctx.fill()}
    },l,-.59)}
      for(const [x,top,width] of [...stairs,...secretSteps])worldDraw(()=>{
        const cloudLevel=levelIndex===0;
       const fill=ctx.createLinearGradient(0,top-.25,0,top+.12);
       fill.addColorStop(0,cloudLevel?'#f7fbff':'#c99a59');fill.addColorStop(1,cloudLevel?'#9bbbd3':'#765132');
       ctx.fillStyle=fill;ctx.strokeStyle=cloudLevel?'#577590':'#493821';ctx.lineWidth=.035;
       ctx.beginPath();ctx.roundRect(0,top-.25,width,.25,.07);ctx.fill();ctx.stroke();
       line([[.08,top-.08],[width-.08,top-.08]],cloudLevel?'#ffffff':'#e4bd7c',.025);
     },x,0);
   }
  function drawLog(x){worldDraw(()=>{ctx.save();ctx.rotate(-.04);const wood=ctx.createLinearGradient(0,-.27,0,.27);wood.addColorStop(0,'#a17450');wood.addColorStop(.4,'#80573a');wood.addColorStop(1,'#493a2b');ctx.fillStyle=wood;ctx.strokeStyle='#392e27';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.67,-.16);ctx.lineTo(-.53,-.27);ctx.lineTo(.43,-.26);ctx.lineTo(.59,-.18);ctx.lineTo(.72,-.22);ctx.lineTo(.64,-.05);ctx.lineTo(.72,.09);ctx.lineTo(.57,.07);ctx.lineTo(.48,.26);ctx.lineTo(-.44,.25);ctx.lineTo(-.57,.19);ctx.lineTo(-.7,.22);ctx.lineTo(-.61,.04);ctx.closePath();ctx.fill();ctx.stroke();ellipse(-.62,.02,.12,.21,'#b8895c','#392e27',.025);ellipse(-.62,.02,.072,.145,'#765237','#d2a06a',.012);line([[-.35,-.16],[-.1,-.11],[.12,-.16],[.37,-.12]],'#b2865e',.022);line([[-.18,.16],[.02,.09],[.2,.15],[.42,.12]],'#513c2b',.018);line([[.03,.2],[.21,.13],[.34,.19]],'#513c2b',.013);ctx.beginPath();ctx.moveTo(.53,.19);ctx.lineTo(.73,.32);ctx.lineTo(.6,.11);ctx.closePath();ctx.fillStyle='#c09566';ctx.fill();ctx.restore()},x,.28)}
  function drawCoin(c,time){if(c.taken)return;worldDraw(()=>{ctx.save();ctx.translate(0,Math.sin(time*.004+c.x)*.045);if(levelIndex===4){ctx.shadowColor='#ffdc4a';ctx.shadowBlur=12;ctx.strokeStyle='#f4b91f';ctx.lineWidth=.075;ctx.beginPath();ctx.ellipse(0,0,.2,.27,0,0,Math.PI*2);ctx.stroke();ctx.strokeStyle='#fff2a5';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(0,0,.115,.19,0,0,Math.PI*2);ctx.stroke();line([[.1,.16],[.15,.21]],'#fffbd1',.035)}else{ctx.fillStyle='#f2bc45';ctx.strokeStyle='#714c24';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(0,0,.19,.24,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(0,0,.11,.16,0,0,Math.PI*2);ctx.strokeStyle='#ffe49a';ctx.lineWidth=.018;ctx.stroke();ctx.fillStyle='#fff0b8';ctx.fillRect(-.045,-.12,.035,.12)}ctx.restore()},c.x,c.y)}
   function drawMystery(item,time){
     if(item.taken)return;
      worldDraw(()=>{
       if(item.kind==='explosive'){
          const glow=ctx.createRadialGradient(0,.65,.05,0,.65,.85);glow.addColorStop(0,'#ffd16aaa');glow.addColorStop(.55,'#ff762f55');glow.addColorStop(1,'#ff542000');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(0,.65,.85,0,Math.PI*2);ctx.fill();
          ctx.save();ctx.translate(0,Math.sin(time*.004+item.phase)*.06);ctx.fillStyle='#374148';ctx.strokeStyle='#181e22';ctx.lineWidth=.035;ctx.beginPath();ctx.roundRect(-.4,.08,.8,.82,.12);ctx.fill();ctx.stroke();
          ctx.fillStyle='#dd4939';ctx.fillRect(-.28,.19,.56,.56);ctx.strokeStyle='#ffce72';ctx.lineWidth=.025;ctx.strokeRect(-.28,.19,.56,.56);
           ctx.fillStyle='#f7e5ba';ctx.font='bold .55px sans-serif';ctx.textAlign='center';ctx.fillText('💣',0,.69);line([[-.12,.92],[0,1.08],[.14,1.04]],'#ffd16a',.035);ellipse(.15,1.05,.055,.055,'#fff2a7',null);ctx.restore();return;
         }
        if(item.kind==='fireFlower'){
          const bob=Math.sin(time*.004+item.phase)*.06;ctx.save();ctx.translate(0,bob);ctx.shadowColor='#ff9b2f';ctx.shadowBlur=18;
          line([[0,.2],[0,.7]],'#368f45',.09);ellipse(-.14,.4,.15,.07,'#48ae4c','#276c38',.015);ellipse(.14,.53,.15,.07,'#66c64a','#276c38',.015);
          for(let petal=0;petal<8;petal++){const angle=petal*Math.PI/4;ellipse(Math.cos(angle)*.24,.98+Math.sin(angle)*.24,.13,.13,petal%2?'#ffd34e':'#ff8e32','#ad4e2d',.018)}
          ellipse(0,.98,.2,.2,'#f4edc4','#76523b',.022);ellipse(-.07,1.02,.025,.035,'#392528',null);ellipse(.07,1.02,.025,.035,'#392528',null);ctx.restore();return;
        }
        if(item.kind==='gem'){
         const glow=ctx.createRadialGradient(0,1,.04,0,1,.95);glow.addColorStop(0,'#fff9beee');glow.addColorStop(.32,'#b3f8ff99');glow.addColorStop(1,'#75baff00');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(0,1,.95,0,Math.PI*2);ctx.fill();
         ctx.save();ctx.translate(0,Math.sin(time*.004+item.phase)*.09);ctx.shadowColor='#9efaff';ctx.shadowBlur=22;
         const gem=ctx.createLinearGradient(-.28,.35,.25,1.65);gem.addColorStop(0,'#ffffff');gem.addColorStop(.27,'#9efaff');gem.addColorStop(.62,'#9c77ff');gem.addColorStop(1,'#ffda7b');
         ctx.fillStyle=gem;ctx.strokeStyle='#efffff';ctx.lineWidth=.045;ctx.beginPath();ctx.moveTo(0,.25);ctx.lineTo(.31,.65);ctx.lineTo(.25,1.28);ctx.lineTo(0,1.62);ctx.lineTo(-.25,1.28);ctx.lineTo(-.31,.65);ctx.closePath();ctx.fill();ctx.stroke();
         line([[0,.28],[0,1.57]],'#ffffffaa',.025);line([[-.29,.68],[.28,.68]],'#ffffffbb',.025);ctx.restore();
         for(let i=0;i<5;i++){const a=time*.001+i*Math.PI*2/5;ellipse(Math.cos(a)*(.48+Math.sin(time*.003+i)*.08),1+Math.sin(a)*.48,.035,.035,'#fff6a8',null)}
         return;
       }
        if(item.kind==='heartCrystal'){
          const pulse=.04*Math.sin(time*.005+item.phase);
          const glow=ctx.createRadialGradient(0,.9,.04,0,.9,.9);glow.addColorStop(0,'#ff9fc9cc');glow.addColorStop(.45,'#ef4f8d55');glow.addColorStop(1,'#ef4f8d00');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(0,.9,.9,0,Math.PI*2);ctx.fill();
          ctx.save();ctx.translate(0,Math.sin(time*.004+item.phase)*.07);ctx.shadowColor='#ff74ad';ctx.shadowBlur=18;
          const crystal=ctx.createLinearGradient(-.3,.35,.3,1.55);crystal.addColorStop(0,'#fff');crystal.addColorStop(.35,'#ffc6e0');crystal.addColorStop(.7,'#ed83ba');crystal.addColorStop(1,'#a94d9a');ctx.fillStyle=crystal;ctx.strokeStyle='#fff0fa';ctx.lineWidth=.04;ctx.beginPath();ctx.moveTo(0,.2);ctx.lineTo(.34,.55);ctx.lineTo(.28,1.22);ctx.lineTo(0,1.57);ctx.lineTo(-.28,1.22);ctx.lineTo(-.34,.55);ctx.closePath();ctx.fill();ctx.stroke();
          ctx.fillStyle='#dc315f';ctx.strokeStyle='#9e2148';ctx.lineWidth=.018;ctx.beginPath();ctx.moveTo(0,.72);ctx.bezierCurveTo(-.34,.48,-.39,.96,0,1.22);ctx.bezierCurveTo(.39,.96,.34,.48,0,.72);ctx.fill();ctx.stroke();ctx.restore();return;
        }
        const glow=ctx.createRadialGradient(0,1.05,.04,0,1.05,.8);glow.addColorStop(0,'#92fff0aa');glow.addColorStop(.5,'#39c6b444');glow.addColorStop(1,'#39c6b400');
      ctx.fillStyle=glow;ctx.beginPath();ctx.ellipse(0,1.05,.8,.9,0,0,Math.PI*2);ctx.fill();
      ctx.save();ctx.translate(0,Math.sin(time*.003+item.phase)*.06);
      ctx.fillStyle='#252e32';ctx.strokeStyle='#10181c';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.36,.18);ctx.lineTo(-.3,.62);ctx.lineTo(-.18,.74);ctx.lineTo(.28,.74);ctx.lineTo(.36,.6);ctx.lineTo(.33,.18);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.strokeStyle='#647d76';ctx.lineWidth=.018;ctx.strokeRect(-.23,.31,.46,.3);
      // Faint lit outline of a pistol hidden inside the relic.
      ctx.fillStyle='#bdcfca';ctx.strokeStyle='#273738';ctx.lineWidth=.014;ctx.beginPath();ctx.moveTo(-.15,.49);ctx.lineTo(.12,.49);ctx.lineTo(.22,.55);ctx.lineTo(.18,.6);ctx.lineTo(-.12,.6);ctx.lineTo(-.15,.49);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.beginPath();ctx.moveTo(-.04,.49);ctx.lineTo(-.02,.36);ctx.lineTo(.08,.36);ctx.lineTo(.1,.49);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.strokeStyle='#78e5d2';ctx.lineWidth=.025;ctx.beginPath();ctx.arc(0,.89,.24,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle='#d5fff3';ctx.fillRect(-.025,.62,.05,.18);ctx.fillRect(-.1,.69,.2,.04);
      ctx.restore();
     },item.x,item.y||0);
  }
      function drawBullet(b){worldDraw(()=>{if(b.kind==='tailsEnergyBomb'){ctx.shadowColor='#83f5ff';ctx.shadowBlur=.5;line([[0,0],[-b.vx*.055,-b.vy*.055]],'#e9ffff',.17);ellipse(0,0,.24,.22,'#4beaff','#efffff',.04);ellipse(-.04,.025,.12,.11,'#fff',null);for(let i=0;i<3;i++){const angle=performance.now()*.012+i*Math.PI*2/3;ellipse(Math.cos(angle)*.31,Math.sin(angle)*.28,.045,.045,'#b9fbff',null)}}else if(b.kind==='kame'){ctx.shadowColor='#37c9ff';ctx.shadowBlur=.55;line([[0,0],[-b.vx*.045,-b.vy*.045]],'#a4f7ff',.18);ellipse(0,0,.27,.2,'#50dfff','#efffff',.035);ellipse(-.04,.025,.11,.09,'#fff',null)}else if(b.kind==='kirin'){ctx.shadowColor='#66dfff';ctx.shadowBlur=.55;for(let strand=0;strand<3;strand++){ctx.beginPath();ctx.moveTo(-.72,(strand-1)*.08);ctx.lineTo(-.48,(strand-1)*.06);ctx.lineTo(-.29,(strand-1)*.12);ctx.lineTo(-.08,(strand-1)*.045);ctx.lineTo(.14,(strand-1)*.08);ctx.lineTo(.38,(strand-1)*.03);ctx.strokeStyle=strand===1?'#f5ffff':'#72dcff';ctx.lineWidth=strand===1?.095:.045;ctx.stroke()}ellipse(.22,0,.14,.12,'#c5f8ff','#fff',.02)}else if(b.kind==='marioFire'){ctx.shadowColor='#ff7427';ctx.shadowBlur=.28;ellipse(0,0,.22,.18,'#f04827','#982c24',.025);ellipse(.025,.02,.14,.12,'#ffbd3d','#ffe894',.018);ellipse(.05,.025,.065,.065,'#fff6c0',null);line([[-.34,0],[-.18,.03]],'#ff7130',.09)}else if(b.kind==='fireball'){ctx.shadowColor='#ff4b12';ctx.shadowBlur=.45;ctx.fillStyle='#ff641b';ctx.beginPath();ctx.moveTo(-.78,0);ctx.quadraticCurveTo(-.38,-.22,.02,-.25);ctx.quadraticCurveTo(.35,-.24,.43,0);ctx.quadraticCurveTo(.3,.25,.02,.24);ctx.quadraticCurveTo(-.4,.21,-.78,0);ctx.fill();ellipse(.22,0,.21,.19,'#ff9b24','#ffe06c',.03);ellipse(.26,0,.11,.12,'#fff0a0',null);for(let k=0;k<3;k++){const flicker=Math.sin(k*2+performance.now()*.015)*.07;line([[-.35-k*.1,flicker],[-.15-k*.08,flicker*.5]],'#ffd04c',.045)}}else if(b.kind==='bomb'){line([[0,0],[-b.vx*.025,-b.vy*.025]],'#ff8b4c',.09);ellipse(0,0,.18,.16,'#343c40','#14191b',.025);ellipse(.03,.06,.055,.045,'#ffcf70','#fff1ac',.012)}else{line([[0,0],[-b.vx*.018,-b.vy*.018]],'#fff4ab',.045);ellipse(0,0,.055,.035,'#fffde0',null)}},b.x,b.y)}
     function drawChakraShot(shot,time){worldDraw(()=>{
       ctx.save();ctx.rotate(Math.atan2(shot.vy,shot.vx));
       if(shot.kind==='bowserFire'){
         ctx.shadowColor='#ff481e';ctx.shadowBlur=.32;line([[-.48,0],[-.08,0]],'#ff772c',.16);ellipse(0,0,.23,.19,'#f04a20','#8d2e24',.025);ellipse(.045,0,.135,.12,'#ffba3e','#fff0a2',.018);ellipse(.08,.015,.065,.07,'#fff5c5',null);
        }else if(shot.kind==='voidSonicShot'){
          ctx.shadowColor='#c00d2c';ctx.shadowBlur=.32;line([[-.55,0],[-.1,0]],'#79101e',.17);ellipse(0,0,.24,.2,'#15070d','#b91831',.035);ellipse(.035,0,.1,.085,'#d31b32','#ff9aa3',.018);
        }else if(shot.kind==='rasengan'){
         ctx.shadowColor='#ff7a16';ctx.shadowBlur=.28;line([[-.62,0],[-.12,0]],'#ff9d26',.18);ellipse(0,0,.28,.25,'#ff851b','#ffd05a',.045);ellipse(.025,0,.18,.16,'#ffad28','#fff0a3',.025);ctx.strokeStyle='#fff2b7';ctx.lineWidth=.025;ctx.beginPath();ctx.arc(.025,0,.12,time*.018,time*.018+Math.PI*1.55);ctx.stroke();ctx.beginPath();ctx.arc(.025,0,.075,-time*.02,-time*.02+Math.PI*1.5);ctx.stroke();
       }else{line([[-.5,0],[-.08,0]],'#df4c36',.12);ellipse(0,0,.2,.17,'#ed5937','#7c2e39',.025);ellipse(.03,.015,.11,.09,'#ffca62','#fff0b4',.018);ctx.strokeStyle='#fff0b4';ctx.lineWidth=.018;ctx.beginPath();ctx.arc(.03,.015,.06,time*.009,time*.009+Math.PI*1.55);ctx.stroke()}
       ctx.restore();
     },shot.x,shot.y)}
    function drawExplosion(explosion){const p=1-explosion.life/.38;worldDraw(()=>{ctx.globalAlpha=Math.max(0,1-p);const r=explosion.big ? .42+p*1.25 : .2+p*.85;ellipse(0,0,r,r,'#ffcf55','#fff0ab',.04);ellipse(0,0,r*.58,r*.7,'#f56a32','#ffdc78',.025);ellipse(0,0,r*.26,r*.38,'#fff3af',null)},explosion.x,explosion.y)}
    function drawSmokePuff(puff){const progress=1-puff.life/puff.maxLife;worldDraw(()=>{ctx.globalAlpha=Math.max(0,puff.life/puff.maxLife)*.58;const radius=puff.radius+progress*.24;ellipse(0,0,radius,radius*.78,'#d9e1df',null);ellipse(-radius*.28,radius*.12,radius*.52,radius*.45,'#f2f5ed',null)},puff.x,puff.y)}
      function drawAnimal(a,time){if(!a.active)return;worldDraw(()=>{
         if(a.phase===2){ctx.globalAlpha=.24+.12*Math.sin(time*.018);ctx.strokeStyle='#fa2938';ctx.lineWidth=.055;ctx.beginPath();ctx.ellipse(0,1.05,.82+Math.sin(time*.014)*.08,.95+Math.sin(time*.014)*.08,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1}
        if(a.type==='eggman'){
          const bob=Math.sin(time*.008)*.07;ctx.save();ctx.scale(a.direction||1,1);ctx.translate(0,bob);ellipse(0,.05,.78,.12,'#17132199',null);
          for(const side of [-1,1]){ctx.fillStyle='#a62432';ctx.strokeStyle='#481723';ctx.lineWidth=.045;ctx.beginPath();ctx.roundRect(side*.17-.11,.12,.22,.62,.07);ctx.fill();ctx.stroke();ctx.fillStyle='#e4ac28';ctx.beginPath();ctx.ellipse(side*.25,.18,.16,.09,0,0,Math.PI*2);ctx.fill();ctx.stroke()}
          ctx.fillStyle='#d12c34';ctx.strokeStyle='#541723';ctx.lineWidth=.05;ctx.beginPath();ctx.moveTo(-.48,.53);ctx.lineTo(-.38,1.28);ctx.quadraticCurveTo(0,1.53,.38,1.28);ctx.lineTo(.48,.53);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#f1c72f';ctx.beginPath();ctx.moveTo(-.4,1.13);ctx.lineTo(0,1.42);ctx.lineTo(.4,1.13);ctx.lineTo(.29,.91);ctx.lineTo(-.29,.91);ctx.closePath();ctx.fill();ctx.stroke();
          ellipse(0,1.83,.47,.53,'#edc29a','#613e38',.04);ctx.fillStyle='#e83331';ctx.beginPath();ctx.arc(0,2.13,.49,Math.PI,Math.PI*2);ctx.lineTo(.43,2.13);ctx.lineTo(-.43,2.13);ctx.closePath();ctx.fill();ctx.stroke();
          for(const side of [-1,1]){ellipse(side*.2,1.9,.115,.13,'#fff','#3e3031',.025);ellipse(side*.2,1.9,.045,.075,'#22212a',null)}
          ctx.fillStyle='#e77b32';ctx.strokeStyle='#7c3b2e';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.38,1.67);ctx.quadraticCurveTo(-.2,1.98,0,1.74);ctx.quadraticCurveTo(.2,1.98,.38,1.67);ctx.quadraticCurveTo(.17,1.61,0,1.7);ctx.quadraticCurveTo(-.18,1.6,-.38,1.67);ctx.fill();ctx.stroke();
          ctx.fillStyle='#180e1a';ctx.fillRect(-.92,2.65,1.84,.18);ctx.fillStyle='#ec3640';ctx.fillRect(-.87,2.7,1.74*(a.hp/a.maxHp),.08);ctx.strokeStyle='#f5d9ad';ctx.lineWidth=.025;ctx.strokeRect(-.92,2.65,1.84,.18);ctx.restore();return;
        }
         if(a.type==='faceless'){
           const sway=Math.sin(time*.003+a.phase)*.07,step=Math.sin((a.walkPhase||time*.003)*2)*.09;ctx.save();ctx.translate(sway,Math.abs(Math.sin(time*.004+a.phase))*.035);ctx.scale(a.direction||1,1);
           ctx.fillStyle='#100b12';ctx.strokeStyle='#32131d';ctx.lineWidth=.045;ctx.beginPath();ctx.moveTo(-.36,.12);ctx.quadraticCurveTo(-.62,.61,-.51,1.12);ctx.quadraticCurveTo(-.54,1.86,-.28,2.02);ctx.quadraticCurveTo(0,2.2,.29,2.02);ctx.quadraticCurveTo(.55,1.65,.49,1.13);ctx.quadraticCurveTo(.63,.59,.34,.12);ctx.quadraticCurveTo(0,-.04,-.36,.12);ctx.closePath();ctx.fill();ctx.stroke();
           // Smooth, completely blank face under a tattered hood.
           ctx.fillStyle='#050408';ctx.beginPath();ctx.moveTo(-.38,1.78);ctx.quadraticCurveTo(-.28,2.28,.02,2.24);ctx.quadraticCurveTo(.34,2.2,.39,1.76);ctx.quadraticCurveTo(.2,1.91,.02,1.85);ctx.quadraticCurveTo(-.19,1.92,-.38,1.78);ctx.closePath();ctx.fill();ctx.stroke();ellipse(.01,1.48,.24,.33,'#09070c','#25101a',.018);
           line([[-.32,1.4],[-.53,1.07],[-.48,.72]],'#171019',.15);line([[.31,1.4],[.52,1.05],[.47,.74]],'#171019',.15);
           line([[-.19,.34+step],[-.25,.02],[ -.36,-.16]],'#100b12',.13);line([[.18,.34-step],[.25,.03],[.36,-.16]],'#100b12',.13);
           line([[-.42,1.64],[-.34,1.34],[-.21,1.08]],'#7d1426',.035);line([[.3,.82],[.22,.52],[.32,.32]],'#671020',.03);ctx.restore();return;
         }
           if(a.type==='voidSonic'){
            const now=time/1000,dash=a.voidDashUntil>now,charging=a.voidChargeUntil>now,bob=Math.sin(time*(dash?.035:.008))*(dash?.16:.045);ctx.save();ctx.translate(0,bob+(charging?-.12:0));ctx.scale(a.direction||1,1);
            if(charging){const pulse=.72+.28*Math.sin(time*.04);ctx.globalAlpha=pulse;ctx.strokeStyle='#ff1b3a';ctx.lineWidth=.065;ctx.beginPath();ctx.ellipse(0,.12,.92+Math.sin(time*.025)*.12,.22,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;for(let spark=0;spark<4;spark++){const sx=Math.sin(time*.016+spark*1.57)*.78,sy=.35+Math.cos(time*.016+spark*1.57)*.12;line([[sx,sy],[sx+a.direction*.13,sy+.16]],'#ee2944',.035)}}
           // Final boss: a taller, ragged Sonic shape with hollow red eyes and a bloodied grin.
           ctx.fillStyle='#061023';ctx.strokeStyle='#160810';ctx.lineWidth=.07;ctx.beginPath();ctx.moveTo(-.18,1.55);ctx.quadraticCurveTo(-.52,1.88,-1.08,2.18);ctx.quadraticCurveTo(-.86,1.72,-.6,1.35);ctx.quadraticCurveTo(-1.02,1.54,-1.28,1.48);ctx.quadraticCurveTo(-1.02,1.12,-.67,.98);ctx.quadraticCurveTo(-1.03,.77,-1.08,.48);ctx.quadraticCurveTo(-.65,.53,-.43,.83);ctx.quadraticCurveTo(-.34,.34,-.1,.2);ctx.quadraticCurveTo(.42,.04,.68,.46);ctx.quadraticCurveTo(.89,.86,.63,1.2);ctx.quadraticCurveTo(.72,1.54,.39,1.77);ctx.closePath();ctx.fill();ctx.stroke();
           ellipse(.12,.79,.48,.59,'#10243a','#050710',.055);ellipse(.25,1.34,.48,.42,'#4c555a','#090b12',.045);
           ellipse(.49,1.12,.34,.22,'#a88c7b','#392a30',.035);
           for(const ex of [.22,.48]){ellipse(ex,1.49,.105,.15,'#09050b','#210914',.025);ellipse(ex+.018,1.49,.045,.105,'#f20c2e',null);ellipse(ex+.025,1.52,.014,.065,'#fff0e6',null)}
           line([[.09,1.66],[.25,1.74],[.43,1.67],[.58,1.72]],'#1c0710',.075);ctx.fillStyle='#13040a';ctx.beginPath();ctx.moveTo(.2,1.11);ctx.quadraticCurveTo(.49,.87,.75,1.09);ctx.quadraticCurveTo(.49,1.3,.2,1.11);ctx.fill();for(let t=0;t<5;t++){ctx.fillStyle='#f0e4d9';ctx.beginPath();ctx.moveTo(.28+t*.075,1.16);ctx.lineTo(.34+t*.075,1.16);ctx.lineTo(.31+t*.075,1.08);ctx.closePath();ctx.fill()}
           line([[-.35,1.63],[-.18,1.37],[-.31,1.11],[.02,.88]],'#b40f2a',.11);line([[.56,1.7],[.37,1.43],[.62,1.2]],'#d51a35',.095);line([[-.2,.8],[.08,.69],[.4,.76]],'#971020',.09);
           line([[-.22,.88],[-.53,.63],[-.66,.42]],'#101d31',.2);line([[.45,.85],[.72,.59],[.82,.35]],'#101d31',.2);for(let claw=0;claw<3;claw++)line([[.74+claw*.08,.38],[.82+claw*.08,.22]],'#c8c1bd',.035);
           for(const side of [-1,1]){ctx.fillStyle='#b8142d';ctx.beginPath();ctx.ellipse(side*.31,.05,.32,.18,side*.08,0,Math.PI*2);ctx.fill();line([[side*.31-.15,.06],[side*.31+.14,.06]],'#f4e7dc',.055)}
            ctx.fillStyle='#050307';ctx.fillRect(-.72,2.28,1.44,.16);ctx.fillStyle='#d41635';ctx.fillRect(-.68,2.32,1.36*(a.hp/a.maxHp),.075);ctx.strokeStyle='#8e2638';ctx.lineWidth=.025;ctx.strokeRect(-.72,2.28,1.44,.16);ctx.restore();return;
          }
          if(a.type==='sonicCopy'){
            ctx.save();ctx.globalAlpha=1;ctx.shadowColor='#e20d35';ctx.shadowBlur=.16;ctx.scale(a.direction||1,1);ctx.translate(Math.sin(time*.025+a.phase)*.06,Math.sin(time*.018+a.phase)*.04);
            ctx.fillStyle='#164f9f';ctx.strokeStyle='#080b1d';ctx.lineWidth=.05;ctx.beginPath();ctx.moveTo(-.08,1.45);ctx.lineTo(-.73,1.94);ctx.lineTo(-.48,1.36);ctx.lineTo(-.98,1.55);ctx.lineTo(-.57,1.08);ctx.lineTo(-.76,.77);ctx.lineTo(-.28,.8);ctx.lineTo(-.08,.34);ctx.quadraticCurveTo(.42,.14,.62,.65);ctx.quadraticCurveTo(.86,1.03,.56,1.45);ctx.closePath();ctx.fill();ctx.stroke();
            ellipse(.04,.72,.39,.48,'#1b5db3','#090b1d',.045);ellipse(.24,1.31,.39,.37,'#286ec5','#090b1d',.045);ellipse(.49,1.08,.27,.16,'#d1c0b9','#30232e',.025);
            for(const eye of [.25,.43]){ellipse(eye,1.4,.05,.095,'#160712',null);ellipse(eye+.01,1.4,.025,.07,'#ff173b',null)}line([[.28,1.19],[.43,1.24],[.56,1.18]],'#1a0710',.045);
            ctx.restore();return;
          }
          if(a.type==='darkHand'){
           const grabbing=(a.grabUntil||0)>time/1000,pulse=Math.abs(Math.sin(time*.007+a.phase)),rise=grabbing?1.15+pulse*.22:.12+pulse*.08;ctx.save();ctx.translate(0,-.12);ctx.fillStyle='#420b17';ctx.beginPath();ctx.ellipse(0,.02,.7,.14,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#110910';ctx.strokeStyle='#500d1d';ctx.lineWidth=.045;ctx.beginPath();ctx.moveTo(-.16,.02);ctx.bezierCurveTo(-.22,rise*.3,-.2,rise*.75,-.48,rise);ctx.quadraticCurveTo(-.62,rise+.18,-.73,rise-.02);ctx.quadraticCurveTo(-.6,rise-.18,-.48,rise-.16);ctx.bezierCurveTo(-.22,rise*.65,-.33,rise*.32,-.12,.02);ctx.closePath();ctx.fill();ctx.stroke();ellipse(-.49,rise-.01,.28,.2,'#160b14','#581021',.035);for(let finger=0;finger<4;finger++){const fx=-.68+finger*.13;ctx.beginPath();ctx.moveTo(fx,rise-.04);ctx.quadraticCurveTo(fx-.08,rise+.25+(finger%2)*.08,fx+.02,rise+.42+(finger%2)*.08);ctx.quadraticCurveTo(fx+.13,rise+.47+(finger%2)*.08,fx+.12,rise+.31);ctx.lineTo(fx+.1,rise-.05);ctx.closePath();ctx.fill();ctx.stroke();line([[fx+.02,rise+.4],[fx+.1,rise+.37]],'#a21c2c',.035)}ellipse(-.49,rise-.01,.075,.07,grabbing?'#d71932':'#72182a',null);ctx.restore();return;
         }
         if(a.type==='badnik'){
          const bounce=Math.abs(Math.sin((a.walkPhase||time*.004)*2))*.07;ctx.save();ctx.translate(0,bounce);ctx.fillStyle='#bd323b';ctx.strokeStyle='#52212b';ctx.lineWidth=.04;ctx.beginPath();ctx.ellipse(0,.42,.39,.34,0,0,Math.PI*2);ctx.fill();ctx.stroke();
          ellipse(0,.52,.25,.21,'#83939b','#303a46',.035);ellipse(.1,.54,.045,.12,'#fff','#282c36',.018);ellipse(.12,.55,.018,.065,'#17202a',null);
          for(const side of [-1,1]){line([[side*.25,.28],[side*.42,.1],[side*.55,.13]],'#555d68',.075);ctx.fillStyle='#d7ad39';ctx.beginPath();ctx.arc(side*.56,.13,.085,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#51402b';ctx.lineWidth=.02;ctx.stroke();line([[side*.18,.69],[side*.29,.84],[side*.36,.91]],'#68727a',.06)}
          ctx.fillStyle='#d3b33c';ctx.fillRect(-.08,.18,.16,.1);ctx.restore();return;
        }
        if(levelIndex===3&&['goomba','koopa','bowser','bowserJr'].includes(a.type)){
          const bowser=a.type==='bowser'||a.type==='bowserJr',jr=a.type==='bowserJr',bounce=Math.abs(Math.sin((a.walkPhase||time*.004)*1.5))*.055,scaleSize=jr?1:bowser?1.5:1;ctx.save();ctx.scale(a.direction||1,1);ctx.scale(scaleSize,scaleSize);ctx.translate(0,bounce);
          if(!bowser&&a.type==='goomba'){
            ellipse(0,.36,.34,.38,'#a65331','#4a2b28',.035);ellipse(0,.18,.34,.17,'#8a4a2f','#4a2b28',.025);
            ctx.fillStyle='#ba7342';ctx.strokeStyle='#4a2b28';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.4,.52);ctx.quadraticCurveTo(-.35,.95,0,1.01);ctx.quadraticCurveTo(.35,.95,.4,.52);ctx.quadraticCurveTo(0,.35,-.4,.52);ctx.fill();ctx.stroke();
            for(const side of [-1,1]){ellipse(side*.13,.58,.095,.14,'#fff','#4a2b28',.02);ellipse(side*.15,.57,.036,.075,'#171526',null);line([[side*.04,.38],[side*.15,.41],[side*.26,.38]],'#33242a',.035);}
            line([[-.29,.15],[-.48,.06]],'#d79a63',.05);line([[.29,.15],[.48,.06]],'#d79a63',.05);
          }else if(!bowser){
            ellipse(0,.39,.31,.38,'#47a849','#23452e',.03);ellipse(.03,.4,.39,.31,'#58b94d','#255232',.035);ctx.fillStyle='#398d43';ctx.strokeStyle='#235234';ctx.lineWidth=.03;ctx.beginPath();ctx.ellipse(-.03,.39,.31,.23,-.1,0,Math.PI*2);ctx.fill();ctx.stroke();
            for(let spike=-1;spike<=1;spike++)line([[spike*.15,.57],[spike*.15,.74]],'#fff0c9',.075);
            ellipse(.31,.96,.26,.29,'#84d75d','#315232',.03);ellipse(.51,1.03,.13,.075,'#efe6c7','#564b3a',.02);ellipse(.39,1.02,.035,.05,'#171820',null);
            for(let spike=0;spike<2;spike++)line([[.19+spike*.17,1.15],[.14+spike*.2,1.34]],'#f4e8ce',.055);
          }else{
            // Bowser and Bowser Jr: orange scales, spiked green shell, horns, and a crown tuft.
            ellipse(-.18,.9,.55,.57,jr?'#f2cf58':'#e3b947','#49312c',.04);ellipse(.08,.73,.53,.4,jr?'#43a847':'#359648','#244d36',.045);
            for(let spike=-2;spike<=2;spike++){const sx=.08+spike*.17;ctx.fillStyle='#fff1d2';ctx.strokeStyle='#51423b';ctx.lineWidth=.018;ctx.beginPath();ctx.moveTo(sx-.08,.96);ctx.lineTo(sx,.96+(Math.abs(spike)%2?.25:.34));ctx.lineTo(sx+.08,.96);ctx.closePath();ctx.fill();ctx.stroke()}
            ellipse(.34,1.36,.43,.38,'#e6b94d','#51382d',.04);ellipse(.65,1.22,.25,.15,'#e6b94d','#51382d',.025);
            for(const horn of [-1,1]){ctx.fillStyle='#f5ead0';ctx.strokeStyle='#493a32';ctx.beginPath();ctx.moveTo(.12,1.62);ctx.quadraticCurveTo(.08,1.97,.31,1.82);ctx.lineTo(.42,1.63);ctx.closePath();ctx.fill();ctx.stroke();ctx.scale(-1,1);}
            ellipse(.22,1.4,.11,.07,'#fff4dc','#382e2d',.018);ellipse(.25,1.4,.035,.055,'#d82e24',null);ellipse(.51,1.4,.11,.07,'#fff4dc','#382e2d',.018);ellipse(.54,1.4,.035,.055,'#d82e24',null);
            line([[.47,1.13],[.62,1.1],[.77,1.13]],'#49252a',.055);for(let tooth=0;tooth<3;tooth++)line([[.54+tooth*.09,1.11],[.55+tooth*.09,1.04]],'#fff2cf',.025);
            for(const side of [-1,1]){ellipse(side*.3,.28,.12,.17,'#d9a640','#51382d',.02);ctx.fillStyle='#faf0d6';ctx.beginPath();ctx.moveTo(side*.27,.4);ctx.lineTo(side*.34,.62);ctx.lineTo(side*.4,.38);ctx.closePath();ctx.fill();ctx.stroke();}
            if(jr){ctx.fillStyle='#fff0ca';ctx.beginPath();ctx.ellipse(.35,.91,.2,.14,0,0,Math.PI*2);ctx.fill();ctx.stroke();line([[.2,.92],[.49,.92]],'#ac5141',.025);ctx.fillStyle='#d84d42';ctx.font='bold .11px sans-serif';ctx.textAlign='center';ctx.fillText('JR',.35,.87)}
            if(!jr){ctx.fillStyle='#292126';ctx.fillRect(-.72,2.25,1.44,.16);ctx.fillStyle='#f5c343';ctx.fillRect(-.68,2.29,1.36*(a.hp/a.maxHp),.08);ctx.strokeStyle='#fff0ca';ctx.lineWidth=.025;ctx.strokeRect(-.72,2.25,1.44,.16)}
          }
          ctx.restore();return;
        }
        if(a.type==='ninja'||(a.type==='boss'&&levelIndex===2)){
         const nineTails=a.type==='boss',pace=Math.sin(a.walkPhase||time*.004)*.11;ctx.save();ctx.scale(a.direction||1,1);ctx.scale(nineTails?1.45:1, nineTails?1.45:1);
          if(nineTails){
            // Distinct fiery chakra aura framing the cloak and tail fan.
            ctx.save();ctx.globalAlpha=.45+Math.sin(time*.012)*.12;ctx.strokeStyle='#ff8b35';ctx.lineWidth=.11;ctx.beginPath();ctx.ellipse(0,1.12,.66,.92,-.08,0,Math.PI*2);ctx.stroke();ctx.strokeStyle='#ffd15a';ctx.lineWidth=.035;ctx.beginPath();ctx.ellipse(0,1.12,.72,1.01,.08,0,Math.PI*2);ctx.stroke();ctx.restore();
            // Nine separate, flat chakra tails fan out behind Naruto's cloak.
           for(let tail=0;tail<9;tail++){const spread=tail-4,tipY=.48+tail*.19;ctx.beginPath();ctx.moveTo(-.2,1.12);ctx.bezierCurveTo(-.62,1.28+spread*.08,-.88,.72+tail*.13,-1.42,tipY);ctx.bezierCurveTo(-1.16,tipY+.04,-.78,.84+tail*.12,-.2,1.12);ctx.fillStyle=tail%2?'#eb6731':'#f58234';ctx.strokeStyle='#a93d32';ctx.lineWidth=.025;ctx.fill();ctx.stroke();line([[-.32,1.12],[-.78,.98+tail*.12],[-1.23,tipY+.015]],'#ffc05a',.025)}
         }
         const cloth=ctx.createLinearGradient(-.42,.3,.42,1.8);cloth.addColorStop(0,nineTails?'#ed6030':'#27343a');cloth.addColorStop(.5,nineTails?'#ed6030':'#42515a');cloth.addColorStop(1,nineTails?'#ed6030':'#20282d');
        // Shinobi tunic, belt, and split trousers.
        ctx.fillStyle=cloth;ctx.strokeStyle='#171a22';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.32,1.55);ctx.lineTo(-.48,1.4);ctx.lineTo(-.38,.72);ctx.lineTo(-.22,.57);ctx.lineTo(.22,.57);ctx.lineTo(.38,.72);ctx.lineTo(.48,1.4);ctx.lineTo(.32,1.55);ctx.closePath();ctx.fill();ctx.stroke();
         ctx.fillStyle=nineTails?'#302b35':'#b58c56';ctx.fillRect(-.35,.68,.7,.12);ctx.strokeRect(-.35,.68,.7,.12);
        for(const side of [-1,1]){ctx.save();ctx.translate(side*.17,.64);ctx.rotate(side*pace);line([[0,0],[side*.04,-.29],[side*.08,-.57]],cloth,.2);ctx.fillStyle='#27242b';ctx.beginPath();ctx.moveTo(side*.08,-.57);ctx.lineTo(side*.27,-.6);ctx.lineTo(side*.34,-.66);ctx.lineTo(side*.04,-.68);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore()}
        // Long sleeves and a small kunai held forward.
        for(const side of [-1,1]){ctx.save();ctx.translate(side*.34,1.4);ctx.rotate(side*(pace+.16));line([[0,0],[side*.12,-.22],[side*.18,-.47]],cloth,.17);ellipse(side*.18,-.48,.09,.085,'#d39a78','#30272a',.018);ctx.restore()}
        line([[.48,.91],[.75,.77],[.91,.8]],'#b9c5c8',.045);line([[.91,.8],[1.03,.92],[.9,.88]],'#dde1dc',.035);
        // Face, dark spiky hair, and a Leaf forehead protector.
         ctx.fillStyle='#dca984';ctx.strokeStyle='#392c2e';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(0,1.91,.31,.38,0,0,Math.PI*2);ctx.fill();ctx.stroke();
          ctx.fillStyle=nineTails?'#f2bd39':'#1d252a';ctx.beginPath();ctx.moveTo(-.31,2.02);ctx.lineTo(-.45,2.43);ctx.lineTo(-.18,2.28);ctx.lineTo(-.09,2.58);ctx.lineTo(.08,2.31);ctx.lineTo(.28,2.49);ctx.lineTo(.3,2.03);ctx.closePath();ctx.fill();ctx.stroke();
          if(nineTails){ctx.fillStyle='#ffd34f';ctx.strokeStyle='#a94732';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.25,2.34);ctx.lineTo(-.23,2.78);ctx.lineTo(-.06,2.43);ctx.lineTo(.02,2.75);ctx.lineTo(.14,2.42);ctx.lineTo(.3,2.68);ctx.lineTo(.25,2.31);ctx.closePath();ctx.fill();ctx.stroke();line([[-.16,2.46],[-.2,2.67]],'#fff09a',.018);line([[.1,2.45],[.18,2.6]],'#fff09a',.018)}
         if(nineTails){for(const side of [-1,1]){ctx.fillStyle='#f58234';ctx.strokeStyle='#a93d32';ctx.beginPath();ctx.moveTo(side*.2,2.13);ctx.lineTo(side*.34,2.48);ctx.lineTo(side*.45,2.19);ctx.closePath();ctx.fill();ctx.stroke();for(let mark=0;mark<3;mark++)line([[side*.12,1.93-mark*.09],[side*.24,1.9-mark*.09]],'#9e3434',.02)}}
          ctx.fillStyle='#26353b';ctx.fillRect(-.34,2.01,.68,.16);ctx.fillStyle='#aebbb9';ctx.fillRect(-.2,1.99,.4,.19);ctx.strokeStyle='#35484d';ctx.lineWidth=.025;ctx.strokeRect(-.2,1.99,.4,.19);ellipse(0,2.085,.065,.05,'#d6ddd0','#455252',.012);ctx.strokeStyle='#384c4c';ctx.lineWidth=.018;ctx.beginPath();ctx.arc(0,2.085,.031,Math.PI*.2,Math.PI*1.8);ctx.stroke();
          line([[-.18,1.84],[-.08,1.86]],nineTails?'#712833':'#3a2727',.026);line([[.07,1.86],[.18,1.84]],nineTails?'#712833':'#3a2727',.026);ellipse(-.13,1.83,.025,.028,nineTails?'#d72f2b':'#24252a',null);ellipse(.13,1.83,.025,.028,nineTails?'#d72f2b':'#24252a',null);
          if(nineTails){for(const cheek of [-1,1])for(let whisker=0;whisker<3;whisker++)line([[cheek*.11,1.96-whisker*.065],[cheek*.25,1.94-whisker*.065]],'#8d4738',.018)}
         if(nineTails){
           // Black flame-shaped markings make the Kurama cloak read clearly.
           ctx.fillStyle='#342936';ctx.beginPath();ctx.moveTo(-.22,1.53);ctx.lineTo(-.1,1.39);ctx.lineTo(-.17,1.2);ctx.lineTo(-.03,1.29);ctx.lineTo(.02,1.1);ctx.lineTo(.12,1.34);ctx.lineTo(.24,1.24);ctx.lineTo(.16,1.52);ctx.closePath();ctx.fill();
           ctx.fillStyle='#302b35';ctx.fillRect(-.61,2.63,1.22,.12);ctx.fillStyle='#ffbd43';ctx.fillRect(-.58,2.66,1.16*(a.hp/a.maxHp),.065);ctx.strokeStyle='#f2d6bf';ctx.lineWidth=.018;ctx.strokeRect(-.61,2.63,1.22,.12);
        }
        ctx.restore();return;
      }
      if(a.type==='bird'){
       const flap=Math.sin(time*.018+a.phase)*.32;ctx.save();ctx.scale(a.direction||1,1);
       ellipse(0,.04,.34,.2,'#a82432','#4b101d',.03);ellipse(.2,.12,.16,.16,'#d7373c','#4b101d',.025);
       ctx.fillStyle='#ffb34b';ctx.strokeStyle='#5a2522';ctx.lineWidth=.02;ctx.beginPath();ctx.moveTo(.31,.13);ctx.lineTo(.52,.06);ctx.lineTo(.31,-.01);ctx.closePath();ctx.fill();ctx.stroke();
       ellipse(.24,.17,.033,.036,'#fff1d0','#4b101d',.012);ellipse(.25,.17,.015,.028,'#151116',null);
       line([[.17,.24],[.24,.2],[.33,.22]],'#42101c',.04);
       ctx.fillStyle='#d74448';ctx.strokeStyle='#4b101d';ctx.beginPath();ctx.moveTo(-.03,.1);ctx.quadraticCurveTo(-.23,.35+flap,-.52,.52+flap);ctx.quadraticCurveTo(-.4,.14,-.14,-.03);ctx.closePath();ctx.fill();ctx.stroke();
       ctx.beginPath();ctx.moveTo(-.1,0);ctx.quadraticCurveTo(-.38,-.2-flap,-.55,-.36-flap);ctx.quadraticCurveTo(-.25,-.31,.02,-.08);ctx.closePath();ctx.fill();ctx.stroke();
        line([[-.12,-.12],[-.23,-.36],[-.37,-.4]],'#f5c6a4',.025);ctx.restore();return;
      }
      if(a.type==='titan'||a.type==='titanBoss'){
         const huge=a.type==='titanBoss',size=huge?2.15:1.58,run=Math.sin(a.walkPhase||time*.004)*.2;
        ctx.save();ctx.scale(a.direction||1,1);ctx.scale(size,size);
        const skin=ctx.createLinearGradient(-.6,.2,.5,3.6);skin.addColorStop(0,huge?'#9d6559':'#d49a78');skin.addColorStop(.45,huge?'#d89a83':'#f0c09b');skin.addColorStop(1,huge?'#75423f':'#aa6e5e');
        // Towering, unsettling humanoid Titan with exaggerated shoulders and arms.
        ctx.fillStyle=skin;ctx.strokeStyle='#583a35';ctx.lineWidth=.035;
        ctx.beginPath();ctx.moveTo(-.43,1.9);ctx.lineTo(-.7,2.15);ctx.lineTo(-.99,1.92);ctx.lineTo(-.88,1.13);ctx.lineTo(-.56,.92);ctx.lineTo(.55,.92);ctx.lineTo(.88,1.16);ctx.lineTo(.98,1.94);ctx.lineTo(.65,2.15);ctx.lineTo(.43,1.9);ctx.lineTo(.33,1.02);ctx.lineTo(-.32,1.02);ctx.closePath();ctx.fill();ctx.stroke();
        // Thick running arms with huge hands.
        for(const side of [-1,1]){ctx.save();ctx.translate(side*.76,1.95);ctx.rotate(side*run*.55);line([[0,0],[side*.12,-.48],[side*.17,-1.05]],skin,.34);ellipse(side*.18,-1.13,.23,.27,skin,'#583a35',.028);for(let f=0;f<3;f++)line([[side*(.16+f*.07),-1.21],[side*(.2+f*.07),-1.38]],'#714940',.026);ctx.restore()}
         // Defined hips, articulated thighs and calves, and visible feet make
         // the Titan read as a complete full-body figure down to the ground.
         ellipse(0,.91,.48,.27,skin,'#583a35',.03);
         for(const side of [-1,1]){ctx.save();ctx.translate(side*.29,1.02);ctx.rotate((side===1?run:-run)*.7);
           line([[0,0],[side*.06,-.34],[side*.045,-.61]],skin,.39);ellipse(side*.045,-.6,.19,.18,skin,'#704940',.023);
           line([[side*.045,-.61],[side*.1,-.82],[side*.13,-.98]],skin,.32);
           ctx.fillStyle='#6d4b45';ctx.strokeStyle='#49342f';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(side*.015,-.95);ctx.lineTo(side*.21,-.98);ctx.lineTo(side*.39,-1.035);ctx.lineTo(side*.41,-1.14);ctx.lineTo(side*.015,-1.14);ctx.closePath();ctx.fill();ctx.stroke();
           for(let toe=0;toe<4;toe++)line([[side*(.23+toe*.04),-1.08],[side*(.29+toe*.04),-1.13]],'#4d3935',.022);ctx.restore()}
         // Neck and clear muscle contours connect the head, torso and limbs.
         line([[0,1.91],[0,2.18]],skin,.27);line([[-.26,1.42],[-.08,1.28],[0,1.32],[.08,1.28],[.26,1.42]],'#80534a',.025);
        // Small head, wild hair, glowing eyes and a wide, toothy open mouth.
        ctx.beginPath();ctx.moveTo(-.36,2.08);ctx.lineTo(-.42,2.67);ctx.lineTo(-.27,3.07);ctx.lineTo(0,3.24);ctx.lineTo(.3,3.04);ctx.lineTo(.43,2.58);ctx.lineTo(.32,2.05);ctx.lineTo(0,1.91);ctx.closePath();ctx.fill();ctx.stroke();
        ctx.fillStyle='#342b2a';ctx.beginPath();ctx.moveTo(-.39,2.91);ctx.lineTo(-.55,3.32);ctx.lineTo(-.2,3.12);ctx.lineTo(.02,3.42);ctx.lineTo(.18,3.12);ctx.lineTo(.5,3.31);ctx.lineTo(.37,2.82);ctx.closePath();ctx.fill();
        ellipse(-.18,2.69,.075,.052,'#f5d76c','#4a2524',.018);ellipse(.18,2.69,.075,.052,'#f5d76c','#4a2524',.018);ellipse(-.18,2.69,.022,.044,'#761f23',null);ellipse(.18,2.69,.022,.044,'#761f23',null);
        ctx.fillStyle='#301d20';ctx.beginPath();ctx.moveTo(-.26,2.48);ctx.quadraticCurveTo(0,2.27,.27,2.49);ctx.lineTo(.21,2.1);ctx.quadraticCurveTo(0,1.98,-.22,2.12);ctx.closePath();ctx.fill();
        for(let tooth=0;tooth<5;tooth++){ctx.fillStyle='#fff0dc';ctx.beginPath();ctx.moveTo(-.2+tooth*.08,2.43);ctx.lineTo(-.15+tooth*.08,2.43);ctx.lineTo(-.175+tooth*.08,2.31);ctx.closePath();ctx.fill()}
        ctx.fillStyle='#241b20';ctx.fillRect(-.52,3.58,1.04,.13);ctx.fillStyle='#d4473b';ctx.fillRect(-.49,3.61,.98*(a.hp/a.maxHp),.07);ctx.strokeStyle='#fff0df';ctx.lineWidth=.018;ctx.strokeRect(-.52,3.58,1.04,.13);
        if(a.isEating){ctx.fillStyle='#fff0e8';ctx.font='bold .22px sans-serif';ctx.textAlign='center';ctx.fillText('GRAAAH!',0,3.78)}
        ctx.restore();return;
      }
      if(a.type==='sonic'){
        const run=Math.sin(time*.02+a.phase)*.1;ctx.save();ctx.translate(0,Math.sin(time*.004)*.06);ctx.scale(a.direction||-1,1);
        if(a.spinAttack&&a.dashUntil>time/1000){ctx.rotate(time*.035);ellipse(0,.8,.72,.72,'#1189ed','#072a5a',.05);for(let i=0;i<8;i++){const ang=i*Math.PI/4;line([[Math.cos(ang)*.58,.8+Math.sin(ang)*.58],[Math.cos(ang)*.86,.8+Math.sin(ang)*.86]],'#4cc9ff',.12)}ctx.globalAlpha=.55;ctx.beginPath();ctx.ellipse(0,.8,1.03,.34,0,0,Math.PI*2);ctx.strokeStyle='#d9f7ff';ctx.lineWidth=.05;ctx.stroke();ctx.globalAlpha=1;ctx.fillStyle='#201d2b';ctx.fillRect(-.55,1.95,1.1,.15);ctx.fillStyle='#ffdc55';ctx.fillRect(-.52,1.99,1.04*(a.hp/a.maxHp),.07);ctx.restore();return}
        const blue=ctx.createLinearGradient(-.6,.1,.45,2);blue.addColorStop(0,'#55d8ff');blue.addColorStop(.48,'#087be8');blue.addColorStop(1,'#06449f');
        ctx.fillStyle=blue;ctx.strokeStyle='#082957';ctx.lineWidth=.035;
        // Classic swept-back quills and round hedgehog head.
        ctx.beginPath();ctx.moveTo(-.2,1.48);ctx.lineTo(-.67,1.82);ctx.lineTo(-.54,1.39);ctx.lineTo(-1.02,1.56);ctx.lineTo(-.72,1.12);ctx.lineTo(-1.05,.88);ctx.lineTo(-.51,.78);ctx.lineTo(-.53,.35);ctx.lineTo(-.2,.2);ctx.lineTo(.34,.3);ctx.lineTo(.48,.65);ctx.lineTo(.53,1.08);ctx.lineTo(.32,1.52);ctx.closePath();ctx.fill();ctx.stroke();
        // Blue ears, large eyes, cream muzzle and a cheeky smile.
        ctx.beginPath();ctx.moveTo(-.34,1.48);ctx.lineTo(-.39,1.91);ctx.lineTo(-.07,1.67);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(.13,1.56);ctx.lineTo(.35,1.91);ctx.lineTo(.43,1.42);ctx.closePath();ctx.fill();ctx.stroke();
        ellipse(.2,1.16,.31,.42,'#fff','#073f8c',.025);ellipse(.28,1.15,.105,.27,'#35b94a','#155d31',.012);ellipse(.31,1.15,.046,.21,'#101923',null);
        ellipse(.48,.92,.33,.23,'#f4d5a4','#704a34',.02);ellipse(.72,1.01,.065,.05,'#1c1d21','#392b27',.012);
        ctx.beginPath();ctx.moveTo(.37,.84);ctx.quadraticCurveTo(.53,.69,.69,.82);ctx.strokeStyle='#39252a';ctx.lineWidth=.035;ctx.stroke();
        // Small blue body with a tan chest patch, moving limbs, gloves and signature shoes.
        ellipse(-.04,.55,.39,.43,blue,'#082957',.03);ellipse(.04,.57,.23,.29,'#f1d0a0','#9b704d',.018);
        ctx.save();ctx.translate(-.28,.69);ctx.rotate(-.3-run);line([[0,0],[-.23,-.18],[-.34,-.12]],blue,.12);ellipse(-.36,-.1,.14,.11,'#fff','#67717b',.018);ctx.restore();
        ctx.save();ctx.translate(.22,.72);ctx.rotate(.35+run);line([[0,0],[.17,-.19],[.3,-.17]],blue,.12);ellipse(.32,-.14,.14,.11,'#fff','#67717b',.018);ctx.restore();
        ctx.save();ctx.translate(-.17,.28);ctx.rotate(run);line([[0,0],[-.08,-.25]],blue,.12);ctx.restore();ctx.save();ctx.translate(.16,.28);ctx.rotate(-run);line([[0,0],[.11,-.25]],blue,.12);ctx.restore();
        ctx.fillStyle='#e83245';ctx.strokeStyle='#70213a';ctx.lineWidth=.025;ctx.beginPath();ctx.roundRect(-.52,-.13,.48,.24,.1);ctx.fill();ctx.stroke();ctx.beginPath();ctx.roundRect(.02,-.13,.51,.24,.1);ctx.fill();ctx.stroke();
        line([[-.43,.045],[-.11,.045]],'#fff',.055);line([[.11,.045],[.45,.045]],'#fff',.055);ellipse(-.08,-.02,.035,.038,'#f5cc4c','#683e31',.01);ellipse(.4,-.02,.035,.038,'#f5cc4c','#683e31',.01);
        ctx.fillStyle='#201d2b';ctx.fillRect(-.62,2,.1,.15);ctx.fillStyle='#ffdc55';ctx.fillRect(-.59,2.035,.84*(a.hp/a.maxHp),.07);ctx.strokeStyle='#fff';ctx.lineWidth=.018;ctx.strokeRect(-.62,2,.9,.15);ctx.restore();return;
     }
     if(a.type==='devil'){
       const pulse=Math.sin(time*.004+a.phase)*.035;ctx.save();ctx.translate(0,pulse);ctx.scale(1.55,1.55);
       const skin=ctx.createLinearGradient(-.55,0,.55,2);skin.addColorStop(0,'#8d1724');skin.addColorStop(.4,'#e43a35');skin.addColorStop(.75,'#bd202d');skin.addColorStop(1,'#761522');
       // Huge muscular torso and shoulders.
       ctx.fillStyle=skin;ctx.strokeStyle='#48121c';ctx.lineWidth=.045;ctx.beginPath();ctx.moveTo(-.62,1.45);ctx.lineTo(-.88,1.18);ctx.lineTo(-.77,.62);ctx.lineTo(-.57,.48);ctx.lineTo(.55,.48);ctx.lineTo(.78,.68);ctx.lineTo(.86,1.22);ctx.lineTo(.62,1.48);ctx.lineTo(.38,1.55);ctx.lineTo(.3,.75);ctx.lineTo(-.3,.75);ctx.lineTo(-.38,1.55);ctx.closePath();ctx.fill();ctx.stroke();
       // Thick arms, fists and visible biceps.
       for(const side of [-1,1]){ctx.save();ctx.translate(side*.62,1.28);ctx.rotate(side*-.12);line([[0,0],[side*.2,-.32],[side*.14,-.68]],skin,.31);ellipse(side*.14,-.72,.21,.2,'#a91e2b','#48121c',.035);ellipse(side*.1,-.16,.2,.22,'#f04a3e','#711722',.025);ctx.restore();
         ctx.save();ctx.translate(side*.27,.55);ctx.rotate(side*.1);line([[0,0],[side*.06,-.34],[side*.02,-.62]],skin,.32);ctx.restore();}
       // Angry face, black brows, pointed ears and two curved horns.
       ctx.beginPath();ctx.moveTo(-.37,1.55);ctx.lineTo(-.43,2.02);ctx.lineTo(-.25,2.27);ctx.lineTo(0,2.34);ctx.lineTo(.26,2.27);ctx.lineTo(.43,2.02);ctx.lineTo(.36,1.55);ctx.lineTo(.19,1.38);ctx.lineTo(-.2,1.38);ctx.closePath();ctx.fill();ctx.stroke();
       ctx.fillStyle='#f3e5d4';ctx.beginPath();ctx.moveTo(-.31,2.13);ctx.quadraticCurveTo(-.67,2.48,-.57,2.88);ctx.quadraticCurveTo(-.42,2.55,-.13,2.36);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(.31,2.13);ctx.quadraticCurveTo(.67,2.48,.57,2.88);ctx.quadraticCurveTo(.42,2.55,.13,2.36);ctx.closePath();ctx.fill();ctx.stroke();
       ctx.fillStyle='#251117';ctx.beginPath();ctx.moveTo(-.3,2.02);ctx.lineTo(-.07,2.08);ctx.lineTo(-.2,1.96);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(.3,2.02);ctx.lineTo(.07,2.08);ctx.lineTo(.2,1.96);ctx.closePath();ctx.fill();
       ellipse(-.18,1.96,.048,.035,'#ffe24c','#31121a',.012);ellipse(.18,1.96,.048,.035,'#ffe24c','#31121a',.012);ellipse(-.18,1.96,.013,.03,'#191116',null);ellipse(.18,1.96,.013,.03,'#191116',null);
       line([[-.32,2.12],[-.16,2.17],[0,2.1],[.16,2.17],[.32,2.12]],'#3c1019',.07);
       ctx.fillStyle='#fff0d9';ctx.beginPath();ctx.moveTo(-.22,1.79);ctx.lineTo(-.13,1.78);ctx.lineTo(-.18,1.63);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(.13,1.78);ctx.lineTo(.22,1.79);ctx.lineTo(.18,1.63);ctx.closePath();ctx.fill();
        ctx.fillStyle='#21131a';ctx.fillRect(-.52,1.08,1.04,.16);ctx.fillStyle='#ffc23c';ctx.fillRect(-.49,1.12,.98*(a.hp/a.maxHp),.08);ctx.strokeStyle='#fff0dc';ctx.lineWidth=.02;ctx.strokeRect(-.52,1.08,1.04,.16);
        if(a.screamUntil>time/1000){ctx.save();ctx.fillStyle='#fff3db';ctx.strokeStyle='#7b111e';ctx.lineWidth=.035;ctx.beginPath();ctx.roundRect(-.72,3.05,1.65,.42,.1);ctx.fill();ctx.stroke();ctx.fillStyle='#7b111e';ctx.font='bold .24px sans-serif';ctx.textAlign='center';ctx.fillText('GRAAAAH!',.1,3.34);ctx.restore()}
       ctx.restore();return;
     }
     if(a.type==='boss'){
      ctx.scale(a.direction||1,1);ctx.scale(1.32,1.32);
      const coat=ctx.createLinearGradient(-.5,.18,.35,1.42);coat.addColorStop(0,'#b48034');coat.addColorStop(.35,'#e2b955');coat.addColorStop(.72,'#c6923d');coat.addColorStop(1,'#704b27');
      // A powerful, low-slung leopard with angular shoulders and long runner's legs.
      ctx.fillStyle=coat;ctx.strokeStyle='#38291f';ctx.lineWidth=.03;ctx.beginPath();ctx.moveTo(-.7,.46);ctx.lineTo(-.58,.76);ctx.lineTo(-.28,.88);ctx.lineTo(.02,.8);ctx.lineTo(.26,.96);ctx.lineTo(.49,.8);ctx.lineTo(.51,.48);ctx.lineTo(.27,.38);ctx.lineTo(-.24,.38);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.beginPath();ctx.moveTo(.16,.72);ctx.lineTo(.24,1.08);ctx.lineTo(.39,1.33);ctx.lineTo(.61,1.43);ctx.lineTo(.78,1.26);ctx.lineTo(.72,1.03);ctx.lineTo(.55,.82);ctx.lineTo(.45,.64);ctx.closePath();ctx.fill();ctx.stroke();
      // Short ears, focused amber eye, muzzle and a visible fang.
      ctx.beginPath();ctx.moveTo(.43,1.37);ctx.lineTo(.42,1.61);ctx.lineTo(.57,1.48);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.beginPath();ctx.moveTo(.66,1.4);ctx.lineTo(.81,1.58);ctx.lineTo(.78,1.32);ctx.closePath();ctx.fill();ctx.stroke();
      ellipse(.58,1.25,.04,.033,'#e8cf62','#33271d',.012);ellipse(.594,1.25,.012,.027,'#171514',null);
      ctx.fillStyle='#c9ad78';ctx.beginPath();ctx.moveTo(.66,1.14);ctx.lineTo(.91,1.08);ctx.lineTo(.97,.99);ctx.lineTo(.78,.93);ctx.lineTo(.62,1.02);ctx.closePath();ctx.fill();ctx.stroke();
      ellipse(.96,1.06,.055,.04,'#211b19','#38291f',.012);
      ctx.fillStyle='#20181a';ctx.beginPath();ctx.moveTo(.73,.99);ctx.lineTo(.91,.98);ctx.lineTo(.85,.91);ctx.closePath();ctx.fill();
      ctx.fillStyle='#f0e0c1';ctx.beginPath();ctx.moveTo(.75,.99);ctx.lineTo(.79,.98);ctx.lineTo(.78,.92);ctx.closePath();ctx.fill();
      // Rosette spots along the flank and shoulder, kept angular rather than polka-dot round.
      for(const [sx,sy] of [[-.48,.68],[-.3,.57],[-.12,.72],[.05,.55],[.18,.72],[.34,.65],[-.34,.82],[.01,.83]]){
        ctx.strokeStyle='#49301e';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(sx-.035,sy);ctx.lineTo(sx-.018,sy+.035);ctx.lineTo(sx+.025,sy+.03);ctx.lineTo(sx+.04,sy-.008);ctx.lineTo(sx+.005,sy-.03);ctx.closePath();ctx.stroke();ellipse(sx,sy,.009,.012,'#49301e',null);
      }
      // Long, springy legs articulate while the cat prowls toward the explorer.
      for(let leg=0;leg<4;leg++){
        const front=leg>=2,side=leg%2,swing=Math.sin(a.walkPhase+(side?Math.PI:0))*.18,hipX=front?.32:-.42;
        ctx.save();ctx.translate(hipX,.48);ctx.rotate(swing);
        line([[0,0],[swing*.5,-.24],[swing*.65,-.49]],coat,front?.115:.09);
        ctx.beginPath();ctx.moveTo(swing*.65,-.45);ctx.lineTo(swing*.65+.12,-.49);ctx.lineTo(swing*.65+.2,-.46);ctx.lineTo(swing*.65+.17,-.53);ctx.lineTo(swing*.65-.02,-.53);ctx.closePath();ctx.fillStyle='#8f632e';ctx.fill();ctx.strokeStyle='#38291f';ctx.lineWidth=.014;ctx.stroke();
        for(let claw=0;claw<3;claw++)line([[swing*.65+.11+claw*.025,-.51],[swing*.65+.13+claw*.025,-.55]],'#28201a',.012);ctx.restore();
      }
      ctx.beginPath();ctx.moveTo(-.56,.66);ctx.quadraticCurveTo(-.85,.92,-1.05,1.04);ctx.lineTo(-1.13,.98);ctx.quadraticCurveTo(-.91,.79,-.73,.53);ctx.closePath();ctx.fillStyle=coat;ctx.fill();ctx.stroke();
      for(let i=0;i<3;i++)line([[-.97+i*.06, .94],[-1.02+i*.06,1.01]],'#39281d',.018);
      // Boss health meter above its back.
      ctx.fillStyle='#211b1a';ctx.fillRect(-.58,1.8,1.25,.105);ctx.fillStyle='#c34431';ctx.fillRect(-.56,1.82,1.21*(a.hp/a.maxHp),.065);ctx.strokeStyle='#f1dfbf';ctx.lineWidth=.014;ctx.strokeRect(-.58,1.8,1.25,.105);
      return;
    }
    if(a.type==='bear'||a.type==='boss'){
      const bossFight=a.type==='boss',size=bossFight?1.58:1,beat=Math.sin(time*.004+a.phase)*.018;
      ctx.scale(a.direction||1,1);ctx.scale(size,size);ctx.translate(0,beat);
      const fur=ctx.createLinearGradient(-.6,.2,.35,1.55);fur.addColorStop(0,bossFight?'#292624':'#48392e');fur.addColorStop(.4,bossFight?'#625046':'#76563c');fur.addColorStop(.75,bossFight?'#a08465':'#98744f');fur.addColorStop(1,'#362d27');
      const bearPace=Math.sin(a.walkPhase||time*.003+a.phase);
      // Heavy shoulder hump, broad torso, and planted limbs give bears a distinct shape.
      ctx.fillStyle=fur;ctx.strokeStyle='#302822';ctx.lineWidth=.03;ctx.beginPath();ctx.moveTo(-.66,.42);ctx.lineTo(-.62,.8);ctx.quadraticCurveTo(-.47,1.08,-.16,1.12);ctx.lineTo(.12,1.02);ctx.quadraticCurveTo(.41,1.03,.54,.72);ctx.lineTo(.51,.38);ctx.lineTo(.22,.29);ctx.lineTo(-.28,.3);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.beginPath();ctx.moveTo(-.52,.83);ctx.lineTo(-.48,1.17);ctx.lineTo(-.28,1.38);ctx.lineTo(-.09,1.16);ctx.lineTo(.11,1.35);ctx.lineTo(.26,1.13);ctx.lineTo(.43,1.2);ctx.lineTo(.49,.78);ctx.closePath();ctx.fill();ctx.stroke();
      // Bear head, rounded ears, heavy brow and short muzzle.
      ctx.beginPath();ctx.moveTo(.08,1.02);ctx.lineTo(.12,1.42);ctx.lineTo(.31,1.62);ctx.lineTo(.52,1.56);ctx.lineTo(.68,1.32);ctx.lineTo(.62,1.03);ctx.lineTo(.44,.9);ctx.closePath();ctx.fill();ctx.stroke();
      ellipse(.25,1.56,.115,.13,'#533e31','#302822',.022);ellipse(.56,1.54,.12,.13,'#523b30','#302822',.022);
      ellipse(.3,1.57,.055,.065,'#b28a68',null);ellipse(.6,1.56,.055,.065,'#b28a68',null);
      const muzzle=ctx.createLinearGradient(.38,1.06,.76,1.2);muzzle.addColorStop(0,'#b08a65');muzzle.addColorStop(1,'#69503b');
      ctx.fillStyle=muzzle;ctx.beginPath();ctx.moveTo(.42,1.22);ctx.lineTo(.63,1.27);ctx.lineTo(.79,1.15);ctx.lineTo(.76,1.03);ctx.lineTo(.58,.98);ctx.lineTo(.43,1.04);ctx.closePath();ctx.fill();ctx.stroke();
      ellipse(.76,1.15,.08,.06,'#1a1715','#302822',.014);
      ellipse(.38,1.35,.04,.035,bossFight?'#e64e39':'#c9984c','#211c19',.012);ellipse(.395,1.35,.012,.028,'#171414',null);
      line([[.31,1.42],[.4,1.46],[.5,1.42]],'#29221d',.035);
      // Curved claws and thick, animated legs.
      for(let leg=0;leg<4;leg++){
        const front=leg>=2,side=leg%2,swing=bearPace*(side?1:-1)*.14,x=front?.31:-.42;
        ctx.save();ctx.translate(x,.44);ctx.rotate(swing);
        line([[0,0],[swing*.4,-.22],[swing*.5,-.43]],fur,front?.2:.18);
        ctx.beginPath();ctx.moveTo(-.11,-.39);ctx.lineTo(.07,-.43);ctx.lineTo(.16,-.39);ctx.lineTo(.12,-.5);ctx.lineTo(-.1,-.5);ctx.closePath();ctx.fillStyle='#503a2c';ctx.fill();ctx.stroke();
        for(let claw=0;claw<3;claw++)line([[-.055+claw*.065,-.48],[-.075+claw*.065,-.55]],'#d4c4a5',.018);ctx.restore();
      }
      line([[-.38,.76],[-.15,.68],[.08,.73]],'#c19d72',.018);
      if(bossFight){
        line([[.18,1.54],[.3,1.36],[.44,1.26]],'#8f332b',.035);
        ctx.fillStyle='#241e1d';ctx.fillRect(-.63,1.85,1.28,.105);ctx.fillStyle='#a53d32';ctx.fillRect(-.61,1.87,1.24*(a.hp/a.maxHp),.065);
        ctx.strokeStyle='#e4d7bd';ctx.lineWidth=.015;ctx.strokeRect(-.63,1.85,1.28,.105);
      }
      ctx.restore();return;
    }
    // A lean, snarling wild dog, drawn side-on with alert ears and bared teeth.
    const facing=a.direction||1,pace=Math.sin(a.walkPhase),breath=Math.sin(time*.004+a.phase)*.018;
    ctx.scale(facing,1);ctx.translate(0,Math.abs(pace)*.025+breath);
    const fur=ctx.createLinearGradient(-.45,.25,.25,.95);fur.addColorStop(0,'#272d31');fur.addColorStop(.34,'#555e60');fur.addColorStop(.68,'#92968a');fur.addColorStop(1,'#4b4c47');
    // Lean, angular torso and raised shoulder: a swift wolf silhouette, not a round animal.
    ctx.fillStyle=fur;ctx.strokeStyle='#292c2b';ctx.lineWidth=.028;ctx.beginPath();
    ctx.moveTo(-.61,.59);ctx.lineTo(-.43,.78);ctx.lineTo(-.16,.86);ctx.lineTo(.08,.81);ctx.lineTo(.25,.94);ctx.lineTo(.42,.83);ctx.lineTo(.48,.63);ctx.lineTo(.31,.48);ctx.lineTo(.06,.42);ctx.lineTo(-.2,.45);ctx.lineTo(-.47,.4);ctx.closePath();ctx.fill();ctx.stroke();
    // Pointed shoulder fur and a lean chest ruff.
    ctx.fillStyle='#454b4a';ctx.beginPath();ctx.moveTo(-.08,.76);ctx.lineTo(.02,1.05);ctx.lineTo(.13,.86);ctx.lineTo(.25,1.02);ctx.lineTo(.31,.81);ctx.lineTo(.48,.91);ctx.lineTo(.42,.62);ctx.closePath();ctx.fill();ctx.stroke();
    // Tapered neck and angular head with a sharp cheek line.
    const neck=ctx.createLinearGradient(.15,.52,.55,1);neck.addColorStop(0,'#353a39');neck.addColorStop(.55,'#989588');neck.addColorStop(1,'#4b4c47');
    ctx.fillStyle=neck;ctx.beginPath();ctx.moveTo(.08,.67);ctx.lineTo(.19,1.04);ctx.lineTo(.4,1.2);ctx.lineTo(.57,.99);ctx.lineTo(.48,.67);ctx.lineTo(.36,.49);ctx.lineTo(.21,.55);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle=fur;ctx.beginPath();ctx.moveTo(.21,.91);ctx.lineTo(.2,1.22);ctx.lineTo(.36,1.46);ctx.lineTo(.5,1.31);ctx.lineTo(.57,1.08);ctx.lineTo(.49,.83);ctx.lineTo(.34,.77);ctx.closePath();ctx.fill();ctx.stroke();
    // Two upright, ragged ears.
    ctx.fillStyle='#414647';ctx.beginPath();ctx.moveTo(.27,1.31);ctx.lineTo(.25,1.69);ctx.lineTo(.47,1.43);ctx.lineTo(.43,1.2);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.beginPath();ctx.moveTo(.48,1.31);ctx.lineTo(.66,1.61);ctx.lineTo(.64,1.19);ctx.lineTo(.56,1.08);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#a77672';ctx.beginPath();ctx.moveTo(.32,1.34);ctx.lineTo(.3,1.57);ctx.lineTo(.42,1.4);ctx.closePath();ctx.fill();
    // Long muzzle, open jaw and sharp teeth.
    const muzzle=ctx.createLinearGradient(.35,.75,.85,.9);muzzle.addColorStop(0,'#c3c1b2');muzzle.addColorStop(.65,'#92958d');muzzle.addColorStop(1,'#565955');
    ctx.fillStyle=muzzle;ctx.strokeStyle='#292c2b';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(.43,1.08);ctx.lineTo(.64,.99);ctx.lineTo(.91,.89);ctx.lineTo(.88,.77);ctx.lineTo(.73,.72);ctx.lineTo(.48,.81);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#302c2a';ctx.beginPath();ctx.moveTo(.84,.91);ctx.lineTo(.98,.88);ctx.lineTo(.9,.79);ctx.lineTo(.8,.83);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#221c20';ctx.beginPath();ctx.moveTo(.53,.8);ctx.lineTo(.75,.73);ctx.lineTo(.87,.77);ctx.lineTo(.7,.67);ctx.lineTo(.55,.72);ctx.closePath();ctx.fill();
    ctx.fillStyle='#efe5d0';ctx.beginPath();ctx.moveTo(.58,.78);ctx.lineTo(.64,.76);ctx.lineTo(.62,.68);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(.76,.75);ctx.lineTo(.81,.76);ctx.lineTo(.8,.7);ctx.closePath();ctx.fill();
    // Glowing, hostile-looking eye with a heavy brow.
    ellipse(.47,1.18,.046,.034,'#e6b64e','#292322',.012);ellipse(.483,1.18,.012,.027,'#191719',null);
    line([[.4,1.24],[.47,1.27],[.54,1.23]],'#282220',.035);
    // Four articulated legs; opposite pairs swing like a cautious trot.
    for(let leg=0;leg<4;leg++){
      const front=leg>=2,side=leg%2,phase=pace*(side?1:-1),hipX=front?.27:-.39,hipY=.49;
      ctx.save();ctx.translate(hipX,hipY);ctx.rotate(phase*.2);
      line([[0,0],[phase*.09,-.25],[phase*.13,-.48]],fur,front?.105:.09);
      line([[0,-.02],[-.025,-.23]],'#b0aea0',.014);
      ctx.beginPath();ctx.moveTo(phase*.13,-.45);ctx.lineTo(phase*.21,-.48);ctx.lineTo(phase*.29,-.46);ctx.lineTo(phase*.26,-.51);ctx.lineTo(phase*.1,-.52);ctx.closePath();ctx.fillStyle='#41413b';ctx.fill();ctx.strokeStyle='#292c2b';ctx.lineWidth=.012;ctx.stroke();
      for(let claw=0;claw<3;claw++)line([[phase*.19+claw*.035,-.5],[phase*.21+claw*.035,-.54]],'#e0d6c3',.009);
      ctx.restore();
    }
    // Bristled back, scars and a tense tail complete the wild-dog silhouette.
    for(let i=0;i<5;i++)line([[-.4+i*.15,.82],[-.34+i*.15,.94],[-.27+i*.15,.84]],i%2?'#aa9070':'#41372f',.025);
    ctx.fillStyle=fur;ctx.strokeStyle='#292c2b';ctx.lineWidth=.02;ctx.beginPath();ctx.moveTo(-.48,.65);ctx.lineTo(-.72,.88);ctx.lineTo(-.91,.94);ctx.lineTo(-.78,.81);ctx.lineTo(-.98,.78);ctx.lineTo(-.7,.67);ctx.closePath();ctx.fill();ctx.stroke();
    line([[-.5,.62],[-.74,.78],[-.9,.83]],'#a8a392',.018);
    line([[-.25,.55],[-.08,.5],[.08,.55]],'#b9b6a9',.014);
    ctx.restore();
   },a.x,a.y||0)}

  function drawTailsCharacter(time){
    worldDraw(()=>{
        const scared=false,crying=sonicEncounter.phase==='crying',flying=levelIndex>=4&&keys.jump&&!player.grounded&&player.tailsFlight>0,tailAttacking=player.attackTime>0,direction=player.face||1,step=Math.sin(time*.018)*.09,tailSwing=crying?Math.sin(time*.05)*.035:tailAttacking?Math.sin(time*.065)*.75:flying?Math.sin(time*.055)*.48:Math.sin(time*.012)*.16;if(portalEnding.active&&portalEnding.timer>1.9)ctx.globalAlpha=Math.max(0,1-(portalEnding.timer-1.9)/.65);ctx.save();ctx.scale(direction*.8,.8);if(crying)ctx.translate(Math.sin(time*.045)*.035,0);else if(scared)ctx.translate(Math.sin(time*.07)*.035,Math.sin(time*.09)*.025);
       ellipse(0,.06,.46,.11,'#17121aaa',null);
       if(tailAttacking){ctx.save();ctx.translate(0,1.05);ctx.rotate(time*.045);ctx.strokeStyle='#fff1c2';ctx.lineWidth=.095;ctx.globalAlpha=.8;ctx.beginPath();ctx.ellipse(0,0,.82,.5,-.15,-.45,Math.PI*1.3);ctx.stroke();ctx.strokeStyle='#f5a43b';ctx.lineWidth=.07;ctx.beginPath();ctx.ellipse(0,0,.7,.43,.35,Math.PI*.1,Math.PI*1.55);ctx.stroke();ctx.restore()}
       if(flying){ctx.save();ctx.translate(-.2,1.12);ctx.rotate(time*.055);ctx.globalAlpha=.78;ctx.strokeStyle='#ffe1a0';ctx.lineWidth=.09;ctx.beginPath();ctx.ellipse(0,0,.72,.2,0,0,Math.PI*2);ctx.stroke();ctx.strokeStyle='#f39b37';ctx.lineWidth=.07;ctx.beginPath();ctx.ellipse(0,0,.55,.12,Math.PI/2,0,Math.PI*2);ctx.stroke();ctx.restore()}
      // Tails' signature twin tails, swishing behind him as he runs.
      for(let tail=0;tail<2;tail++){const offset=tail*.2;ctx.save();ctx.translate(-.22,.77+offset);ctx.rotate(-.28+tailSwing*(tail?-.65:1));ctx.fillStyle=tail?'#e68724':'#f59b2c';ctx.strokeStyle='#8f4d21';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(-.48,.18,-.83,.55);ctx.quadraticCurveTo(-.73,.02,-.37,-.2);ctx.quadraticCurveTo(-.12,-.16,0,0);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#fff0cf';ctx.beginPath();ctx.moveTo(-.67,.35);ctx.quadraticCurveTo(-.85,.52,-.83,.55);ctx.quadraticCurveTo(-.59,.5,-.48,.3);ctx.closePath();ctx.fill();ctx.restore()}
      // Red shoes and legs.
      for(const side of [-1,1]){ctx.save();ctx.translate(side*.17,.53);ctx.rotate(side*step);ctx.fillStyle='#f0b449';ctx.strokeStyle='#75451f';ctx.lineWidth=.03;ctx.beginPath();ctx.roundRect(-.11,-.45,.22,.49,.08);ctx.fill();ctx.stroke();ctx.fillStyle='#d92d35';ctx.beginPath();ctx.roundRect(-.2,-.17,.36,.18,.07);ctx.fill();ctx.stroke();ctx.fillStyle='#fff4df';ctx.fillRect(-.18,-.1,.31,.055);ctx.restore()}
      // Orange fox body, pale chest and gloved hands.
      ellipse(0,1.12,.36,.58,'#f19a2e','#8a4b21',.035);ellipse(.03,1.11,.22,.42,'#fff0d2','#bd8a4e',.022);
      for(const side of [-1,1]){ctx.save();ctx.translate(side*.3,1.45);ctx.rotate(side*(step+.12));line([[0,0],[side*.12,-.25],[side*.2,-.45]],'#ed9229',.18);ellipse(side*.2,-.47,.13,.12,'#fff8e9','#b8a99a',.025);ctx.restore()}
      // Fox ears, orange head, blue eyes, white muzzle and a small nose.
      ctx.fillStyle='#f3a034';ctx.strokeStyle='#8a4b21';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.34,2.12);ctx.lineTo(-.45,2.63);ctx.lineTo(-.08,2.4);ctx.quadraticCurveTo(0,2.06,.34,2.12);ctx.lineTo(.46,2.59);ctx.lineTo(.1,2.39);ctx.quadraticCurveTo(.36,2.18,.27,1.92);ctx.quadraticCurveTo(0,1.62,-.27,1.92);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#fff0d6';ctx.beginPath();ctx.moveTo(-.03,2.03);ctx.quadraticCurveTo(.22,1.91,.3,2.02);ctx.quadraticCurveTo(.21,2.2,.03,2.18);ctx.closePath();ctx.fill();ctx.stroke();
      ellipse(.03,2.12,.19,.13,'#fff2dc','#b98e60',.02);ellipse(.22,2.16,.045,.04,'#3b2a2b',null);
        if(scared){ellipse(-.12,2.19,.071,.105,'#fff','#55443d',.02);ellipse(-.1,2.19,.022,.048,player.eyeColor,null);ellipse(.09,2.19,.071,.105,'#fff','#55443d',.02);ellipse(.11,2.19,.022,.048,player.eyeColor,null);line([[-.2,2.34],[-.12,2.39],[-.04,2.35]],'#713a26',.035);line([[.02,2.35],[.1,2.39],[.18,2.33]],'#713a26',.035);ellipse(.08,1.99,.06,.085,'#382326','#713a26',.018);line([[.34,2.27],[.42,2.17],[.39,2.08]],'#65d7ff',.045);ellipse(.39,2.07,.035,.05,'#65d7ff',null)}else{ellipse(-.12,2.19,.055,.085,'#fff','#55443d',.016);ellipse(-.1,2.19,.023,.052,player.eyeColor,null);ellipse(.09,2.19,.055,.085,'#fff','#55443d',.016);ellipse(.11,2.19,.023,.052,player.eyeColor,null)}
      if(crying){line([[-.16,2.14],[-.1,2.02],[-.12,1.94]],'#63c9ff',.055);line([[.1,2.14],[.17,2.01],[.15,1.92]],'#63c9ff',.055);ellipse(-.12,1.94,.035,.055,'#74d8ff',null);ellipse(.15,1.92,.035,.055,'#74d8ff',null);ctx.beginPath();ctx.moveTo(-.07,2.08);ctx.quadraticCurveTo(.03,1.98,.14,2.08);ctx.strokeStyle='#713a26';ctx.lineWidth=.03;ctx.stroke()}
       else if(!scared)line([[-.17,2.31],[-.08,2.34],[0,2.31]],'#713a26',.025);
       if(player.accessory==='cap'||player.accessory==='cap-mask'){
         ctx.fillStyle='#31518a';ctx.strokeStyle='#172744';ctx.lineWidth=.03;ctx.beginPath();ctx.moveTo(-.32,2.38);ctx.quadraticCurveTo(-.27,2.61,0,2.64);ctx.quadraticCurveTo(.28,2.61,.33,2.38);ctx.lineTo(.48,2.34);ctx.quadraticCurveTo(.02,2.28,-.34,2.36);ctx.closePath();ctx.fill();ctx.stroke();line([[-.1,2.53],[0,2.4],[.1,2.53]],'#e6e9ed',.025);
       }
       if(player.accessory==='mask'||player.accessory==='cap-mask'){
         ctx.fillStyle='#17191f';ctx.strokeStyle='#08090d';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.18,2.08);ctx.quadraticCurveTo(.08,2.03,.31,2.1);ctx.lineTo(.24,1.98);ctx.quadraticCurveTo(.04,1.91,-.13,1.99);ctx.closePath();ctx.fill();ctx.stroke();
       }
       if(player.accessory==='glasses'){
         ctx.strokeStyle='#273d5a';ctx.lineWidth=.035;ctx.beginPath();ctx.ellipse(-.1,2.19,.09,.085,0,0,Math.PI*2);ctx.ellipse(.11,2.19,.09,.085,0,0,Math.PI*2);ctx.stroke();line([[-.01,2.19],[.02,2.19]],'#273d5a',.03);
       }
      ctx.restore();
    },player.x,player.y);
  }
  function drawSonicEncounter(time){
    const phase=sonicEncounter.phase;if(!['waiting','approach','calling','vanishing','chase'].includes(phase))return;
    const vanishing=phase==='vanishing',chasing=phase==='chase',fade=vanishing?Math.max(0,1-sonicEncounter.timer/.72):1;
    worldDraw(()=>{
      // Make Sonic closer to Tails' on-screen height while keeping his original design.
      ctx.save();ctx.globalAlpha=fade;ctx.translate(0,.1+(chasing?Math.sin(time*.035)*.08:Math.sin(time*.004)*.02));ctx.scale(1.2,1.2);
       // Classic Sonic silhouette: swept-back quills, rounded blue head, tan muzzle,
       // white gloves and red shoes. The nightmare expression below keeps him evil.
       ctx.fillStyle='#075fc1';ctx.strokeStyle='#06234f';ctx.lineWidth=.04;
       if(sonicEncounter.backFacing&&levelIndex===4){
         for(const q of [[-.18,1.55,-.92,1.9,-.49,1.3],[-.3,1.35,-1.08,1.48,-.5,1.02],[-.31,1.08,-.95,.7,-.27,.72]]){ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[2]+.05,q[3]-.04);ctx.quadraticCurveTo(q[4]-.12,q[5]+.04,q[4],q[5]);ctx.closePath();ctx.fill();ctx.stroke()}
         ellipse(.02,.78,.39,.51,'#0872ce','#06234f',.035);ellipse(.02,1.39,.4,.4,'#0872ce','#06234f',.035);ellipse(.02,.77,.2,.3,'#f2d2a0','#704b42',.018);
         line([[-.2,.92],[-.45,.68],[-.58,.76]],'#0872ce',.17);ellipse(-.62,.75,.14,.12,'#fff','#455268',.018);
         for(const [sx,sy] of [[-.28,.16],[.3,.16]]){ctx.fillStyle='#df303a';ctx.strokeStyle='#541821';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(sx,sy,.26,.15,0,0,Math.PI*2);ctx.fill();ctx.stroke();line([[sx-.12,sy+.02],[sx+.12,sy+.02]],'#fff',.04)}
         ctx.restore();return;
       }
       for(const q of [[-.22,1.48,-.96,1.88,-.55,1.23],[-.29,1.37,-1.08,1.52,-.51,1.05],[-.34,1.1,-.98,.7,-.33,.76]]){
        ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[2]+.05,q[3]-.04);ctx.quadraticCurveTo(q[4]-.12,q[5]+.04,q[4],q[5]);ctx.closePath();ctx.fill();ctx.stroke();
      }
      // Back arm and legs trail behind him; white gloves and red shoes add Sonic's signature colors.
       line([[-.2,.98],[-.46,.76],[-.62,.83]],'#0872ce',.17);ellipse(-.66,.84,.15,.12,'#fff','#455268',.018);
      line([[.12,.62],[-.12,.34],[-.4,.27]],'#075bb8',.18);line([[.24,.6],[.48,.36],[.67,.32]],'#075bb8',.17);
      for(const [sx,sy,angle] of [[-.39,.19,-.18],[.62,.22,.12]]){ctx.save();ctx.translate(sx,sy);ctx.rotate(angle);ctx.fillStyle='#df303a';ctx.strokeStyle='#541821';ctx.lineWidth=.025;ctx.beginPath();ctx.ellipse(0,0,.27,.16,0,0,Math.PI*2);ctx.fill();ctx.stroke();line([[-.13,.02],[.12,.02]],'#fff',.045);ctx.restore()}
       ellipse(.03,.76,.38,.49,'#0872ce','#06234f',.035);
       // Cream chest patch and muzzle give him the familiar game-era color blocking.
       ellipse(.18,.76,.19,.31,'#f2d2a0','#704b42',.018);
      // Main head silhouette and ear, with a pale muzzle for a clear profile.
       ellipse(.14,1.39,.39,.38,'#0872ce','#06234f',.035);
       ctx.fillStyle='#0872ce';ctx.beginPath();ctx.moveTo(-.12,1.63);ctx.quadraticCurveTo(-.2,1.93,-.37,1.96);ctx.quadraticCurveTo(-.38,1.63,-.23,1.48);ctx.closePath();ctx.fill();ctx.stroke();
       // Oversized eye and muzzle stay readable beneath the corrupted expression.
       ellipse(.31,1.48,.13,.24,'#f5f1e8','#06234f',.025);
       ellipse(.35,1.49,.045,.15,'#c71935',null);
       ellipse(.43,1.13,.25,.16,'#f2d2a0','#704b42',.025);
       ellipse(.64,1.2,.075,.065,'#15151b','#06234f',.02);
       line([[.33,1.01],[.44,.98],[.53,1.04]],'#35141d',.035);
       if(chasing){
        ellipse(.37,1.18,.27,.2,'#aeb0a5','#5b5960',.025);
        ellipse(.17,1.43,.09,.14,'#fff2e0','#182344',.018);ellipse(.19,1.42,.037,.102,'#ed102c',null);
        line([[.05,1.57],[.19,1.62],[.31,1.56]],'#250b15',.055);
        ellipse(.46,1.03,.24,.15,'#bb9e87','#554239',.02);
        ctx.fillStyle='#16060d';ctx.beginPath();ctx.moveTo(.29,1.04);ctx.quadraticCurveTo(.48,.88,.65,1.02);ctx.quadraticCurveTo(.49,1.14,.29,1.04);ctx.fill();
        for(let tooth=0;tooth<4;tooth++){ctx.fillStyle='#fff0df';ctx.beginPath();ctx.moveTo(.34+tooth*.065,1.06);ctx.lineTo(.39+tooth*.065,1.06);ctx.lineTo(.365+tooth*.065,1.005);ctx.closePath();ctx.fill()}
        // Blood streaks and spots stay stylized and readable at the smaller character scale.
        line([[-.27,1.51],[-.13,1.27],[-.24,1.08],[.02,.91]],'#a90e27',.075);line([[.3,1.72],[.2,1.49],[.38,1.3],[.32,1.17]],'#c4142c',.07);line([[-.23,.78],[-.06,.69],[.17,.61]],'#b30c28',.07);line([[.27,.87],[.13,.74],[.08,.55]],'#a90e27',.06);
        for(let stain=0;stain<6;stain++){ctx.fillStyle=stain%2?'#b3132a':'#791020';ctx.beginPath();ctx.arc(Math.sin(stain*7.1)*.32,.42+(stain*13%90)/100,.027+(stain%3)*.01,0,Math.PI*2);ctx.fill()}
      }else if(sonicEncounter.mood>.08){
        const m=Math.min(1,(sonicEncounter.mood-.08)/.82);ctx.save();ctx.globalAlpha=m;ellipse(.35,1.43,.2,.22,'#e7bd94','#1c1830',.02);ellipse(.42,1.46,.04,.075,'#fff','#182242',.015);ellipse(.43,1.46,.018,.056,sonicEncounter.mood>.68?'#e31330':'#1c2636',null);line([[.25,1.61],[.38,1.65],[.49,1.59]],'#20202b',.03);ctx.restore()
      }
      if(vanishing){ctx.globalAlpha=fade*.7;for(let i=0;i<9;i++){ctx.fillStyle=i%2?'#e51b36':'#57cfff';ctx.fillRect(-.75+Math.sin(time*.08+i)*.35,.3+i*.17,.5+(i%3)*.22,.035)}}
      ctx.restore();
     },sonicEncounter.x,0);
   }
  function drawDeadAnimals(){
     if(levelIndex!==4)return;
     const bodies=[[-1.2,0,-.16],[3.2,1,.18],[7.4,0,.1],[13.8,1,-.12],[18.5,0,.16],[23,1,-.1],[28,0,.13],[33,1,-.15],[38,0,.09],[43,1,-.12],[48,0,.17],[55,1,-.08],[62,0,.13],[69,1,-.16],[76,0,.1]];
     for(const [x,type,tilt] of bodies)worldDraw(()=>{ctx.save();ctx.rotate(tilt);ctx.globalAlpha=.92;ellipse(0,.08,.62,.14,'#4c0710aa',null);
       if(type===0){ellipse(0,.28,.42,.2,'#554b49','#211b20',.045);ellipse(.3,.32,.22,.14,'#625654','#211b20',.035);line([[-.2,.3],[-.52,.42],[-.68,.34]],'#554b49',.09);line([[.02,.25],[.27,.08],[.4,.1]],'#554b49',.08);ellipse(.38,.36,.025,.025,'#b71e30',null)}
       else{ellipse(0,.24,.5,.18,'#39383b','#17151b',.045);ellipse(.35,.29,.2,.13,'#49464a','#17151b',.035);line([[-.12,.3],[-.4,.48],[-.52,.45]],'#39383b',.1);line([[.12,.19],[.35,.05],[.5,.08]],'#39383b',.085);ellipse(.42,.31,.022,.022,'#ad1b2d',null)}
       ctx.restore();},x,0);
   }
  function drawUndergroundLab(time){
    if(levelIndex!==5)return;
    const first=Math.floor((world.camera-2)/12)*12+2;
    for(let x=first;x<world.camera+viewW+14;x+=12)worldDraw(()=>{
      const wall=ctx.createLinearGradient(0,1.7,0,5.2);wall.addColorStop(0,'#21151a');wall.addColorStop(.55,'#100d12');wall.addColorStop(1,'#09090d');ctx.fillStyle=wall;ctx.fillRect(0,1.1,12,4.2);
      ctx.strokeStyle='#39242a';ctx.lineWidth=.045;ctx.strokeRect(.35,1.45,5.2,3.15);ctx.strokeRect(6.25,1.45,5.35,3.15);
      ctx.fillStyle='#4a101b';for(let i=0;i<4;i++){const sx=.7+i*2.8,drip=.3+Math.sin(time*.001+i+x)*.08;ctx.beginPath();ctx.ellipse(sx,4.15, .34,.08,0,0,Math.PI*2);ctx.fill();ctx.fillRect(sx-.07,4.15-drip,.14,drip)}
      ctx.strokeStyle='#51434a';ctx.lineWidth=.12;ctx.beginPath();ctx.moveTo(.2,5.7);ctx.lineTo(11.8,5.7);ctx.stroke();ctx.strokeStyle='#751c29';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(.2,5.55);ctx.lineTo(11.8,5.55);ctx.stroke();
      for(let i=0;i<3;i++){ctx.fillStyle=i===1?'#59121d':'#272329';ctx.fillRect(1+i*4,4.7,.8,.38);ctx.fillStyle='#79212a';ctx.fillRect(1.08+i*4,4.77,.12,.08)}
    },x,0);
  }
  function drawLabReveal(time){
    if(levelIndex!==5||!['eating','watching','aggressive'].includes(labSequence.phase))return;
    const aggressive=labSequence.phase==='aggressive';if(aggressive&&boss?.active){drawAnimal(boss,time);return}
    const x=labSequence.sonicX,bite=.5+.5*Math.sin(time*.022),lunge=Math.max(0,Math.sin(time*.022))*.1,foodY=.32+bite*.53;
    worldDraw(()=>{
      // Torn coat, goggles and mustache make the scattered wreckage recognizable as Eggman's.
      ctx.save();ctx.rotate(-.22);ellipse(0,.28,.8,.3,'#4a3130','#171218',.05);ellipse(-.27,.39,.3,.22,'#aa2429','#32131a',.04);ellipse(.34,.38,.34,.2,'#b7a9a0','#352b30',.04);line([[-.55,.34],[-.92,.13],[-1.04,.2]],'#88323a',.17);line([[.37,.35],[.74,.1],[.88,.14]],'#8b7778',.14);ctx.restore();
      ellipse(-.72,.68,.27,.25,'#d97839','#55241e',.035);ctx.fillStyle='#3a2830';ctx.strokeStyle='#e3a94f';ctx.lineWidth=.04;ctx.beginPath();ctx.ellipse(-.81,.73,.095,.085,0,0,Math.PI*2);ctx.ellipse(-.63,.73,.095,.085,0,0,Math.PI*2);ctx.stroke();ctx.fill();line([[-.72,.73],[-.72,.73]],'#e3a94f',.04);
      ellipse(-.72,.55,.15,.075,'#eee0cb','#66514b',.025);line([[-.76,.55],[-.92,.47],[-1.01,.53]],'#eee0cb',.065);line([[-.68,.55],[-.52,.47],[-.43,.53]],'#eee0cb',.065);
      // Red coat panels and a detached white glove identify the battered figure as Eggman.
      ctx.save();ctx.rotate(-.22);ctx.fillStyle='#9e1e2b';ctx.strokeStyle='#3b151e';ctx.lineWidth=.035;ctx.beginPath();ctx.moveTo(-.24,.48);ctx.lineTo(.18,.48);ctx.lineTo(.33,.2);ctx.lineTo(-.36,.16);ctx.closePath();ctx.fill();ctx.stroke();line([[-.15,.43],[-.12,.2]],'#d7c9b9',.045);ctx.restore();ellipse(.81,.2,.17,.1,'#e4e1d9','#45444a',.025);line([[.75,.2],[.88,.2]],'#6e5551',.025);
      ellipse(0,.12,1.25,.19,'#6e111c99',null);
      // Sonic repeatedly hunches, reaches down, bites and lifts his head; his gaze turns hostile.
      ctx.save();ctx.translate(lunge,Math.sin(time*.018)*.035);
      ctx.fillStyle='#075fc1';ctx.strokeStyle='#06234f';ctx.lineWidth=.055;ctx.beginPath();ctx.moveTo(-.48,1.12);ctx.quadraticCurveTo(-1.05,1.48,-1.3,1.04);ctx.lineTo(-.78,.79);ctx.quadraticCurveTo(-.54,.39,-.13,.44);ctx.quadraticCurveTo(.28,.38,.51,.79);ctx.lineTo(.2,1.06);ctx.closePath();ctx.fill();ctx.stroke();
      for(const q of [[-.42,1.35,-1.12,1.72,-.83,1.03],[-.55,1.2,-1.35,1.2,-.8,.79],[.05,1.28,.12,1.81,.4,1.43]]){ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[2]+.02,q[3]-.08);ctx.quadraticCurveTo(q[4]-.1,q[5]+.05,q[4],q[5]);ctx.closePath();ctx.fill();ctx.stroke()}
      ellipse(-.12,1.27+bite*.07,.45,.38,'#0874c9','#06234f',.045);ellipse(.17,1.03+bite*.05,.4,.26,'#f3d4a4','#744b46',.025);ellipse(.49,.96,.038,.035,aggressive?'#ff142a':'#14080d',null);line([[.23,1.14],[.43,1.08],[.58,1.14]],aggressive?'#a20b20':'#210810',.045);
      ctx.fillStyle='#16060b';ctx.beginPath();ctx.ellipse(.38,.83-bite*.04,.17,.045+bite*.055,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#eee3d7';for(let tooth=0;tooth<4;tooth++){const tx=.27+tooth*.065;ctx.beginPath();ctx.moveTo(tx,.87-bite*.04);ctx.lineTo(tx+.045,.87-bite*.04);ctx.lineTo(tx+.02,.82-bite*.04);ctx.fill()}
      // Repeated hand-to-mouth motion and the visible morsel make the eating action unmistakable.
      ctx.strokeStyle='#0874c9';ctx.lineWidth=.16;ctx.beginPath();ctx.moveTo(-.22,.88);ctx.quadraticCurveTo(.05,.65,.28,foodY);ctx.stroke();ellipse(.29,foodY,.13,.105,'#f3d4a4','#744b46',.025);
      ctx.fillStyle='#9f1b28';ctx.strokeStyle='#f0d8bd';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(.27,foodY-.045);ctx.lineTo(.31,foodY+.055);ctx.lineTo(.37,foodY+.025);ctx.lineTo(.39,foodY-.035);ctx.closePath();ctx.fill();ctx.stroke();
      for(let crumb=0;crumb<3;crumb++){const falling=(time*.0015+crumb*.31)%1;ellipse(.31+Math.sin(time*.006+crumb)*.13,foodY-.12-falling*.28,.018,.018,crumb===1?'#be2c34':'#d7c4ad',null)}
      for(let i=0;i<3;i++){ctx.fillStyle=i===1?'#bd252c':'#51494b';ctx.beginPath();ctx.ellipse(-.32+i*.25,.26+(i%2)*.05,.12,.045,0,0,Math.PI*2);ctx.fill()}
      ctx.restore();
      // Slow overhead light flicker.
      const flicker=aggressive?0.25+.7*(.5+.5*Math.sin(time*.026)):.35+.25*(.5+.5*Math.sin(time*.013));ctx.globalAlpha=flicker;ctx.fillStyle=aggressive?'#ed102b':'#a4212d';ctx.beginPath();ctx.arc(0,2.05,.12,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
      if(aggressive&&boss?.active){ctx.fillStyle='#16090d';ctx.fillRect(-.82,2.42,1.64,.17);ctx.fillStyle='#e42238';ctx.fillRect(-.77,2.47,1.54*(boss.hp/boss.maxHp),.07);ctx.strokeStyle='#d9b9ad';ctx.lineWidth=.022;ctx.strokeRect(-.82,2.42,1.64,.17)}
    },x,0);
  }
  function drawLabEnding(time){
    if(levelIndex!==5||labSequence.phase!=='recognition')return;
    const x=labSequence.sonicX,reach=Math.min(1,labSequence.timer/.9),look=Math.sin(time*.004)*.025;
    worldDraw(()=>{
      ctx.save();ctx.scale(boss?.direction||-1,1);ctx.translate(0,look);
      ellipse(0,.08,.63,.09,'#08070b99',null);ellipse(-.02,.86,.36,.66,'#075fc1','#06234f',.04);ellipse(-.03,1.53,.38,.39,'#0874c9','#06234f',.035);
      for(const q of [[-.22,1.73,-.8,2.04,-.49,1.44],[-.3,1.47,-.83,1.48,-.5,1.22],[-.26,1.21,-.68,.83,-.18,.99]]){ctx.fillStyle='#075fc1';ctx.strokeStyle='#06234f';ctx.lineWidth=.04;ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[2]+.04,q[3]-.04);ctx.quadraticCurveTo(q[4]-.08,q[5]+.04,q[4],q[5]);ctx.closePath();ctx.fill();ctx.stroke()}
      ellipse(.12,1.53,.31,.26,'#f0d1a5','#714d47',.02);ellipse(.2,1.63,.035,.055,'#fff','#4e4546',.015);ellipse(.21,1.63,.014,.036,'#3379c6',null);line([[.02,1.8],[.14,1.83],[.26,1.8]],'#643d3a',.025);
      // A tentative open hand replaces the attack pose for one brief moment.
      const handY=.76+reach*.47;line([[.16,1.05],[.43,.83],[.62,handY]],'#0874c9',.13);line([[.62,handY],[.82,handY+.02]],'#f2f1ee',.095);line([[.74,handY+.02],[.84,handY+.1]],'#f2f1ee',.035);line([[.76,handY-.01],[.86,handY-.07]],'#f2f1ee',.035);
      ctx.restore();
      ctx.globalAlpha=.22+.18*Math.sin(time*.006);ctx.fillStyle='#e5dfd8';ctx.fillRect(-1.6,2.1,3.2,.025);ctx.globalAlpha=1;
    },x,0);
  }
  function drawLabAftermath(time){
    if(levelIndex!==5||labSequence.phase!=='aftermath')return;
    const direction=Math.sign(player.x-labSequence.sonicX)||1,behindX=player.x-player.face*1.8;
    worldDraw(()=>{
      // Only scattered footprints remain where Sonic and Eggman were.
      for(let i=0;i<7;i++){const x=direction*(i*.48);ctx.save();ctx.translate(x,.1+(i%2)*.045);ctx.rotate((i%2?-.28:.28));ellipse(0,0,.13,.065,i%2?'#68121acc':'#3b1116cc',null);ellipse(direction*.055,.015,.055,.035,'#7d1820bb',null);ctx.restore()}
    },labSequence.sonicX,0);
    if(labSequence.timer<.65)return;
    worldDraw(()=>{
      const reveal=Math.min(1,(labSequence.timer-.65)/.35),flicker=.42+.4*Math.abs(Math.sin(time*.028));ctx.save();ctx.globalAlpha=reveal*flicker;
      // A tall, featureless double-tailed shadow stands just behind Tails.
      ctx.fillStyle='#07050b';ctx.strokeStyle='#51101d';ctx.lineWidth=.055;ctx.beginPath();ctx.moveTo(-.42,.08);ctx.lineTo(-.48,.92);ctx.lineTo(-.3,1.43);ctx.lineTo(-.56,1.95);ctx.lineTo(-.1,1.69);ctx.lineTo(.06,2.13);ctx.lineTo(.28,1.65);ctx.lineTo(.58,1.98);ctx.lineTo(.47,1.4);ctx.lineTo(.57,.9);ctx.lineTo(.43,.1);ctx.closePath();ctx.fill();ctx.stroke();
      line([[-.2,.48],[-.46,.02],[-.65,-.05]],'#09070d',.16);line([[.2,.48],[.5,.04],[.69,-.03]],'#09070d',.16);
      ellipse(-.16,1.47,.035,.065,'#f01832',null);ellipse(.17,1.47,.035,.065,'#f01832',null);ctx.restore();
    },behindX,0);
  }
  function drawLabAftermathFade(){if(levelIndex!==5||labSequence.phase!=='aftermath'||labSequence.timer<=1.75)return;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#050308';ctx.globalAlpha=Math.min(.88,(labSequence.timer-1.75)*1.8);ctx.fillRect(0,0,canvas.width,canvas.height);ctx.restore()}
  function drawLabInterference(time){
    if(levelIndex!==5||!['glitch','signal'].includes(labSequence.phase))return;
    ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=labSequence.phase==='signal' ? .18 : .35+.35*Math.random();ctx.fillStyle='#050308';ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<15;i++){const y=(i*53+Math.sin(time*.04+i)*24)%canvas.height;ctx.fillStyle=i%3?'#d91432':'#e7d9dd';ctx.globalAlpha=labSequence.phase==='signal' ? .08 : .08+Math.random()*.2;ctx.fillRect(0,y,canvas.width*(.25+Math.random()*.75),1+Math.random()*5)}
    ctx.globalAlpha=.25;ctx.fillStyle='#bf1630';ctx.fillRect(Math.sin(time*.025)*canvas.width*.1,canvas.height*.46,canvas.width*.8,canvas.height*.015);ctx.restore();
  }
  function drawTailsCallBubble(){if(sonicEncounter.phase!=='calling')return;worldDraw(()=>{ctx.fillStyle='#fff4dd';ctx.strokeStyle='#54252d';ctx.lineWidth=.04;ctx.beginPath();ctx.roundRect(-.55,2.93,1.15,.48,.13);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-.02,2.94);ctx.lineTo(.1,2.72);ctx.lineTo(.21,2.94);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#301c24';ctx.font='bold .22px sans-serif';ctx.textAlign='center';ctx.save();ctx.translate(.025,3.2);ctx.scale(1,-1);ctx.fillText('¡SONIC!',0,0);ctx.restore()},player.x,player.y)}
  function drawCharacter(time){
     worldDraw(()=>{
        const skinPalette={light:{base:'#f2d2bd',shadow:'#d7aa95',highlight:'#ffe6d4',outline:'#77564c'},medium:{base:'#b87955',shadow:'#8d553d',highlight:'#d69b76',outline:'#694735'},deep:{base:'#704b38',shadow:'#4a3025',highlight:'#92634a',outline:'#4d3428'}},skin=skinPalette[player.skinTone]||skinPalette.light;
       const levelFourBoy=levelIndex===1&&player.character==='boy'&&player.odmGear;
       const showODM=player.odmGear&&(player.character!=='boy'||levelFourBoy);
       const leafNinja=levelIndex===2&&!player.transformed;
       const walking=(started||marioEncounter.phase==='rush')&&player.grounded&&(keys.left||keys.right),phase=walking?time*.012:0;
      const attackProgress=player.attackTime>0?1-player.attackTime/.38:0;
      const attackEase=attackProgress*attackProgress*(3-2*attackProgress);
      const stride=walking?Math.sin(phase)*.34:0,bob=walking?Math.abs(Math.sin(phase*2))*.035:0;
        ctx.translate(0,bob);ctx.scale(player.face,1);if(player.character==='girl')ctx.scale(.96,.96);
          if(player.character==='girl'&&player.hairStyle==='long'&&!player.transformed){
           ctx.fillStyle=player.hairColor;ctx.strokeStyle='#342621';ctx.lineWidth=.018;
          ctx.beginPath();ctx.moveTo(-.24,2.22);ctx.quadraticCurveTo(-.42,2.02,-.39,1.72);ctx.lineTo(-.43,.92);ctx.quadraticCurveTo(-.33,.82,-.24,.98);ctx.lineTo(-.19,1.68);ctx.lineTo(-.2,2.02);ctx.closePath();ctx.fill();ctx.stroke();
          ctx.beginPath();ctx.moveTo(.24,2.22);ctx.quadraticCurveTo(.42,2.02,.39,1.72);ctx.lineTo(.43,.92);ctx.quadraticCurveTo(.33,.82,.24,.98);ctx.lineTo(.19,1.68);ctx.lineTo(.2,2.02);ctx.closePath();ctx.fill();ctx.stroke();
          line([[-.35,1.02],[-.32,1.48],[-.27,1.91]],'#fff0a1',.018);line([[.35,1.02],[.32,1.48],[.27,1.91]],'#fff0a1',.018);
        }
        if(player.rope){ctx.translate(0,1.45);ctx.rotate(-player.rope.angle*.35);ctx.translate(0,-1.45)}
        // Ground shadow and the everyday backpack, removed by the cloud transformation.
        ctx.globalAlpha=.22;ellipse(0,.025,.36,.075,'#111b19',null);ctx.globalAlpha=1;
          if(showODM){const cape=ctx.createLinearGradient(-.35,1.65,.38,.25);cape.addColorStop(0,'#536d43');cape.addColorStop(.48,'#314f35');cape.addColorStop(1,'#1d392c');ctx.fillStyle=cape;ctx.strokeStyle='#182b25';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.29,1.63);ctx.lineTo(.27,1.63);ctx.lineTo(.57,.28);ctx.lineTo(.16,.5);ctx.lineTo(-.2,.33);ctx.lineTo(-.47,.49);ctx.closePath();ctx.fill();ctx.stroke();
            for(const s of [-1,1]){const tankX=s*.37-.095,tank=ctx.createLinearGradient(tankX,0,tankX+.19,0);tank.addColorStop(0,'#434d51');tank.addColorStop(.28,'#d0d5ce');tank.addColorStop(.62,'#858f8d');tank.addColorStop(1,'#394448');ctx.fillStyle=tank;ctx.strokeStyle='#273337';ctx.lineWidth=.022;ctx.beginPath();ctx.roundRect(tankX,.62,.19,.43,.075);ctx.fill();ctx.stroke();ellipse(tankX+.095,1.045,.07,.035,'#c5c8ba','#3d4645',.015);ctx.fillStyle='#a9b5ae';ctx.fillRect(tankX+.06,.51,.07,.12);if(player.odmFlight>0){line([[s*.37,.57],[s*.37,.3]],'#f5f8ee',.095);line([[s*.37,.57],[s*.37,.35]],'#bdeaff',.045)}line([[s*.37,.98],[s*.23,1.52],[s*.07,1.66]],'#c0ad83',.035)}
         }
          if(!player.transformed&&!showODM&&!leafNinja){const pack=ctx.createLinearGradient(-.43,1.55,-.2,.92);pack.addColorStop(0,'#9a5637');pack.addColorStop(.35,'#674331');pack.addColorStop(1,'#392c25');
        ctx.fillStyle=pack;ctx.strokeStyle='#2a2524';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.42,1.56);ctx.lineTo(-.16,1.6);ctx.lineTo(-.13,1.04);ctx.lineTo(-.23,.91);ctx.lineTo(-.49,1.02);ctx.closePath();ctx.fill();ctx.stroke();
        ctx.fillStyle='#a36c45';ctx.beginPath();ctx.moveTo(-.42,1.23);ctx.lineTo(-.17,1.25);ctx.lineTo(-.17,1.04);ctx.lineTo(-.27,.98);ctx.lineTo(-.45,1.05);ctx.closePath();ctx.fill();ctx.stroke();
        line([[-.4,1.54],[-.41,1.66],[-.29,1.71],[-.16,1.62]],'#49362b',.055);}
      // Legs with alternating hip and knee movement.
        for(let side=0;side<2;side++){
        const swing=phase+(side?Math.PI:0),angle=walking?Math.sin(swing)*.43:0;
        const bend=walking?Math.max(0,Math.sin(swing+Math.PI/2))*.48:0;
        ctx.save();ctx.translate((side?-.14:.14),.79);if(player.character==='girl')ctx.scale(1.18,1);ctx.rotate(angle);
        // Baggy uniform trousers: shaded outer seam, moving knee and loose cuffs.
           const trouser=ctx.createLinearGradient(-.16,0,.16,0);trouser.addColorStop(0,leafNinja?'#283d39':showODM?'#493725':player.transformed?'#a83416':'#080a0e');trouser.addColorStop(.3,leafNinja?'#283d39':showODM?'#806447':player.transformed?'#ff8a24':'#23262b');trouser.addColorStop(.62,leafNinja?'#283d39':showODM?'#695138':player.transformed?'#ec681b':'#14171c');trouser.addColorStop(1,leafNinja?'#283d39':showODM?'#392e22':player.transformed?'#9f3519':'#050609');
         ctx.fillStyle=trouser;ctx.strokeStyle='#08090c';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(-.15,.03);ctx.lineTo(.14,.03);ctx.lineTo(.17,-.13);ctx.lineTo(.13,-.36);ctx.lineTo(-.14,-.36);ctx.lineTo(-.18,-.15);ctx.closePath();ctx.fill();ctx.stroke();
         line([[.015,-.04],[.025,-.28]],'#45484c',.012);line([[-.12,-.3],[-.04,-.27],[.08,-.31]],'#505257',.012);
         ctx.translate(0,-.34);ctx.rotate(bend);
         ctx.fillStyle=trouser;ctx.strokeStyle='#08090c';ctx.lineWidth=.02;ctx.beginPath();ctx.moveTo(-.14,.015);ctx.lineTo(.13,.015);ctx.lineTo(.15,-.12);ctx.lineTo(.12,-.34);ctx.lineTo(-.13,-.34);ctx.lineTo(-.16,-.14);ctx.closePath();ctx.fill();ctx.stroke();
         line([[.025,-.08],[.065,-.14],[.01,-.2]],'#42454a',.014);line([[-.12,-.31],[.12,-.31]],'#383b40',.016);
        // Black sneaker with a bright sole and a small heel/toe shape.
           const shoe=ctx.createLinearGradient(0,-.43,0,-.315);shoe.addColorStop(0,leafNinja?'#4b392b':showODM?'#5c5141':player.transformed?'#318ff4':'#202b38');shoe.addColorStop(.7,leafNinja?'#4b392b':showODM?'#332d26':player.transformed?'#1453be':'#0c1118');shoe.addColorStop(1,leafNinja?'#4b392b':'#05080d');
           ctx.fillStyle=shoe;ctx.strokeStyle='#090d13';ctx.lineWidth=.018;ctx.beginPath();ctx.roundRect(-.13,-.43,.36,.14,.05);ctx.fill();ctx.stroke();
            ctx.fillStyle=leafNinja?'#4b392b':player.transformed?'#f5efe2':showODM?'#ae9a72':'#d7d9d1';ctx.fillRect(-.125,-.43,.34,.025);
         line([[.015,-.34],[.065,-.38],[.11,-.34]],'#aab3b7',.012);
         if(leafNinja){line([[-.07,-.32],[.02,-.39],[.13,-.32]],'#c1935f',.035);ctx.fillStyle='#d6b779';ctx.fillRect(-.12,-.395,.33,.018)}
         ctx.restore();
       }
       // A continuous high waistband tucks the baggy trousers under the sweatshirt.
          const waistband=ctx.createLinearGradient(0,.78,0,1.01);waistband.addColorStop(0,leafNinja?'#b54b32':showODM?'#63523a':player.transformed?'#184caa':'#08090c');waistband.addColorStop(.55,leafNinja?'#b54b32':showODM?'#a28b61':player.transformed?'#3684e8':'#222429');waistband.addColorStop(1,leafNinja?'#b54b32':showODM?'#493c2c':player.transformed?'#163d86':'#101216');
       ctx.fillStyle=waistband;ctx.strokeStyle='#08090c';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(-.31,1.02);ctx.lineTo(.31,1.02);ctx.lineTo(.29,.78);ctx.lineTo(-.29,.78);ctx.closePath();ctx.fill();ctx.stroke();
       line([[-.28,.83],[.28,.83]],'#4b4d50',.014);
       // Oversized skater hoodie: dropped shoulders, deep hood and a roomy pouch.
          if(player.character!=='girl'||leafNinja){ctx.fillStyle=leafNinja?'#3d5b49':'#35383b';ctx.strokeStyle=leafNinja?'#253c33':'#1e2023';ctx.lineWidth=.03;ctx.beginPath();ctx.moveTo(-.25,1.62);ctx.lineTo(-.32,1.54);ctx.lineTo(-.32,.86);ctx.lineTo(-.24,.76);ctx.lineTo(.24,.76);ctx.lineTo(.32,.86);ctx.lineTo(.32,1.55);ctx.lineTo(.25,1.65);ctx.closePath();ctx.fill();ctx.stroke();}
           const hoodie=ctx.createLinearGradient(-.28,1.65,.28,1);hoodie.addColorStop(0,leafNinja?'#49694f':player.character==='girl'?'#f1d7a2':showODM?'#997750':player.transformed?'#ffb12f':'#bfc0bc');hoodie.addColorStop(.25,leafNinja?'#49694f':player.character==='girl'?'#d6b478':showODM?'#71553b':player.transformed?'#ff8420':'#929592');hoodie.addColorStop(.65,leafNinja?'#49694f':player.character==='girl'?'#b89159':showODM?'#594330':player.transformed?'#e95a17':'#777b7d');hoodie.addColorStop(1,leafNinja?'#49694f':player.character==='girl'?'#9b7445':showODM?'#3d3327':player.transformed?'#a63818':'#4b5054');
          ctx.fillStyle=hoodie;ctx.beginPath();if(leafNinja){ctx.moveTo(-.27,1.64);ctx.lineTo(-.24,1.7);ctx.lineTo(.24,1.7);ctx.lineTo(.27,1.62);ctx.lineTo(.32,.86);ctx.lineTo(.25,.76);ctx.lineTo(-.25,.76);ctx.lineTo(-.32,.86)}else if(player.character==='girl'){ctx.moveTo(-.27,1.64);ctx.lineTo(-.24,1.7);ctx.lineTo(.24,1.7);ctx.lineTo(.27,1.62);ctx.lineTo(.32,1.43);ctx.lineTo(.2,1.35);ctx.lineTo(.16,1.16);ctx.lineTo(-.16,1.16);ctx.lineTo(-.2,1.35);ctx.lineTo(-.32,1.43)}else{ctx.moveTo(-.27,1.64);ctx.lineTo(-.24,1.7);ctx.lineTo(.24,1.7);ctx.lineTo(.27,1.62);ctx.lineTo(.32,.86);ctx.lineTo(.25,.76);ctx.lineTo(-.25,.76);ctx.lineTo(-.32,.86)}ctx.closePath();ctx.fill();ctx.stroke();if(player.character==='girl'&&!leafNinja){ctx.fillStyle=skin.base;ctx.fillRect(-.16,1.035,.32,.13);line([[-.15,1.035],[.15,1.035]],'#785d43',.025)}
           ctx.fillStyle=leafNinja?'#344f40':showODM?'#4f3d2c':player.transformed?'#2775d0':'#666b6e';ctx.beginPath();ctx.moveTo(-.16,1.18);ctx.lineTo(-.12,1.09);ctx.lineTo(.12,1.09);ctx.lineTo(.16,1.18);ctx.lineTo(.14,1.04);ctx.lineTo(-.14,1.04);ctx.closePath();ctx.fill();ctx.stroke();
        if(leafNinja){
          // Flat olive flak vest, chest straps and small equipment pockets.
          ctx.fillStyle='#657c59';ctx.strokeStyle='#263d31';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.28,1.55);ctx.lineTo(-.18,1.62);ctx.lineTo(0,1.49);ctx.lineTo(.18,1.62);ctx.lineTo(.28,1.55);ctx.lineTo(.25,.91);ctx.lineTo(-.25,.91);ctx.closePath();ctx.fill();ctx.stroke();
          line([[-.18,1.58],[-.13,1.14]],'#314b3c',.04);line([[.18,1.58],[.13,1.14]],'#314b3c',.04);
          for(const side of [-1,1]){ctx.fillStyle='#806943';ctx.fillRect(side*.19-.07,1.02,.14,.2);ctx.strokeRect(side*.19-.07,1.02,.14,.2);line([[side*.19-.05,1.17],[side*.19+.05,1.17]],'#c1a06a',.018)}
          ctx.fillStyle='#bd4c35';ctx.fillRect(-.09,1.37,.18,.1);ctx.strokeStyle='#4d3931';ctx.strokeRect(-.09,1.37,.18,.1);
        }
       line([[-.09,1.57],[-.07,1.36]],'#d2d0c3',.012);line([[.09,1.57],[.07,1.36]],'#d2d0c3',.012);
       // Visible backpack straps sit over the hoodie shoulders.
          if(!player.transformed&&!showODM&&!leafNinja){line([[-.3,1.62],[-.22,1.39],[-.18,1.18]],'#936942',.045);line([[-.3,1.62],[-.22,1.39],[-.18,1.18]],'#c0925d',.012)}
       // The sleeves and hands stay connected as the arms swing or reach for a vine.
       for(let side=0;side<2;side++){
         const s=side===0?1:-1,armSwing=walking?-Math.sin(phase+(side?Math.PI:0))*.38:0;
         const reachRope=player.rope&&side===0?2.3:0;
         ctx.save();ctx.translate(s*.21,1.57);
         if(player.transformed){
           const punching=player.attackTime>0&&player.punchSide===s,extension=punching?Math.sin(attackProgress*Math.PI)*.46:0;
           const gloveX=punching ? .46+extension : s*.1,gloveY=punching ? .35 : .31;
           const sleeve=ctx.createLinearGradient(-.09,0,.09,0);sleeve.addColorStop(0,'#1649ad');sleeve.addColorStop(.35,'#3989f2');sleeve.addColorStop(.72,'#2465c5');sleeve.addColorStop(1,'#103d98');
           line([[0,0],[s*.04,.19],[gloveX-.07,gloveY-.03]],sleeve,.18);
           line([[gloveX-.12,gloveY-.08],[gloveX-.04,gloveY-.1]],'#1649ad',.16);
           ellipse(gloveX,gloveY,.14,.12,'#fff7e9','#aab3c0',.022);
           if(punching){ctx.globalAlpha=.65;line([[.2,.29],[.62+extension,.35]],'#fff4c4',.035);line([[.23,.22],[.57+extension,.19]],'#c6f5ff',.025)}
             }else if(leafNinja){
              ctx.rotate(armSwing);line([[0,0],[s*.07,-.22],[s*.11,-.43]],'#49694f',.19);line([[s*.11,-.43],[s*.13,-.49]],'#344f40',.15);ellipse(s*.14,-.51,.067,.07,skin.base,skin.outline,.012);
           }else if(showODM){
            const armSwing=player.attackTime>0?Math.sin(attackProgress*Math.PI)*(side===0?-.55:.55):0;ctx.rotate(armSwing);
             if(player.character==='girl'){line([[0,0],[s*.05,-.2]],'#d6b478',.16);line([[s*.05,-.2],[s*.13,-.4]],skin.base,.115);ellipse(s*.13,-.43,.06,.07,skin.base,skin.outline,.014)}
             else{const sleeve=ctx.createLinearGradient(-.1,0,.1,0);sleeve.addColorStop(0,'#55412e');sleeve.addColorStop(.45,'#92734f');sleeve.addColorStop(1,'#493927');line([[0,0],[s*.05,-.18],[s*.13,-.34]],sleeve,.18);line([[s*.12,-.34],[s*.13,-.43]],skin.base,.08)}
             }else if(player.character==='girl'){
             ctx.rotate(armSwing);line([[0,0],[s*.05,-.2]],'#d6b478',.16);line([[s*.05,-.2],[s*.13,-.4]],skin.base,.115);ellipse(s*.13,-.43,.06,.07,skin.base,skin.outline,.014);
         }else{
           ctx.rotate(armSwing+reachRope+(player.attackTime>0&&side===0?-Math.sin(attackProgress*Math.PI)*1.05:0));
           const sleeve=ctx.createLinearGradient(-.09,0,.09,0);sleeve.addColorStop(0,'#5b6062');sleeve.addColorStop(.35,'#a1a4a0');sleeve.addColorStop(.72,'#82878a');sleeve.addColorStop(1,'#51565a');
           line([[0,0],[s*.065,-.24],[s*.1,-.43]],sleeve,.19);line([[0,0],[s*.065,-.23]],'#c2c2bb',.016);
            line([[s*.06,-.45],[s*.11,-.48]],'#45494b',.13);ellipse(s*.12,-.51,.065,.085,skin.base,skin.outline,.014);
           line([[s*.09,-.53],[s*.08,-.58]],'#a97668',.009);line([[s*.12,-.54],[s*.12,-.59]],'#a97668',.009);
         }
          ctx.restore();
        }
        if(leafNinja&&player.sasukeSeal>0){
          // Animate a short sequence of recognizable shinobi hand seals in front of the chest.
          const sealPose=Math.floor((.38-player.sasukeSeal)/.095)%4;ctx.save();ctx.lineCap='round';
          line([[-.24,1.55],[-.08,1.78],[.03,1.91]],'#49694f',.16);line([[.24,1.55],[.08,1.78],[-.03,1.91]],'#49694f',.16);
          line([[-.045,1.88],[.045,1.88]],skin.base,.085);
          if(sealPose%2===0){line([[-.045,1.9],[-.035,2.12]],skin.base,.035);line([[.045,1.9],[.035,2.12]],skin.base,.035);line([[-.025,1.95],[.025,2.04]],skin.base,.025)}
          else{line([[-.09,1.93],[.09,1.93]],skin.base,.04);line([[0,1.92],[0,2.12]],skin.base,.035);line([[-.06,1.94],[.06,2.04]],skin.base,.025)}
          ctx.restore();
        }
        if(leafNinja&&player.kirinCharge>0){
          const flicker=Math.sin(time*.045);ctx.save();ctx.globalAlpha=.7+Math.abs(flicker)*.3;ctx.shadowColor='#65dbff';ctx.shadowBlur=.22;
          for(let arc=0;arc<3;arc++){ctx.beginPath();ctx.moveTo(.16,1.12+arc*.035);ctx.lineTo(.24,1.2+flicker*.025);ctx.lineTo(.31,1.13-arc*.02);ctx.lineTo(.4,1.26+flicker*.04);ctx.strokeStyle=arc===1?'#f3ffff':'#74ddff';ctx.lineWidth=arc===1?.035:.018;ctx.stroke()}
          ellipse(.29,1.18,.09,.08,'#b9f5ff','#fff',.018);ctx.restore();
        }
         if(!player.pistol&&!player.transformed&&player.attackTime>0){
         // A readable anticipation-to-impact swing with the starter hand axe.
         ctx.save();ctx.globalAlpha=.28+Math.sin(attackProgress*Math.PI)*.42;
         ctx.beginPath();ctx.arc(.2,1.48,.88,-1.2,.72);ctx.strokeStyle='#f5e6b5';ctx.lineWidth=.035;ctx.stroke();
         ctx.beginPath();ctx.arc(.2,1.48,.96,-1.12,.62);ctx.strokeStyle='#d6e9ed';ctx.lineWidth=.014;ctx.stroke();ctx.restore();
       }
       // The axe stays in the explorer's hand; during an attack it sweeps through a wide arc.
          if(leafNinja){ctx.save();ctx.translate(.31,1.13);ctx.rotate(player.attackTime>0?-.8+attackEase*2.2:-.32);ctx.fillStyle='#8c4b36';ctx.fillRect(-.035,-.32,.07,.28);for(let wrap=0;wrap<3;wrap++)line([[-.035,-.27+wrap*.07],[.035,-.23+wrap*.07]],'#d7bb82',.018);ctx.fillStyle='#c6d0ca';ctx.strokeStyle='#3c4543';ctx.lineWidth=.018;ctx.beginPath();ctx.moveTo(-.045,-.04);ctx.lineTo(-.1,.49);ctx.lineTo(0,.72);ctx.lineTo(.1,.49);ctx.lineTo(.045,-.04);ctx.closePath();ctx.fill();ctx.stroke();line([[-.018,.04],[-.032,.43],[0,.58]],'#f1f0d9',.018);ctx.restore()}
          else if(!player.pistol&&!player.transformed&&!player.odmGear){ctx.save();ctx.translate(.31,1.13);ctx.rotate(player.attackTime>0?-.8+attackEase*2.2:-.32);
       const axeWood=ctx.createLinearGradient(-.05,0,.05,0);axeWood.addColorStop(0,'#493425');axeWood.addColorStop(.28,'#c08a50');axeWood.addColorStop(.68,'#815a37');axeWood.addColorStop(1,'#3d2c20');
       line([[0,-.48],[0,.59]],axeWood,.085);line([[-.012,-.38],[-.012,.53]],'#dfb678',.012);
       line([[-.045,-.15],[.045,-.1]],'#4e3928',.022);line([[-.045,-.08],[.045,-.03]],'#4e3928',.022);
       const steel=ctx.createLinearGradient(-.35,.45,.02,.68);steel.addColorStop(0,'#46545d');steel.addColorStop(.35,'#e1e8e7');steel.addColorStop(.72,'#8e9ea3');steel.addColorStop(1,'#424e56');
       ctx.fillStyle=steel;ctx.strokeStyle='#253039';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(-.015,.43);ctx.lineTo(-.11,.56);ctx.lineTo(-.32,.72);ctx.quadraticCurveTo(-.39,.8,-.34,.89);ctx.quadraticCurveTo(-.11,.86,.04,.68);ctx.lineTo(.045,.48);ctx.closePath();ctx.fill();ctx.stroke();
          line([[-.31,.78],[-.14,.7],[0,.57]],'#f4f4e8',.018);ctx.restore();}
         else if(player.odmGear){
           for(const s of [-1,1]){ctx.save();ctx.translate(s*.31,1.04);ctx.rotate(s*(player.attackTime>0?-.28:.16));
             line([[0,-.16],[0,.08]],'#41362b',.07);line([[0,-.02],[0,.03]],'#c3a66e',.025);
             const blade=ctx.createLinearGradient(-.06,.05,.06,.85);blade.addColorStop(0,'#82919a');blade.addColorStop(.45,'#f5f5e7');blade.addColorStop(1,'#87969a');
             ctx.fillStyle=blade;ctx.strokeStyle='#3b474c';ctx.lineWidth=.018;ctx.beginPath();ctx.moveTo(-.045,.07);ctx.lineTo(-.055,.64);ctx.lineTo(0,.9);ctx.lineTo(.055,.64);ctx.lineTo(.045,.07);ctx.closePath();ctx.fill();ctx.stroke();
             ctx.restore();}
         }
         else if(player.pistol){
         ctx.save();ctx.translate(.24,1.12);ctx.rotate(Math.atan2(aim.y,aim.x*player.face));
         ctx.fillStyle='#222a30';ctx.strokeStyle='#080d13';ctx.lineWidth=.025;ctx.beginPath();ctx.roundRect(0,-.07,.42,.14,.035);ctx.fill();ctx.stroke();
         ctx.beginPath();ctx.moveTo(.08,-.04);ctx.lineTo(.02,-.29);ctx.lineTo(.17,-.29);ctx.lineTo(.23,-.04);ctx.closePath();ctx.fill();ctx.stroke();
         ctx.fillStyle='#8b9ba0';ctx.fillRect(.24,-.035,.14,.035);ctx.restore();
       }
        if(player.transformed&&player.kameFlash>0){ctx.save();ctx.globalAlpha=Math.min(1,player.kameFlash*3);ctx.shadowColor='#46dcff';ctx.shadowBlur=.45;ellipse(.43,1.12,.22,.19,'#72e9ff','#efffff',.025);ctx.restore()}
        if(player.shotFlash>0&&player.pistol){
         ctx.save();ctx.translate(.27,1.12);ctx.fillStyle='#20252a';ctx.strokeStyle='#090d11';ctx.lineWidth=.018;
         ctx.beginPath();ctx.moveTo(-.08,.02);ctx.lineTo(.14,.02);ctx.lineTo(.2,.09);ctx.lineTo(.36,.09);ctx.lineTo(.36,.17);ctx.lineTo(.04,.17);ctx.lineTo(.01,.1);ctx.lineTo(-.1,.1);ctx.closePath();ctx.fill();ctx.stroke();
         ctx.beginPath();ctx.moveTo(-.015,.04);ctx.lineTo(-.07,-.16);ctx.lineTo(.03,-.16);ctx.lineTo(.075,.04);ctx.closePath();ctx.fill();ctx.stroke();
         ctx.globalAlpha=Math.min(1,player.shotFlash*12);ctx.fillStyle='#ffe69a';ctx.beginPath();ctx.moveTo(.36,.12);ctx.lineTo(.53,.19);ctx.lineTo(.39,.23);ctx.lineTo(.49,.34);ctx.lineTo(.29,.25);ctx.closePath();ctx.fill();ctx.restore();
       }
       // A continuous back-hair layer covers the scalp and both sides for every cut.
       ctx.fillStyle=player.transformed?'#090b12':player.hairColor;ctx.strokeStyle='#0a0d12';ctx.lineWidth=.02;ctx.beginPath();ctx.moveTo(-.29,2.12);ctx.quadraticCurveTo(-.4,2.22,-.31,2.43);ctx.quadraticCurveTo(-.24,2.64,0,2.64);ctx.quadraticCurveTo(.24,2.64,.31,2.43);ctx.quadraticCurveTo(.4,2.22,.29,2.12);ctx.lineTo(.34,1.82);ctx.lineTo(.23,1.91);ctx.lineTo(.18,2.04);ctx.lineTo(-.18,2.04);ctx.lineTo(-.23,1.91);ctx.lineTo(-.34,1.82);ctx.closePath();ctx.fill();ctx.stroke();
       // Neck and expressive anime face.
       ctx.fillStyle=skin.base;ctx.strokeStyle=skin.outline;ctx.lineWidth=.02;ctx.fillRect(-.075,1.65,.15,.19);ctx.strokeRect(-.075,1.65,.15,.19);
        const faceShade=ctx.createLinearGradient(-.28,2.34,.25,1.72);faceShade.addColorStop(0,skin.highlight);faceShade.addColorStop(1,skin.shadow);
        ctx.fillStyle=leafNinja?skin.base:faceShade;ctx.strokeStyle=skin.outline;ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.28,2.27);ctx.lineTo(-.25,2.36);ctx.quadraticCurveTo(0,2.45,.25,2.34);ctx.lineTo(.29,2.08);ctx.lineTo(.22,1.84);ctx.lineTo(.11,1.69);ctx.lineTo(-.06,1.67);ctx.lineTo(-.22,1.82);ctx.lineTo(-.3,2.04);ctx.closePath();ctx.fill();ctx.stroke();
      // Hair silhouette and unruly locks.
          const hair=ctx.createLinearGradient(-.22,2.55,.22,1.95),selectedHair=player.transformed?'#090b12':player.hairColor;hair.addColorStop(0,selectedHair);hair.addColorStop(.22,selectedHair);hair.addColorStop(.7,selectedHair);hair.addColorStop(1,selectedHair);
        ctx.fillStyle=hair;ctx.strokeStyle='#0a0d12';ctx.lineWidth=.02;ctx.beginPath();
           if(player.transformed){ctx.moveTo(-.29,2.13);ctx.lineTo(-.5,2.65);ctx.lineTo(-.14,2.43);ctx.lineTo(-.12,2.78);ctx.lineTo(.04,2.48);ctx.lineTo(.24,2.72);ctx.lineTo(.2,2.39);ctx.lineTo(.48,2.53);ctx.lineTo(.27,2.2);ctx.lineTo(.2,1.94);ctx.lineTo(.14,2.15);ctx.lineTo(.04,2.19);ctx.lineTo(-.05,2.13);ctx.lineTo(-.18,2.24);ctx.lineTo(-.24,2.1)}
            else if(player.hairStyle==='short'){ctx.moveTo(-.3,2.13);ctx.lineTo(-.31,2.29);ctx.quadraticCurveTo(-.29,2.39,-.22,2.4);ctx.lineTo(-.15,2.31);ctx.lineTo(-.1,2.43);ctx.lineTo(-.015,2.34);ctx.lineTo(.055,2.45);ctx.lineTo(.14,2.33);ctx.lineTo(.22,2.4);ctx.quadraticCurveTo(.3,2.34,.31,2.14);ctx.lineTo(.22,2.04);ctx.lineTo(.15,2.17);ctx.lineTo(.04,2.19);ctx.lineTo(-.06,2.13);ctx.lineTo(-.2,2.2);ctx.closePath()}
           else if(player.hairStyle==='long'){ctx.moveTo(-.31,2.13);ctx.lineTo(-.38,2.42);ctx.lineTo(-.32,1.72);ctx.lineTo(-.17,1.9);ctx.lineTo(-.16,2.19);ctx.lineTo(-.05,2.13);ctx.lineTo(.04,2.19);ctx.lineTo(.15,2.14);ctx.lineTo(.2,1.9);ctx.lineTo(.34,1.72);ctx.lineTo(.33,2.27);ctx.lineTo(.27,2.49);ctx.quadraticCurveTo(0,2.65,-.26,2.43);ctx.closePath()}
           else if(player.hairStyle==='curly'){ctx.moveTo(-.31,2.13);ctx.quadraticCurveTo(-.42,2.37,-.28,2.48);ctx.quadraticCurveTo(-.26,2.65,-.1,2.53);ctx.quadraticCurveTo(.02,2.65,.11,2.53);ctx.quadraticCurveTo(.31,2.62,.29,2.42);ctx.quadraticCurveTo(.4,2.3,.28,2.15);ctx.lineTo(.2,1.96);ctx.lineTo(.14,2.15);ctx.lineTo(.04,2.19);ctx.lineTo(-.05,2.13);ctx.lineTo(-.18,2.24);ctx.lineTo(-.24,2.1)}
           else if(leafNinja){ctx.moveTo(-.3,2.12);ctx.lineTo(-.35,2.35);ctx.lineTo(-.28,2.55);ctx.lineTo(-.13,2.39);ctx.lineTo(-.08,2.67);ctx.lineTo(.03,2.43);ctx.lineTo(.16,2.61);ctx.lineTo(.19,2.37);ctx.lineTo(.33,2.48);ctx.lineTo(.28,2.18);ctx.lineTo(.2,1.94);ctx.lineTo(.14,2.15);ctx.lineTo(.04,2.19);ctx.lineTo(-.05,2.13);ctx.lineTo(-.18,2.24);ctx.lineTo(-.24,2.1)}
          else if(levelFourBoy){ctx.moveTo(-.3,2.13);ctx.lineTo(-.39,2.29);ctx.lineTo(-.33,2.49);ctx.lineTo(-.2,2.4);ctx.lineTo(-.17,2.62);ctx.lineTo(-.035,2.49);ctx.lineTo(.055,2.59);ctx.lineTo(.13,2.43);ctx.lineTo(.29,2.49);ctx.lineTo(.25,2.27);ctx.lineTo(.3,2.14);ctx.lineTo(.19,2.03);ctx.lineTo(.13,2.15);ctx.lineTo(.04,2.18);ctx.lineTo(-.05,2.13);ctx.lineTo(-.18,2.23);ctx.lineTo(-.25,2.08)}
          else if(showODM){ctx.moveTo(-.3,2.13);ctx.lineTo(-.36,2.32);ctx.quadraticCurveTo(-.34,2.57,-.13,2.61);ctx.lineTo(-.07,2.48);ctx.lineTo(.01,2.56);ctx.lineTo(.1,2.47);ctx.lineTo(.19,2.55);ctx.quadraticCurveTo(.36,2.47,.34,2.25);ctx.lineTo(.28,2.08);ctx.lineTo(.24,1.95);ctx.lineTo(.16,2.04);ctx.lineTo(.11,2.16);ctx.lineTo(.03,2.12);ctx.lineTo(-.05,2.18);ctx.lineTo(-.14,2.1);ctx.lineTo(-.25,2.02);ctx.lineTo(-.32,2.13)}
         else{ctx.moveTo(-.29,2.18);ctx.lineTo(-.27,2.34);ctx.lineTo(-.17,2.27);ctx.lineTo(-.09,2.36);ctx.lineTo(.005,2.25);ctx.lineTo(.11,2.34);ctx.lineTo(.2,2.25);ctx.lineTo(.29,2.31);ctx.lineTo(.28,2.1);ctx.lineTo(.2,1.94);ctx.lineTo(.14,2.15);ctx.lineTo(.04,2.19);ctx.lineTo(-.05,2.13);ctx.lineTo(-.18,2.24);ctx.lineTo(-.24,2.1)}
         ctx.closePath();ctx.fill();ctx.stroke();
         if(player.hairStyle==='short'&&!player.transformed){
           line([[-.22,2.34],[-.14,2.39],[-.06,2.37]],'#ffffff55',.018);
           line([[.01,2.38],[.09,2.41],[.17,2.36]],'#ffffff44',.016);
           line([[.24,2.29],[.2,2.24]],'#0b0d13aa',.018);
         }
        if(leafNinja){const hairHighlight=player.character==='girl'?'#fff0a1':'#65717e';line([[-.27,2.27],[-.23,2.43],[-.13,2.55]],hairHighlight,.024);line([[-.04,2.3],[-.075,2.51],[-.06,2.59]],hairHighlight,.02);line([[.17,2.28],[.17,2.43],[.25,2.44]],hairHighlight,.018)}
        if(leafNinja){
          // Metal Leaf forehead protector, drawn over the hair for a clear layered anime silhouette.
          ctx.fillStyle='#273b38';ctx.fillRect(-.34,2.2,.68,.16);ctx.fillStyle='#b9c6c2';ctx.fillRect(-.19,2.18,.38,.2);ctx.strokeStyle='#53615d';ctx.lineWidth=.018;ctx.strokeRect(-.19,2.18,.38,.2);
          ctx.strokeStyle='#314b45';ctx.lineWidth=.025;ctx.beginPath();ctx.arc(0,2.28,.055,Math.PI*.2,Math.PI*1.8);ctx.stroke();line([[.02,2.28],[.09,2.28]],'#314b45',.02);
        }
       // Large blue eyes, brows, nose, mouth, and the eyebrow piercing.
      for(const eyeX of [-.12,.115]){
        // Shaped anime eyes with bright blue irises, pupil and layered catchlights.
        ctx.fillStyle='#fff';ctx.strokeStyle='#29313b';ctx.lineWidth=.014;ctx.beginPath();ctx.moveTo(eyeX-.08,2.04);ctx.quadraticCurveTo(eyeX,2.16,eyeX+.08,2.04);ctx.quadraticCurveTo(eyeX,1.96,eyeX-.08,2.04);ctx.fill();ctx.stroke();
          const iris=ctx.createRadialGradient(eyeX+.012,2.065,.008,eyeX+.012,2.035,.07);iris.addColorStop(0,'#ffffff');iris.addColorStop(.23,player.eyeColor);iris.addColorStop(.7,player.eyeColor);iris.addColorStop(1,'#202238');
         ellipse(eyeX+.012,2.035,.048,.071,iris,player.character==='girl'?'#315d34':'#294760',.009);ellipse(eyeX+.014,2.03,.023,.047,'#15263b',null);ellipse(eyeX+.03,2.064,.014,.019,'#fff',null);ellipse(eyeX-.012,2.012,.007,.009,'#c7f2ff',null);
         if(leafNinja&&eyeX>0){
           // One Sharingan eye: red iris, three tomoe, and a small blood tear.
           ellipse(eyeX+.012,2.035,.049,.071,'#c91e2e','#5b1422',.012);ellipse(eyeX+.012,2.035,.026,.044,'#89152a',null);ellipse(eyeX+.012,2.035,.012,.028,'#170e19',null);
           for(let tomoe=0;tomoe<3;tomoe++){const angle=tomoe*Math.PI*2/3-.25,tx=eyeX+.012+Math.cos(angle)*.034,ty=2.035+Math.sin(angle)*.05;ellipse(tx,ty,.009,.012,'#160f19',null)}
           ellipse(eyeX+.03,2.062,.012,.016,'#fff3e9',null);line([[eyeX+.05,2.015],[eyeX+.075,1.96],[eyeX+.065,1.89],[eyeX+.095,1.82]],'#8f1724',.025);ellipse(eyeX+.095,1.81,.022,.038,'#a91c2d','#781523',.01);
         }
        line([[eyeX-.084,2.09],[eyeX-.05,2.15],[eyeX,2.17],[eyeX+.06,2.14],[eyeX+.085,2.09]],'#17151a',.018);
        line([[eyeX-.055,2.19],[eyeX,2.205],[eyeX+.055,2.19]],'#17151a',.018);
      }
      // Soft blush, tiny nose and a restrained anime-style smile.
      ellipse(-.19,1.94,.045,.018,'#e88e88aa',null);ellipse(.19,1.94,.045,.018,'#e88e88aa',null);
      line([[.005,1.99],[.025,1.955],[.045,1.99]],'#915f57',.012);
      line([[-.045,1.86],[0,1.845],[.05,1.86]],'#985a59',.014);
      line([[-.035,1.835],[0,1.83],[.035,1.835]],'#fff0e8',.008);
      // Small ears and silver earrings; single brow piercing on character's right.
         ellipse(-.3,2.01,.055,.095,skin.base,skin.outline,.015);if(!player.odmGear)ellipse(-.31,1.98,.022,.03,'#dce4e9','#53606a',.012);
         ellipse(.3,2.01,.055,.095,skin.base,skin.outline,.015);if(!player.odmGear)ellipse(.31,1.98,.022,.03,'#dce4e9','#53606a',.012);
       ellipse(-.14,2.235,.022,.022,'#dce4e9','#48515a',.012);
              if(!player.transformed&&!levelFourBoy){
           if(player.accessory==='cap'||player.accessory==='cap-mask'){
             const hat=ctx.createLinearGradient(-.26,2.64,.26,2.15);hat.addColorStop(0,'#334d83');hat.addColorStop(.38,'#203b70');hat.addColorStop(.8,'#14284e');hat.addColorStop(1,'#101c35');
             ctx.fillStyle=hat;ctx.strokeStyle='#0d172d';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(-.31,2.21);ctx.lineTo(-.27,2.43);ctx.quadraticCurveTo(-.23,2.63,.02,2.65);ctx.quadraticCurveTo(.26,2.63,.31,2.43);ctx.lineTo(.32,2.22);ctx.quadraticCurveTo(.02,2.3,-.31,2.21);ctx.closePath();ctx.fill();ctx.stroke();
             ctx.fillStyle='#172d59';ctx.beginPath();ctx.moveTo(-.3,2.25);ctx.quadraticCurveTo(-.4,2.18,-.51,2.16);ctx.quadraticCurveTo(-.47,2.31,-.28,2.35);ctx.closePath();ctx.fill();ctx.stroke();
           }
           if(player.accessory==='mask'||player.accessory==='cap-mask'){
             ctx.fillStyle='#101114';ctx.strokeStyle='#050608';ctx.lineWidth=.022;ctx.beginPath();ctx.moveTo(-.34,2.19);ctx.lineTo(-.29,2.24);ctx.lineTo(.29,2.24);ctx.lineTo(.35,2.18);ctx.lineTo(.3,2.015);ctx.lineTo(-.3,2.015);ctx.closePath();ctx.fill();ctx.stroke();line([[-.27,2.16],[-.07,2.145],[.16,2.16]],'#393b3f',.012);line([[-.34,2.17],[-.43,2.11],[-.46,2.18]],'#151619',.045);line([[.34,2.17],[.42,2.12],[.45,2.18]],'#151619',.045);
           }
           if(player.accessory==='glasses'){
             ctx.strokeStyle='#273d5a';ctx.lineWidth=.035;ctx.beginPath();ctx.ellipse(-.12,2.035,.095,.085,0,0,Math.PI*2);ctx.ellipse(.115,2.035,.095,.085,0,0,Math.PI*2);ctx.stroke();line([[-.025,2.035],[.02,2.035]],'#273d5a',.035);line([[-.215,2.035],[-.29,2.055]],'#273d5a',.025);line([[.21,2.035],[.29,2.055]],'#273d5a',.025);
           }
         }
        if(player.transformed){
         // Keep both boxing gloves clearly in front of Goku's face and chest.
         for(const s of [-1,1]){const punching=player.attackTime>0&&player.punchSide===s,reach=punching?Math.sin(attackProgress*Math.PI)*.46:0,gx=s*.21+(punching ? .46+reach : s*.1),gy=1.57+(punching ? .35 : .31);
           line([[s*.21,1.57],[s*.21+(punching ? .28 : s*.08),1.78],[gx-(punching ? .08 : s*.02),gy-.025]],'#2873d8',.14);
           line([[gx-.12,gy-.08],[gx-.04,gy-.1]],'#1649ad',.14);
           ellipse(gx,gy,.14,.12,'#fff7e9','#aab3c0',.022);
         }
       }
       // Wind glint and a few manga-style motion strokes while running.
      if(walking){ctx.globalAlpha=.5;line([[-.56,1.48],[-.82,1.52]],'#f4f2dc',.025);line([[-.54,1.32],[-.72,1.34]],'#f4f2dc',.018);ctx.globalAlpha=1}
    },player.x,player.y);
  }
  function drawVine(v,time){
    worldDraw(()=>{
      const attached=player.rope===v;
      const swingX=attached?Math.sin(v.angle)*v.length:Math.sin(time*.0012+v.x)*.14;
      const tipY=attached?v.y-Math.cos(v.angle)*v.length:v.y-v.length;
      // Thick branch, leaf cluster and a braided vine hanging across each gap.
      line([[-.85,7.15],[-.42,7.28],[.12,7.23],[.58,7.11]],'#483c2a',.15);
      line([[-.45,7.28],[.06,7.25],[.42,7.17]],'#9a7950',.035);
      for(const [lx,ly,rotation] of [[-.55,7.35,-.55],[-.28,7.45,.35],[.16,7.4,-.25],[.42,7.3,.5]]){
        ctx.save();ctx.translate(lx,ly);ctx.rotate(rotation);ctx.fillStyle='#507143';ctx.strokeStyle='#2e4932';ctx.lineWidth=.018;
        ctx.beginPath();ctx.moveTo(-.2,0);ctx.quadraticCurveTo(-.06,.17,.23,.025);ctx.quadraticCurveTo(.06,-.12,-.2,0);ctx.fill();ctx.stroke();line([[-.16,0],[.17,.02]],'#9bb16b',.012);ctx.restore();
      }
      ctx.beginPath();ctx.moveTo(.02,7.2);ctx.bezierCurveTo(-.04,6.25,.1,4.45,swingX,tipY);
      ctx.strokeStyle='#334b32';ctx.lineWidth=.075;ctx.lineCap='round';ctx.stroke();
      ctx.beginPath();ctx.moveTo(.035,7.2);ctx.bezierCurveTo(-.015,6.26,.12,4.45,swingX+.012,tipY);
      ctx.strokeStyle='#90a65d';ctx.lineWidth=.018;ctx.stroke();
      ellipse(swingX,tipY,.085,.12,'#566b3d','#283b2b',.018);
      if(attached){
        ctx.globalAlpha=.34;ctx.beginPath();ctx.arc(swingX,tipY,.27,Math.PI,Math.PI*2);ctx.strokeStyle='#e5dbac';ctx.lineWidth=.018;ctx.stroke();ctx.globalAlpha=1;
      }
    },v.x,0);
  }
    function drawGoal(){worldDraw(()=>{if(levelIndex===5){ctx.shadowColor='#a30924';ctx.shadowBlur=24+(portalEnding.active?16*Math.sin(portalEnding.timer*12):0);ellipse(0,2.05,.8,2.05,'#10030a','#851326',.09);ellipse(0,2.05,.53,1.66,'#050307','#b0182b',.045);ctx.shadowBlur=0;for(let i=0;i<7;i++){const y=.8+i*.38;line([[-.48,y],[Math.sin(i*4)*.16,y+.15],[.47,y-.05]],i%2?'#5b1020':'#8e1728',.045)}ellipse(0,2.07,.17,.17,'#d21e35','#310610',.025);return}ctx.strokeStyle='#e8e3d5';ctx.lineWidth=.08;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,4.2);ctx.stroke();ctx.fillStyle='#e6ba55';ctx.strokeStyle='#55442d';ctx.lineWidth=.025;ctx.beginPath();ctx.moveTo(.03,4.05);ctx.lineTo(.92,3.75);ctx.lineTo(.03,3.42);ctx.closePath();ctx.fill();ctx.stroke();ellipse(0,4.45,.24,.24,'#f2d484','#55442d',.025)},world.goalX,world.goalY)}
   function beginVoidPortalEnding(){if(portalEnding.active||finished)return;portalEnding={active:true,timer:0,startX:player.x,startY:player.y};started=false;player.face=1;keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;player.rope=null;player.swingVX=0}
   function drawPortalHands(time){
     if(!portalEnding.active)return;
     const hands=[-.34,-.2,-.07,.07,.2,.34];
     worldDraw(()=>{
       ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
       hands.forEach((offset,index)=>{
         const reach=Math.max(0,Math.min(1,(portalEnding.timer-index*.1)/.8)),curl=Math.max(0,Math.min(1,(portalEnding.timer-.72-index*.06)/.55));
         const originX=offset,handX=originX-.2-reach*.58,handY=.78+index*.15+Math.sin(time*.008+index)*.045;
         ctx.strokeStyle='#09050d';ctx.lineWidth=.19;ctx.beginPath();ctx.moveTo(originX,.1);ctx.bezierCurveTo(originX-.03,.42,handX+.12,.62,handX,handY);ctx.stroke();
         ctx.strokeStyle='#46101d';ctx.lineWidth=.03;ctx.beginPath();ctx.moveTo(originX-.035,.12);ctx.bezierCurveTo(originX-.06,.4,handX+.1,.6,handX,handY);ctx.stroke();
         ellipse(handX,handY,.17,.15,'#100912','#721329',.03);
         for(let finger=0;finger<4;finger++){
           const spread=(finger-1.5)*.095,tipX=handX-.31+curl*.17,tipY=handY+spread-curl*.08;
           ctx.strokeStyle='#100912';ctx.lineWidth=.085;ctx.beginPath();ctx.moveTo(handX-.06,handY+spread*.35);ctx.quadraticCurveTo(handX-.19,handY+spread-.04,tipX,tipY);ctx.stroke();ellipse(tipX,tipY,.052,.05,'#180b15','#711629',.015);
         }
       });
       ctx.restore();
     },world.goalX,0);
   }

  function render(time){
    if(!canvas.width||!canvas.height)return;
    ctx.setTransform(1,0,0,1,0,0);drawSky(time);
    world.camera=Math.max(-7,Math.min(world.goalX-viewW*.52,player.x-viewW*.36));
       drawUndergroundLab(time);
       // Sonic's bright Green Hill palms and the walled city use separate backdrops.
        if(levelIndex===4){const firstTree=Math.floor((world.camera-3)/10)*10+3;for(let x=firstTree;x<world.camera+viewW+10;x+=10)drawGreenHillPalm(x,time,true)}
      if(levelIndex===1)for(let i=-1;i<9;i++)drawCityWall(i*7,i%2===0);
       if(levelIndex===2)for(let i=-1;i<18;i++)drawLeafVillageHouse(i*6.1,i%3===0);
       if(levelIndex===3){for(const [x,h] of [[7,1.7],[25,2.4],[48,1.9],[66,2.8]])drawMarioPipe(x,h);for(const [x,y,q] of [[13,3.1,true],[14,3.1,false],[15,3.1,true],[34,3.55,true],[35.4,3.55,false],[53.5,3.2,true],[54.7,3.2,false],[56,3.2,true],[62,3.8,true]])drawMarioBlock(x,y,q)}
          drawGround();if(marioFight.active){drawArenaRemains(64.5,0,time);drawArenaRemains(72.2,1,time);drawArenaRemains(76,2,time)}if(levelIndex===4)drawDeadAnimals();drawLabReveal(time);drawLabEnding(time);drawLabAftermath(time);vines.forEach(v=>drawVine(v,time));mysteries.forEach(m=>drawMystery(m,time));coins.forEach(c=>drawCoin(c,time));marioStars.forEach(star=>drawMarioStar(star,time));marioLuckyBoxes.forEach(box=>drawMarioLuckyBox(box,time));animals.forEach(a=>drawAnimal(a,time));if(boss?.active&&!(levelIndex===5&&boss.type==='voidSonic'))drawAnimal(boss,time);drawSonicEncounter(time);if(levelIndex===3&&!boss?.active&&['waiting','glitch','turning','ready','rush','jumpscare','standoff'].includes(marioEncounter.phase))drawMarioReveal(time);if(marioFight.active)drawMarioBattle(time);marioHelpers.forEach(helper=>drawMarioHelper(helper,time));bullets.forEach(drawBullet);chakraShots.forEach(s=>drawChakraShot(s,time));explosions.forEach(drawExplosion);smokePuffs.forEach(drawSmokePuff);if(levelIndex!==4&&levelIndex!==5)drawGoal();
     // Keep the character continuously visible when hit; flashing made combat look like teleporting.
        if(levelIndex>=4)drawTailsCharacter(time);else drawCharacter(time);if(portalEnding.active)drawPortalHands(time);drawTailsCallBubble();
      if(levelIndex===3&&player.starPower>0)worldDraw(()=>{ctx.save();ctx.globalAlpha=.72;ctx.lineWidth=.09;ctx.shadowBlur=18;for(let i=0;i<6;i++){ctx.strokeStyle=`hsl(${(time*.35+i*60)%360} 100% 60%)`;ctx.shadowColor=ctx.strokeStyle;ctx.beginPath();ctx.arc(0,1.05,.48+i*.055,time*.006+i,time*.006+i+Math.PI*1.45);ctx.stroke()}ctx.restore()},player.x,player.y);
    // A soft vignette frames the scene like a drawn animation shot.
      const v=ctx.createRadialGradient(canvas.width/2,canvas.height/2,canvas.height*.25,canvas.width/2,canvas.height/2,canvas.width*.7);v.addColorStop(0,'#07100b00');v.addColorStop(1,'#101a1830');ctx.fillStyle=v;ctx.fillRect(0,0,canvas.width,canvas.height);
      drawVoidBlackout();
      drawMarioGlitch(time);
      drawMarioJumpscare(time);
      drawSonicJumpscare(time);
      drawMarioArenaBlood(time);
      drawLabInterference(time);
      drawLabAftermathFade();
  }
  function updateWolves(dt,time){
    for(const wolf of [...animals,...(boss?.active&&boss.awake?[boss]:[])]){
       if(!wolf.active)continue;
        if(wolf.type==='eggman'){
          const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
          if(distance>5.5)wolf.x+=wolf.direction*1.15*dt;else if(distance<3.2)wolf.x-=wolf.direction*.8*dt;
          wolf.walkPhase+=dt*4;wolf.nextShot??=now+.7;
          if(started&&distance<13&&now>=wolf.nextShot){const sx=wolf.x+wolf.direction*.55,sy=1.2,dxAim=player.x-sx,dyAim=player.y+1.05-sy,len=Math.hypot(dxAim,dyAim)||1;chakraShots.push({kind:'eggmanShot',x:sx,y:sy,vx:dxAim/len*8,vy:dyAim/len*8,life:1.8});wolf.nextShot=now+1.4}
          if(distance<1.3&&now-wolf.lastHit>1){wolf.lastHit=now;hurt(12,'eggmanAttack')}
          continue;
        }
         if(wolf.type==='titan'||wolf.type==='titanBoss'){
           const dx=player.x-wolf.x,distance=Math.abs(dx),bossTitan=wolf.type==='titanBoss';wolf.direction=dx<0?-1:1;
            const enraged=wolf.hp<=wolf.maxHp*.5,speed=(bossTitan?1.55:2.1)*(enraged?1.45:1);wolf.vx=Math.sign(dx||wolf.direction)*(distance<28?speed:.75);wolf.x+=wolf.vx*dt;wolf.walkPhase+=dt*(distance<28?5:2.5);
            if(player.rope?.target!==wolf&&Math.abs(dx)<(bossTitan?2.2:1.65)&&player.y<wolf.y+3.3&&time-wolf.lastHit>(bossTitan?(enraged?.72:1.2):1.8)){
               wolf.lastHit=time;hurt(bossTitan?(enraged?15:10):8,'titanAttack');player.rope=null;say('titanAttack');
          }
          continue;
        }
        if(wolf.type==='bird'){
          const dx=player.x-wolf.x,dy=player.y+1.15-wolf.y,distance=Math.hypot(dx,dy);wolf.direction=dx<0?-1:1;
          const speed=Math.abs(dx)<11?5.8:1.7;wolf.x+=Math.sign(dx||wolf.direction)*speed*dt;
          const targetY=player.y+1.15+Math.sin(time*.003+wolf.phase)*.16;wolf.y+=Math.max(-2.8*dt,Math.min(2.8*dt,targetY-wolf.y));wolf.walkPhase+=dt*14;
          if(distance<1){wolf.active=false;explosions.push({x:wolf.x,y:wolf.y,life:.38});hurt(17,'birdAttack')}
          continue;
       }
         if(wolf.type==='sonicCopy'){
           const dx=player.x-wolf.x,distance=Math.abs(dx);wolf.direction=dx<0?-1:1;wolf.copyLife-=dt;wolf.walkPhase+=dt*13;
           if(distance>.72)wolf.x+=wolf.direction*2.25*dt;
           if(wolf.copyLife<=0)wolf.active=false;
           else if(started&&!finished&&distance<.78&&Math.abs(player.y-wolf.y)<1.1){wolf.active=false;hurt(8,'sonicCopyTouch')}
           continue;
         }
         if(wolf.type==='voidSonic'){
           const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
           const enraged=wolf.hp<=wolf.maxHp*.5;
            if(!wolf.nextVoidDash)wolf.nextVoidDash=now+(enraged?.7:1.2);
            if(distance<13&&now>=wolf.nextVoidDash&&!wolf.voidDashUntil&&!wolf.voidChargeUntil){wolf.voidChargeUntil=now+.72;wolf.nextVoidDash=now+(enraged?2.15:3.1);notice.textContent=language==='es'?'¡Sonic prepara una embestida! Esquiva ahora.':'Sonic is winding up! Dodge now.'}
            if(wolf.voidChargeUntil&&now>=wolf.voidChargeUntil){wolf.voidChargeUntil=0;wolf.voidDashUntil=now+(enraged?.68:.55)}
            if(wolf.voidDashUntil&&now>=wolf.voidDashUntil)wolf.voidDashUntil=0;
            const charging=wolf.voidChargeUntil>now,dashing=wolf.voidDashUntil>now,speed=charging?0:dashing?(enraged?10.8:8.2):distance>1.8?Math.min(enraged?4.5:3.4,1.8+distance*.045):0;wolf.vx=wolf.direction*speed;wolf.x+=wolf.vx*dt;wolf.walkPhase+=dt*(dashing?30:Math.max(4,speed*5));
           if(!wolf.nextVoidShot)wolf.nextVoidShot=now+(enraged?1.2:1.7);
           if(started&&distance<11&&now>=wolf.nextVoidShot){const sx=wolf.x+wolf.direction*.55,sy=1.45,ax=player.x-sx,ay=player.y+1.05-sy,len=Math.hypot(ax,ay)||1,shotSpeed=enraged?7.6:6.3;chakraShots.push({kind:'voidSonicShot',x:sx,y:sy,vx:ax/len*shotSpeed,vy:ay/len*shotSpeed,life:2});wolf.nextVoidShot=now+(enraged?1.9:2.8)}
          if(distance<(dashing?1.5:1.05)&&Math.abs(player.y-wolf.y)<1.1&&now-wolf.lastHit>1.1){wolf.lastHit=now;hurt(dashing?18:13,'voidSonicAttack')}
          continue;
        }
        if(wolf.type==='sonic'){
         const distance=player.x-wolf.x,now=time/1000;wolf.direction=distance<0?-1:1;
         if(!wolf.nextDash)wolf.nextDash=now+1.8;
         if(now>=wolf.nextDash&&!wolf.dashUntil){wolf.dashUntil=now+.62;wolf.nextDash=now+3.2;wolf.spinAttack=true}
         if(wolf.dashUntil&&now>=wolf.dashUntil){wolf.dashUntil=0;wolf.spinAttack=false}
         if(!wolf.nextJump)wolf.nextJump=now+1.4;
         if(now>=wolf.nextJump){wolf.nextJump=now+2.6;wolf.jumpUntil=now+.75}
         const jumping=wolf.jumpUntil>now,dashing=wolf.dashUntil>now;
         wolf.y=wolf.baseY+Math.sin(time*.004+wolf.phase)*.18+(jumping?Math.sin((.75-(wolf.jumpUntil-now))/.75*Math.PI)*1.05:0);
         wolf.x+=Math.sign(distance||wolf.direction)*(dashing?9:Math.abs(distance)<7?2.4:0)*dt;
         wolf.walkPhase+=dt*(dashing?35:14);
         if(Math.hypot(player.x-wolf.x,player.y+1-wolf.y)<(dashing?1.35:.95)&&time-wolf.lastHit>1.05){wolf.lastHit=time;hurt(dashing?18:10,'sonicAttack')}
         continue;
       }
         if(wolf.type==='devil'){
           const distance=player.x-wolf.x,now=time/1000;wolf.direction=distance<0?-1:1;
           const enraged=wolf.hp<=wolf.maxHp*.5;
           if(!wolf.nextRoar)wolf.nextRoar=now+.5;
           if(now>=wolf.nextRoar){wolf.screamUntil=now+.9;wolf.nextRoar=now+(enraged?1.15:1.8);scream()}
            const seesPlayer=Math.abs(distance)<(enraged?28:22)&&Math.abs(player.y-wolf.y)<5;
            if(!wolf.nextDash)wolf.nextDash=now+.35;
            if(seesPlayer&&now>=wolf.nextDash&&!wolf.dashUntil){wolf.dashUntil=now+(enraged?1.05:.9);wolf.nextDash=now+(enraged?.72:1.05)}
           if(wolf.dashUntil&&now>=wolf.dashUntil)wolf.dashUntil=0;
            const charging=seesPlayer&&wolf.dashUntil>now;wolf.y=wolf.baseY+Math.sin(time*.008)*.22+(charging?Math.sin((.9-(wolf.dashUntil-now))/.9*Math.PI)*.85:0);
           const chargeDirection=Math.sign(distance)||wolf.direction;
             wolf.x=Math.max(wolf.checkpoint-5,Math.min(wolf.checkpoint+5,wolf.x+chargeDirection*(charging?(enraged?17:14.5):seesPlayer?(enraged?8.2:6.8):.55)*dt));wolf.walkPhase+=dt*(charging?42:seesPlayer?23:3);
             if(Math.abs(distance)<(enraged?2.5:2.2)&&Math.abs(player.y+1-wolf.y)<1.9&&time-wolf.lastHit>(enraged?.68:.85)){wolf.lastHit=time;hurt(charging?(enraged?35:30):(enraged?26:22),'devilAttack')}
          continue;
       }
         if(wolf.type==='bowser'&&levelIndex===3){
           const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
           const enraged=wolf.hp<=wolf.maxHp*.5;
           if(!wolf.nextFire)wolf.nextFire=now+1.1;
           if(distance>2.6)wolf.x+=wolf.direction*Math.min(enraged?2.7:1.8,(enraged?1.5:.9)+distance*.025)*dt;
          wolf.walkPhase+=dt*(distance>2.6?6:2);
          if(started&&!finished&&distance<12&&Math.abs(player.y-wolf.y)<3.2&&now>=wolf.nextFire){
             const originX=wolf.x+wolf.direction*.72,originY=1.35,aimX=player.x-originX,aimY=player.y+1.05-originY,length=Math.hypot(aimX,aimY)||1,speed=enraged?8:6.5;
             chakraShots.push({kind:'bowserFire',x:originX,y:originY,vx:aimX/length*speed,vy:aimY/length*speed,life:2});if(enraged)chakraShots.push({kind:'bowserFire',x:originX,y:originY,vx:aimX/length*speed,vy:aimY/length*speed+.8,life:2});wolf.nextFire=now+(enraged?1.2:2.15);
          }
          if(distance<1.25&&Math.abs(player.y-wolf.y)<.8&&now-wolf.lastHit>1.2){wolf.lastHit=now;hurt(14,'bowserAttack')}
          continue;
        }
         if(wolf.type==='boss'&&levelIndex===2){
            const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
            const enraged=wolf.hp<=wolf.maxHp*.5;
           if(!wolf.nextRasengan)wolf.nextRasengan=now+.8;
           // Naruto actively closes the distance, then uses Rasengan once he is near the player.
           if(started&&!finished&&distance>1.65){const approachSpeed=Math.min(4.2,2.4+distance*.035);wolf.x+=wolf.direction*approachSpeed*dt;wolf.vx=wolf.direction*approachSpeed}
           else wolf.vx=0;
           wolf.walkPhase+=Math.abs(wolf.vx)*dt*3.2;
           if(started&&!finished&&distance<=3.5&&Math.abs(player.y-wolf.y)<2.2&&now>=wolf.nextRasengan){
             const originX=wolf.x+wolf.direction*.42,originY=1.55,aimX=player.x-originX,aimY=player.y+1.05-originY,length=Math.hypot(aimX,aimY)||1,speed=enraged?11:9;
             chakraShots.push({kind:'rasengan',x:originX,y:originY,vx:aimX/length*speed,vy:aimY/length*speed,life:1.2});wolf.nextRasengan=now+(enraged?1.05:1.8);
          }
          continue;
        }
         if(wolf.type==='darkHand'){
           const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;wolf.walkPhase=time*.006+wolf.phase;
           if(!wolf.nextGrab)wolf.nextGrab=now+.8+(wolf.phase%1.3);
           if(distance<4.2&&now>=wolf.nextGrab){wolf.grabUntil=now+.9;wolf.nextGrab=now+2.4+(wolf.phase%1.1)}
           const sonicBattle=boss?.active&&boss.type==='voidSonic'&&Math.abs(player.x-boss.x)<15;
           if(levelIndex===5&&!sonicBattle&&(wolf.grabUntil||0)>now&&distance<1.05&&player.y<1.15&&!player.capturedBy&&player.invulnerable<=0){wolf.lastHit=now;hurt(10,'darkHandGrab');if(started&&!finished){player.capturedBy=wolf;player.captureTimer=2.4;player.x=wolf.x+wolf.direction*.82;player.face=-wolf.direction;player.vy=0;player.rope=null;keys.left=false;keys.right=false;keys.jump=false}}
           continue;
        }
        if(wolf.type==='faceless'){
          const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
          if(!wolf.nextLunge)wolf.nextLunge=now+1.2+(wolf.phase%1.4);
          if(distance<4.8&&now>=wolf.nextLunge&&!wolf.lungeUntil){wolf.lungeUntil=now+.62;wolf.nextLunge=now+2.8}
          if(wolf.lungeUntil&&now>=wolf.lungeUntil)wolf.lungeUntil=0;
          const lunging=wolf.lungeUntil>now,speed=distance>1.05?(lunging?5.2:distance<9?1.45:.55):0;wolf.vx=wolf.direction*speed;wolf.x+=wolf.vx*dt;wolf.walkPhase+=dt*(lunging?20:speed*3);
          if(distance<1.05&&player.y<.9&&now-wolf.lastHit>1.15){wolf.lastHit=now;hurt(lunging?16:10,'facelessAttack')}
          continue;
        }
        if(wolf.type==='ninja'){
         const dx=player.x-wolf.x,distance=Math.abs(dx),now=time/1000;wolf.direction=dx<0?-1:1;
         if(!wolf.nextJutsu)wolf.nextJutsu=now+.55+(wolf.phase%1.2);
         if(distance>5.5)wolf.x+=wolf.direction*.9*dt;else if(distance<2.2)wolf.x-=wolf.direction*.7*dt;
         wolf.walkPhase+=Math.abs(distance>5.5?.9:distance<2.2?.7:0)*dt*3;
         if(started&&!finished&&distance<10.5&&Math.abs(player.y-wolf.y)<3.2&&now>=wolf.nextJutsu){
           const dxAim=player.x-(wolf.x+wolf.direction*.42),dyAim=player.y+1.15-1.2,length=Math.hypot(dxAim,dyAim)||1,speed=7.4;
           chakraShots.push({x:wolf.x+wolf.direction*.42,y:1.2,vx:dxAim/length*speed,vy:dyAim/length*speed,life:1.65});wolf.nextJutsu=now+2.05+(wolf.phase%1.1);
         }
         if(distance<.85&&Math.abs(player.y-wolf.y)<.7&&now-wolf.lastHit>1.25){wolf.lastHit=now;hurt(8,'ninjaAttack')}
         continue;
       }
       const distance=player.x-wolf.x;
      wolf.patrol-=dt;
      let direction;
       const noticesPlayer=wolf.type==='boss'||Math.abs(distance)<(wolf.type==='goomba'?6:wolf.type==='koopa'?8:1.25);
      if(noticesPlayer)direction=Math.sign(distance)||wolf.direction;
      else{
        if(wolf.patrol<=0){wolf.direction*=-1;wolf.patrol=2.3+(wolf.phase%2)}
        direction=wolf.direction;
      }
      wolf.direction=direction;
      const pursuing=noticesPlayer;
       const difficulty=1+levelIndex*.07;
        let speed=(wolf.type==='boss'?(pursuing?3.1:0):wolf.type==='bear'?(pursuing?1.8:.55):wolf.type==='goomba'?(pursuing?3.2:.75):wolf.type==='koopa'?(pursuing?2.1:.65):(pursuing?2.6:.75))*difficulty;
       if(wolf.type==='goomba'){wolf.hopCooldown=(wolf.hopCooldown??.5)-dt;if(wolf.grounded&&wolf.hopCooldown<=0){wolf.vy=6.2;wolf.hopCooldown=1.25+(wolf.phase%1.1)}}
       if(wolf.type==='koopa'){wolf.shellCooldown=(wolf.shellCooldown??1.5)-dt;if(pursuing&&wolf.shellCooldown<=0){wolf.shellUntil=time/1000+.72;wolf.shellCooldown=2.6+(wolf.phase%1.3)}if((wolf.shellUntil||0)>time/1000)speed=6.5*difficulty}
      const segment=ground.find(([left,right])=>wolf.x>=left-.1&&wolf.x<=right+.1);
      let blocked=false;
      if(segment&&wolf.grounded){
        const edge=direction>0?segment[1]:segment[0];
        if(Math.abs(wolf.x-edge)<.55){
          const next=ground.find(([left,right])=>direction>0?left>=segment[1]:right<=segment[0]);
          const gap=next?(direction>0?next[0]-segment[1]:segment[0]-next[1]):Infinity;
          if(gap<=6.5)wolf.vy=10.5;
          else{blocked=true;if(!pursuing){wolf.direction*=-1;direction=wolf.direction}}
        }
      }
      if(!blocked){
        wolf.vx=direction*speed;
        // Wild dogs spring over fallen trunks instead of walking through them.
        if(wolf.grounded&&logs.some(x=>Math.abs(wolf.x-x)<.62))wolf.vy=6.4;
        wolf.x+=wolf.vx*dt;
      }else wolf.vx=0;
      const previousY=wolf.y;
      wolf.vy-=19*dt;wolf.y+=wolf.vy*dt;wolf.grounded=false;
      if(wolf.vy<=0)for(const [left,right] of ground){
        if(wolf.x+.22>left&&wolf.x-.22<right&&previousY>=-.03&&wolf.y<=0){wolf.y=0;wolf.vy=0;wolf.grounded=true;break}
      }
      if(wolf.grounded)wolf.checkpoint=wolf.x;
      if(wolf.y< -2){wolf.x=wolf.checkpoint;wolf.y=0;wolf.vy=0;wolf.direction*=-1;wolf.grounded=true}
      wolf.walkPhase+=Math.abs(wolf.vx)*dt*2.6;
      const contactRange=wolf.type==='boss'?1.15:wolf.type==='bear'?.9:wolf.type==='ninja'?.85:.75;
       if(!player.rope&&Math.abs(distance)<contactRange&&wolf.grounded&&Math.abs(player.y-wolf.y)<.6&&time-wolf.lastHit>1.25){
          wolf.lastHit=time;hurt(Math.round(((wolf.type==='boss'?15:wolf.type==='bear'?10:wolf.type==='ninja'?8:wolf.type==='koopa'&&(wolf.shellUntil||0)>time/1000?14:6)*difficulty)),wolf.type==='boss'&&levelIndex===2?'narutoAttack':wolf.type==='boss'?'leopardAttack':wolf.type==='bear'?'bearAttack':wolf.type==='ninja'?'ninjaAttack':'wolfAttack');
      }
    }
  }
  function damageMario(amount){
    if(!marioFight.active)return;
    const previousPhase=marioFight.phase||1;
    marioFight.hp=Math.max(0,marioFight.hp-amount);
    marioFight.phase=marioFight.hp<=marioFight.maxHp*.5?2:1;
    if(marioFight.phase===2&&previousPhase!==2)notice.textContent=language==='es'?'¡Mario se enfurece y ataca más rápido!':'Mario is enraged and attacks faster!';
    if(marioFight.hp===0){marioFight.active=false;marioEncounter.phase='defeated';marioHelpers=[];marioLuckyBoxes=[];marioStars=[];started=false;marioEnding={active:true,haunted:false,timer:0};overlay.classList.remove('haunted');startButton.hidden=false;end(true);overlayTitle.textContent=tr('marioApparentWinTitle');overlayCopy.textContent=tr('marioApparentWinCopy')}
  }
  function updateMarioFight(dt,time){
    if(!started||!marioFight.active)return;
    const now=time/1000;
    const dx=player.x-marioFight.x,distance=Math.abs(dx);marioFight.direction=dx<0?-1:1;
    // Mario rushes the player relentlessly and attacks at close range.
           marioFight.phase=marioFight.hp<=marioFight.maxHp*.5?2:1;
           if(distance>1.45)marioFight.x+=marioFight.direction*Math.min(marioFight.phase===2?6.2:4.8,(marioFight.phase===2?5:3.8)+distance*.05)*dt;
    marioFight.fireTimer-=dt;
     if(distance<14&&marioFight.fireTimer<=0){const ox=marioFight.x+marioFight.direction*.62,oy=1.35,ax=player.x-ox,ay=player.y+1.05-oy,len=Math.hypot(ax,ay)||1,speed=marioFight.phase===2?10:8.5;chakraShots.push({kind:'marioDarkFire',x:ox,y:oy,vx:ax/len*speed,vy:ay/len*speed,life:2});if(marioFight.phase===2)chakraShots.push({kind:'marioDarkFire',x:ox,y:oy,vx:ax/len*speed,vy:ay/len*speed+.75,life:2});marioFight.fireTimer=distance<4?(marioFight.phase===2?.72:1.15):(marioFight.phase===2?1.05:1.65)}
    if(distance<1.25&&Math.abs(player.y)<.8&&now-marioFight.lastHit>0.82){marioFight.lastHit=now;hurt(16,'marioAttack')}
    marioFight.starTimer-=dt;
    if(marioFight.starTimer<=0&&marioStars.filter(star=>!star.taken).length<2){const spread=(Math.random()-.5)*3.5;const x=Math.max(1,Math.min(world.goalX-1,player.x+spread));marioStars.push({x,y:1.35,taken:false,phase:Math.random()*Math.PI*2});marioFight.starTimer=4.2}
    marioFight.boxTimer-=dt;
    if(marioFight.boxTimer<=0&&!marioLuckyBoxes.length){const boxX=Math.max(8,Math.min(world.goalX-2,player.x+player.face*3));marioLuckyBoxes.push({x:boxX,y:2.15,life:12,phase:time*.001});marioFight.boxTimer=8.5}
    for(let i=marioLuckyBoxes.length-1;i>=0;i--){const box=marioLuckyBoxes[i];box.life-=dt;if(box.life<=0){marioLuckyBoxes.splice(i,1);continue}if(Math.abs(player.x-box.x)<.72&&Math.abs(player.y+1.25-box.y)<1){marioLuckyBoxes.splice(i,1);const type=['luigi','peach','toad'][Math.floor(Math.random()*3)];marioHelpers.push({type,x:player.x+player.face*.7,y:0,life:3,attackTimer:.2,phase:time*.001});say('helperArrived',{name:tr(`helper_${type}`)})}}
    for(let i=marioHelpers.length-1;i>=0;i--){const helper=marioHelpers[i];helper.life-=dt;helper.attackTimer-=dt;const toward=Math.sign(marioFight.x-helper.x)||1;helper.x+=toward*5.4*dt;helper.phase+=dt*8;if(helper.attackTimer<=0&&Math.abs(marioFight.x-helper.x)<8){damageMario(helper.type==='peach'?3:2);helper.attackTimer=.42}if(helper.life<=0||!marioFight.active)marioHelpers.splice(i,1)}
  }
  function updateSonicEncounter(dt){
    if(levelIndex!==4||sonicEncounter.phase==='off'||sonicEncounter.phase==='gone')return;
    if(sonicEncounter.phase==='jumpscare'){sonicEncounter.timer+=dt;if(sonicEncounter.timer>=3.2){sonicEncounter.phase='ending';sonicEncounter.timer=0;started=false;finished=true;endResult='lose';overlay.dataset.result='sonicEnd';overlay.classList.remove('hidden');renderSonicFinalScreen()}return}
    if(sonicEncounter.phase==='ending'){sonicEncounter.timer+=dt;if(sonicEncounter.timer>=2.6){sonicEncounter.phase='gone';levelIndex=5;attemptsLeft=2;retryingLevel=false;loadLevel(levelIndex);reset();Object.assign(player,{x:-5.8,y:0,vy:0,grounded:true,health:100,tailsFlight:2.8,invulnerable:0});keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;started=false;finished=false;endResult='';overlay.dataset.result='';overlay.classList.remove('haunted','sonic-end');overlay.classList.add('hidden');startButton.hidden=false;showLevelBriefing()}return}
    if(sonicEncounter.phase==='caught')return;
    const distance=sonicEncounter.x-player.x;
    if(sonicEncounter.phase==='waiting'&&started&&distance<14){sonicEncounter.phase='approach';sonicEncounter.mood=0}
    if(sonicEncounter.phase==='approach'&&started){sonicEncounter.mood=Math.max(0,Math.min(1,(14-distance)/9));if(distance<=4.5){sonicEncounter.phase='calling';sonicEncounter.timer=0;started=false;keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;player.face=1;say('tailsCallsSonic')}}
    else if(sonicEncounter.phase==='calling'||sonicEncounter.phase==='vanishing'||sonicEncounter.phase==='crying'){
      sonicEncounter.timer+=dt;
      if(sonicEncounter.phase==='calling'&&sonicEncounter.timer>=1.25){sonicEncounter.phase='vanishing';sonicEncounter.timer=0;say('sonicDisappears')}
      else if(sonicEncounter.phase==='vanishing'&&sonicEncounter.timer>=.72){sonicEncounter.phase='crying';sonicEncounter.timer=0;playEvilLaugh();say('tailsCries')}
      else if(sonicEncounter.phase==='crying'&&sonicEncounter.timer>=2.5){sonicEncounter.phase='jumpscare';sonicEncounter.timer=0;playEvilLaugh()}
    }else if(sonicEncounter.phase==='chase'&&started){sonicEncounter.x+=6.6*dt;sonicEncounter.mood=1;if(player.x-sonicEncounter.x<.95&&player.starPower<=0&&player.invulnerable<=0){sonicEncounter.phase='jumpscare';sonicEncounter.timer=0;started=false;keys.left=false;keys.right=false;keys.jump=false;playEvilLaugh()}}
  }
  function extendSonicEscapePath(){
    if(levelIndex!==4||sonicEncounter.phase!=='chase'||player.x<world.goalX-10)return;
    const oldEnd=world.goalX,newEnd=oldEnd+24;ground.push([oldEnd,newEnd+2]);world.goalX=newEnd;world.width=newEnd+2;
    for(let x=oldEnd+4;x<newEnd;x+=4.2)coins.push({x,y:x%3<1.5?1.2:1.55,taken:false});
    mysteries.push({x:oldEnd+12,y:.82,kind:'heartCrystal',taken:false,phase:oldEnd*.7});
  }
  function updateSonicTrail(){
    if(levelIndex!==4)return;
    if(sonicTrail.phase==='walk'&&player.x>=1.8){sonicTrail.phase='approach';sonicEncounter.phase='approach'}
    if(sonicTrail.phase==='approach'&&started&&sonicEncounter.x-player.x<=4.5){
      sonicTrail.phase='meeting';sonicEncounter.phase='calling';started=false;keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;player.face=1;say('tailsCallsSonic');
    }
  }
  function updateLabSequence(dt){
    if(levelIndex!==5||labSequence.phase==='done')return;
    if(labSequence.phase==='walk'&&player.x>=30){labSequence.phase='eating';labSequence.timer=0;labSequence.sonicX=player.x+5.2;started=false;keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;player.face=1}
    else if(labSequence.phase==='eating'){labSequence.timer+=dt;if(labSequence.timer>=3){labSequence.phase='aggressive';labSequence.timer=0;if(boss){boss.active=true;boss.awake=true;boss.x=labSequence.sonicX;boss.hp=boss.maxHp;boss.direction=-1}started=true;say('sonicChasing')}}
      else if(labSequence.phase==='aggressive'&&boss){
      if(!boss.active){labSequence.phase='recognition';labSequence.timer=0;started=false;keys.left=false;keys.right=false;keys.jump=false;jumpQueued=false;player.face=-(boss.direction||-1);playSonicWhisper();return}
      labSequence.sonicX=boss.x;
    }
    else if(labSequence.phase==='recognition'){labSequence.timer+=dt;if(labSequence.timer>=2.8){labSequence.phase='glitch';labSequence.timer=0}}
    else if(labSequence.phase==='glitch'){labSequence.timer+=dt;if(labSequence.timer>=1.1){labSequence.phase='signal';labSequence.timer=0;overlay.classList.remove('hidden');overlay.style.background='transparent';overlay.style.backdropFilter='none';renderSonicFinalScreen();playMimicVoice()}}
    else if(labSequence.phase==='signal'){labSequence.timer+=dt;if(labSequence.timer>=4){labSequence.phase='aftermath';labSequence.timer=0;overlay.style.background='';overlay.style.backdropFilter='';overlay.classList.remove('sonic-end');overlay.classList.add('hidden');playBehindWhisper()}}
    else if(labSequence.phase==='aftermath'){labSequence.timer+=dt;if(labSequence.timer>=2.35){labSequence.phase='done';startButton.hidden=false;end(true)}}
  }
  function update(dt,time){
    for(let i=explosions.length-1;i>=0;i--){explosions[i].life-=dt;if(explosions[i].life<=0)explosions.splice(i,1)}
    for(let i=smokePuffs.length-1;i>=0;i--){const puff=smokePuffs[i];puff.life-=dt;puff.x+=puff.vx*dt;puff.y+=puff.vy*dt;if(puff.life<=0)smokePuffs.splice(i,1)}
    if(player.energyBombCooldown>0)player.energyBombCooldown=Math.max(0,player.energyBombCooldown-dt)
    if(portalEnding.active){portalEnding.timer+=dt;const progress=Math.max(0,Math.min(1,(portalEnding.timer-.5)/1.8)),eased=progress*progress*(3-2*progress);player.x=portalEnding.startX+(world.goalX+.08-portalEnding.startX)*eased;player.y=Math.max(0,portalEnding.startY*(1-eased));player.face=1;if(portalEnding.timer>=3){portalEnding.active=false;player.x=world.goalX;player.y=0;finalJumpscare={active:true,timer:0,shown:false};end(true)}world.camera+=(Math.max(-7,Math.min(world.goalX-viewW*.52,player.x-viewW*.36))-world.camera)*Math.min(1,dt*4);hud();render(time);return}
    if(finalJumpscare.active&&finished){finalJumpscare.timer+=dt;if(!finalJumpscare.shown&&finalJumpscare.timer>=1.65){finalJumpscare.shown=true;overlay.classList.add('portal-jumpscare');playEvilLaugh()}else if(finalJumpscare.shown&&finalJumpscare.timer>=2.45){finalJumpscare.active=false;overlay.classList.remove('portal-jumpscare');renderEndScreen()}hud();render(time);return}
      if(marioEnding.active){marioEnding.timer+=dt;if(!marioEnding.haunted&&marioEnding.timer>=1){marioEnding.haunted=true;marioEnding.timer=0;overlay.classList.add('haunted');renderMarioHauntedScreen()}else if(marioEnding.haunted&&marioEnding.timer>=2.4){marioEnding.active=false;levelIndex=4;attemptsLeft=2;retryingLevel=false;reset();started=true;finished=false;endResult='';overlay.dataset.result='';overlay.classList.remove('haunted');overlay.classList.add('hidden');startButton.hidden=false;hud();say('sonicNightmareIntro')}}
        updateSonicEncounter(dt);updateSonicTrail();updateLabSequence(dt);
        if(levelIndex===5)voidBlackoutAlpha=0;
       if(levelIndex===5&&started&&!finished&&boss?.active){sonicCopyTimer-=dt;if(sonicCopyTimer<=0&&animals.filter(enemy=>enemy.type==='sonicCopy'&&enemy.active).length<2){const direction=Number(keys.right)-Number(keys.left)||player.face,copyX=Math.max(1,Math.min(world.goalX-2,player.x+direction*(3.5+Math.random()*1.5)));animals.push({type:'sonicCopy',x:copyX,y:0,direction:-direction,phase:Math.random()*Math.PI*2,walkPhase:0,active:true,hp:1,maxHp:1,copyLife:6.5,lastHit:0});sonicCopyTimer=7+Math.random()*3}}
     if(levelIndex===3&&boss&&!boss.active&&started&&player.grounded&&marioEncounter.phase==='waiting'&&player.x>=marioEncounter.x-5){marioEncounter.phase='glitch';marioEncounter.timer=0;started=false;jumpQueued=false;keys.left=false;keys.right=false;keys.jump=false;}
     if(marioEncounter.phase==='glitch'||marioEncounter.phase==='turning'){
       marioEncounter.timer+=dt;
       if(marioEncounter.phase==='glitch'&&marioEncounter.timer>=2.15){marioEncounter.phase='turning';marioEncounter.timer=0}
       else if(marioEncounter.phase==='turning'&&marioEncounter.timer>=1.25){marioEncounter.phase='rush';marioEncounter.timer=0;player.face=marioEncounter.x<player.x?-1:1;keys.right=player.face>0;keys.left=player.face<0;notice.textContent=tr('marioReveal');}
     }
     if(marioEncounter.phase==='rush'){
       player.face=marioEncounter.x<player.x?-1:1;keys.right=player.face>0;keys.left=player.face<0;player.x+=player.face*10.5*dt;
       if(Math.abs(marioEncounter.x-player.x)<=.8){player.x=marioEncounter.x-player.face*.8;keys.right=false;keys.left=false;marioEncounter.phase='jumpscare';marioEncounter.timer=0;started=false;}
     }
      if(marioEncounter.phase==='jumpscare'){marioEncounter.timer+=dt;if(marioEncounter.timer>=2){marioEncounter.phase='standoff';marioEncounter.timer=0;started=false;notice.textContent=tr('marioReveal')}}
      if(marioEncounter.phase==='standoff'){marioEncounter.timer+=dt;if(marioEncounter.timer>=.8){marioEncounter.phase='combat';marioEncounter.timer=0;started=true;marioFight.active=true;marioFight.x=marioEncounter.x;marioFight.hp=marioFight.maxHp;marioFight.fireTimer=.8;marioFight.boxTimer=2;marioFight.starTimer=1.2;marioStars=[];say('marioFightStart')}}
       if(started&&!finished)for(let i=chakraShots.length-1;i>=0;i--){const shot=chakraShots[i];shot.x+=shot.vx*dt;shot.y+=shot.vy*dt;shot.life-=dt;if(Math.hypot(shot.x-player.x,shot.y-(player.y+1.05))<(shot.kind==='rasengan'?.62:shot.kind==='bowserFire'?.55:.5)){hurt(shot.kind==='rasengan'?18:shot.kind==='bowserFire'?14:shot.kind==='eggmanShot'?12:shot.kind==='marioDarkFire'?14:shot.kind==='voidSonicShot'?16:10,shot.kind==='rasengan'?'narutoAttack':shot.kind==='bowserFire'?'bowserAttack':shot.kind==='eggmanShot'?'eggmanAttack':shot.kind==='marioDarkFire'?'marioAttack':shot.kind==='voidSonicShot'?'voidSonicAttack':'ninjaJutsu');chakraShots.splice(i,1)}else if(shot.life<=0||shot.x<player.x-13||shot.x>player.x+13)chakraShots.splice(i,1)}
    if(started&&!finished&&!player.capturedBy){
      const direction=Number(keys.right)-Number(keys.left),previousY=player.y,previousX=player.x;
      if(direction)player.face=direction;
      if(jumpQueued&&!player.odmGear&&!player.rope&&!player.grounded)grabRope();
      if(player.odmGear&&player.odmCooldown>0)player.odmCooldown=Math.max(0,player.odmCooldown-dt);
      if(player.odmGear&&player.odmFlight>0){
        player.odmFlight=Math.max(0,player.odmFlight-dt);player.smokeTimer-=dt;player.grounded=false;player.vy=0;
         const flightSpeed=5.8;if(aim.x)player.face=aim.x>0?1:-1;player.x=Math.max(-7,Math.min(world.goalX+1,player.x+aim.x*flightSpeed*dt));player.y=Math.max(.7,Math.min(6.1,player.y+aim.y*flightSpeed*dt));
        if(player.smokeTimer<=0){
          for(const side of [-1,1])smokePuffs.push({x:player.x-aim.x*.36,y:player.y+.85-aim.y*.36+side*.12,vx:-aim.x*.9+side*.35,vy:-aim.y*.9+.15,life:.48,maxLife:.48,radius:.12});
          player.smokeTimer=.045;
        }
      }else if(player.rope){
        // Pendulum physics: steering adds momentum; gravity carries the player through the arc.
        const vine=player.rope;
        if(vine.target?.active){vine.x=vine.target.x;vine.y=vine.target.y+(vine.target.type==='titanBoss'?4:3)}
        const mouseSteer=direction;
        vine.velocity+=(-5.4*Math.sin(vine.angle)+mouseSteer*3.1)*dt;
        vine.velocity*=Math.pow(.998,dt*60);
        vine.velocity=Math.max(-2.5,Math.min(2.5,vine.velocity));
        vine.angle+=vine.velocity*dt;
        player.x=vine.x+Math.sin(vine.angle)*vine.length;
        player.y=vine.y-Math.cos(vine.angle)*vine.length-1.85;
        player.vy=0;player.grounded=false;
      }else{
        if(direction)player.x+=direction*5.1*dt;
        if(player.dashTimer>0){player.x+=player.face*13*dt;player.dashTimer=Math.max(0,player.dashTimer-dt)}
        if(player.swingVX){player.x+=player.swingVX*dt;player.swingVX*=Math.pow(.94,dt*60);if(Math.abs(player.swingVX)<.15)player.swingVX=0}
        player.x=Math.max(-7,player.x);
         if(levelIndex>=4&&player.grounded)player.tailsFlight=2.8;
          if(jumpQueued&&player.grounded){player.vy=8.7;player.grounded=false;player.airJumped=false}
          else if(jumpQueued&&!player.grounded&&levelIndex<4&&!player.airJumped){player.vy=7.3;player.airJumped=true}
         if(levelIndex>=4&&keys.jump&&!player.grounded&&player.tailsFlight>0){player.tailsFlight=Math.max(0,player.tailsFlight-dt);player.vy=Math.min(2.2,player.vy+14*dt);player.y=Math.min(4.8,player.y+player.vy*dt);if(player.y>=4.8)player.vy=0}
         else{player.vy-=20*dt;player.y+=player.vy*dt}
        for(const x of logs)if(direction&&player.x+.3>x-.66&&player.x-.3<x+.66&&previousY<.52)player.x=previousX;
        player.grounded=false;
          const surfaces=[...ground.map(([l,r])=>({left:l,right:r,top:0})),...stairs.map(([x,h,w])=>({left:x,right:x+w,top:h})),...secretSteps.map(([x,h,w])=>({left:x,right:x+w,top:h})),...voidPlatforms.filter(p=>voidPlatformVisible(p,time)).map(p=>({left:p.x,right:p.x+p.w,top:p.y,voidPlatform:p}))].sort((a,b)=>a.top-b.top);
          if(player.vy<=0)for(const p of surfaces)if(player.x+.27>p.left&&player.x-.27<p.right&&previousY>=p.top-.03&&player.y<=p.top){player.y=p.top;player.vy=0;player.grounded=true;if(p.voidPlatform&&!p.voidPlatform.crumbleAt)p.voidPlatform.crumbleAt=time+900;break}
        if(player.grounded)player.swingVX*=.4;
         if(player.y< -4){const before=player.health;hurt(14,'fall');player.x=player.health>before&&player.health===55?checkpointX:Math.max(-5.8,player.x-2);player.y=0;player.vy=0;player.rope=null;player.swingVX=0}
      }
       jumpQueued=false;
       if(player.dashCooldown>0)player.dashCooldown=Math.max(0,player.dashCooldown-dt);
       if(player.x>=checkpointNext&&checkpointNext<world.goalX-4){checkpointX=checkpointNext;checkpointNext+=Math.max(8,world.goalX/4);notice.textContent=language==='es'?'Punto de control guardado.':'Checkpoint saved.';saveRun()}
       player.x=Math.max(-7,Math.min(world.goalX+1,player.x));
       if(player.invulnerable>0)player.invulnerable-=dt;if(player.starPower>0)player.starPower=Math.max(0,player.starPower-dt);
       if(player.attackCooldown>0)player.attackCooldown-=dt;if(player.attackTime>0)player.attackTime-=dt;
       if(player.sasukeCooldown>0)player.sasukeCooldown-=dt;
        if(player.sasukeSeal>0){player.sasukeSeal=Math.max(0,player.sasukeSeal-dt);if(player.sasukeSeal===0){const direction=player.face;bullets.push({x:player.x+direction*.38,y:player.y+2.06,vx:direction*11,vy:.05,life:1.45,kind:'fireball'});say('sasukeFire')}}
       if(player.kirinCooldown>0)player.kirinCooldown=Math.max(0,player.kirinCooldown-dt);
       if(player.kirinCharge>0){player.kirinCharge=Math.max(0,player.kirinCharge-dt);if(player.kirinCharge===0){const direction=player.face;bullets.push({x:player.x+direction*.48,y:player.y+1.2,vx:direction*17,vy:.08,life:1.05,kind:'kirin'});say('kirinLaunch')}}
        if(player.shotFlash>0)player.shotFlash-=dt;if(player.shotCooldown>0)player.shotCooldown-=dt;if(player.kameCooldown>0)player.kameCooldown-=dt;if(player.kameFlash>0)player.kameFlash-=dt;
       updateWolves(dt,time);
       if(marioFight.active)updateMarioFight(dt,time);
      for(let i=bullets.length-1;i>=0;i--){
       const bullet=bullets[i];bullet.x+=bullet.vx*dt;bullet.y+=bullet.vy*dt;if(bullet.kind==='marioFire'){bullet.vy-=14*dt;if(bullet.y<.46&&bullet.vy<0){bullet.y=.46;bullet.vy=4.2}}bullet.life-=dt;
       if(marioFight.active&&bullet.kind==='marioFire'&&Math.abs(marioFight.x-bullet.x)<.9&&Math.abs(bullet.y-1.25)<1.4){damageMario(4);bullets.splice(i,1);continue}
         const targets=bullet.kind==='tailsEnergyBomb'?[...animals.filter(enemy=>enemy.type==='sonicCopy'),...(boss?.active&&boss.awake&&boss.type==='voidSonic'?[boss]:[])]:[...animals,...(boss?.active&&boss.awake?[boss]:[])];
         const target=targets.find(enemy=>{
           const xRange=enemy.type==='sonicCopy'?.78:enemy.type==='voidSonic'?1.35:enemy.type==='titanBoss'?1.5:enemy.type==='titan'?1.05:enemy.type==='devil'?1.1:enemy.type==='sonic'?1:enemy.type==='boss'?1.05:enemy.type==='bird'?.58:.55;
           const targetY=enemy.y+(enemy.type==='sonicCopy'?1.25:enemy.type==='voidSonic'?1.55:enemy.type==='titanBoss'?3:enemy.type==='titan'?2.1:enemy.type==='devil'?1.5:enemy.type==='sonic'?1:enemy.type==='boss'?1.25:enemy.type==='bird'?0:1);
           const yRange=enemy.type==='sonicCopy'?1.4:enemy.type==='voidSonic'?1.75:enemy.type==='titanBoss'?3.2:enemy.type==='titan'?2.4:enemy.type==='devil'?2:enemy.type==='sonic'?1.2:enemy.type==='bird'?.5:1.15;
          return enemy.active&&Math.abs(enemy.x-bullet.x)<xRange&&Math.abs(bullet.y-targetY)<yRange;
        });
        if(target){
            if(bullet.kind==='tailsEnergyBomb'){for(const copy of animals)if(copy.type==='sonicCopy'&&copy.active&&Math.hypot(copy.x-bullet.x,copy.y+1.2-bullet.y)<2.6)damageEnemy(copy,1,'energyBomb');if(boss?.active&&boss.type==='voidSonic'&&Math.hypot(boss.x-bullet.x,boss.y+1.55-bullet.y)<2.6)damageEnemy(boss,4,'energyBomb');explosions.push({x:bullet.x,y:bullet.y,life:.42,big:true})}
            else if(bullet.kind==='bomb'){damageEnemy(target,target.type==='titanBoss'?12:8,'explosive');explosions.push({x:bullet.x,y:bullet.y,life:.38,big:true})}
           else damageEnemy(target,bullet.kind==='marioFire'?4:bullet.kind==='kirin'?16:bullet.kind==='fireball'?12:bullet.kind==='kame'?8:2,bullet.kind==='marioFire'?'marioFire':bullet.kind==='kirin'?'kirin':bullet.kind==='fireball'?'fireball':bullet.kind==='kame'?'kame':'pistola');
          bullets.splice(i,1);
        }else if(bullet.life<=0||bullet.x<player.x-13||bullet.x>player.x+13){if(bullet.kind==='bomb')explosions.push({x:bullet.x,y:bullet.y,life:.38,big:true});bullets.splice(i,1)}
      }
         for(const item of mysteries)if(!item.taken&&Math.abs(player.x-item.x)<.72&&Math.abs(player.y-(item.y||0))<1.05){
        item.taken=true;
         if(item.kind==='gem'){player.transformed=true;player.pistol=false;player.ammo=0;player.weapon='goku';say('gokuTransform')}
         else if(item.kind==='fireFlower'){player.fireFlower=true;player.weapon='fireFlower';say('fireFlowerFound')}
        else if(item.kind==='explosive'){player.explosiveLauncher=true;player.explosiveAmmo=3;player.weapon='explosives';say('explosivesFound')}
        else if(item.kind==='heartCrystal'){const healed=Math.min(50,100-player.health);player.health+=healed;say('heartCrystalFound',{health:player.health})}
        else{const alreadyHadPistol=player.pistol;player.pistol=true;player.ammo=Math.min(15,player.ammo+5);say(alreadyHadPistol?'ammoFound':'pistolFound')}
         hud();
       }
        for(const star of marioStars)if(marioFight.active&&!star.taken&&Math.hypot(player.x-star.x,player.y+1.15-star.y)<.72){star.taken=true;player.starPower=7;damageMario(10);say('starPower')}
       for(const c of coins){if(!c.taken){const dx=player.x-c.x,dy=player.y+1.2-c.y,distance=Math.hypot(dx,dy);if(distance<2.8){const pull=Math.min(1,dt*3.2);c.x+=dx*pull;c.y+=dy*pull}if(distance<.62){c.taken=true;player.coins++;say('coin');saveRun()}}}
        if(levelIndex!==4&&levelIndex!==5&&player.x>world.goalX-1&&player.y>=world.goalY-.5){
           if(boss?.active||marioFight.active){say('goalBlocked')}
          else if(levelIndex===5)beginVoidPortalEnding();else end(true);
       }
    }
      if(started&&!finished&&player.capturedBy){
        const sonicBattle=player.capturedBy.type==='darkHand'&&levelIndex===5&&boss?.active&&boss.type==='voidSonic'&&Math.abs(player.x-boss.x)<15;
        if(sonicBattle){player.capturedBy=null;player.captureTimer=0;player.invulnerable=Math.max(player.invulnerable,.6);say('darkHandEscaped')}
        else{player.captureTimer-=dt;player.attackCooldown=Math.max(0,player.attackCooldown-dt);if(player.attackTime>0)player.attackTime-=dt;
          if(player.capturedBy.type==='darkHand'){
            player.x=player.capturedBy.x+player.capturedBy.direction*.82;player.face=-player.capturedBy.direction;
            if(player.captureTimer<=0){player.capturedBy=null;player.captureTimer=0;player.health=Math.max(0,player.health-10);player.invulnerable=.8;say('darkHandEscaped');hud();if(player.health<=0)end(false)}
          }else if(player.captureTimer<=0){player.capturedBy=null;end(false);overlayTitle.textContent=tr('titanEatenTitle');overlayCopy.textContent=tr('titanEaten');}
        }
      }
    world.camera+=(Math.max(-7,Math.min(world.goalX-viewW*.52,player.x-viewW*.36))-world.camera)*Math.min(1,dt*4);
    hud();render(time);
  }
  function frame(time){requestAnimationFrame(frame);const dt=Math.min(.035,last?(time-last)/1000:.016);last=time;update(dt,time)}
  hairStyleSelect.value=player.hairStyle;hairColorSelect.value=player.hairColor;eyeColorSelect.value=player.eyeColor;accessorySelect.value=player.accessory;skinToneSelect.value=player.skinTone;updateAppearancePreview();hud();showLevelBriefing();requestAnimationFrame(frame);
})();
