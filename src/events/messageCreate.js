const fs = require('fs');
const { justAText } = require('../reuse/games/global');

module.exports = {
	name: 'messageCreate',
	async execute(message, client){
		if (message.author.bot) return;
		if (message.channel.type == 'dm') return;
		if(message.content === '<@963119439832834088>'){
			const command = client.commands.get('ajuda');
			try {
				command.execute(message,'x',client)
			} catch(err){console.log(err)}
		}
		if(!message.content.toLowerCase().startsWith(client.prefix)) return;

	const args = message.content.slice(client.prefix.length).trim().split(/ +/)
	const checkCommandAlts = (info) => {
		let alts = JSON.parse(fs.readFileSync("./src/cmds.json"))
		for(key in alts){
			if(alts[key].indexOf(info) !== -1){
				return key
			}
		}
		return false
	}
	const input1 = args[1]
	const input2 = args[2]
	const userId = message.author.id
	const msg = args.shift().toLowerCase()

	const commandName = await checkCommandAlts(msg)
	if(!client.commands.has(commandName)){
		let finder = {}
		let fixnames = []
		const commands = fs.readdirSync('./src/commands')
		for(key in commands){
			fixnames.push(commands[key].split('').splice(0,commands[key].length-3).reduce((x,y) => x+=y, ''))
		}
		for(comando of fixnames){
			finder[comando] = 0
			for(letra of comando){
				if(msg.indexOf(letra) !== -1){
					finder[comando]++
				}
			}
		}
		let name = ''
		let bigger = 0
		for(key in finder){
			if(finder[key] > bigger){
				bigger = finder[key]
				name = [key]
			}
		}
		return message.channel.send({embeds:[justAText(`❌ Comando não encontrado!\n🎈 Você quis dizer ${client.prefix}${name === '' ? 'comandos': name}?\n\n⭐Dica: acesse G!COMANDOS`,'#B026FF')]})
	};

	const command = client.commands.get(commandName);
		try {
			command.execute(message,args, client, input1, input2, userId)

		} catch(err){console.log(err)}
	},
}