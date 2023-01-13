//online


const app = require("express")()
app.get(`/`, (req, res) => {
  res.send("I AM THE TERMINATOR")
})

app.listen(3000, () => {
})
const Database = require("@replit/database");
const db = new Database()
const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require(`ms`)
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
const handlecube = "<:handle_r:1063246952990523493>"


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
  handle: 5,
};


console.log(`Prefix is ${prefix}`)




//stats
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity('Become a legend in the world of Swords and Shields!', { type: 'PLAYING' })
})
client.on("debug", (e) => console.log(e));








//Message Event
client.on("message", async message => {



let cc = await db.get(`cc_${message.author.id}`);
    if (cc === null) cc = 0

if(message.content.toLowerCase().startsWith(prefix + "purge")){ 
  let arg = message.content.split(" ") 
  let clear = arg[1]; 
                                      if(isNaN(clear)){ return message.channel.send("```Please put a valid number to clear messages.```") }
                                      if(clear > 100){ return message.channel.send("``I can't clear more than 100 messages.``")} 
                                      if(clear < 1){ return message.channel.send("```You cannot Cclear less than 1 message.```") }

if (!message.member.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("```You lack the permissions to do this.```") }

if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) { return message.channel.send("```I do not have permission to do this. please update my role!```") }
db.set(`cc_${message.author.id}`, cc + 1);                                      message.channel.bulkDelete(clear)}


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
  !chop: chops some trees`, false)
  
  .addField(`SHOP SHIT`,
  `!ljshop: lumberjack shop
  !mshop: miner shop
  !inventory: shows your inventory
  !inv: inventory alias`, false)
  
  message.channel.send(embed)
}

//craft
if (message.content.toLowerCase().startsWith(prefix + "craft")) {
  await db.set(`cc_${message.author.id}`, cc + 1);
    let wood = await db.get(`wood_${message.author.id}`);
    if (wood === null) wood = 0
   
    let gold = await db.get(`gold_${message.author.id}`);
    if (gold === null) gold = 0
  let Ihandles = await db.get(`handles_${message.author.id}`);
  if(Ihandles == null) db.set(`handles_${message.author.id}`, 0);
  let stick = await
  db.get(`stick_${message.author.id}`);
  if(stick == null) db.set(`stick_${message.author.id}`, 0);
    if (gold === null) gold = 0
  let Ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
  let args = message.content.substring(prefix.length).split(" ")
  let item = args[1];
  
  let amount = parseInt(args[2]);
  if (item != "stick" &&  item != "wooden_pickaxe" && item != "stick") return message.channel.send(`You tried to craft.. oh wait, you didn't. BECAUSE YOU CANT MAKE WHATEVER A ${item} IS`) 
   if(amount < 1) return message.channel.send("Please enter a valid number")
  if (isNaN(amount)) {
      return message.channel.send(`Please enter a valid number.`);}
  if (item === "stick") {
    if(wood < 2 * amount) return message.channel.send("You dont have enough wood")
     await db.set(`sticks_${message.author.id}`, Ihandles + amount);
    message.channel.send(`You crafted ${amount} sticks`)
  }
 if(item === "wooden_pickaxe"){
   if(stick < 1 * amount) return message.channel.send("You dont have a stick go make one with !craft stick")
   if(wood < 10 * amount) return message.channel.send("You dont have enough wood go chop some trees nerd")
   await db.set(`tool_pickaxe_mine_${message.author.id}`, Ptool + amount);
    message.channel.send(`You crafted ${amount} ${woodenpickaxecube}`) 
 }
  if(item === "stone_pickaxe"){
   if(Ihandles < 1 * amount) return message.channel.send("You dont have a handle go make one with !craft handle.. what, you think you can hold a chunk of stone on a stick? no. you need b i g  s t i c k.")
   if(stone < 30 * amount) return message.channel.send("You dont have enough stone go mine some rocks nerd")
   await db.set(`tool_pickaxe_mine_${message.author.id}`, Ptool + (amount * 6));
    message.channel.send(`You crafted ${amount} ${stonepickaxecube}`) 
  }
  
}



  
  //inventory
  if (message.content.toLowerCase().startsWith(prefix + "inv") || message.content.toLowerCase().startsWith(prefix + "inventory")) {
await db.set(`cc_${message.author.id}`, cc + 1);
    let wood = await db.get(`wood_${message.author.id}`);
    if (wood === null) wood = 0
    let stone = await db.get(`stone_${message.author.id}`);
    if (stone === null) stone = 0
    let gold = await db.get(`gold_${message.author.id}`);
    if (gold === null) gold = 0
    let handles = await db.get(`handles_${message.author.id}`);
  if(handles == null) handles = 0
    let ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
    if (ptool == null) await db.set(`tool_pickaxe_mine_${message.author.id}`, 0);
    let atool = await db.get(`tool_axe_chop_${message.author.id}`);
    if (atool == null) await db.set(`tool_axe_chop_${message.author.id}`, 0);


    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s Inventory`)
      .setColor("green")
      .setDescription(`${woodcube}: ${wood} \n ${stonecube}: ${stone} \n ${goldcube}: ${gold} \n ${handlecube}: ${handles} \n **TOOL POWER** \n ${steelpickaxecube}: ${ptool} \n ${steelaxecube}: ${atool} `)
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
    let tool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
    let stone = await db.get(`stone_${message.author.id}`);
    let xp = await db.get(`xp_${message.author.id}`);
    if (stone === null) stone = 0
    if (tool === null) tool = 0
    if (xp === null) xp = 0
    if (tool === 0) return message.channel.send("You need a pickaxe to do that")

    let timeout = 90000;
    let z1 = x * (tool + 1)
    let z2 = y * (tool + 1)
    //lol | there | lol
  if (EnergyDrink === true) timeout = timeout/2;




    let minecheck = await db.get(`minecheck_${message.author.id}`)
    let timeLeft = ms(timeout - (Date.now() - minecheck))
    if (minecheck !== null && timeout - (Date.now() - minecheck) > 0) return message.channel.send(`Please wait ${timeLeft} to use this command again!`)


    let embed = new Discord.MessageEmbed()
      .setColor("green")
      .setDescription(`POW! You got ${z1}! ${stonecube} and ${z2} ${xpcube}`)
      .setTimestamp()
    message.channel.send(embed
    )
    await db.set(`minecheck_${message.author.id}`, Date.now())
    await db.set(`messagecheck_${message.author.id}`, Date.now())
    //updates wood
    db.set(`stone_${message.author.id}`, stone + z1)
    //updates xp
    db.set(`xp_${message.author.id}`, xp + z2)
  }

  //chop
  if (message.content.toLowerCase().startsWith(prefix + "chop")) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("CHOP")
    let EnergyDrink = await db.get(`EnergyDrink_${message.author.id}`);
    
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    
    let tool = await db.get(`tool_axe_chop_${message.author.id}`);
    let wood = await db.get(`wood_${message.author.id}`);
    let xp = await db.get(`xp_${message.author.id}`);
    if (wood === null) wood = 0
    if (tool === null) tool = 0
    if (xp === null) xp = 0
   
    let timeout = 90000;
    let z1 = x * (tool + 1)
    let z2 = y * (tool + 1)
if (EnergyDrink === true) timeout = timeout/2;



    let chopcheck = await db.get(`chopcheck_${message.author.id}`)
    let timeLeft = ms(timeout - (Date.now() - chopcheck))
    if (chopcheck !== null && timeout - (Date.now() - chopcheck) > 0) return message.channel.send(`Please wait ${timeLeft} to use this command again!`)


    let embed = new Discord.MessageEmbed()
      .setColor("green")
      .setDescription(`TIMBER! You got ${z1}! ${woodcube} and ${z2} ${xpcube}`)
      .setTimestamp()
    message.channel.send(embed
    )
    await db.set(`chopcheck_${message.author.id}`, Date.now())
    await db.set(`messagecheck_${message.author.id}`, Date.now())
    //updates wood
    db.set(`wood_${message.author.id}`, wood + z1)
    //updates xp
    db.set(`xp_${message.author.id}`, xp + z2)
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
    
    let args = message.content.substring(prefix.length).split(" ")
   const Master_Salesman = await db.get(`Master_Salesman_${message.author.id}`);
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
        const price = marketPrices[resource] * amount;
     
        if (Master_Salesman === true)  price === price * 3;
        message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
        await db.set(`gold_${message.author.id}`, gold + price)
        await db.set(`wood_${message.author.id}`, woodA - amount)
      } else (message.channel.send(`You do not have enough ${resource}.`))
    } else {
      if (resource == "stone") {
        if (stoneA >= amount) {
          const price = marketPrices[resource] * amount;
        if (Master_Salesman === true)  price === price * 3;
          message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
          await db.set(`gold_${message.author.id}`, gold + price)
          await db.set(`stone_${message.author.id}`, stoneA - amount)

        } else { message.channel.send(`You do not have enough ${resource}.`)  }
      }else {
      if (resource == "handle") {
        if (handleA >= amount) {
          const price = marketPrices[resource] * amount;
        if (Master_Salesman === true)  price === price * 3;
          message.channel.send(`You sold ${amount} ${resource} for ${price} gold ${goldcube}.`);
          await db.set(`gold_${message.author.id}`, gold + price)
          await db.set(`handles_${message.author.id}`, handleA - amount)

        } else { message.channel.send(`You do not have enough ${resource}.`)  }
      }
      }
      }
    }
  


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
      message.channel.send('Please provide a name and class for your character. For example: `!createchar Bob Warrior`');
      return;
    }
    const name = args[0];
    const Class = args[2];

    // Create the character object and store it in the database
    const newChar = { name, Class };
    await db.set(`char_${message.author.id}`, newChar);

    // Send a message to the user confirming that the character was created
    message.channel.send(`Your character "${name}" has been created! Use "!char" to view your character.`);
  }


  //char
  if (message.content.toLowerCase().startsWith(prefix + 'char')) {
    await db.set(`cc_${message.author.id}`, cc + 1);
    console.log("CHAR")
    // Get the user's character from the database
    const character = await db.get(`char_${message.author.id}`);
    if (!character) {
      message.channel.send('You do not have a character. Use `!createchar` to create a character.');
      return;
    }

    let xp = await db.get(`xp_${message.author.id}`);
    let paragon = await db.get(`paragon_${message.author.id}`);
    
    

   if (xp === null) xp = 0
    if (xp === null || 0) await db.set(`level_${message.author.id}`, 0)
    if (xp <= 100) await db.set(`level_${message.author.id}`, 0)

    
    
    if (xp >= 100) await db.set(`level_${message.author.id}`, 1)
    if (xp >= 300) await db.set(`level_${message.author.id}`, 2)
    if (xp >= 500) await db.set(`level_${message.author.id}`, 3)
    if (xp >= 1000) await db.set(`level_${message.author.id}`, 4)
    if (xp >= 2500) await db.set(`level_${message.author.id}`, 5)
    if (xp >= 4000) await db.set(`level_${message.author.id}`, 6)
    if (xp >= 6000) await db.set(`level_${message.author.id}`, 7)
    if (xp >= 7000) await db.set(`level_${message.author.id}`, 8)
    if (xp >= 9000) await db.set(`level_${message.author.id}`, 9)
    if (xp >= 10000) await db.set(`level_${message.author.id}`, 10)
    if (xp >= 15000) await db.set(`level_${message.author.id}`, 11)
    if (xp >= 20000) await db.set(`level_${message.author.id}`, 12)
    if (xp >= 30000) await db.set(`level_${message.author.id}`, 13)
    if (xp >= 40000) await db.set(`level_${message.author.id}`, 14)
    if (xp >= 50000) await db.set(`level_${message.author.id}`, 15)
    if (xp >= 65000) await db.set(`level_${message.author.id}`, 16)
    if (xp >= 80000) await db.set(`level_${message.author.id}`, 17)
    if (xp >= 100000) await db.set(`level_${message.author.id}`, 18)
    if (xp >= 150000) await db.set(`level_${message.author.id}`, 19)
    if (xp >= 200000) await db.set(`level_${message.author.id}`, 20)
    if (xp >= 250000) await db.set(`level_${message.author.id}`, Math.floor(20 + (xp-200000)/50000))

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
    
let level = await db.get(`level_${message.author.id}`);
      if (level === null) level = 0
let pfp = await db.get(`pfp_${message.author.id}`);
    if (pfp === null || 0) await db.set(`pfp_${message.author.id}`,`https://th.bing.com/th/id/OIP.gAEpFxnL34NphkfRucK-WQHaHj?w=212&h=215&c=7&r=0&o=5&pid=1.7`)

    let gold = await db.get(`gold_${message.author.id}`);
  
    let ptool = await db.get(`tool_pickaxe_mine_${message.author.id}`);
    if (ptool === null) await db.set(`tool_pickaxe_mine_${message.author.id}`, 0)
    let atool = await db.get(`tool_axe_chop_${message.author.id}`);
    if (atool === null) await db.set(`tool_axe_chop_${message.author.id}`, 0)
    if (paragon === null) paragon = 0
    if (gold === null) gold = 0
    if (paragon == 0) {
      // Create an embed message with the character information
      const embed = new Discord.MessageEmbed()
        .setTitle(`${character.name} | lv ${level} | ${xp} xp`)
        .addField(`**GOLD** ${goldcube}`, gold, true)
        .addField(`**PICKAXE POWER** ${steelpickaxecube}`, ptool, true)
        .addField(`**AXE POWER** ${steelaxecube}`, atool, true)
        .addField(`**TOTAL COMMANDS** ${chesscube}`, cc, true)
        .addField(`:x: LOCKED :x:`, "unlock at level 10", true)
        .setThumbnail(pfp)
        .setColor('green');

      // Send the embed message to the channel
      message.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${character.name} PARAGON ${paragon} | lv ${level} | ${xp} xp`)
         .addField(`**GOLD** ${goldcube}`, gold, true)
        .addField(`**PICKAXE POWER** ${steelpickaxecube}`, ptool, true)
        .addField(`**AXE POWER** ${steelaxecube}`, atool, true)
        .addField(`**TOTAL COMMANDS** ${chesscube}`, cc, true)
        .setThumbnail(pfp)
        .setColor('green');

      // Send the embed message to the channel
      message.channel.send(embed)

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
    const price = minershop[itemName];

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
    const price = LJshop[itemName];

   
     

    
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







  
  //god
  if (message.content.startsWith(prefix + 'god')) {
    await db.set(`stone_${message.author.id}`, 9999999999);
      await db.set(`wood_${message.author.id}`, 9999999999);
  await db.set(`tool_pickaxe_mine_${message.author.id}`, 9999999999);
  await db.set(`tool_axe_chop_${message.author.id}`, 9999999999);
    await db.set(`xp_${message.author.id}`, 9999999999);
  await db.set(`gold_${message.author.id}`, 9999999999);
     await db.set(`handles_${message.author.id}`, 9999999999);
  await db.set(`paragon_${message.author.id}`, 10);}
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
  await db.set(`EnergyDrink_${message.author.id}`, false);
await db.set(`Master_Salesman_${message.author.id}`, false);}

if (message.content.startsWith(prefix + 'paragontest')) {
 
await db.set(`paragon_${message.author.id}`, 10);
await db.set(`Master_Salesman_${message.author.id}`, true);
await db.set(`EnergyDrink_${message.author.id}`, true);
}






  
})
//end



//Keep At Bottom
client.login(process.env.token)