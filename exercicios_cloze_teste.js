const exerciciosClozeTeste = [
  {
    frase: "Where are you _____?",
    opcoes: ["in", "from", "at", "on"],
    resposta: "from",
    traducao: "De onde você é?"
  },
  {
    frase: "I need to _____ a reservation for tonight.",
    opcoes: ["do", "get", "make", "take"],
    resposta: "make",
    traducao: "Eu preciso fazer uma reserva para hoje à noite."
  },
  {
    frase: "What _____ is it, please?",
    opcoes: ["time", "hour", "clock", "date"],
    resposta: "time",
    traducao: "Que horas são, por favor?"
  },
  {
    frase: "She _____ in a small apartment in the city center.",
    opcoes: ["leaves", "stays", "lives", "puts"],
    resposta: "lives",
    traducao: "Ela mora em um apartamento pequeno no centro da cidade."
  },
  {
    frase: "Could you _____ a little slower, please?",
    opcoes: ["tell", "say", "speak", "talk"],
    resposta: "speak",
    traducao: "Você poderia falar um pouco mais devagar, por favor?"
  },
  {
    frase: "How much does this _____?",
    opcoes: ["price", "value", "charge", "cost"],
    resposta: "cost",
    traducao: "Quanto isto custa?"
  },
  {
    frase: "I am _____ forward to the weekend.",
    opcoes: ["seeing", "looking", "watching", "going"],
    resposta: "looking",
    traducao: "Estou ansioso(a) pelo fim de semana."
  },
  {
    frase: "The keys are _____ the table.",
    opcoes: ["on", "in", "under", "at"],
    resposta: "on",
    traducao: "As chaves estão sobre a mesa."
  },
  {
    frase: "He doesn't _____ coffee in the morning.",
    opcoes: ["eat", "drink", "have", "want"],
    resposta: "drink",
    traducao: "Ele não bebe café de manhã."
  },
  {
    frase: "What is your favorite _____ of music?",
    opcoes: ["type", "style", "form", "kind"],
    resposta: "kind",
    traducao: "Qual o seu tipo de música favorito?"
  },
  {
    frase: "We are going to the _____ to watch a film.",
    opcoes: ["park", "cinema", "mall", "theater"],
    resposta: "cinema",
    traducao: "Nós vamos ao cinema para assistir a um filme."
  },
  {
    frase: "My brother is _____ than me.",
    opcoes: ["old", "elder", "oldest", "older"],
    resposta: "older",
    traducao: "Meu irmão é mais velho do que eu."
  },
  {
    frase: "Can I _____ the bill, please?",
    opcoes: ["have", "take", "want", "bring"],
    resposta: "have",
    traducao: "Pode me trazer a conta, por favor?"
  },
  {
    frase: "I have to _____ my homework now.",
    opcoes: ["make", "work", "do", "study"],
    resposta: "do",
    traducao: "Eu tenho que fazer minha lição de casa agora."
  },
  {
    frase: "What did you _____ last night?",
    opcoes: ["eating", "ate", "eat", "eaten"],
    resposta: "eat",
    traducao: "O que você comeu ontem à noite?"
  },
  {
    frase: "The train arrives _____ 3 PM.",
    opcoes: ["in", "on", "at", "by"],
    resposta: "at",
    traducao: "O trem chega às 3 da tarde."
  },
  {
    frase: "She is _____ a blue dress today.",
    opcoes: ["using", "having", "putting", "wearing"],
    resposta: "wearing",
    traducao: "Ela está vestindo um vestido azul hoje."
  },
  {
    frase: "I don't _____ what you mean.",
    opcoes: ["know", "listen", "understand", "hear"],
    resposta: "understand",
    traducao: "Eu não entendo o que você quer dizer."
  },
  {
    frase: "How do I _____ to the nearest bank?",
    opcoes: ["arrive", "go", "get", "find"],
    resposta: "get",
    traducao: "Como eu chego ao banco mais próximo?"
  },
  {
    frase: "My favorite season is _____.",
    opcoes: ["summer", "sun", "hot", "beach"],
    resposta: "summer",
    traducao: "Minha estação favorita é o verão."
  },
  {
    frase: "They _____ to the beach every year.",
    opcoes: ["see", "go", "travel", "walk"],
    resposta: "go",
    traducao: "Eles vão para a praia todos os anos."
  },
  {
    frase: "Is there a pharmacy _____ here?",
    opcoes: ["around", "next", "near", "close"],
    resposta: "near",
    traducao: "Existe uma farmácia aqui perto?"
  },
  {
    frase: "I would _____ a glass of water, please.",
    opcoes: ["love", "want", "take", "like"],
    resposta: "like",
    traducao: "Eu gostaria de um copo de água, por favor."
  },
  {
    frase: "What are you _____ about?",
    opcoes: ["talking", "saying", "thinking", "speaking"],
    resposta: "thinking",
    traducao: "No que você está pensando?"
  },
  {
    frase: "You should _____ a doctor.",
    opcoes: ["look", "see", "watch", "find"],
    resposta: "see",
    traducao: "Você deveria ver um médico."
  },
  {
    frase: "I _____ up at 7 AM every day.",
    opcoes: ["get", "stay", "wake", "stand"],
    resposta: "wake",
    traducao: "Eu acordo às 7 da manhã todos os dias."
  },
  {
    frase: "It's a _____ day, isn't it?",
    opcoes: ["beauty", "beautiful", "nicely", "pretty"],
    resposta: "beautiful",
    traducao: "É um dia lindo, não é?"
  },
  {
    frase: "Could you _____ me your pen?",
    opcoes: ["give", "borrow", "lend", "take"],
    resposta: "lend",
    traducao: "Você poderia me emprestar sua caneta?"
  },
  {
    frase: "I forgot to _____ the door.",
    opcoes: ["close", "open", "shut", "lock"],
    resposta: "lock",
    traducao: "Eu esqueci de trancar a porta."
  },
  {
    frase: "He is very good _____ playing the guitar.",
    opcoes: ["in", "for", "at", "on"],
    resposta: "at",
    traducao: "Ele é muito bom em tocar violão."
  },
  {
    frase: "How _____ brothers and sisters do you have?",
    opcoes: ["much", "many", "long", "old"],
    resposta: "many",
    traducao: "Quantos irmãos e irmãs você tem?"
  },
  {
    frase: "I need to buy some _____ at the supermarket.",
    opcoes: ["eat", "dinner", "food", "cook"],
    resposta: "food",
    traducao: "Eu preciso comprar um pouco de comida no supermercado."
  },
  {
    frase: "This is the _____ book I have ever read.",
    opcoes: ["better", "good", "best", "great"],
    resposta: "best",
    traducao: "Este é o melhor livro que eu já li."
  },
  {
    frase: "She wants to _____ a new language.",
    opcoes: ["speak", "learn", "study", "read"],
    resposta: "learn",
    traducao: "Ela quer aprender um novo idioma."
  },
  {
    frase: "I will _____ you tomorrow.",
    opcoes: ["phone", "speak", "call", "talk"],
    resposta: "call",
    traducao: "Eu te ligo amanhã."
  },
  {
    frase: "What's the _____ like today?",
    opcoes: ["time", "climate", "temperature", "weather"],
    resposta: "weather",
    traducao: "Como está o tempo hoje?"
  },
  {
    frase: "I have never _____ to Japan.",
    opcoes: ["was", "went", "been", "gone"],
    resposta: "been",
    traducao: "Eu nunca estive no Japão."
  },
  {
    frase: "He is _____ for his keys.",
    opcoes: ["seeing", "watching", "finding", "looking"],
    resposta: "looking",
    traducao: "Ele está procurando por suas chaves."
  },
  {
    frase: "Can you _____ on the lights, please?",
    opcoes: ["make", "do", "turn", "put"],
    resposta: "turn",
    traducao: "Você pode acender as luzes, por favor?"
  },
  {
    frase: "I am very _____ today because I have an exam.",
    opcoes: ["occupied", "busy", "free", "late"],
    resposta: "busy",
    traducao: "Eu estou muito ocupado(a) hoje porque tenho uma prova."
  },
  {
    frase: "What do you do in your free _____?",
    opcoes: ["hour", "moment", "time", "day"],
    resposta: "time",
    traducao: "O que você faz no seu tempo livre?"
  },
  {
    frase: "The museum is _____ on Mondays.",
    opcoes: ["finished", "ended", "closed", "open"],
    resposta: "closed",
    traducao: "O museu é fechado às segundas-feiras."
  },
  {
    frase: "My computer is not _____.",
    opcoes: ["doing", "making", "playing", "working"],
    resposta: "working",
    traducao: "Meu computador não está funcionando."
  },
  {
    frase: "I am _____ to see you again.",
    opcoes: ["nice", "good", "fine", "happy"],
    resposta: "happy",
    traducao: "Eu estou feliz em te ver novamente."
  },
  {
    frase: "She is _____ to her friend on the phone.",
    opcoes: ["telling", "talking", "saying", "speaking"],
    resposta: "talking",
    traducao: "Ela está conversando com sua amiga no telefone."
  },
  {
    frase: "Do you have _____ pets?",
    opcoes: ["some", "a", "any", "the"],
    resposta: "any",
    traducao: "Você tem algum animal de estimação?"
  },
  {
    frase: "I'll be back in a _____.",
    opcoes: ["time", "hour", "minute", "second"],
    resposta: "minute",
    traducao: "Eu volto em um minuto."
  },
  {
    frase: "He drives a red _____.",
    opcoes: ["car", "bike", "bus", "house"],
    resposta: "car",
    traducao: "Ele dirige um carro vermelho."
  },
  {
    frase: "The opposite of hot is _____.",
    opcoes: ["warm", "cold", "cool", "sunny"],
    resposta: "cold",
    traducao: "O oposto de quente é frio."
  },
  {
    frase: "Thank you very _____ for your help.",
    opcoes: ["lot", "much", "many", "more"],
    resposta: "much",
    traducao: "Muito obrigado(a) pela sua ajuda."
  }
];