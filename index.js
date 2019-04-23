const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTY4Nzk4MTMzNTcyNTk5ODI4.XLnUlw.1CtMtb00YXioXUd_bctkO4uZAOU';

const PREFIX = '#';

var version = '1.0.0'
var maker = 'Dennis / DerryPoep81'
var builders = ['@happysannygaming1#5939 ',' @TYQ10#7718 ',' @Viktor#0393 ']
var normaal = 'Normaal'
var cohost = 'Komt binnenkort!'
var tijd = 'Komt binnenkort!'
var server = 'https://www.roblox.com/games/2991980666/Gelderland-V2-0'
var opmerkingen = 'Komt binnenkort!'
var politie = 'Politie'
var ambulance = 'Ambulance'
var brandweer = 'Brandweer'



bot.on('ready', () =>{
    console.log('De bot is online!');
})


bot.on('message', message=>{

   

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'game':
            message.channel.sendMessage('https://www.roblox.com/games/2991980666/Gelderland-V2-0')
            break;
        case 'builder':
            if(args[1] === 'info') {
                message.channel.sendMessage('Builders: @happysannygaming1#5939 , @TYQ10#7718 , @Viktor#0393')
            }else{
                message.channel.sendMessage('Dit commando is niet geldig!')
            }
            break;
        case 'training':
            
            const embed = new Discord.RichEmbed()
            .setTitle('Training!')
            .addField('Unit:', args[1], true)
            .addField('Type', args[2], true)
            .addBlankField()
            .addField('Host', '@' + message.author.username, true)
            .addField('Co-Host', args[3], true)
            .addBlankField()
            .addField('Tijd', args[4], true)
            .addBlankField()
            .addField('Server', server, true)
            .addBlankField()
            .addField('Opmerking(en)', '@here ' + args.slice(5).join(" "), true)
            .addBlankField()
            .setThumbnail(message.author.avatarURL)
            .setFooter('Versie 1.0.0 | Systeem gemaakt door: @DerryPoep81')
            .setColor(0xff5733)
            message.channel.sendEmbed(embed);
            break;

        case 'warn':
            const wsw = new Discord.RichEmbed()
            .setTitle('Officiele waarshuwing!')
            .addField('Waarshuwing gemaakt door: ', '@' + message.author.username)
            .addBlankField()
            .addField('De Waarschuwing is voor: ', args[1])
            .addBlankField()
            .addField('Reden voor de waarschuwing: ', args.slice(2).join(" "))
            .addBlankField()
            .setFooter('Waarschuwings systeem | Systeem gemaakt door: @DerryPoep81')
            .setColor(0xff5733)
            message.channel.sendEmbed(wsw);
            break;

        case 'info':
            const www = new Discord.RichEmbed()
            .setTitle('Discord en Roblox informatie!')
            .addBlankField()
            .addField('Discord informatie:', 'Voor de regels moet je naar #regels gaan @' + message.author.username + '. Voor de rest is dit een leuke en gezellig server waar je met elkaar kunt praten over de Roblox game. Je kunt ook updates in de gaten houden in deze server over de Roblox game.', true)
            .addBlankField()
            .addField('Roblox informatie', 'In de Roblox game kun je roleplayen. Dat houd in dat je kunt doen net zoals in het echt maar dan in een spel. Je kunt vershillende rollen spelen zoals: Politie, Ambulance, Burger etc. Het is altijd leuk en we proberen het zo veel mogelijk realistisch te houden.',true)
            .addBlankField()
            .addField('Informatie opgevraagd door: ', '@' + message.author.username, true)
            .addBlankField()
            .addField('Informatie beschrijving gemaakt door: ', "@DerryPoep81", true)
            .addBlankField()
            .setThumbnail(message.author.avatarURL)
            .setFooter('Info systeem | Systeem gemaakt door: @DerryPoep81')
            .setColor(0xff5733)
            message.channel.sendEmbed(www);
            break;

        case 'mddl':
            const rrr = new Discord.RichEmbed()
            .setTitle("Mededeling!")
            .addBlankField()
            .addField('Voor wie is de mededeling?', args[1])
            .addBlankField()
            .addField('Mededeling:', args.slice(2).join(" "))
            .addBlankField()
            .setFooter('Mededelingen systeem | Systeem gemaakt door: @DerryPoep81')
            .setColor(0xff5743)
            message.channel.sendEmbed(rrr);
            break;

        case 'absent':
            const eee = new Discord.RichEmbed()
            .setTitle("Absentie")
            .addBlankField()
            .addField('Wie is er absent: ', args[1])
            .addBlankField()
            .addField("Is de absentie goed gekeurd?", args[2])
            .addBlankField()
            .addField('Waneer is de absentie en wat is de reden voor de absentie:', args.slice(3).join(" "))
            .addBlankField()
            .setFooter('Abesntie systeem | Systeem gemaakt door: @DerryPoep81')
            .setColor(0xff5743)
            message.channel.sendEmbed(eee);
            break;
        case 'remove-last-warn':
            const ttt = new Discord.RichEmbed()
            .addField(message.author.username + " Heeft de laatste warn weggehaald van:", args[1])
            .addBlankField()
            .addField("Sorry voor het misverstand. Dit gebeurd bijna nooit. We zullen " + message.author.username + " er op aanspreken.", "/|")
            .addBlankField()
            .setFooter("remove-warn-systeem | Systeem gemaakt door: @DerryPoep81")
            .setColor(0xff5743)
            message.channel.sendEmbed(ttt);
            break;

        case 'login':
            message.channel.sendMessage(message.author.username + ' is now logging in in' + args[1] + "'s account.")
            break;

        case 'me':
            
            var icon = message.guild.iconURL;
            var serverEmbed = new Discord.RichEmbed()
                .setDescription("sever info")
                .setColor("#29e53f")
                .setThumbnail(icon)
                .addField("Bot naam", bot.user.username)
                .addField("Je bent gejoind op", message.member.joinedAt)
                .addField("Totaal members", message.guild.memberCount)
                message.channel.sendEmbed(serverEmbed);
            break;

        case 'ticket':
            const categoryId = "569957953256554535";
            var userName = message.author.username;
            var userDiscriminator = message.author.discriminator;
            var bool = false

            message.guild.channels.forEach((channel) => {
                if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
                    message.channel.send("Je hebt al een ticket aangemaakt");
                    bool = true;
                    }
            })
            if (bool == true) return;

            var embedCreateTicket = new Discord.RichEmbed()
                .setTitle("Goedendag, " + message.author.username)
                .setFooter("Uw ticket kanaal wordt aangemaakt!");
                message.channel.send(embedCreateTicket);
                message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
                    createdChan.setParent(categoryId).then((settedParent) => {
                        settedParent.overwritePermissions(message.guild.roles.find('name', '@everyone'), {"READ_MESSAGES":false});
                        settedParent.overwritePermissions(message.author, {
                            "READ_MESSAGES": true, "SEND_MESSAGES": true,
                            "ATTACH_FILES": true, "CONNECT": true,
                            "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                        });
                        var embedParent = new Discord.RichEmbed()
                            .setTitle("Goedendag, " + message.author.username.toString())
                            .setDescription("Hier kunt u uw vraag/opmerking plaatsen als de ticket door iemand geclaimed is.");
                        settedParent.send(embedParent);
                    }).catch(err => {
                        message.channel.send("Er is iets fout gegaan!");
                    });
                })
            break;

        case 'close':
            const categoryID = "569957953256554535";
                if(message.channel.parentID == categoryID) {
                    message.channel.delete();
                } else {
                    message.channel.send("Gelieve dit commando in een ticket kanaal te gebruiken.");
                }
            var embedCloseTicket = new Discord.RichEmbed()
                .setTitle("Goedendag, " + message.author.username.toString())
                .setDescription("Uw ticket wordt gemarkeert als **compleet**. Wil je een nieuwe ticket aanmaken doe dan #ticket")
                .setFooter("Ticket gesloten!")
            var logChannel = message.guild.channels.find("name","algemeen");
            logChannel.send(embedCloseTicket);

        case 'claim':
            const categoryid = "569957953256554535";
                if(message.channel.parentID == categoryid) {
                    var embedClaim = new Discord.RichEmbed()
                        .setTitle("Goedendag!")
                        .addField("Uw ticket is geclaimed door:", message.author.username)
                        .addBlankField()
                        .setDescription(message.author.username + " zegt: Goedendag, wat is uw vraag en/of opmerking? Waarmee kan ik u helpen?")
                        .setFooter("Ticket geclaimed!")
                    message.channel.send(embedClaim)
                } else {
                    message.channel.send("Gelieve dit commando niet te gebruiken.");
                }
    }   
})

bot.login(token);

