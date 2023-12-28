# Cronômetro Simples em JavaScript
Este é um projeto simples de cronômetro desenvolvido usando JavaScript puro. O cronômetro permite que você comece a contagem, pare e redefina para zero.

# Funcionalidades
Iniciar: Ao clicar no botão de iniciar, o cronômetro começará a contar.
Parar: Você pode parar o cronômetro a qualquer momento clicando no botão de parar.
Redefinir: Ao clicar no botão de redefinir, o cronômetro será redefinido para 00:00:00.

# Estrutura do Código
Variáveis Globais
timerSeconds, timerMinutes, e timerHours: Seleciona elementos DOM para exibir os segundos, minutos e horas.
buttonSeconds, stopButton, resetButton: Seleciona botões do DOM para controle do cronômetro.
timer: Armazena a referência para o intervalo do cronômetro.
seconds, minutes, hour: Variáveis para manter a contagem de tempo.

# Funções
sec(): Esta função é responsável por atualizar os segundos, minutos e horas com base na contagem atual.

# Event Listeners
buttonSeconds: Inicia o cronômetro quando clicado.
stopButton: Para o cronômetro quando clicado.
resetButton: Redefine o cronômetro para 00:00:00 quando clicado.

# Como usar
Clone ou baixe este repositório em sua máquina local.
Abra o arquivo HTML em um navegador.
Use os botões para controlar o cronômetro conforme necessário.

# Observações
O cronômetro é atualizado a cada 20 milissegundos.
O formato do cronômetro é HH:MM:SS.
