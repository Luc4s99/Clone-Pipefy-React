export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://i.pinimg.com/originals/5f/62/f7/5f62f7c458c2d988c8ef688fd3fe340d.jpg'
        },
        {
          id: 2,
          content: 'Começar TCC',
          labels: ['#7159c1'],
          user: 'https://i.pinimg.com/originals/5f/62/f7/5f62f7c458c2d988c8ef688fd3fe340d.jpg'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://w7.pngwing.com/pngs/367/190/png-transparent-franky-one-piece-straw-hat-pirates-dangling-face-vertebrate-head.png'
        },
        {
          id: 4,
          content: 'Estudar e dominar Spring e Java',
          labels: ['#54e1f7'],
          user: 'https://i.pinimg.com/564x/ea/d7/43/ead743995471423a49865d6e8b3c7107.jpg'
        },
        {
          id: 5,
          content: 'Estudar Angular',
          labels: ['#54e1f7'],
          user: 'https://i.pinimg.com/564x/ea/d7/43/ead743995471423a49865d6e8b3c7107.jpg'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://www.pngkit.com/png/detail/61-612772_monkey-d-monkey-d-luffy-hat.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Passar em PAA',
          labels: ['#7159c1'],
          user: 'https://rankmajority.com/wp-content/uploads/2020/04/Nico-Robin.jpg'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://rankmajority.com/wp-content/uploads/2020/04/Nico-Robin.jpg'
        },
        {
          id: 9,
          content: 'Estudar React',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Estudar muito React',
          labels: [],
        },
        {
          id: 12,
          content: 'Estudar ainda mais React',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Realizar tarefas do classroom',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}