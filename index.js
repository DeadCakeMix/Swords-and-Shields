
//online


const app = require("express")()
app.get(`/`, (req, res) => {
  res.send("I AM THE TERMINATOR")
  res.send("I can see you 👁")
})
app.listen(3000, () => {
})
const Database = require("@replit/database");
const db = new Database()
const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require(`ms`)
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const dailycd = new CommandCooldown('earnCash', ms('24h'));
const weeklycd = new CommandCooldown('earnCash2', ms('168h'));
const prefix = "!"
const woodcube = "<:wood_r:1061673865832575086>"
const xpcube = "<:xp_r:1061677421503451236>"
const stonecube = "<:stone_r:1061675179098513470>"
const goldcube = "<:gold_r:1061694545772957766>"
const chesscube = "<:chest_r:1062082459656794163>"
const woodenaxecube = "<:woodenaxe_r:1062170021859688478>"
const stoneaxecube = "<:stoneaxe_r:1062170035986116629>"
const steelaxecube = "<:ironaxe_r:1062166979374485506>"
const sapphireaxecube =  "<:sapphireaxe_r:1062170062884184184>"
const woodenpickaxecube = "<:wooden_pickaxe_r:1061845955785277540>" 
const stonepickaxecube = "<:stonepickaxe_r:1061853816032591962>"
const steelpickaxecube =  "<:ironpickaxe_r:1062166977629671424>"
const sapphirepickaxecube =  "<:sapphirepickaxe_r:1062170156014514226>"
const moltenpickaxecube =  "<:moltenpickaxe_r:1062170177283829790>"
const bloodpickaxecube = "<:bloodpickaxe_r:1062170194660823142>"
const handlecube = "<:handle_r:1063330733688639589>"
const stickcube = "<:stick_r:1063330659516559370>"
const rscube = "<:refinedstone_r:1063366425017864242>"
const coalcube = "<:coal_r:1063366485550059530>"
const WHid = '1066140480083070986';



const secretshop1 = {
  sapphire_pickaxe: 8000,
  molten_pickaxe: 30000,
  blood_pickaxe: 100000,
  sapphire_axe:  6400 , 
  molten_axe:  24000,
  blood_axe: 80000,
}
const minershop = {
  wooden_pickaxe: 100,
  stone_pickaxe: 500,
  steel_pickaxe: 1000,
};
const LJshop = {
    wooden_axe: 80,  
  stone_axe:  400,  
  steel_axe:  800 ,
};
const marketPrices = {
  wood: 1,
  stone: 2,
  handle: 12,
  stick: 3,
  refinedstone: 15,
  coal: 4,
};


const monsters = [
    { name: 'Slime', health: 100, attack: 20 },
    { name: 'Zombie', health: 120, attack: 15 },
    { name: 'Mushroom', health: 80, attack: 25 },
    { name: 'Orc', health: 90, attack: 18 }
];

console.log(`Prefix is ${prefix}`)
console.log(`Did you know geico can save you 15% or more on car insurance?`)



//stats
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity('Become a legend in the world of Swords and Shields!', { type: 'PLAYING' })
})
client.on("debug", (e) => console.log(e));









//Message Event
client.on("message", async message => {
 
  
let wood = await db.get(`wood_${message.author.id}`);
    if (wood === null) wood = 0
    let coal = await db.get(`coal_${message.author.id}`);
    if (coal === null) wood = 0
    let gold = await db.get(`gold_${message.author.id}`);
    if (gold === null) gold = 0
  let Ihandles = await db.get(`handles_${message.author.id}`);
  if(Ihandles == null) Ihandles = 0
  let refinedstone = await db.get(`refinedstone_${message.author.id}`);
  if (refinedstone === null) refinedstone = 0
    let handles = await db.get(`handles_${message.author.id}`);
  if(handles == null) handles = 0
    let ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
    if (ptool == null)
      ptool = 0
    let atool = await db.get(`tool_axe_chop_${message.author.id}`);
    if (atool == null)
      atool = 0
    let stick = await db.get(`stick_${message.author.id}`);
    if (stick == null) stick = 0
    let rs = await db.get(`refinedstone_${message.author.id}`);
    if (rs == null) rs = 0
let cc = await db.get(`cc_${message.author.id}`);
    if (cc === null) cc = 0
  let tool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
    let stone = await db.get(`stone_${message.author.id}`);
    let xp = await db.get(`xp_${message.author.id}`);
    if (stone === null) stone = 0
    if (tool === null) tool = 0
    if (xp === null) xp = 0
  let paragon = await db.get(`paragon_${message.author.id}`);
    if (paragon === null) paragon = 0
  let level = await db.get(`level_${message.author.id}`);
      if (level === null) level = 0
let pfp = await db.get(`pfp_${message.author.id}`);
    if (pfp === null || 0) await db.set(`pfp_${message.author.id}`,`https://th.bing.com/th/id/OIP.gAEpFxnL34NphkfRucK-WQHaHj?w=212&h=215&c=7&r=0&o=5&pid=1.7`)
  let craftcount = await
db.get(`craftcount_${message.author.id}`);
  if (craftcount === null) craftcount = 0
  const Master_Salesman = await db.get(`Master_Salesman_${message.author.id}`);
  if (Master_Salesman === false) await db.set(`MS_${message.author.id}`, 1)
  if (Master_Salesman === true)
  await db.set(`MS_${message.author.id}`, 3)
  let MS = await db.get(`MS_${message.author.id}`);
  let played = await db.get(`played_${message.author.id}`);
  if (played === null) played = false
  let xpnext = await db.get(`xpnext_${message.author.id}`)
  //stats
  
  //strength 
  let strength = await db.get(`strength_${message.author.id}`);
    if (strength === null) strength  = 0

  //smarts
  let smarts = await db.get(`smarts_${message.author.id}`);
    if (smarts === null) smarts  = 0

  //speed
  let speed = await db.get(`speed_${message.author.id}`);
    if (speed === null) speed  = 0

  let mxp = await db.get(`miningxp_${message.author.id}`);
  if (mxp === null) mxp  = 0

  let cxp = await db.get(`choppingxp_${message.author.id}`);
  if (cxp === null) cxp  = 0

  let mLV = await db.get(`mininglevel_${message.author.id}`);
  if (mLV === null) mLV  = 0

  let cLV = await db.get(`choppinglevel_${message.author.id}`);
  if (cLV === null) cLV  = 0
if (xp <= 100) await db.set(`level_${message.author.id}`, 0)
  if (xp <= 100) await db.set(`xpnext_${message.author.id}`, 100)
  if (xp >= 100) {
    if (xpnext <= xp) {
      db.set(`level_${message.author.id}`, level + 1)
db.set(`xpnext_${message.author.id}`, Math.floor(xpnext * 1.5))
    }
  }
  

    if (mxp >= 0) await db.set(`mininglevel_${message.author.id}`, 1)
    if (mxp >= 1000) await db.set(`mininglevel_${message.author.id}`, 2)
    if (mxp >= 5000) await db.set(`mininglevel_${message.author.id}`, 3)
    if (mxp >= 25000) await db.set(`mininglevel_${message.author.id}`, 4)
    if (mxp >= 100000) await db.set(`mininglevel_${message.author.id}`, 5)
    if (cxp >= 0) await db.set(`choppinglevel_${message.author.id}`, 1)
    if (cxp >= 1000) await db.set(`choppinglevel_${message.author.id}`, 2)
    if (cxp >= 5000) await db.set(`choppinglevel_${message.author.id}`, 3)
    if (cxp >= 25000) await db.set(`choppinglevel_${message.author.id}`, 4)
    if (cxp >= 100000) await db.set(`choppinglevel_${message.author.id}`, 5)
  
    if (xp >= 10000) await db.set(`paragon_${message.author.id}`, 1)
    if (xp >= 250000) await db.set(`paragon_${message.author.id}`, 2)
    if (xp >= 1000000) await db.set(`paragon_${message.author.id}`, 3)
    if (xp >= 5000000) await db.set(`paragon_${message.author.id}`, 4)
    if (xp >= 10000000) await db.set(`paragon_${message.author.id}`, 5)
    if (xp >= 50000000) await db.set(`paragon_${message.author.id}`, 6)
    if (xp >= 100000000) await db.set(`paragon_${message.author.id}`, 7)
    if (xp >= 250000000) await db.set(`paragon_${message.author.id}`, 8)
    if (xp >= 500000000) await db.set(`paragon_${message.author.id}`, 9)
    if (xp >= 1000000000) await db.set(`paragon_${message.author.id}`, 10)
    if (xp >= 1500000000) await db.set(`paragon_${message.author.id}`, 11)
    if (xp >= 2000000000) await db.set(`paragon_${message.author.id}`, 12)
    if (xp >= 3000000000) await db.set(`paragon_${message.author.id}`, 13)
    if (xp >= 4000000000) await db.set(`paragon_${message.author.id}`, 14)
    if (xp >= 5000000000) await db.set(`paragon_${message.author.id}`, 15)
    if (xp >= 6000000000) await db.set(`paragon_${message.author.id}`, 16)
    if (xp >= 7000000000) await db.set(`paragon_${message.author.id}`, 17)
    if (xp >= 8000000000) await db.set(`paragon_${message.author.id}`, 18)
    if (xp >= 9000000000) await db.set(`paragon_${message.author.id}`, 19)
    if (xp >= 10000000000) await db.set(`paragon_${message.author.id}`, 20)
    if (xp >= 250000000000) await db.set(`paragon_${message.author.id}`, Math.floor(20 + (xp-250000000000)/50000000000))





//battle
    if (message.content.toLowerCase().startsWith(prefix + 'battle')) {
         let target = monsters[Math.floor(Math.random() * monsters.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle(`You are fighting a ${target.name}!`)
            .setColor('#0099ff');
        const msg = await message.channel.send(embed);
        while (target.health > 0) {
            const filter = (reaction, user) => {
                return ['🗡️', '🛡️'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            await msg.react('🗡️');
            await msg.react('🛡️');
            const collected = await msg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] });
            const reaction = collected.first();
            if (reaction.emoji.name === '🗡️') {
                const damage = Math.floor(Math.random() * 20) + 1;
                target.health -= damage;
                embed.setTitle(`You dealt ${damage} damage to the ${target.name}! Its health is now at ${target.health}.`);
                embed.setColor('#0099ff');
            } else if (reaction.emoji.name === '🛡️') {
                embed.setTitle(`You defended against the ${target.name}'s attack!`);
                embed.setColor('#0099ff');
            }
            msg.edit(embed);
            if (target.health <= 0) {
                embed.setTitle(`You have defeated the ${target.name}!`);
                embed.setColor('#0099ff');
                msg.edit(embed);
                break;
            }
            const playerDamage = Math.floor(Math.random() * target.attack) + 1;
            embed.setTitle(`The ${target.name} dealt ${playerDamage} damage to you!`);
            embed.setColor('#0099ff');
            msg.edit(embed);
        }}
    
    













  

  
  //create character
  if (message.content.toLowerCase().startsWith(prefix + 'createchar')) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("CREATECHAR")
    // Check if the user already has a character
    const character = await db.get(`char_${message.author.id}`);
    if (character) {
      message.channel.send('You already have a character! Use `!char` to view your character.');
      return;
    }

    // Get the user's input for the character's name and class
    const args = message.content.split(' ').slice(1);
    if (args.length < 2) {
      message.channel.send('Please provide a name and class for your character. For example: `!createchar Bob Brute` to view all the clases do `!class`');
      return;
    }
    
    const name = args[0];
    const Class = args[1];
    console.log("Class: " + Class + " Name: " + name)

    if (name === undefined){
      message.channel.send('you cannot name your character this.');}
    if (Class !== "brute" && Class !== "Brute" && Class !== "Wizard" && Class !== "wizard" && Class !== "speedster" && Class !== "Speedster")  return message.channel.send('Please enter a valid class use `!class`')
    // Create the character object and store it in the database
    const newChar = { name, Class };
    await db.set(`char_${message.author.id}`, newChar);
    //adds stats
    //brute
    if(Class == "brute" || Class == "Brute" )
    {
      await db.set(`strength_${message.author.id}`, 4);
      await db.set(`smarts_${message.author.id}`, 0);
      await db.set(`speed_${message.author.id}`, 2);

    }

    //wizard
    if(Class == "wizard" || Class == "Wizard" )
    {
      await db.set(`strength_${message.author.id}`, 1);
      await db.set(`smarts_${message.author.id}`, 4);
      await db.set(`speed_${message.author.id}`, 1);

    }

    ////speedster 
    if(Class == "Speedster"  || Class == "speedster"  )
    {
      await db.set(`strength_${message.author.id}`, 1);
      await db.set(`smarts_${message.author.id}`, 1);
      await db.set(`speed_${message.author.id}`, 4);

    }
   

    

    // Send a message to the user confirming that the character was created
    message.channel.send(`Your character "${name}" has been created! Use "!char" to view your character.`);}




  
  //purge
if(message.content.toLowerCase().startsWith(prefix + "purge")){ 
  let arg = message.content.split(" ") 
  let clear = arg[1]; 
  if(isNaN(clear)){ return message.channel.send("```Please put a valid number to clear messages.```") }
  if(clear > 100){ return message.channel.send("``I can't clear more than 100 messages.``")} 
  if(clear < 1){ return message.channel.send("```You cannot clear less than 1 message.```") }

if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("```You lack the permissions to do this.```") }

if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("```I do not have permission to do this. please update my role!```") }
db.set(`cc_${message.author.id}`, cc + 1);                                      message.channel.bulkDelete(clear)}

//help
if (message.content.toLowerCase().startsWith(prefix + "help")){
  db.set(`cc_${message.author.id}`, cc + 1);
  let embed = new Discord.MessageEmbed()
  .setTitle(`Help | () = required info, <> = optional info`)
  .setDescription(`You can use the following commands right now:
   INFO
   !help: displays command list`)
  
  .addField(`CHARACTER`,
  `!createchar (name) (class): makes a character
  !deletechar: deletes character
  !char: shows info)`, false)

  .addField(`GAIN SHIT`,
  `!mine: mines some stone
  !chop: chops some trees
  !craft: crafts some cool stuff`, false)
  
  .addField(`SHOP SHIT`,
  `!ljshop: lumberjack shop
  !mshop: miner shop
  !inventory: shows your inventory
  !inv: inventory alias`, false)
  
  message.channel.send(embed)
}
//class
if (message.content.toLowerCase().startsWith(prefix + "class")){
let embed = new Discord.MessageEmbed()

.setTitle(`**Classes**`)
.addField(`Brute`, `Chunky, strong, stupid.

Perks: physical stats ++
mine command is better
chop command is better

Downsides:
Due to lack of smarts, you'll have a harder time crafting, and will have slower cooldowns.

Stats: 
Strength +4
Speed +2
Smarts +0`, false)
.addField(`Wizard`, `Big brained, kinda weak, really annoying.

Perks: your speech and intelligence lets you convince the shopkeepers to give you discounts (shop prices -)

craft command is better

Downsides:
your smartassery and tiny man stature makes gathering resources a bit harder and fighting alot harder

Stats:
Smarts +4
Speed +1
Strength +1`, false)
.addField(`Speedster`, `Fast, smartish, weak.

Perks: you do everything faster (cooldown time -)
you are smart enough to not be scammed by shopkeepers (shop prices =)

Downsides:
Whats an attack?
I'm fast, not strong. -the speedster

Stats:
Speed +4
Smarts +1
Strength +1`, false)
  
message.channel.send(embed)
}
  
//craft
if (message.content.toLowerCase().startsWith(prefix + "craft")) {
  await db.set(`cc_${message.author.id}`, cc + 1);
  let Ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
  let args = message.content.substring(prefix.length).split(" ")
  let item = args[1];
  let amount = parseInt(args[2]);
  if (item === undefined) {
    message.channel.send("```***Item crafting list!*** \n coal for 3 wood \n stick for 2 wood \n handle for 10 wood \n wooden_pickaxe for 10 wood + 1 stick \n refinedstone for 2 stone and 2 coal```")
  }
  if (item != "stick" && item != "wooden_pickaxe" && item != "handle" && item != "coal" && item != "refined_stone" && item != undefined) return message.channel.send(`You tried to craft.. oh wait, you didn't. BECAUSE YOU CANT MAKE WHATEVER A ${item} IS`) 
   if(amount < 1) return message.channel.send("Please enter a valid number")
  if (isNaN(amount)) {
      amount = 1;}
  if (item === "stick") {
    if(wood < 2 * amount) return message.channel.send("You dont have enough wood (you need `2 wood` for this")
     await db.set(`stick_${message.author.id}`, stick + amount);
db.set(`wood_${message.author.id}`, wood - amount * 2);
db.set(`craftcount_${message.author.id}`, craftcount + amount);
    message.channel.send(`You crafted ${amount} sticks`)
  }
 if(item === "wooden_pickaxe"){
   if(stick < 1 * amount) return message.channel.send("You dont have a stick go make one with !craft stick")
   if(wood < 10 * amount) return message.channel.send("You dont have enough wood go chop some trees nerd (you need `10 wood` for this)")
   await db.set(`tool_pickaxe_mine_${message.author.id}`, Ptool + amount);
   db.set(`wood_${message.author.id}`, wood - amount * 10);
  db.set(`stick_${message.author.id}`, stick - amount * 1);
    message.channel.send(`You crafted ${amount} ${woodenpickaxecube}`) 
 }
  if(item === "stone_pickaxe"){
   if(Ihandles < 1 * amount) return message.channel.send("You dont have a handle go make one with !craft handle.. what, you think you can hold a chunk of stone on a stick? no. you need b i g  s t i c k.")
   if(stone < 30 * amount) return message.channel.send("You dont have enough stone go mine some rocks nerd (you need `30 stone` to craft this)`)")
   await db.set(`tool_pickaxe_mine_${message.author.id}`, Ptool + (amount * 6));
  db.set(`stone_${message.author.id}`, stone - amount * 30);
db.set(`handles_${message.author.id}`, Ihandles - amount * 1);
    message.channel.send(`You crafted ${amount} ${stonepickaxecube}`) 
  }
  if(item === "handle"){
    if(wood < 25 * amount) return message.channel.send("You dont have enough wood (you need `25 wood` to make a handle)")
     await db.set(`handles_${message.author.id}`, Ihandles + amount);
    message.channel.send(`You crafted ${amount} handles.`)
  }
  if(item === "coal"){
    if(wood < 3 * amount) return message.channel.send("You dont have enough wood (you need `3 wood` to make coal)")
    await db.set(`coal_${message.author.id}`, coal + amount);
db.set(`wood_${message.author.id}`, wood - (amount * 3));
  }
  if(item === "refined_stone"){
  if(stone < 2 * amount) return message.channel.send("You dont have enough stone (you need `2 stone` to craft this)")
  if(coal < amount) return message.channel.send("You dont have enough coal (you need `coal` to craft this)")
    await db.set(`refinedstone_${message.author.id}`, refinedstone + amount); db.set(`stone_${message.author.id}`, stone - amount * 2);
db.set(`coal_${message.author.id}`, coal - amount);
  }
}



  
  //inventory
  if (message.content.toLowerCase().startsWith(prefix + "inv") || message.content.toLowerCase().startsWith(prefix + "inventory")) {
await db.set(`cc_${message.author.id}`, cc + 1);

    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s Inventory`)
      .setColor("green")
      .setDescription(`**MATERIALS** \n ${woodcube}: ${wood} wood \n ${stonecube}: ${stone} stone \n ${rscube}: ${rs} refined stone \n ${coalcube}: ${coal} coal \n ${goldcube}: ${gold} gold \n ${stickcube}: ${stick} sticks \n ${handlecube}: ${handles} handles \n **TOOL POWER** \n ${steelpickaxecube}: ${ptool} pick power\n ${steelaxecube}: ${atool} axe power`)
      .setTimestamp()
    message.channel.send(embed)
  }

  //mine
  if (message.content.toLowerCase().startsWith(prefix + "mine")) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("MINE")
    let EnergyDrink = await db.get(`EnergyDrink_${message.author.id}`);
    let x = Math.floor(Math.random() * 4) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    
    if (tool === 0) return message.channel.send("You need a pickaxe to do that")

    let timeout = 90000;
    let z1 = strength + x * (tool + 1) * mLV
    let z2 = y * (tool + 1)
    let z3 = z1 + z2 + Math.floor(Math.random() * 3)
    //lol | there | lol
  if (EnergyDrink === true) timeout = timeout/2;
 let STATspeedcooldown = speed * 0.05
    let STATsmartcooldown = smarts * 0.01
     timeout = timeout - STATspeedcooldown - STATsmartcooldown



    let minecheck = await db.get(`minecheck_${message.author.id}`)
    let timeLeft = ms(timeout - (Date.now() - minecheck))
    if (minecheck !== null && timeout - (Date.now() - minecheck) > 0) return message.channel.send(`Please wait ${timeLeft} to use this command again!`)


    let embed = new Discord.MessageEmbed()
      .setColor("green")
      .setDescription(`POW! You got ${z1} ${stonecube}, ${z2} ${xpcube}, and ${z3} mining xp`)
      .setTimestamp()
    message.channel.send(embed
    )
    await db.set(`minecheck_${message.author.id}`, Date.now())
    await db.set(`messagecheck_${message.author.id}`, Date.now())
    //updates wood
    db.set(`stone_${message.author.id}`, stone + z1)
    //updates xp
    db.set(`xp_${message.author.id}`, xp + z2)
    db.set(`miningxp_${message.author.id}`, mxp + z3)
  }

  //chop
  if (message.content.toLowerCase().startsWith(prefix + "chop")) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("CHOP")
    let EnergyDrink = await db.get(`EnergyDrink_${message.author.id}`);
    
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    
    let tool = await db.get(`tool_axe_chop_${message.author.id}`);
  
    let timeout = 90000;
    let z1 = strength + x * (tool + 1) * cLV
    let z2 = y * (tool + 1)
    let z3 = z1 + z2 + Math.floor(Math.random() * 3)
if (EnergyDrink === true) timeout = timeout/2;
    let STATspeedcooldown = speed * 0.05
    let STATsmartcooldown = smarts * 0.01
     timeout = timeout - STATspeedcooldown - STATsmartcooldown



    let chopcheck = await db.get(`chopcheck_${message.author.id}`)
    let timeLeft = ms(timeout - (Date.now() - chopcheck))
    if (chopcheck !== null && timeout - (Date.now() - chopcheck) > 0) return message.channel.send(`Please wait ${timeLeft} to use this command again!`)


    let embed = new Discord.MessageEmbed()
      .setColor("green")
      .setDescription(`TIMBER! You got ${z1} ${woodcube} and ${z2} ${xpcube} you also got ${z3} chopping xp`)
      .setTimestamp()
    message.channel.send(embed
    )
    await db.set(`chopcheck_${message.author.id}`, Date.now())
    await db.set(`messagecheck_${message.author.id}`, Date.now())
    //updates wood
    db.set(`wood_${message.author.id}`, wood + z1)
    //updates xp
    db.set(`xp_${message.author.id}`, xp + z2)
    db.set(`choppingxp_${message.author.id}`, cxp + z3)
  }

  //sell
  if (message.content.toLowerCase().startsWith(prefix + "sell")) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("SELL")
    let woodA = await db.get(`wood_${message.author.id}`);
    if (woodA === null) woodA = 0
    let stoneA = await db.get(`stone_${message.author.id}`);
    if (stoneA === null) stoneA = 0
    let gold = await db.get(`gold_${message.author.id}`);
    if (gold === null) gold = 0
    let handleA = await db.get(`handles_${message.author.id}`);
    if(handleA == null) db.set(`handles_${message.author.id}`, 0);
    let Master_Salesman = await db.get(`Master_Salesman_${message.author.id}`);
  if (Master_Salesman === false) await db.set(`MS_${message.author.id}`, 1)
  if (Master_Salesman === true)
  await db.set(`MS_${message.author.id}`, 3)
    let args = message.content.substring(prefix.length).split(" ")
    let resource = args[1];
    let amount = parseInt(args[2]);
    if (isNaN(amount)) {
      return message.channel.send(`Please enter a valid number to sell.`);
      
    
    }  if(amount < 1) return message.channel.send("Please enter a valid number to sell.")

    if (resource !== 'wood' && resource !== 'stone' && resource !== 'handle') {
      return message.channel.send(`${resource} is not a valid resource!`);
    }
    if (resource == "wood") {
      if (woodA >= amount) {
        const price = marketPrices[resource] * amount * MS;
        message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
        await db.set(`gold_${message.author.id}`, gold + price)
        await db.set(`wood_${message.author.id}`, woodA - amount)
      } else (message.channel.send(`You do not have enough ${resource}.`))
    } else {
      if (resource == "stone") {
        if (stoneA >= amount) {
          const price = marketPrices[resource] * amount * MS;
          message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
          await db.set(`gold_${message.author.id}`, gold + price)
          await db.set(`stone_${message.author.id}`, stoneA - amount)

        } else { message.channel.send(`You do not have enough ${resource}.`)  }
      }else {
      if (resource == "handle") {
        if (handleA >= amount) {
          const price = marketPrices[resource] * amount * MS;
          message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
          await db.set(`gold_${message.author.id}`, gold + price)
          await db.set(`handles_${message.author.id}`, handleA - amount)

        } else { message.channel.send(`You do not have enough ${resource}.`)  }
      }
      }
      }
    }
  




  //char
  if (message.content.toLowerCase().startsWith(prefix + 'char')) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("CHAR")
    // Get the user's character from the database
    const character = await db.get(`char_${message.author.id}`);
    if (!character) {
      message.channel.send('You do not have a character. Use `!createchar` to create a character.');}
   else {
    

    
    if (paragon == 0) {
      // Create an embed message with the character information
      const embed = new Discord.MessageEmbed()
        .setTitle(`${character.name} | ${xp} xp`)
        .addField(`**GOLD** ${goldcube}`, `${gold}`, true)
        .addField(`**PICKAXE POWER** ${steelpickaxecube}`, `${ptool}`, true)
        .addField(`**AXE POWER** ${steelaxecube}`, `${atool}`, true)
        .addField(`**TOTAL COMMANDS** ${chesscube}`, `${cc}`, true)
        .addField(`**STRENGTH**`, `${strength}`, true)
        .addField(`**SMARTS**`, `${smarts}`, true)
        .addField(`**SPEED**`, `${speed}`, true)
        .addField(`**LEVELS**`, `Account level: ${level} \nMining level: ${mLV} \nChopping level: ${cLV}`, true)
        .addField(`:x: LOCKED :x:`, "unlock at level 10", true)
        .setThumbnail(pfp)
        .setColor('green');
      message.channel.send(embed);} 
      else {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${character.name} PARAGON ${paragon} | ${xp} xp`)
         .addField(`**GOLD** ${goldcube}`, `${gold}`, true)
        .addField(`**PICKAXE POWER** ${steelpickaxecube}`, `${ptool}`, true)
        .addField(`**AXE POWER** ${steelaxecube}`, `${atool}`, true)
        .addField(`**TOTAL COMMANDS** ${chesscube}`, `${cc}`, true)
        .addField(`**STRENGTH**`, `${strength}`, true)
        .addField(`**SMARTS**`, `${smarts}`, true)
        .addField(`**SPEED**`, `${speed}`, true)
        .addField(`**LEVELS**`, `Account level: ${level} \n Mining level: ${mLV} \n Chopping level: ${cLV}`, true)
        .setThumbnail(pfp)
        .setColor('green');
      message.channel.send(embed)

    }

  }

}

  //delete char
  if (message.content.toLowerCase().startsWith(prefix + 'deletechar')) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("DELETCHAR")
    // Check if the user has a character
    const character = await db.get(`char_${message.author.id}`);
    if (!character) {
      message.channel.send('You do not have a character to delete.');
      return;
    }

    // Check if the user typed "!deletechar confirm" to confirm their decision
    if (message.content !== `${prefix}deletechar confirm`) {
      message.channel.send('Are you sure you want to delete your character? Type `!deletechar confirm` to confirm.');
      return;
    }

    // Delete the character object from the database
    await db.delete(`char_${message.author.id}`);
db.set(`pfp_${message.author.id}`,null)
    // Send a message to the user confirming that the character was deleted
    message.channel.send(`Your character "${character.name}" has been deleted.`);
  }

  
//appearance
  if (message.content.toLowerCase().startsWith(prefix + 'appearance')){

if(level < 2) return message.channel.send("Sorry you need to be level 2 to use this command")
  await db.set(`cc_${message.author.id}`, cc + 1);
    
if (!message.attachments.size) {
  return message.reply('Please upload an image');
}

const imageLink = message.attachments.first().url;

if (!imageLink.match(/\.(jpeg|jpg|gif|png)$/)) {
  return message.reply('Please upload an image');
}


  db.set(`pfp_${message.author.id}`,imageLink)
    let embed = new Discord.MessageEmbed()
      .setColor("green")
      .setDescription(`Updated appearance use "!char" to view the new you`)
      .setTimestamp()
    message.channel.send(embed)


    
  }

//Miner's  Shop
  if (message.content.startsWith(prefix + 'mshop')) {
  await db.set(`cc_${message.author.id}`, cc + 1);
    // Split the message into an array of words
    const args = message.content.split(' ');

    // Get the name of the item being bought
    const itemName = args[1];

    // Get the price of the item
    let price = minershop[itemName];
  
    // Check if the item is available for purchase
    if (!price) {
      if (itemName == undefined){
      message.channel.send(`Here is a list of items you can buy:
**wooden pickaxe: Cost: 100 | bonus = 1
stone pickaxe: Cost: 500 | bonus = 6
steel pickaxe: Cost: 1000 | bonus 15**`); return;} else {
        message.channel.send(`There is no item called "${itemName}" in the shop.`);
        return;
} }
let STATprice = 0 + (smarts * 100 * 0.05 / (smarts + 200)) * (smarts - 0)
   
    price = Math.floor((price * (1 - (STATprice))))
    // Check if the user has enough money to buy the item
    const gold = await db.get(`gold_${message.author.id}`);
    if (gold < price) {
      message.channel.send(`Sorry, you do not have enough money to buy the item "${itemName}".`);
      return;
    }

    // Subtract the price of the item from the user's money
    await db.set(`gold_${message.author.id}`, gold - price);
  let ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);


    message.channel.send(`You have bought 1 ${itemName} at the Miner's  Shop for ${price} gold.`);

    if (itemName === "wooden_pickaxe") {
      
      await db.set(`tool_pickaxe_mine_${message.author.id}`, ptool + 1)
    
    } else if (itemName === "stone_pickaxe") {
      
      
      
      await db.set(`tool_pickaxe_mine_${message.author.id}`, ptool + 6)

    } else if (itemName === "steel_pickaxe") {
      
     await db.set(`tool_pickaxe_mine_${message.author.id}`, ptool + 15)
    
    }



  }
  

//Lumber Jack's  Shop
  if (message.content.startsWith(prefix + 'ljshop')) {
  await db.set(`cc_${message.author.id}`, cc + 1);
    // Split the message into an array of words
    const args = message.content.split(' ');

    // Get the name of the item being bought
    const itemName = args[1];

    // Get the price of the item
    let price = LJshop[itemName];
    
   
     

    
    // Check if the item is available for purchase
    if (!price) {
      let Aembed = new Discord.MessageEmbed()
     .setTitle(`Hi and welcome to my shop :D -the lumberjack`)

  .setDescription(`**Item list:** \n
  ${woodenaxecube} Wooden Axe | 80 ${goldcube}, grants +1 Axe Power \n ${stoneaxecube} Stone Axe | 400 ${goldcube}, grants +6 Axe Power \n ${steelaxecube} Steel Axe | 800 ${goldcube}, grants +15 Axe Power`)
    message.channel.send(Aembed)
      return;
    }

    // Check if the user has enough money to buy the item
     let STATprice = Math.floor(0 + (smarts * 100 * 0.05 / (smarts + 6)) * (smarts - 0))

price =  price = Math.floor((price * (1 - (STATprice))))
    const gold = await db.get(`gold_${message.author.id}`);
    if (gold < price) {
      message.channel.send(`Sorry, you do not have enough money to buy the item "${itemName}".`);
      return;
    }

    // Subtract the price of the item from the user's money
    await db.set(`gold_${message.author.id}`, gold - price);
  let atool = await db.get(`tool_axe_chop_${message.author.id}`);


    message.channel.send(`You have bought 1 ${itemName} at the Lumber Jacks's  Shop for ${price} gold.`);

    if (itemName === "wooden_axe") {
      
      await db.set(`tool_axe_chop_${message.author.id}`, atool + 1)
    
    } else if (itemName === "stone_axe") {
      
      
      
      await db.set(`tool_axe_chop_${message.author.id}`, atool + 6)

    } else if (itemName === "steel_axe") {
      
     await db.set(`tool_axe_chop_${message.author.id}`, atool + 15)
    
    }



  }


    
//Energy Drink: Cooldowns cut in half
if (message.content.startsWith(prefix + 'purchase Energy Drink')) {
  await db.set(`cc_${message.author.id}`, cc + 1);
    let EnergyDrink = await db.get(`EnergyDrink_${message.author.id}`);
  
let xp = await db.get(`xp_${message.author.id}`);
    // Check if the user has enough paragons to purchase the upgrade
    
    const paragons = await db.get(`paragon_${message.author.id}`)

    if (paragons < 1) {
      message.channel.send('You do not have enough paragons to purchase this upgrade.');
      return;
    }

    if (EnergyDrink == true) {
      message.channel.send('You own this already.');
      return;
    }

    // Deduct the paragons from the user's balance
    await db.set(`paragon_${message.author.id}`, paragons - 1);
await db.set(`xp_${message.author.id}`, xp - 10000);
 
    // Enable the Galactic Discount Card upgrade for the user
    await db.set(`EnergyDrink_${message.author.id}`, true);

    message.channel.send('You have successfully purchased the Energy Drink upgrade.');
    await db.set(`stone_${message.author.id}`, 0);
      await db.set(`wood_${message.author.id}`, 0);
  await db.set(`tool_pickaxe_mine_${message.author.id}`, 0);
  await db.set(`tool_axe_chop_${message.author.id}`, 0);
  await db.set(`gold_${message.author.id}`, 0);
  } 

//Master Salesman: 3x gold from selling
if (message.content.startsWith(prefix + 'purchase Master Salesman')) {
  await db.set(`cc_${message.author.id}`, cc + 1);
    let Master_Salesman = await db.get(`Master_Salesman_${message.author.id}`);
  
let xp = await db.get(`xp_${message.author.id}`);
    // Check if the user has enough paragons to purchase the upgrade
    
    const paragons = await db.get(`paragon_${message.author.id}`)

    if (paragons < 1) {
      message.channel.send('You do not have enough paragons to purchase this upgrade.');
      return;
    }

    if (Master_Salesman == true) {
      message.channel.send('You own this already.');
      return;
    }

    // Deduct the paragons from the user's balance
    await db.set(`paragon_${message.author.id}`, paragons - 1);
await db.set(`xp_${message.author.id}`, xp - 10000);
 
    // Enable the Galactic Discount Card upgrade for the user
    await db.set(`Master_Salesman_${message.author.id}`, true);

    message.channel.send('You have successfully purchased the  Master Salesman upgrade.');
    await db.set(`stone_${message.author.id}`, 0);
      await db.set(`wood_${message.author.id}`, 0);
  await db.set(`tool_pickaxe_mine_${message.author.id}`, 0);
  await db.set(`tool_axe_chop_${message.author.id}`, 0);
  await db.set(`gold_${message.author.id}`, 0);
  }
    


  if (message.content.toLowerCase().startsWith(prefix + 'daily')) {
    if (level >= 1) {
    const userCooldowned = await dailycd.getUser(message.author.id); // Check if user need to be cooldowned
    if(userCooldowned){
        const timeLeft = msToMinutes(userCooldowned.msLeft, false); // False for excluding '0' characters for each number < 10
        message.reply(`You need to wait ${ timeLeft.hours + ' hours, ' + timeLeft.minutes + ' minutes, ' + timeLeft.seconds + ' seconds'} before running command again!`);
    }else{
        message.reply(`Heres some cool stuff for claiming today!
        You got 250 gold and also 50 xp`)
        db.set(`gold_{$message.author.id}`, gold + 250)
        db.set(`xp_{$message.author.id}`, xp + 50)
        db.set(`cc_{$message.author.id}`, cc + 1)
        await dailycd.addUser(message.author.id); // Cooldown user again
     }
    } else {mesage.reply(`You need to be at least level 1 to run this command!`)}
  }

  if (message.content.toLowerCase().startsWith(prefix + 'weekly')) {
    if (level >= 1) {
    const userCooldowned = await weeklycd.getUser(message.author.id); // Check if user need to be cooldowned
    if(userCooldowned){
        const timeLeft = msToMinutes(userCooldowned.msLeft, false); // False for excluding '0' characters for each number < 10
        message.reply(`You need to wait ${ timeLeft.hours + ' hours, ' + timeLeft.minutes + ' minutes, ' + timeLeft.seconds + ' seconds'} before running command again!`);
    }else{
        message.reply(`Heres some cool stuff for claiming this week!
        You got 2500 gold and also 500 xp`)
        db.set(`cc_{$message.author.id}`, cc + 1)
        db.set(`gold_{$message.author.id}`, gold + 2500)
        db.set(`xp_{$message.author.id}`, xp + 500)
        await weeklycd.addUser(message.author.id); // Cooldown user again
     }
    } else {mesage.reply(`You need to be at least level 1 to run this command!`)}
  }
  


  
  //god
  if (message.content.startsWith(prefix + 'god')) {
    await db.set(`stone_${message.author.id}`, 9999999999);
      await db.set(`wood_${message.author.id}`, 9999999999);
  await db.set(`tool_pickaxe_mine_${message.author.id}`, 9999999999);
  await db.set(`tool_axe_chop_${message.author.id}`, 9999999999);
    await db.set(`xp_${message.author.id}`, 10000000000);
  await db.set(`gold_${message.author.id}`, 10000000000);
     await db.set(`handles_${message.author.id}`, 999);
     await db.set(`coal_${message.author.id}`, 999);
    await db.set(`refinedstone_${message.author.id}`, 999);
    await db.set(`stick_${message.author.id}`, 999);
  await db.set(`paragon_${message.author.id}`, 20);}
  //reset
  if (message.content.startsWith(prefix + 'reset')) {
   
 await db.set(`handles_${message.author.id}`, 0);
    
    await db.set(`stone_${message.author.id}`, 0);
      await db.set(`wood_${message.author.id}`, 0);
  await db.set(`tool_pickaxe_mine_${message.author.id}`, 0);
  await db.set(`tool_axe_chop_${message.author.id}`, 0);
  await db.set(`gold_${message.author.id}`, 0);
    await db.set(`xp_${message.author.id}`, 0);
    await db.set(`paragon_${message.author.id}`, 0);
await db.set(`handles_${message.author.id}`, 0);
await db.set(`coal_${message.author.id}`, 0);
await db.set(`refinedstone_${message.author.id}`, 0);
await db.set(`stick_${message.author.id}`, 0);
  await db.set(`EnergyDrink_${message.author.id}`, false);
await db.set(`Master_Salesman_${message.author.id}`, false);}
db.set(`played_${message.author.id}`, false);

if (message.content.startsWith(prefix + 'paragontest')) {
 
await db.set(`paragon_${message.author.id}`, 10);
await db.set(`Master_Salesman_${message.author.id}`, true);
await db.set(`EnergyDrink_${message.author.id}`, true);
}







})
//end



//Keep At Bottom
client.login(process.env.token)