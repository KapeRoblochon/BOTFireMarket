const Discord = require("discord.js");

const client = new Discord.Client;

client.login(process.env.TOKEN);

const prefix = '/'

client.on("ready", function (){
    console.log('Bot ready')
    client.user.setActivity('acheter sur le FireMarket', { type: "PLAYING" })
})

const parentabc = '803693968436101160'

const embedfaction = new Discord.MessageEmbed()
.setDescription('Discord de la **FireStorm** : \n\n https://discord.gg/GUC5Xz2mMS')
.setColor('#dfe6e9')

const helpfactionembed = new Discord.MessageEmbed()
    .setColor('#dff9fb')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setTitle(`__Help ${prefix}faction__`)
    .setFooter('FireMarket')
    .setDescription(`le \`${prefix}faction\` permet d'afficher le lien d'invitation pour la **FireStorm** en message privé\n \n c'est la faction officielle des créateurs du __FireMarket__ `)

const candidatureembed = new Discord.MessageEmbed()
    .setDescription('Formulaire de recrutement pour devenir vendeur du **FireMarket** : \n\n https://forms.gle/kx87QuV9i3z7w7QQ7')
    .setColor('#dfe6e9')

const helpcandidature = new Discord.MessageEmbed()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setColor('#dff9fb')
    .setTimestamp()
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}candidature__`)
    .setDescription(`le \`${prefix}candidature\` permet d'afficher le lien de recrutement pour devenir vendeur\ndu **FireMarket** en message privé` )

const helpembeddirection = new Discord.MessageEmbed()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setColor('#dff9fB')
    .setTimestamp()
    .setFooter('FireMarket')
    .setTitle(`__FireMarket help__`)
    .setDescription(`Pour accéder au help des Membres faites : \`${prefix}help membre\`\n\nPour accéder au help des Vendeurs et Admins faites : \`${prefix}help vendeur\`\n\nPour accéder au help des fonctionnalitées : \`${prefix}help fonctionnalitée\``)

const embedhelpadmin = new Discord.MessageEmbed()
    .setColor("#dff9fb")
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setTitle("__FireMarket help pour les ADMINS et VENDEURS__")
    .setFooter('FireMarket')
    .setDescription(`Liste des commandes : \n \u200B \n\`${prefix}createroom\` \`${prefix}renameroom\` \`${prefix}closeroom\` \`${prefix}enchere\` \`${prefix}vente flash\` \`${prefix}embed\` \`${prefix}say\`\n\n\`${prefix}roomsay\` \`${prefix}mp\` \n \u200B \n \u200B \n __Pour toute information__ \n \u200B \n faites \`${prefix}help\` + \`nom de votre commande\` `)

const embedhelpmembre = new Discord.MessageEmbed()
    .setColor("#dff9fb")
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setTitle("__FireMarket help pour les Membres__")
    .setFooter('FireMarket')
    .setDescription(`Liste des commandes : \n \u200B \n  \`${prefix}faction\` \`${prefix}candidature\` \`${prefix}avis\` \`${prefix}pixel\` \`${prefix}info\` \`${prefix}patchnote\`\n \u200B \n \u200B \n __Pour toute information__ \n \u200B \n faites \`${prefix}help\` + \`nom de votre commande\` `)

const embedhelpfonctio = new Discord.MessageEmbed()
    .setColor("#dff9fb")
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setTitle("__FireMarket help pour les fonctionnalitées__")
    .setFooter('FireMarket')
    .setDescription(`Liste des fonctionnalitées : \n \u200B \n\`Anti lien sauf gif\`\n \u200B \n \u200B \n __Pour toute information__ \n \u200B \n faites \`${prefix}help\` + \`nom de la fonctionnalitée\` `)

const helpantilien = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help Anti lien sauf gif__`)
    .setDescription(`La fonctionnalitée \`Anti lien sauf gif\` va supprimer tout les liens sauf les gifs\n\nPermission non pris en compte : *MANAGE_MESSAGES*`)


const msgenvoyer = new Discord.MessageEmbed()
    .setDescription(`Message envoyé !`)
    .setColor('GREEN')

const helpsalonrename = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}renameroom__`)
    .setDescription(`le \`${prefix}renameroom\` permet de changer le nom du salon de votre choix, exemple : \n\n\`${prefix}renameroom\` \`#general\` \`Test\` \n\nLe nom du salon General va etre changé en Test`)

const helpcloseroom = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter()
    .setTitle(`__Help ${prefix}closeroom__`)
    .setDescription(`Le \`${prefix}closeroom\` permet de fermer le salon de votre choix, exemple : \n\n\`${prefix}closeroom\` \`#general\` \n\nLe salon General va etre supprimé`)

const helpcreateroom = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}createroom__`)
    .setDescription(`Le \`${prefix}createroom\` permet de créer le salon de votre choix avec le nom que vous voulez et dans la catégorie de votre choix, exemple : \n\n\`${prefix}createroom\` \`id de la catégorie\` \`general\` \n\nLe salon General va etre crée dans la catégorie définie`)

const helpenchere = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}enchere__`)
    .setDescription(`Le \`${prefix}enchere\` permet de crée facilement un salon nomée 💰enchères`)

const helpventeflash = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}vente flash__`)
    .setDescription(`Le \`${prefix}vente flash\` permet de crée facilement un salon nomée 💰💨vente flash`)

const helpsay = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}say__`)
    .setDescription(`Le \`${prefix}say\` permet d'envoyer un message a partir du bot, exemple : \n\n\`${prefix}say\` \`salut\`\n\nLe message d'origine va alors etre supprimé et remplacé par le message du bot qui va donc dire "salut"`)

const helpsayembed = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}embed__`)
    .setDescription(`Le \`${prefix}embed\` permet d'envoyer un message a partir du bot en embed et avec la couleur de votre choix, exemple: \n\n\`${prefix}embed\` \`BLUE\` \`Salut\`\n\n Le message d'origine va etre supprimé et remplacé par un embed bleu qui dit "Salut"\n\n**ATTENTION : Il faut mettre la couleur en MAJUSCULE et en ANGLAIS**\n\n`)

const helppixel = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}pixel__`)
    .setDescription(`Le \`${prefix}pixel\` permet d'envoyer en message privé les liens utile de Pixel_Craft_94 (le créateur du Market)`)

const PixelEmbed = new Discord.MessageEmbed()
    .setTitle('__Lien Pixel_Craft_94__')
    .setColor('#dff9fB')
    .addField('Twitch', '__https://www.twitch.tv/pixel_craft_94__', false)
    .addField('Youtube', '__https://www.youtube.com/channel/UCJ52tcOY3IePduX1tQ78HuQ__', false)

const helpinfo = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}credit__`)
    .setDescription(`Le \`${prefix}info\` permet d'afficher les infos du bot`)

const helproomsay = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}roomsay__`)
    .setDescription(`Le \`${prefix}roomsay\` permet d'envoyer un message a partir du bot en embed dans le salon de votre choix, exemple: \n\n\`${prefix}roomsay\` \`#labo\` \`Je suis un gentil bot\`\n\n Un message va donc etre envoyer dans le salon **#labo** avec comme message **Je suis un gentil bot**`)

const helpavis = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}avis__`)
    .setDescription(`Le \`${prefix}avis\` permet d'embellir votre avis sur la commande, exemple : \n\n\`${prefix}avis\` \`9/10\` \`Commande rapide\`\n\n et un embed comme celui là va etre envoyer\n__**Acheteur :**__ @Kape_Roblochon\n__**Note :**__ 9/10\n__**Commentaire :**__ Commande rapide`)

const helpmp = new Discord.MessageEmbed()
    .setColor('#dff9fB')
    .setTimestamp()
    .setThumbnail('https://images.emojiterra.com/google/android-10/512px/1f6e0.png')
    .setFooter('FireMarket')
    .setTitle(`__Help ${prefix}mp__`)
    .setDescription(`Le \`${prefix}mp\` permet d'envoyer un mp a uen personne precise, exemple : \n\n\`${prefix}mp\` \`@❮Administration❯ Pixel_Craft\` \`Salut ceci est un test\`\n\nEt un message du style ↓ va être envoyer à la personne mentionné\n__**Nouveau message**__ \n\n**Auteur : @❮Admin❯[Officier][FireStorm]Kape** \n\n**Message :** Salut ceci est un test`)

/*help direction */
client.on('message', message => {
    if(message.content === prefix + 'help') {
        message.channel.send(helpembeddirection)
    }
})
client.on('message', message => {
    if(message.content === prefix + 'help membre') {
        message.channel.send(embedhelpmembre)
    }
})
client.on('message', message => {
    if(message.content === prefix + 'help vendeur') {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(embedhelpadmin)
    }
})




//help *faction
client.on('message', message => {
    if(message.content === prefix + 'help faction') {
        message.channel.send(helpfactionembed)
    }
})

//*faction
client.on('message', message => {
    if(message.content === prefix + 'faction'){
        if(!message.channel.id('835197809392222232'))
        message.author.send(embedfaction)
        message.channel.send(msgenvoyer)
    
    }
})


//*candidature
client.on('message', message => {
    if(message.content === prefix + 'candidature') {
        message.author.send(candidatureembed)
        message.channel.send(msgenvoyer)
    }
})

//help *candidature
client.on('message', message => {
    if(message.content === prefix + 'help candidature') {
        message.channel.send(helpcandidature)
    }
})



//close
client.on('message', async message => {
    if(message.content.startsWith(`${prefix}closeroom`)){
        if(message.channel.type === 'dm') return;
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        let args = message.mentions.channels.first() || message.channel
        const rentrerclose = new Discord.MessageEmbed()
            .setDescription('Veuillez rentrer le nom du salon a supprimer')
            .setColor('RED')
        if(!args) return message.channel.send(rentrerclose)

        const salonclose = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`le salon ${args} a été supprimé`)

        args.delete()
        message.channel.send(salonclose)

    }
})



//help close
client.on('message', message => {
    if(message.content === prefix + 'help closeroom') {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpcloseroom)
    }
})




//rename salon

client.on('message',async message => {
    if(message.channel.type === 'dm') return;
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
    
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === '*renameroom') {
        let tochange = message.mentions.channels.first() || message.channel
        const name = args.slice(1).join(' ') || "Aucun nom donnée";

        await tochange.setName(name).then(async channel=> {
            const salonsetname = new Discord.MessageEmbed()
                .setDescription(`Nom du salon changé en **${name}** par **${message.author}**`)
                .setColor('GREEN')
            channel.send(salonsetname)
        })
    }
})

//help say embed
client.on('message', message => {
    if(message.content === prefix + 'help embed') {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpsayembed)
    }
})

//say
client.on('message', async message => {
    if(message.content.startsWith(`${prefix}say`)){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let args = message.content.slice(4)
        const nomsg = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription('Veuillez entrer un message')
        if(!args) return message.channel.send(nomsg)
        message.channel.send(args)
        message.delete()
    }

})
//say help
client.on('message', message => {
    if(message.content === prefix + 'help say') {
        message.channel.send(helpsay)
    }
})




//salon rename help
client.on('message', message => {
    if(message.content === prefix + 'help renameroom') {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpsalonrename)
    }
})


//create enchere
client.on('message', message => {
    if(message.content === prefix + 'enchere') {
        if(message.channel.type === 'dm') return;
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        const saloncree = new Discord.MessageEmbed()
            .setDescription(`Salon crée sous le nom de **💰enchères**`)
            .setColor('GREEN')
            message.channel.send(saloncree)
        const chn  = message.guild.channels.create('💰enchères').then(channel => {
            channel.setParent(parentabc)
        })
        
    }
})

//help enchere
client.on('message', message => {
    if(message.content === prefix + 'help enchere'){
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpenchere)
    }
})

//create vente flash
client.on('message', message => {
    if(message.content === prefix + 'vente flash') {
        if(message.channel.type === 'dm') return;
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        const saloncree = new Discord.MessageEmbed()
            .setDescription(`Salon crée sous le nom de **💰💨vente flash**`)
            .setColor('GREEN')
            message.channel.send(saloncree)
        const chn = message.guild.channels.create('💰💨vente flash').then(channel => {
            channel.setParent(parentabc)
        })
    }
})

//help vente flash
client.on('message', message => {
    if(message.content === prefix + 'help vente flash'){
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpventeflash)
    }
})

//pixel
client.on('message', async message => {
    if(message.content === prefix + 'pixel') {
        message.author.send(PixelEmbed)
        message.channel.send(msgenvoyer)
    }
})

//help pixel
client.on('message', message => {
    if(message.content === prefix + 'help pixel') {
        message.channel.send(helppixel)
    }
})


//say embed
client.on('message', async message => {

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    const ttelement = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Veuillez remplir tout les arguments de la commmande\nsi vous voulez de l'aide faites : \`${prefix}help\` \`embed\``)

    if(cmd === `${prefix}embed`) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let color = messageArray[1];
        const name = args.slice(1).join(' ')
        if(!name) return message.channel.send(ttelement)

        const sayyy = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(name)

        message.channel.send(sayyy)
        message.delete()
    }
})

//avis
client.on('message', async message => {

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    const ttelement = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Veuillez remplir tout les arguments de la commmande\nsi vous voulez de l'aide faites : \`${prefix}help\` \`avis\``)

    if(cmd === `${prefix}avis`) {
        let note = messageArray[1];
        const commentaire = args.slice(1).join(' ')
        if(!commentaire) return message.channel.send(ttelement)

        const avis = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`__**Acheteur :**__ ${message.author}\n__**Note :**__ ${note}\n__**Commentaire :**__ ${commentaire}`)


        message.channel.send(avis)
        message.delete()
    }
})

//help avis
client.on('message', message => {
    if(message.content === prefix + 'help avis') {
        message.channel.send(helpavis)
    }
})

//create room
client.on('message', async message => {
    let messageArray = message.content.split(' ')
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    const ttelement = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Veuillez remplir tout les arguments de la commmande\nsi vous voulez de l'aide faites : \`${prefix}help\` \`createroom\``)

    if(cmd === `${prefix}createroom`) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let catego = messageArray[1];
        const name = args.slice(1).join(' ')
        if(!name) return message.channel.send(ttelement)

        const saloncree = new Discord.MessageEmbed()
            .setDescription(`Salon crée sous le nom de **${name}**`)
            .setColor('GREEN')
        message.channel.send(saloncree)
        await message.guild.channels.create(name, {
            type : 'text'
        }).then(async channel=> {
            channel.setParent(catego)
            
        })

    }
})
        


//help createroom
client.on('message', message => {
    if(message.content === prefix + 'help createroom') {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
        message.channel.send(helpcreateroom)
    }
})

//info
client.on('message', message => {
    if(message.content === prefix + 'info') {
        const info = new Discord.MessageEmbed()
            .setColor('#dff9fB')
            .setDescription(`Bot crée par **❮Admin❯[Officier][FireStorm]Kape** \n\nPrefix = **${prefix}**\n\nVersion : **2.0**\n\n`)
        message.channel.send(info)
    }
})

//help info
client.on('message', message => {
    if(message.content === prefix + 'help info') {
        message.channel.send(helpinfo)
    }
})


//roomsay
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let messageArray = message.content.split(' ')
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    const ttelement = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Veuillez remplir tout les arguments de la commmande\nsi vous voulez de l'aide faites : \`${prefix}help\` \`roomsay\``)

    if(cmd === `${prefix}roomsay`) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let salon = message.mentions.channels.first() || message.channel
        const texte = args.slice(1).join(' ')
        if(!texte) return message.channel.send(ttelement)

        const roomsayembed = new Discord.MessageEmbed()
            .setDescription(texte)

        salon.send(roomsayembed)
        message.channel.send(msgenvoyer)
    }
})

//mp 
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let messageArray = message.content.split(' ')
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    const ttelement = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Veuillez remplir tout les arguments de la commmande\nsi vous voulez de l'aide faites : \`${prefix}help\` \`mp\``)

    if(cmd === `${prefix}mp`) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let user = message.mentions.members.first()
        const texte = args.slice(1).join(' ')
        if(!texte) return message.channel.send(ttelement)

        const mpmsg = new Discord.MessageEmbed()
            .setColor('#dff9fB')
            .setDescription(`__**Nouveau message**__ \n\n**Auteur :** ${message.author}\n\n**Message :** ${texte}`)
            .setTimestamp()

        message.channel.send(msgenvoyer)
        user.send(mpmsg)
    }

})

//help mp
client.on('message', message => {
    if(message.content === prefix + 'help mp') {
        message.channel.send(helpmp)
    }
})

//help roomsay
client.on('message', message => {
    if(message.content === prefix + 'help roomsay'){
        message.channel.send(helproomsay)
    }
})


client.on('message', message => {
    if(message.content === prefix + 'help fonctionnalitée') {
        message.channel.send(embedhelpfonctio)
    }
})

client.on('message', message => {
    if(message.content === prefix + 'help anti lien sauf gif') {
        message.channel.send(helpantilien)
    }
})


client.on('message', message => {
    if(message.content === prefix + 'patchnote'){
        const patchnote = new Discord.MessageEmbed()
            .setColor('#dff9fB')
            .setDescription(`\`Patch Note du 13/05/2021\`\n\n\`[+] Anti lien sauf gif\n[+] Commande patchnote \n[/] Mise a jour des commandes Help\n[/] Mise a jour de la commande avis\n[/] Mise a jour de la commande info\``)

        message.channel.send(patchnote)
    }
})