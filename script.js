/* =============================================
   RAÍCES DIGITALES — script.js
   ============================================= */

/* ---- DATA ---- */
const REGIONS = {
  andina: {
    key: 'andina',
    name: 'Región Andina',
    icon: '🏔️',
    desc: 'Hogar de los Andes colombianos, donde la tradición cafetera y la cultura paisa se encuentran.',
    headerBg: '#d8f3dc', headerColor: '#2d6a4f',
    tagBg: '#2d6a4f', tagBorder: '#2d6a4f', bulletColor: '#2d6a4f',
    manifestaciones: [
      'Carnaval de Negros y Blancos en Pasto',
      'Feria de las Flores en Medellín',
      'Festival Folclórico Colombiano en Ibagué',
      'Tradición cafetera declarada Patrimonio de la Humanidad'
    ],
    gastronomia: ['Ajiaco', 'Bandeja Paisa', 'Lechona', 'Tamal', 'Arepas de choclo'],
    musica: ['Bambuco', 'Pasillo', 'Guabina', 'Torbellino'],
    musicaFilled: false,
    departamentos: 'Antioquia, Boyacá, Caldas, Cundinamarca, Huila, Norte de Santander, Quindío, Risaralda, Santander, Tolima',
    quizColor: '#2d6a4f',
    questions: [
      {
        text: '¿Cuál es el festival más famoso de la Región Andina que se celebra en Medellín?',
        options: ['Carnaval de Barranquilla', 'Feria de las Flores', 'Festival Vallenato', 'Petronio Álvarez'],
        correct: 1,
        explanation: '¡Correcto! La Feria de las Flores de Medellín es una de las celebraciones más icónicas de la Región Andina, donde el Desfile de Silleteros es su principal atracción.',
        wrongExplanation: 'La respuesta correcta es la Feria de las Flores, celebrada en Medellín cada agosto. Es famosa por su colorido Desfile de Silleteros.'
      },
      {
        text: '¿Cuál de estos platos es típico de la Región Andina?',
        options: ['Sancocho de pescado', 'Arroz con coco', 'Bandeja Paisa', 'Rondón'],
        correct: 2,
        explanation: '¡Muy bien! La Bandeja Paisa es el plato emblema de Antioquia y la Región Andina. Incluye frijoles, arroz, chicharrón, carne molida, chorizo, huevo frito, aguacate y arepa.',
        wrongExplanation: 'La Bandeja Paisa es el plato representativo de la Región Andina. Los demás son de otras regiones: Caribe (arroz con coco), Pacífico (sancocho de pescado) e Insular (rondón).'
      },
      {
        text: '¿Qué distinción tiene la tradición cafetera colombiana?',
        options: [
          'Es el café más caro del mundo',
          'Está declarada Patrimonio Cultural Inmaterial de la Humanidad',
          'Solo se produce en Boyacá',
          'Fue traída por comunidades indígenas'
        ],
        correct: 1,
        explanation: '¡Excelente! La tradición cafetera colombiana fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2011, reconociendo su paisaje, cultura y modo de vida únicos.',
        wrongExplanation: 'La tradición cafetera colombiana fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, un reconocimiento muy especial para Colombia.'
      },
      {
        text: '¿Cuál de estos ritmos musicales es originario de la Región Andina?',
        options: ['Vallenato', 'Currulao', 'Bambuco', 'Joropo'],
        correct: 2,
        explanation: '¡Perfecto! El Bambuco es considerado el ritmo nacional de Colombia y tiene sus raíces en la Región Andina. Es un baile lleno de simbolismo y expresión cultural.',
        wrongExplanation: 'El Bambuco es el ritmo emblema de la Región Andina y el aire nacional de Colombia. El Vallenato es del Caribe, el Currulao del Pacífico y el Joropo de la Orinoquía.'
      },
      {
        text: '¿En qué ciudad de la Región Andina se celebra el Festival Folclórico Colombiano?',
        options: ['Bogotá', 'Manizales', 'Ibagué', 'Tunja'],
        correct: 2,
        explanation: '¡Muy bien! Ibagué, conocida como la "Ciudad Musical de Colombia", alberga el Festival Folclórico Colombiano, uno de los encuentros culturales más importantes del país.',
        wrongExplanation: 'El Festival Folclórico Colombiano se celebra en Ibagué, el Tolima. Por eso Ibagué es llamada "la Ciudad Musical de Colombia".'
      }
    ]
  },

  caribe: {
    key: 'caribe',
    name: 'Región Caribe',
    icon: '🎆',
    desc: 'Región costera llena de alegría, donde el ritmo del vallenato y la cumbia llenan las calles.',
    headerBg: '#e3f2fd', headerColor: '#1565c0',
    tagBg: '#1565c0', tagBorder: '#1565c0', bulletColor: '#1565c0',
    manifestaciones: [
      'Carnaval de Barranquilla (Patrimonio Cultural de la Humanidad)',
      'Festival Vallenato en Valledupar',
      'Fiestas del Mar en Santa Marta',
      'Tradición oral del pueblo wayúu'
    ],
    gastronomia: ['Arepas de huevo', 'Sancocho de pescado', 'Arroz con coco', 'Cayeye', 'Bollo limpio'],
    musica: ['Vallenato', 'Cumbia', 'Porro', 'Champeta', 'Bullerengue'],
    musicaFilled: false,
    departamentos: 'Atlántico, Bolívar, Cesar, Córdoba, La Guajira, Magdalena, Sucre, San Andrés y Providencia',
    quizColor: '#1565c0',
    questions: [
      {
        text: '¿Cuál celebración del Caribe colombiano fue declarada Patrimonio Cultural Inmaterial de la Humanidad?',
        options: ['Festival Vallenato', 'Carnaval de Barranquilla', 'Fiestas del Mar', 'Festival de la Leyenda Vallenata'],
        correct: 1,
        explanation: '¡Correcto! El Carnaval de Barranquilla fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2003. Es el segundo carnaval más grande del mundo.',
        wrongExplanation: 'El Carnaval de Barranquilla es Patrimonio Cultural Inmaterial de la Humanidad desde 2003. Es el segundo carnaval más grande del mundo después del de Río de Janeiro.'
      },
      {
        text: '¿Qué pueblo indígena del Caribe colombiano es reconocido por su tradición oral?',
        options: ['Emberá', 'Wayúu', 'Tikuna', 'Zenú'],
        correct: 1,
        explanation: '¡Excelente! El pueblo Wayúu, que habita en La Guajira, es famoso por su rica tradición oral. Su tejido de la mochila wayúu también es Patrimonio Cultural Inmaterial.',
        wrongExplanation: 'El pueblo Wayúu de La Guajira es reconocido por su tradición oral y también por el tejido de la mochila wayúu, declarado Patrimonio Cultural Inmaterial de la Humanidad.'
      },
      {
        text: '¿Cuál es el ritmo más representativo del Caribe colombiano?',
        options: ['Bambuco', 'Mapalé', 'Vallenato', 'Joropo'],
        correct: 2,
        explanation: '¡Perfecto! El Vallenato es el ritmo más emblemático del Caribe colombiano. Nacido en Valledupar, mezcla influencias africanas, europeas e indígenas y es Patrimonio Cultural.',
        wrongExplanation: 'El Vallenato, originario de Valledupar (Cesar), es el ritmo más representativo del Caribe. En 2015 fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.'
      },
      {
        text: '¿Qué plato típico del Caribe colombiano se prepara con plátano verde?',
        options: ['Ajiaco', 'Cayeye', 'Mamona', 'Casabe'],
        correct: 1,
        explanation: '¡Muy bien! El Cayeye es un plato típico del Caribe colombiano hecho de plátano verde cocido y majado, acompañado de suero costeño y queso. Es muy popular en la costa caribe.',
        wrongExplanation: 'El Cayeye es el plato del Caribe hecho de plátano verde. El Ajiaco es andino, la Mamona es de la Orinoquía y el Casabe es amazónico.'
      },
      {
        text: '¿En qué ciudad se celebra el Festival Vallenato?',
        options: ['Barranquilla', 'Cartagena', 'Valledupar', 'Santa Marta'],
        correct: 2,
        explanation: '¡Correcto! El Festival de la Leyenda Vallenata se celebra cada año en Valledupar, Cesar. Fue creado en 1968 y reúne a los mejores acordeoneros del país.',
        wrongExplanation: 'El Festival de la Leyenda Vallenata se celebra en Valledupar, la capital del Cesar. Fue fundado en 1968 y es uno de los festivales musicales más importantes de Colombia.'
      }
    ]
  },

  pacifica: {
    key: 'pacifica',
    name: 'Región Pacífica',
    icon: '🌊',
    desc: 'Tierra de selva tropical y biodiversidad, cuna de ritmos afrocolombianos únicos.',
    headerBg: '#e8f5e9', headerColor: '#1b5e20',
    tagBg: '#1b5e20', tagBorder: '#1b5e20', bulletColor: '#1b5e20',
    manifestaciones: [
      'Petronio Álvarez - Festival de Música del Pacífico',
      'Festival de Currulao',
      'Tradiciones afrocolombianas y herencia africana',
      'Artesanías en tagua y cestería'
    ],
    gastronomia: ['Sancocho de pescado', 'Arroz con camarón', 'Encocado', 'Pescado frito', 'Borojó'],
    musica: ['Currulao', 'Bunde', 'Juga', 'Marimba de chonta', 'Salsa choke'],
    musicaFilled: false,
    departamentos: 'Chocó, Valle del Cauca, Cauca, Nariño',
    quizColor: '#1b5e20',
    questions: [
      {
        text: '¿Cuál instrumento es símbolo musical de la Región Pacífica?',
        options: ['Acordeón', 'Marimba de chonta', 'Arpa llanera', 'Tiple andino'],
        correct: 1,
        explanation: '¡Correcto! La Marimba de chonta es el instrumento emblema del Pacífico colombiano. En 2015, la UNESCO declaró la Música Marimba y Cantos Tradicionales del Pacífico Sur como Patrimonio Inmaterial.',
        wrongExplanation: 'La Marimba de chonta es el instrumento representativo del Pacífico. La UNESCO la declaró Patrimonio Cultural Inmaterial de la Humanidad junto con los cantos tradicionales del Pacífico Sur.'
      },
      {
        text: '¿Qué fruto exótico del Pacífico colombiano es conocido por sus propiedades energéticas?',
        options: ['Maracuyá', 'Borojó', 'Lulo', 'Guanábana'],
        correct: 1,
        explanation: '¡Muy bien! El Borojó es una fruta tropical del Pacífico colombiano, muy valorada por sus propiedades nutricionales y energéticas. Es endémica de la selva del Chocó.',
        wrongExplanation: 'El Borojó es el fruto emblemático del Pacífico colombiano, especialmente del Chocó. Es conocido por sus propiedades energéticas y nutritivas.'
      },
      {
        text: '¿Cuál es el festival de música más importante del Pacífico colombiano?',
        options: ['Festival Vallenato', 'Petronio Álvarez', 'Festival de Jazz de Cali', 'Feria de Cali'],
        correct: 1,
        explanation: '¡Excelente! El Festival de Música del Pacífico Petronio Álvarez, celebrado en Cali, es el evento de música afrocolombiana más importante. Rinde homenaje al compositor Francisco "Petronio" Álvarez.',
        wrongExplanation: 'El Festival Petronio Álvarez en Cali es el mayor festival de música del Pacífico colombiano y uno de los más importantes de América Latina en música afrodescendiente.'
      },
      {
        text: '¿En cuántos departamentos está ubicada la Región Pacífica?',
        options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
        correct: 1,
        explanation: '¡Correcto! La Región Pacífica comprende 4 departamentos: Chocó, Valle del Cauca, Cauca y Nariño. Es una de las regiones con mayor biodiversidad del planeta.',
        wrongExplanation: 'La Región Pacífica tiene 4 departamentos: Chocó, Valle del Cauca, Cauca y Nariño. Es una de las regiones más biodiversas del planeta.'
      },
      {
        text: '¿Cuál ritmo musical es originario del Pacífico colombiano?',
        options: ['Vallenato', 'Bambuco', 'Currulao', 'Joropo'],
        correct: 2,
        explanation: '¡Perfecto! El Currulao es el ritmo ancestral más representativo del Pacífico colombiano. Tiene profundas raíces africanas y se toca con cununos (tambores) y shakers de maracas.',
        wrongExplanation: 'El Currulao es el ritmo más representativo del Pacífico colombiano. Tiene raíces africanas y es interpretado con tambores llamados cununos y otros instrumentos de percusión.'
      }
    ]
  },

  orinoquia: {
    key: 'orinoquia',
    name: 'Región Orinoquía',
    icon: '🐎',
    desc: 'Los llanos orientales, tierra de vaqueros, llaneros y paisajes infinitos.',
    headerBg: '#fff3e0', headerColor: '#e65100',
    tagBg: '#e65100', tagBorder: '#e65100', bulletColor: '#e65100',
    manifestaciones: [
      'Torneo Internacional del Joropo',
      'Coleo llanero',
      'Trabajo del vaquero (declarado Patrimonio Cultural)',
      'Leyendas del Silbón y La Llorona'
    ],
    gastronomia: ['Mamona', 'Cachama', 'Hayacas', 'Palo a pique', 'Guarapo'],
    musica: ['Joropo', 'Galerón', 'Pasaje', 'Corrío'],
    musicaFilled: false,
    departamentos: 'Arauca, Casanare, Meta, Vichada',
    quizColor: '#e65100',
    questions: [
      {
        text: '¿Cuál es el deporte tradicional llanero en el que se derriba ganado?',
        options: ['Polo llanero', 'Coleo', 'Rodeo criollo', 'Herraje'],
        correct: 1,
        explanation: '¡Correcto! El Coleo es el deporte tradicional de los Llanos en el que el jinete persigue un toro y lo derriba tomándolo por la cola. Es Patrimonio Cultural de Colombia y Venezuela.',
        wrongExplanation: 'El Coleo es el deporte típico llanero donde el jinete derriba el toro tomándolo por la cola. Es Patrimonio Cultural de Colombia y fue incluido en los Juegos Nacionales.'
      },
      {
        text: '¿Cuál es el plato más emblemático de la Orinoquía colombiana?',
        options: ['Ajiaco', 'Sancocho de bocachico', 'Mamona', 'Bandeja Paisa'],
        correct: 2,
        explanation: '¡Muy bien! La Mamona (ternera a la llanera) es el plato estrella de la Orinoquía. Se prepara asando una ternera entera en un palo de madera durante horas hasta que queda tierna y dorada.',
        wrongExplanation: 'La Mamona, también conocida como ternera a la llanera, es el plato más representativo de la Orinoquía. Se asa lentamente en un palo de madera durante varias horas.'
      },
      {
        text: '¿Cuál ritmo musical es el más representativo de la Orinoquía?',
        options: ['Cumbia', 'Bambuco', 'Currulao', 'Joropo'],
        correct: 3,
        explanation: '¡Excelente! El Joropo es el ritmo más representativo de los Llanos orientales y es compartido con Venezuela. Se toca con arpa llanera, maracas y cuatro, y es el "alma" de la cultura llanera.',
        wrongExplanation: 'El Joropo es el ritmo emblemático de la Orinoquía colombiana, compartido con Venezuela. Se interpreta con arpa llanera, cuatro y maracas.'
      },
      {
        text: '¿Qué leyenda popular es famosa en los Llanos colombianos?',
        options: ['La Patasola', 'El Silbón', 'La Madremonte', 'El Mohan'],
        correct: 1,
        explanation: '¡Perfecto! El Silbón es una de las leyendas más aterradoras de los Llanos. Se dice que es el espíritu de un hombre condenado a cargar los huesos de su padre, anunciando su presencia con un silbido.',
        wrongExplanation: 'El Silbón es la leyenda más famosa de los Llanos. Es el espíritu de un hombre maldito que carga los huesos de su padre y cuyo silbido anuncia desgracias.'
      },
      {
        text: '¿Cuántos departamentos conforman la Región Orinoquía?',
        options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
        correct: 1,
        explanation: '¡Correcto! La Región Orinoquía está compuesta por 4 departamentos: Arauca, Casanare, Meta y Vichada. Es la segunda región más extensa de Colombia.',
        wrongExplanation: 'La Región Orinoquía tiene 4 departamentos: Arauca, Casanare, Meta y Vichada. Ocupa una gran extensión del oriente colombiano con sus vastas llanuras.'
      }
    ]
  },

  amazonia: {
    key: 'amazonia',
    name: 'Región Amazonía',
    icon: '🦜',
    desc: 'Pulmón del mundo, hogar de comunidades indígenas milenarias y biodiversidad incomparable.',
    headerBg: '#f1f8e9', headerColor: '#2e7d32',
    tagBg: '#2e7d32', tagBorder: '#2e7d32', bulletColor: '#2e7d32',
    manifestaciones: [
      'Más de 60 pueblos indígenas',
      'Medicina ancestral y conocimiento tradicional',
      'Artesanías en semillas y fibras naturales',
      'Rituales y cosmovisión indígena'
    ],
    gastronomia: ['Pirarucú', 'Tucunaré', 'Casabe', 'Hormigas culonas', 'Frutas exóticas amazónicas'],
    musica: ['Música indígena tradicional', 'Sonidos rituales', 'Instrumentos de viento ancestrales'],
    musicaFilled: false,
    departamentos: 'Amazonas, Caquetá, Guainía, Guaviare, Putumayo, Vaupés',
    quizColor: '#2e7d32',
    questions: [
      {
        text: '¿Cuántos pueblos indígenas habitan aproximadamente en la Amazonía colombiana?',
        options: ['Más de 10', 'Más de 30', 'Más de 60', 'Más de 100'],
        correct: 2,
        explanation: '¡Correcto! La Amazonía colombiana alberga más de 60 pueblos indígenas, cada uno con su propia lengua, cosmovisión y tradiciones. Es una de las regiones con mayor diversidad étnica del mundo.',
        wrongExplanation: 'La Amazonía colombiana tiene más de 60 pueblos indígenas, con lenguas y culturas propias. Es una de las regiones más diversas culturalmente del planeta.'
      },
      {
        text: '¿Cuál es el pez gigante emblemático del Amazonas?',
        options: ['Bocachico', 'Bagre', 'Pirarucú', 'Cachama'],
        correct: 2,
        explanation: '¡Excelente! El Pirarucú (o Paiche) es el pez de agua dulce más grande del mundo. Puede medir hasta 3 metros y pesar 200 kg. Es fundamental en la alimentación de las comunidades amazónicas.',
        wrongExplanation: 'El Pirarucú es el pez gigante del Amazonas, el más grande del mundo en aguas dulces. Puede alcanzar 3 metros de longitud y 200 kg de peso.'
      },
      {
        text: '¿Qué alimento amazónico se elabora a partir de la yuca brava?',
        options: ['Mamona', 'Casabe', 'Hayacas', 'Cayeye'],
        correct: 1,
        explanation: '¡Muy bien! El Casabe es un pan plano elaborado con yuca brava (mandioca amarga) que es un alimento fundamental para las comunidades indígenas del Amazonas desde tiempos ancestrales.',
        wrongExplanation: 'El Casabe es el pan amazónico elaborado con yuca brava. Ha sido alimento fundamental de las comunidades indígenas amazónicas por miles de años.'
      },
      {
        text: '¿Qué característica hace única a la Amazonía colombiana?',
        options: [
          'Es la región más poblada',
          'Tiene el mayor número de ciudades',
          'Es uno de los pulmones del mundo con biodiversidad incomparable',
          'Tiene la mayor producción agrícola'
        ],
        correct: 2,
        explanation: '¡Perfecto! La Amazonía colombiana es uno de los ecosistemas más biodiversos del planeta. Sus bosques producen oxígeno vital, albergan miles de especies únicas y contienen saberes ancestrales invaluables.',
        wrongExplanation: 'La Amazonía es conocida como el "pulmón del mundo" por su inmensa producción de oxígeno y su biodiversidad sin igual. Es uno de los ecosistemas más importantes del planeta.'
      },
      {
        text: '¿En cuántos departamentos está dividida la Región Amazonía?',
        options: ['Cuatro', 'Cinco', 'Seis', 'Siete'],
        correct: 2,
        explanation: '¡Correcto! La Región Amazonía comprende 6 departamentos: Amazonas, Caquetá, Guainía, Guaviare, Putumayo y Vaupés. Es la región más extensa de Colombia.',
        wrongExplanation: 'La Amazonía colombiana tiene 6 departamentos: Amazonas, Caquetá, Guainía, Guaviare, Putumayo y Vaupés. Es la región más grande del país en extensión territorial.'
      }
    ]
  },

  insular: {
    key: 'insular',
    name: 'Región Insular',
    icon: '🌴',
    desc: 'Islas paradisíacas en el Caribe, con cultura raizal única y mar de siete colores.',
    headerBg: '#e8eaf6', headerColor: '#1a237e',
    tagBg: '#1a237e', tagBorder: '#1a237e', bulletColor: '#1a237e',
    manifestaciones: [
      'Cultura raizal afrocaribeña',
      'Idioma creole (San Andrés y Providencia)',
      'Festival del Cangrejo Negro',
      'Green Moon Festival'
    ],
    gastronomia: ['Rondón', 'Cangrejo negro', 'Caracol guisado', 'Fish & Festival', 'Johnny Cakes'],
    musica: ['Reggae', 'Calypso', 'Socca', 'Mentó', 'Música raizal'],
    musicaFilled: false,
    departamentos: 'San Andrés, Providencia y Santa Catalina',
    quizColor: '#1a237e',
    questions: [
      {
        text: '¿Qué idioma habla la comunidad raizal de San Andrés y Providencia?',
        options: ['Inglés estándar', 'Español caribeño', 'Creole (criollo)', 'Papiamento'],
        correct: 2,
        explanation: '¡Correcto! El Creole (o Criollo) es el idioma propio de la comunidad raizal. Es una lengua criolla de base inglesa con influencias africanas, española e indígena, única en Colombia.',
        wrongExplanation: 'La comunidad raizal habla Creole, una lengua criolla de base inglesa con influencias africanas. Es el idioma propio de San Andrés y Providencia.'
      },
      {
        text: '¿Cuál es el plato más representativo de la Región Insular?',
        options: ['Arepas de huevo', 'Rondón', 'Sancocho de pescado', 'Bandeja Paisa'],
        correct: 1,
        explanation: '¡Muy bien! El Rondón es el plato estrella de la Región Insular. Es un guiso de mariscos cocidos en leche de coco con yuca, ñame y plátano. Es el plato de fiesta por excelencia de la comunidad raizal.',
        wrongExplanation: 'El Rondón es el plato más representativo de la Región Insular. Es un guiso de mariscos en leche de coco, considerado el plato sagrado de la comunidad raizal de San Andrés.'
      },
      {
        text: '¿Cómo se llama el festival cultural más importante de Providencia?',
        options: ['Festival del Cangrejo Negro', 'Green Moon Festival', 'Caribbean Fest', 'Festival Raizal'],
        correct: 1,
        explanation: '¡Excelente! El Green Moon Festival es el festival cultural más importante de Providencia, celebrado en junio. Celebra la cultura raizal con música, gastronomía y tradiciones afrocaribeñas.',
        wrongExplanation: 'El Green Moon Festival en Providencia es la celebración cultural más importante de la isla. Se realiza en junio y reúne la música, gastronomía y tradiciones raizales.'
      },
      {
        text: '¿Cuál ritmo musical es característico de la Región Insular?',
        options: ['Vallenato', 'Bambuco', 'Calypso', 'Joropo'],
        correct: 2,
        explanation: '¡Perfecto! El Calypso es uno de los ritmos más representativos de la Región Insular, junto al Reggae, Socca y Mentó. Refleja la herencia afrocaribeña de la comunidad raizal.',
        wrongExplanation: 'El Calypso es un ritmo representativo de la Región Insular, junto al Reggae, Socca y Mentó. Refleja la rica herencia afrocaribeña de la comunidad raizal de San Andrés y Providencia.'
      },
      {
        text: '¿Por qué es conocido el mar de San Andrés?',
        options: [
          'Por sus grandes olas para surf',
          'Por el "mar de siete colores"',
          'Por ser el más profundo del Caribe',
          'Por sus arrecifes de hielo'
        ],
        correct: 1,
        explanation: '¡Correcto! El mar de San Andrés es mundialmente famoso como el "mar de siete colores" por sus impresionantes tonalidades de azul, turquesa y verde. Es uno de los arrecifes de coral más grandes del hemisferio occidental.',
        wrongExplanation: 'El mar de San Andrés es conocido como el "mar de siete colores" por sus hermosas tonalidades que van del azul profundo al turquesa claro. Alberga uno de los arrecifes de coral más grandes del hemisferio.'
      }
    ]
  }
};

/* ---- GAME STATE ---- */
const state = {
  totalPoints: 0,
  streak: 0,
  bestStreak: 0,
  completedRegions: {},   // { regionKey: { score, total, answers[] } }
  currentRegion: null,
  currentQuestionIdx: 0,
  currentAnswers: [],     // { correct: bool, selectedIdx, question }
  answered: false
};

const POINTS_CORRECT   = 10;
const POINTS_STREAK    = 5;   // bonus per streak step
const POINTS_WRONG     = 0;

/* ---- LEVEL SYSTEM ---- */
const LEVELS = [
  { min: 0,   label: '🌱 Explorador' },
  { min: 30,  label: '🗺️ Aventurero' },
  { min: 80,  label: '🏅 Conocedor' },
  { min: 150, label: '⭐ Experto' },
  { min: 250, label: '🏆 Maestro Cultural' }
];

function getLevel(pts) {
  let lvl = LEVELS[0];
  for (const l of LEVELS) if (pts >= l.min) lvl = l;
  return lvl.label;
}

/* =============================================
   VIEW MANAGEMENT
   ============================================= */
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.classList.remove('anim-fade');
  void el.offsetWidth;
  el.classList.add('anim-fade');
  window.scrollTo(0, 0);
}

/* =============================================
   SCORE BAR
   ============================================= */
function updateScoreBar() {
  document.getElementById('sb-pts').textContent    = state.totalPoints;
  document.getElementById('sb-streak').textContent = state.streak > 1 ? `🔥 ×${state.streak}` : '';
  document.getElementById('sb-level').textContent  = getLevel(state.totalPoints);
}

function showPtsToast(pts) {
  const t = document.getElementById('pts-toast');
  t.textContent = `+${pts} pts`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

/* =============================================
   HERO → REGIONS
   ============================================= */
function showRegions() {
  renderRegionsList();
  updateScoreBar();
  document.getElementById('score-bar').style.display = 'flex';
  showView('regions-view');
}

function renderRegionsList() {
  const container = document.getElementById('region-cards');
  container.innerHTML = '';

  Object.values(REGIONS).forEach(r => {
    const done = state.completedRegions[r.key];
    const badge = done
      ? `<div class="rc-badge" title="Quiz completado">✓</div>`
      : '';

    const card = document.createElement('div');
    card.className = `region-card r-${r.key}`;
    card.innerHTML = `
      ${badge}
      <div class="rc-icon">${r.icon}</div>
      <div class="rc-info">
        <h3>${r.name}</h3>
        <p>${r.desc}</p>
        ${done ? `<small style="color:${r.quizColor};font-weight:600;font-size:0.75rem;">✓ ${done.score}/${done.total} en el quiz</small>` : ''}
      </div>
      <div class="rc-arrow">›</div>
    `;
    card.addEventListener('click', () => showDetail(r.key));
    container.appendChild(card);
  });
}

/* =============================================
   DETAIL VIEW
   ============================================= */
function showDetail(key) {
  state.currentRegion = key;
  const r = REGIONS[key];
  const done = state.completedRegions[key];

  // Inject bullet color
  let style = document.getElementById('bullet-style');
  if (!style) { style = document.createElement('style'); style.id = 'bullet-style'; document.head.appendChild(style); }
  style.textContent = `#detail-content .detail-card ul li::before { background: ${r.bulletColor}; }`;

  const liItems = r.manifestaciones.map(m => `<li>${m}</li>`).join('');
  const gastrTags = r.gastronomia.map(t =>
    `<span class="tag filled" style="background:${r.tagBg}">${t}</span>`
  ).join('');
  const musicTags = r.musica.map(t =>
    `<span class="tag" style="color:${r.tagBorder};border-color:${r.tagBorder}">${t}</span>`
  ).join('');

  const quizBtnText = done
    ? `🔄 Repetir Quiz — Último: ${done.score}/${done.total}`
    : `🧠 ¡Pon a prueba tu conocimiento!`;

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-hero" style="background:${r.headerBg};color:${r.headerColor}">
      <div class="dh-icon">${r.icon}</div>
      <div>
        <h2>${r.name}</h2>
        <p>${r.desc}</p>
      </div>
    </div>

    <div class="detail-card">
      <h3>🎭 Manifestaciones Culturales</h3>
      <ul>${liItems}</ul>
    </div>

    <div class="detail-card">
      <h3>🍽️ Gastronomía Típica</h3>
      <div class="tags">${gastrTags}</div>
    </div>

    <div class="detail-card">
      <h3>🎵 Música y Ritmos</h3>
      <div class="tags">${musicTags}</div>
    </div>

    <div class="detail-card">
      <h3>📍 Departamentos</h3>
      <p class="dept-text">${r.departamentos}</p>
    </div>
  `;

  document.getElementById('quiz-cta-btn').textContent = quizBtnText;
  document.getElementById('quiz-cta-btn').style.background =
    `linear-gradient(135deg, ${r.quizColor}, ${r.quizColor}cc)`;

  showView('detail-view');
}

/* =============================================
   QUIZ
   ============================================= */
function startQuiz() {
  const r = REGIONS[state.currentRegion];
  state.currentQuestionIdx = 0;
  state.currentAnswers = [];
  state.answered = false;
  renderQuestion();
  showView('quiz-view');
}

function renderQuestion() {
  const r = REGIONS[state.currentRegion];
  const q = r.questions[state.currentQuestionIdx];
  const total = r.questions.length;
  const idx = state.currentQuestionIdx;

  document.getElementById('q-region-name').textContent = r.name;
  document.getElementById('q-progress-text').textContent = `${idx + 1} / ${total}`;
  document.getElementById('q-progress-fill').style.width = `${((idx + 1) / total) * 100}%`;
  document.getElementById('q-progress-fill').style.background =
    `linear-gradient(90deg, ${r.quizColor}, ${r.quizColor}99)`;

  document.getElementById('q-num').textContent = `Pregunta ${idx + 1}`;
  document.getElementById('q-text').textContent = q.text;

  const letters = ['A', 'B', 'C', 'D'];
  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optContainer.appendChild(btn);
  });

  // Reset feedback
  const fb = document.getElementById('feedback-panel');
  fb.className = 'feedback-panel';
  fb.style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  state.answered = false;
}

function selectAnswer(selectedIdx) {
  if (state.answered) return;
  state.answered = true;

  const r = REGIONS[state.currentRegion];
  const q = r.questions[state.currentQuestionIdx];
  const isCorrect = selectedIdx === q.correct;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === selectedIdx && !isCorrect) btn.classList.add('wrong');
  });

  // Update streak & points
  let earnedPts = 0;
  if (isCorrect) {
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    earnedPts = POINTS_CORRECT + (state.streak > 1 ? POINTS_STREAK * (state.streak - 1) : 0);
    state.totalPoints += earnedPts;
  } else {
    state.streak = 0;
    earnedPts = POINTS_WRONG;
  }

  updateScoreBar();
  if (earnedPts > 0) showPtsToast(earnedPts);

  // Record answer
  state.currentAnswers.push({
    correct: isCorrect,
    selectedIdx,
    correctIdx: q.correct,
    questionText: q.text,
    selectedText: q.options[selectedIdx],
    correctText: q.options[q.correct]
  });

  // Feedback panel
  const fb = document.getElementById('feedback-panel');
  const fbTitle = document.getElementById('fb-title');
  const fbText  = document.getElementById('fb-text');
  const fbIcon  = document.getElementById('fb-icon');

  if (isCorrect) {
    fb.className = 'feedback-panel correct-fb';
    fbIcon.textContent  = '✅';
    fbTitle.textContent = `¡Correcto! ${earnedPts > POINTS_CORRECT ? `+${earnedPts} pts (racha ×${state.streak})` : `+${earnedPts} pts`}`;
    fbText.textContent  = q.explanation;
  } else {
    fb.className = 'feedback-panel wrong-fb';
    fbIcon.textContent  = '❌';
    fbTitle.textContent = 'Respuesta incorrecta';
    fbText.textContent  = q.wrongExplanation;
  }
  fb.style.display = 'flex';

  // Show next button
  const nextBtn = document.getElementById('next-btn');
  const isLast  = state.currentQuestionIdx === r.questions.length - 1;
  nextBtn.textContent = isLast ? 'Ver resultados →' : 'Siguiente pregunta →';
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  const r = REGIONS[state.currentRegion];
  state.currentQuestionIdx++;

  if (state.currentQuestionIdx >= r.questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

/* =============================================
   RESULTS
   ============================================= */
function finishQuiz() {
  const r = REGIONS[state.currentRegion];
  const correct = state.currentAnswers.filter(a => a.correct).length;
  const total   = r.questions.length;
  const pct     = Math.round((correct / total) * 100);

  // Save completed region
  state.completedRegions[state.currentRegion] = {
    score: correct, total, pct, answers: [...state.currentAnswers]
  };

  // Trophy & grade
  let trophy = '🥉', grade = '';
  if (pct === 100) { trophy = '🏆'; grade = '¡Puntaje perfecto! Eres un verdadero conocedor de esta región.'; }
  else if (pct >= 80) { trophy = '🥇'; grade = '¡Excelente! Tienes un gran conocimiento de esta región.'; }
  else if (pct >= 60) { trophy = '🥈'; grade = '¡Bien hecho! Sigue aprendiendo para dominar esta región.'; }
  else                { trophy = '🥉'; grade = 'Sigue explorando. Cada error es una oportunidad de aprender.'; }

  document.getElementById('results-trophy').textContent  = trophy;
  document.getElementById('results-title').textContent   = `${correct} de ${total} correctas`;
  document.getElementById('results-subtitle').textContent = `${pct}% — ${r.name}`;
  document.getElementById('results-grade').textContent   = grade;
  document.getElementById('rs-correct').textContent      = correct;
  document.getElementById('rs-pts').textContent          = state.totalPoints;
  document.getElementById('rs-streak').textContent       = state.bestStreak;

  // Answer review
  const reviewEl = document.getElementById('answer-review-list');
  reviewEl.innerHTML = '';
  state.currentAnswers.forEach((a, i) => {
    const item = document.createElement('div');
    item.className = `ar-item ${a.correct ? 'ar-correct' : 'ar-wrong'}`;
    item.innerHTML = `
      <div class="ar-dot">${a.correct ? '✓' : '✗'}</div>
      <div>
        <div class="ar-q">${i + 1}. ${a.questionText}</div>
        <div class="ar-ans">Tu respuesta: ${a.selectedText}</div>
        ${!a.correct ? `<div class="ar-correct-ans">✓ Correcta: ${a.correctText}</div>` : ''}
      </div>
    `;
    reviewEl.appendChild(item);
  });

  showView('results-view');
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Hero button
  document.getElementById('hero-btn').addEventListener('click', showRegions);

  // Back buttons
  document.getElementById('back-to-regions').addEventListener('click', () => {
    renderRegionsList();
    showView('regions-view');
  });
  document.getElementById('back-to-detail').addEventListener('click', () => {
    showDetail(state.currentRegion);
  });

  // Quiz CTA
  document.getElementById('quiz-cta-btn').addEventListener('click', startQuiz);

  // Next question
  document.getElementById('next-btn').addEventListener('click', nextQuestion);

  // Results actions
  document.getElementById('retry-btn').addEventListener('click', startQuiz);
  document.getElementById('explore-btn').addEventListener('click', () => {
    renderRegionsList();
    showView('regions-view');
  });

  // Score bar hidden initially
  document.getElementById('score-bar').style.display = 'none';
});
