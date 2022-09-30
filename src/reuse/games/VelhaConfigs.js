const {EmbedBuilder, AttachmentBuilder} = require('discord.js')
const { addGamePoints } = require('../config/data')
const colors = {
    amarelo:"#adff2f",
    roxo:"#7600bc",
    azul:"0000FF",
    verde:"#00FF00",
    vermelho:"FF0000"
}

this.addWinner = (toplay, gameName, infos) => {
    infos.wins = 1
    addGamePoints(toplay[0], gameName, infos)
    infos.wins = 0
    infos.losses = 1
    addGamePoints(toplay[1], gameName, infos)
    infos.losses = 0
}

this.tie = (toplay, gameName, infos) => {
    infos.empates = 1
    for(key of toplay){
        addGamePoints(key, gameName, infos)
    }
}
this.winnerEmbed = (playerName, jogadas) => {
    const embed = new EmbedBuilder()
    .setColor(colors['vermelho'])
    .setFooter({text:`🎉 ${playerName} Venceu!!!🎉\n🎃 Jogadas: ${jogadas} 🎃`})
    return embed
}
this.drawEmbed = () => {
    const embed = new EmbedBuilder()
    .setColor('#000000')
    .setFooter({text:`💀 Não há mais jogadas disponiveis, deu velha 😫`})
    return embed
}
this.turnChangeEmbedVelha = (playerName, jogadas, attachment) => {
    attachment = attachment
    const embed = new EmbedBuilder()
    .setColor(colors['amarelo'])
    .setImage(`attachment://test.png`)
    .setFooter({text:`🌟 Vez de: ${playerName}\n🎈 Escolha: ${jogadas.join('-')}]`})
    return embed
}
this.findLocal = (choose) => {
    let pixels = {
        'y':{ 1:11, 2:57, 3:104 },
        'x':{ 1:9, 2:57, 3:105 }
    }
    let x
    let y
    let found = {x:0, y:0}
    if(choose > 3){
        x = 0
        y = 1
        while(choose > 3){
            choose -= 3
            y += 1 
        }
        while(choose > 0){
            choose -= 1
            x += 1
        }
        x = x === 0 ? 1 : x
        found['x'] = pixels['x'][x]
        found['y'] = pixels['y'][y]
    }else{
        found['x'] = pixels['x'][choose]
        found['y'] = pixels['y'][1]
    }
    return found
}
this.checkWin = (typo, tabuleiro) => {
    for(linha in tabuleiro[0]){
        if(tabuleiro[0,linha].every((e) => e === typo) === true) return true
    }
    for(let i = 0; i < 3; i++){
        let l1 = tabuleiro[0,0]
        let l2 = tabuleiro[0,1]
        let l3 = tabuleiro[0,2]
        if(l1[i] === typo && l2[i] === typo && l3[i] === typo) return true
    }
    if(tabuleiro[1][1] === typo){
        let ev = 0
        let op = 2
        for(let i = 0; i < 2; i++){
            if(tabuleiro[0][ev]  === typo && tabuleiro[2][op] === typo) return true
            ev +=2
            op -=2
        }
    }
    return false
}