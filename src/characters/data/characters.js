export const characters = [
    // ===== RICK AND MORTY =====
    {
        id: 'rick-morty-rick',
        character_name: 'Rick Sanchez',
        publisher: 'Rick and Morty',
        alter_ego: 'Rick Sanchez',
        first_appearance: 'Rick and Morty Pilot (2013)',
        description: 'Científico genial, alcohólico y nihilista. El hombre más inteligente del multiverso.',
        abilities: [
            'Tecnología interdimensional (pistola de portales)',
            'Inteligencia sobrehumana',
            'Maestro del combate y estrategia',
            'Resistencia al dolor (gracias al alcohol)'
        ],
        catchphrases: [
            "Wubba lubba dub dub!",
            "Morty, you're like Hitler, but even Hitler cared about Germany or something."
        ],
        fun_fact: 'Existen infinitas versiones de Rick en el multiverso.',
        relationships: [
            { name: 'Morty Smith', type: 'Nieto' },
            { name: 'Beth Smith', type: 'Hija' },
            { name: 'Jerry Smith', type: 'Yerno (lo desprecia)' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-morty',
        character_name: 'Morty Smith',
        publisher: 'Rick and Morty',
        alter_ego: 'Morty Smith',
        first_appearance: 'Rick and Morty Pilot (2013)',
        description: 'Adolescente ansioso pero de buen corazón. Acompaña a Rick en sus aventuras.',
        abilities: [
            'Ondas cerebrales que camuflan a Rick',
            'Improvisación en situaciones peligrosas',
            'Inocencia útil'
        ],
        catchphrases: [
            "Oh man... oh geez...",
            "Nobody exists on purpose, nobody belongs anywhere."
        ],
        fun_fact: 'Existe un "Evil Morty" que controla el Citadel of Ricks.',
        relationships: [
            { name: 'Rick Sanchez', type: 'Abuelo' },
            { name: 'Summer Smith', type: 'Hermana' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-summer',
        character_name: 'Summer Smith',
        publisher: 'Rick and Morty',
        alter_ego: 'Summer Smith',
        first_appearance: 'Rick and Morty Pilot (2013)',
        description: 'Hermana mayor de Morty. Empieza como superficial pero desarrolla liderazgo.',
        abilities: [
            'Inteligencia social',
            'Adaptabilidad en crisis',
            'Habilidad para manejar tecnología alienígena'
        ],
        catchphrases: [
            "That's not a thing, grandpa!",
            "I'm not your sidekick!"
        ],
        fun_fact: 'En una realidad alternativa lideró una rebelión contra aliens.',
        relationships: [
            { name: 'Rick Sanchez', type: 'Abuelo' },
            { name: 'Morty Smith', type: 'Hermano' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-beth',
        character_name: 'Beth Smith',
        publisher: 'Rick and Morty',
        alter_ego: 'Beth Smith',
        first_appearance: 'Rick and Morty Pilot (2013)',
        description: 'Cirujana de caballos, hija de Rick. Tiene conflictos existenciales.',
        abilities: [
            'Cirugía avanzada',
            'Manejo de armas',
            'Inteligencia emocional (a veces)'
        ],
        catchphrases: [
            "I'm more than just a horse doctor!",
            "Dad, you can't just keep making up sci-fi stuff!"
        ],
        fun_fact: 'No está claro si es un clon o la Beth original.',
        relationships: [
            { name: 'Rick Sanchez', type: 'Padre' },
            { name: 'Jerry Smith', type: 'Esposo' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-jerry',
        character_name: 'Jerry Smith',
        publisher: 'Rick and Morty',
        alter_ego: 'Jerry Smith',
        first_appearance: 'Rick and Morty Pilot (2013)',
        description: 'Padre de Morty y Summer. Inseguro y mediocre. Rick lo odia.',
        abilities: [
            'Supervivencia por pura suerte',
            'Habilidad para arruinar todo'
        ],
        catchphrases: [
            "I'm not taking advice from a baby!",
            "Oh wow, I really am the victim here!"
        ],
        fun_fact: 'En algunas realidades es exitoso (pero muy raras).',
        relationships: [
            { name: 'Beth Smith', type: 'Esposa' },
            { name: 'Rick Sanchez', type: 'Suegro (odia)' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-pepinillo-rick',
        character_name: 'Pickle Rick',
        publisher: 'Rick and Morty',
        alter_ego: 'Rick Sanchez (en forma de pepinillo)',
        first_appearance: 'Pickle Rick (T3 E3)',
        description: 'Rick se convierte en un pepinillo para evitar terapia familiar.',
        abilities: [
            'Combate con extremidades de rata',
            'Supervivencia extrema',
            'Construcción de armas improvisadas'
        ],
        catchphrases: [
            "I turned myself into a pickle, Morty!",
            "I'M PICKLE RIIIIICK!"
        ],
        fun_fact: 'Este episodio ganó un Emmy en 2018.',
        duration: 'Temporal (1 episodio)',
        is_evil: false
    },
    {
        id: 'rick-morty-beth-espa',
        character_name: 'Space Beth',
        publisher: 'Rick and Morty',
        alter_ego: 'Beth Smith del Espacio',
        first_appearance: 'The ABC\'s of Beth (T3 E9)',
        description: 'Versión de Beth que abandonó la Tierra para ser una rebelde espacial.',
        abilities: [
            'Piloto experta',
            'Combate con armas láser',
            'Estrategia militar'
        ],
        fun_fact: 'No se sabe cuál es la Beth original y cuál es el clon.',
        relationships: [
            { name: 'Rick Sanchez', type: 'Padre' }
        ],
        is_evil: false
    },
    {
        id: 'rick-morty-summer-prime',
        character_name: 'Summer Prime',
        publisher: 'Rick and Morty',
        alter_ego: 'Summer Prime',
        first_appearance: 'Wet Kuat Amortican Summer (T7 E7)',
        description: 'Versión alternativa poderosa de Summer.',
        abilities: [
            'Fuerza mejorada',
            'Tecnología avanzada',
            'Liderazgo militar'
        ],
        is_evil: false
    },

    // ===== SOLAR OPPOSITES =====
    {
        id: 'solar-opposites-korvo',
        character_name: 'Korvo',
        publisher: 'Solar Opposites',
        alter_ego: 'Korvo',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Alienígena científico pragmático. Encargado de terraformar la Tierra.',
        abilities: [
            'Tecnología alienígena avanzada',
            'Inteligencia científica',
            'Regeneración celular'
        ],
        catchphrases: [
            "Terry, that's a terrible idea!",
            "Humans are disgusting."
        ],
        fun_fact: 'Originalmente lo interpretaba Justin Roiland (como Rick).',
        relationships: [
            { name: 'Terry', type: 'Compañero alien' }
        ],
        is_evil: false
    },
    {
        id: 'solar-opposites-terry',
        character_name: 'Terry',
        publisher: 'Solar Opposites',
        alter_ego: 'Terry',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Alienígena divertido y relajado. Obsesionado con la cultura humana.',
        abilities: [
            'Habilidad social',
            'Conocimiento pop culture',
            'Supervivencia alienígena'
        ],
        catchphrases: [
            "Dude, that's awesome!",
            "Korvo, you're being a buzzkill."
        ],
        fun_fact: 'Es el único que realmente disfruta vivir en la Tierra.',
        relationships: [
            { name: 'Korvo', type: 'Compañero alien' }
        ],
        is_evil: false
    },
    {
        id: 'solar-opposites-yumyulack',
        character_name: 'Yumyulack',
        publisher: 'Solar Opposites',
        alter_ego: 'Yumyulack',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Replicante niño. Encargado de reducir humanos problemáticos.',
        abilities: [
            'Pistola reductora',
            'Inteligencia táctica',
            'Sin emociones (al principio)'
        ],
        fun_fact: 'Colecciona humanos en miniatura en El Muro.',
        relationships: [
            { name: 'Jesse', type: 'Hermana replicante' }
        ],
        is_evil: true
    },
    {
        id: 'solar-opposites-jesse',
        character_name: 'Jesse',
        publisher: 'Solar Opposites',
        alter_ego: 'Jesse',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Replicante niña. Más emocional que Yumyulack.',
        abilities: [
            'Empatía',
            'Manejo de tecnología alien',
            'Supervivencia'
        ],
        fun_fact: 'Es la más humana de los Solar Opposites.',
        relationships: [
            { name: 'Yumyulack', type: 'Hermano replicante' }
        ],
        is_evil: false
    },
    {
        id: 'solar-opposites-pupa',
        character_name: 'Pupa',
        publisher: 'Solar Opposites',
        alter_ego: 'Pupa',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Larva alienígena que eventualmente destruirá la Tierra.',
        abilities: [
            'Evolución adaptativa',
            'Poderes destructivos latentes',
            'Habilidad de imitación'
        ],
        fun_fact: 'Aunque parece adorable, su evolución matará a toda la humanidad.',
        is_evil: true
    },
    {
        id: 'solar-opposites-el-muro',
        character_name: 'El Muro',
        publisher: 'Solar Opposites',
        alter_ego: 'Humanos reducidos en una pared',
        first_appearance: 'Solar Opposites Pilot (2020)',
        description: 'Micro-sociedad de humanos miniaturizados que viven en una pared.',
        abilities: [
            'Política compleja',
            'Golpes de estado constantes'
        ],
        fun_fact: 'La trama del Muro es más popular que la de los aliens para algunos fans.',
        notable_residents: [
            'Tim',
            'Cherie',
            'Duke'
        ],
        is_evil: false
    }
];
// export const characters = [
//     {
//         'id': 'rick-morty-rick',
//         'character': 'Rick Sanchez',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Rick Sanchez',
//         'first_appearance': 'Rick and Morty Pilot (2013)',
//         'characters': 'Rick Sanchez',
//     },
//     {
//         'id': 'rick-morty-morty',
//         'character': 'Morty Smith',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Morty Smith',
//         'first_appearance': 'Rick and Morty Pilot (2013)',
//         'characters': 'Morty Smith'
//     },
//     {
//         'id': 'rick-morty-summer',
//         'character': 'Summer Smith',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Summer Smith',
//         'first_appearance': 'Rick and Morty Pilot (2013)',
//         'characters': 'Summer Smith'
//     },
//     {
//         'id': 'rick-morty-beth',
//         'character': 'Beth Smith',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Beth Smith',
//         'first_appearance': 'Rick and Morty Pilot (2013)',
//         'characters': 'Beth Smith'
//     },
//     {
//         'id': 'rick-morty-jerry',
//         'character': 'Jerry Smith',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Jerry Smith',
//         'first_appearance': 'Rick and Morty Pilot (2013)',
//         'characters': 'Jerry Smith'
//     },
//     {
//         'id': 'rick-morty-pepinillo-rick',
//         'character': 'Pepinillo Rick',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Rick Sanchez (Pepinillo)',
//         'first_appearance': 'Pickle Rick (T3 E3)',
//         'characters': 'Rick Sanchez (Pepinillo)'
//     },
//     {
//         'id': 'rick-morty-beth-espa',
//         'character': 'Beth del Espacio',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Beth Smith del Espacio',
//         'first_appearance': 'El ABC de Beth (T3 E9)',
//         'characters': 'Beth Smith del Espacio'
//     },
//     {
//         'id': 'rick-morty-summer-prime',
//         'character': 'Summer Prime',
//         'publisher': 'Rick and Morty',
//         'alter_ego': 'Summer Prime',
//         'first_appearance': 'Verano húmedo de Kuat Amortican (T7 E7)',
//         'characters': 'Summer Prime'
//     },
//     {
//         'id': 'solar-opposites-korvo',
//         'character': 'Korvo',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Korvo',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Korvo'
//     },
//     // {
//     //     'id': 'solar-opposites-korvo2',
//     //     'character': 'Korvo (2)',
//     //     'publisher': 'Solar Opposites',
//     //     'alter_ego': 'Korvo',
//     //     'first_appearance': 'Solar Opposites Pilot (2020)',
//     //     'characters': 'Korvo'
//     // },
//     // {
//     //     'id': 'solar-opposites-terry',
//     //     'character': 'Terry',
//     //     'publisher': 'Solar Opposites',
//     //     'alter_ego': 'Terry',
//     //     'first_appearance': 'Solar Opposites Pilot (2020)',
//     //     'characters': 'Terry'
//     // },
//     {
//         'id': 'solar-opposites-terry',
//         'character': 'Terry',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Terry',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Terry'
//     },
//     {
//         'id': 'solar-opposites-yumyulack',
//         'character': 'Yumyulack',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Yumyulack',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Yumyulack'
//     },
//     {
//         'id': 'solar-opposites-jesse',
//         'character': 'Jesse',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Jesse',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Jesse'
//     },
//     {
//         'id': 'solar-opposites-pupa',
//         'character': 'Pupa',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Pupa',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Pupa'
//     },
//     {
//         'id': 'solar-opposites-el-muro',
//         'character': 'El Muro',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'El Muro',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'El Muro'
//     },
//     {
//         'id': 'solar-opposites-personas-muro',
//         'character': 'Personas del Muro',
//         'publisher': 'Solar Opposites',
//         'alter_ego': 'Personas Muro',
//         'first_appearance': 'Solar Opposites Pilot (2020)',
//         'characters': 'Personas Muro'
//     },
//     // {
//     //     'id': 'solar-opposites-group',
//     //     'character': 'Solar Opposites Group',
//     //     'publisher': 'Solar Opposites',
//     //     'alter_ego': 'Korvo, Terry, Yumyulack, Jesse, Pupa',
//     //     'first_appearance': 'Solar Opposites Pilot (2020)',
//     //     'characters': 'Korvo, Terry, Yumyulack, Jesse, Pupa'
//     // }
// ];