// data/courseContent.ts

export type Lesson = {
    id: number;
    title: string;
    duration: string;
    completed: boolean;
    type: string;
    imagen?: string;
    exerciseId?: string;
    sectionId?: number;
  };
  
  export const courseContent: { id: number; title: string; lessons: Lesson[] }[] = [
    {
      id: 1,
      title: "Introducción al Español",
      lessons: [
        {
          id: 1,
          title: "Bienvenida al curso y objetivos",
          duration: "5:00",
          completed: true,
          type: "video"
        },
        {
          id: 2,
          title: "El alfabeto español y pronunciación básica",
          duration: "15:00",
          completed: true,
          type: "video"
        },
        {
          id: 3,
          title: "Sonidos especiales y comparaciones con el turco",
          duration: "15:00",
          imagen: "./SonidosEspeciales.png",
          completed: false,
          type: "video"
        },
        {
          id: 4,
          title: "Ejercicio: Práctica de pronunciación",
          duration: "10:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 2,
      title: "Saludos y Presentaciones",
      lessons: [
        {
          id: 5,
          title: "Saludos y despedidas formales e informales",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 6,
          title: "Presentarse y presentar a otros",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 7,
          title: "Pronombres personales y verbos ser/estar",
          duration: "15:00",
          completed: false,
          type: "video"
        },
        {
          id: 8,
          title: "Ejercicio: Diálogos prácticos y role-play",
          duration: "20:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 3,
      title: "Números, Fechas y Horas",
      lessons: [
        {
          id: 9,
          title: "Números del 0 al 100",
          duration: "10:00",
          completed: false,
          type: "video"
        },
        {
          id: 10,
          title: "Fechas, días de la semana y meses",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 11,
          title: "Decir la hora y expresiones temporales",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 12,
          title: "Ejercicio: Practicando fechas y horas",
          duration: "15:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 4,
      title: "Vocabulario Básico y Expresiones Cotidianas",
      lessons: [
        {
          id: 13,
          title: "Colores, formas y tamaños",
          duration: "10:00",
          completed: false,
          type: "video"
        },
        {
          id: 14,
          title: "Familia y relaciones",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 15,
          title: "Comida y bebida",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 16,
          title: "Ejercicios prácticos y juegos de vocabulario",
          duration: "15:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 5,
      title: "Gramática Fundamental",
      lessons: [
        {
          id: 17,
          title: "Artículos definidos e indefinidos",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 18,
          title: "Género y número de los sustantivos",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 19,
          title: "Adjetivos calificativos y posesivos",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 20,
          title: "Ejercicio: Concordancia entre sustantivos y adjetivos",
          duration: "15:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 6,
      title: "Verbos y Conjugaciones Básicas",
      lessons: [
        {
          id: 21,
          title: "Verbos regulares en presente (-ar, -er, -ir)",
          duration: "15:00",
          completed: false,
          type: "video"
        },
        {
          id: 22,
          title: "Verbos irregulares comunes (ser, estar, tener, ir)",
          duration: "15:00",
          completed: false,
          type: "video"
        },
        {
          id: 23,
          title: "Oraciones afirmativas, negativas e interrogativas",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 24,
          title: "Práctica de conjugación y ejercicios escritos",
          duration: "20:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 7,
      title: "Comunicación en Situaciones Cotidianas",
      lessons: [
        {
          id: 25,
          title: "En el restaurante: ordenar comida",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 26,
          title: "Compras y precios",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 27,
          title: "Direcciones y transporte",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 28,
          title: "Ejercicio: Role-play de situaciones reales",
          duration: "20:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 8,
      title: "Lectura y Escritura Básica",
      lessons: [
        {
          id: 29,
          title: "Lectura de textos sencillos",
          duration: "10:00",
          completed: false,
          type: "video"
        },
        {
          id: 30,
          title: "Comprensión lectora y vocabulario",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 31,
          title: "Redacción de oraciones y párrafos simples",
          duration: "15:00",
          completed: false,
          type: "video"
        },
        {
          id: 32,
          title: "Ejercicio: Corrección y retroalimentación",
          duration: "15:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 9,
      title: "Cultura Hispana",
      lessons: [
        {
          id: 33,
          title: "Costumbres y tradiciones",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 34,
          title: "Comparación cultural entre Ecuador y Turquía",
          duration: "12:00",
          completed: false,
          type: "video"
        },
        {
          id: 35,
          title: "Ejercicio: Reflexión cultural",
          duration: "10:00",
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 10,
      title: "Evaluación y Cierre del Curso",
      lessons: [
        {
          id: 36,
          title: "Repaso general y aclaración de dudas",
          duration: "15:00",
          completed: false,
          type: "video"
        },
        {
          id: 37,
          title: "Evaluación final",
          duration: "20:00",
          completed: false,
          type: "exercise"
        },
        {
          id: 38,
          title: "Despedida y certificación",
          duration: "5:00",
          completed: false,
          type: "video"
        }
      ]
    }
  ];
  