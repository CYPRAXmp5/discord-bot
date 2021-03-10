const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const Client = new Discord.Client;

const prefix = "++";

Client.on("ready", () => {
    console.log("bot opérationnel ma Gueule!");
}); 


//=======================================================================

//arrivées et départs


//arrivées
Client.on("guildMemberAdd", member => {
    console.log("Un membre est arrivé !");
    member.guild.channels.cache.find(channel => channel.id === "817923010156560425").send(member.displayName + " Bienvenue sur le serveur ! ;)");
    member.roles.add("780487642034077706");
});

//départs
Client.on("guildMemberRemove", member => {
    console.log("Un membre nous à quitté...");
    member.guild.channels.cache.find(channel => channel.id === "817923010156560425").send(member.displayName + " Hou No tu es partie ma gueule ?")
});


//=======================================================================

//commandes pour joueurs


//variables ADMINISTRATEUR
Client.on("message", message => {
    if(message.author.bot) return;{}
    if(message.channel.type == "dm") return;{}
    if(message.member.hasPermission("S T A F F")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("Aucun membre n'a été séléctionné.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName +  " a été banni avec succès ! ");
                }
                else {
                    message.reply("Impossible de bannir ce membre...");
                }
            }
        }
    }
});


    //ACTIF CANDIDATURE

        //++seon
Client.on("message", message => {
    if(message.author.bot) return;{}
    if(message.channel.type == "dm") return;{}

    if(message.content == prefix + "seon"){
        message.channel.send("SEANCE D'ENTRETIENT OUVERT");
    }
});

    Client.on("message", message => {
        if(message.author.bot) return;{}
        if(message.channel.type == "dm") return;{}
    
        //++seoff
        if(message.content == prefix + "seoff"){
            message.channel.send("SEANCE D'ENTRETIENT FERMER");
        }
    });

    //?me

        Client.on("message", message => {
            if(message.author.bot) return;{}
            if(message.channel.type == "dm") return;{}
        
    if(message.content == prefix + "me"){
        message.channel.send("`" + message.author.username + " Tes informations sont les suivantes => " + "ID :` " + message.author.id);
    };
});

    
    //RESEAUX COMMANDE

            //?tiktok

    Client.on("message", message => {
        if(message.author.bot) return;{}
        if(message.channel.type == "dm") return;{}

    if(message.content == prefix + "tiktok"){
        message.channel.send("Follow nous sur TikTok*! https://www.tiktok.com/@.ssadtok?");
    };
});

        //++ipmc
        Client.on("message", message => {
            if(message.author.bot) return;{}
            if(message.channel.type == "dm") return;{}

        if(message.content == prefix + "ipmc"){
            message.channel.send("**L'IP serveur MC :**   __SADTOK.aternos.me__");
        }
    });


//=======================================================================

//BOT MUSIC

    //commande

    Client.on("message", message => {
        if(message.content.startsWith(prefix + "play")){
        }
            elseif(message.content.startsWith(prefix +"p")){
            }
            if(message.member.voice.channel){
                message.member.voice.channel.join().then(connection => {
                    let args = message.content.split(" ");

                    if(!args[1]){
                        message.reply("lien de la vidéo nom ou mal mentionné.");
                        connection.disconnect();
                    }
                    else {
                    let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                    dispatcher.on("Ta sic c'est fini ma gueule!", () => {
                        dispatcher.destroy();
                        connection.disconnect();
                    });
                    
                    dispatcher.on("error", err => {
                        console.log("erreur de dispatcher : " + err);
                    });

                }).catch(err => {
                    message.reply("Erreur lors de la connexion : " + err);
                });
            }
            else {
                message.reply("Tu n'es pas connecté en vocal, bande de chakal.");
            }
    }
    });

//AVENIR ==============================================================================


Client.login(process.env.TOKEN);