# GO!BOT -> [Go project website](https://jvrl18.github.io/Go-ws/public/home.html)

## Colaboradores: <a href="https://www.linkedin.com/in/joao-vitor-ribeiro-de-lima-dev/">João Vitor Ribeiro</a>

## Descrição
📜 O projeto GO! é um projeto a fim de testar habilidades e conhecimentos de NodeJS e javascript de modo que os Integrantes desenvolvam jogos de chat interativos utilizando os conhecimentos da linguagem javascript
<br><br>
<p align="center">
<img src="https://github.com/JVRL18/Go-bot/blob/main/src/dataBase/assets/playing.PNG?raw=true" alt="foto do projeto" width="300" height="300" border="0"/>
</p>


💡 O projeto impacta em um melhor conhecimento da linguagem devido a prática e pesquisa constante, estimula leitura de documentação da linguagem (javascript), leitura de bibliotecas(Discord.js, JSON, fs, chart.js) e desenvolvimento de dataBase local.
<br><br>
## 🛠 Estrutura de pastas
-Raiz<br>
|<br>
|-->src<br>
  &emsp;|-->commands<br>
  &emsp;|-->dataBase<br>
  &emsp;|-->dataGraphs<br>
  &emsp;|-->economy<br>
  &emsp;|-->events<br> 
  &emsp;|-->games<br>
  &emsp;|-->reuse<br>
  &emsp;|index.js<br>
|package.json<br>
|package-lock.json<br>
|readme.md<br>

<b>executáveis</b>: Aqui estarão todos os executáveis do projeto, prontos para rodar.

<b>dataBase/assets</b>: Algumas imagens do jogo/sistema e logos prontos para serem utilizados e visualizados.

<b>src</b>: Nesta pasta irá todo o código fonte do sistema e dos jogos, pronto para para ser baixado e modificado.

## 🛠 Instalação

<b>Windows:</b>

Caso o <b>nodeJS já estiver instalado</b>

Enconte na pasta de executáveis o arquivo installer.bat para instalar as dependências
Feito isso apenas execute o arquivo run.bat

## 💻 Configuração para Desenvolvimento

1 - Faça o download do NodeJS e clone este repositório

3 - Execute o installer.bat

2 - Crie um arquivo chamado .env (após executar o installer.bat)

3 - Dentro do arquvio .env crie uma variável desta maneira BOT_KEY="insira aqui a sua chave do discord"

4 - Seja livre!

Para abrir este projeto você necessita das seguintes ferramentas:

--> <a href="https://nodejs.org/en/">NodeJS</a>

## 🗃 Histórico de lançamento
* 1.6.5 - 05/10/2022
    * Corrigidos erros na coleta de dados.
    * Corrigidos erros no jogo da velha e jogos de matematica.
    * Mudanças nos sistemas do jogo da velha.
    * Mudança no sistema de salvar dados gerais.
* 1.6.4 - 04/10/2022
    * Adicionado comando para checar os comandos e seus shortcuts.
    * Adicionado "corretor" para comandos "errados".
    * Adicionadas ilustrações no jogo da roleta russa + aposta fixa.
    * Removido cheat do jogo da forca.
    * Removidos códigos sem uso.
    * Correção de bug nas embeds de economia.
    * Charts removidos.
* 1.6.3 - 03/10/2022
    * Adicionado botão de voltar no menu de perfil para navegação
    * Adicionado minigame (captcha) para receber o daily
    * Adicionado alt commands (Acesso de varias maneiras)
    * Mudança no seletor de jogos (apenas mostra o que pode ser jogado)
    * Correção de bugs nos jogos de matemática
* 1.6.2 - 30/09/2022
    * Adicionado ganhos de dinheiro ao jogar
    * Adicionado comando de perfil
    * Correção de bugs na coleta de dados dos jogos
    * Correção de bug ao checar se mensagem é comando
* 1.6.1 - 27/09/2022
    * Correção de bugs no jogo da forca
    * Correção de bugs no uso de botões no comando jogar
    * Pequena refatoração de codigo
* 1.6.0 - 25/09/2022
    * Economia criada.
    * Adicionado daily.
    * Agora opta por uso de botões em vez de reações (ainda em processo de mudança).
    * Correção de erros da versão anterior.
* 1.5.0 - ----------
    * Adicionada análise gráfica de atividade.
    * Adicionado chart.js.
* 1.4.1 - 20/09/2022
    * Correção de erros.
* 1.4.0 - 17/09/2022
    * Primeiro lançamento adequado.

# 📌 Comandos existentes
<ul>
  <li>
    g!jogar  ---> Abre o menu de jogos 🔸
  </li>
  <li>
    g!perfil ---> Mostra seus dados de economia e jogos 🔸
  </li>
  <li>
    g!guia   ---> Ativa/desativa os textos de guia para o jogo especificado 🔸
  </li>
  <li>
    g!daily  ---> Recebe o valor fixo de moedas de ouro por dia 🔸
  </li>
  <li>
    g!ajuda  ---> Mostra a versão atual e prefixo🔸
  </li>
  <li>
    g!reg    ---> Registra o canal permitindo o uso de g!jogar 🔸
  </li>
  <li>
    g!comandos ---> Mostra todos os comandos registrado na pasta comandos 🔸
  </li>
</ul>

<br>

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Spidus/Teste_Final_1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">INTELI, VICTOR BRUNO ALEXANDER ROSETTI DE QUIROZ</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://github.com/Intelihub/Template_M1>
2. <https://developer.mozilla.org/en-US/>
3. <https://nodejs.org/api/fs.html>
