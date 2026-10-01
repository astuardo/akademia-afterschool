export interface Program {
  id: string;
  name: string;
  badge: string;
  ageRange: string;
  slogan: string;
  description: string;
  color: string;
  bgColor: string;
  tags: string[];
  image?: string;
  highlights: string[];
  schedule: string;
  audience: string[];
  differentiators: string[];
}

export const PROGRAMS: Program[] = [
  {
    id: 'exploradores',
    name: 'Afterschool Exploradores',
    badge: 'Prebásica (3 a 5 años)',
    ageRange: '3 a 5 años • Playgroup a Kínder',
    slogan: 'Un espacio seguro donde aprender es explorar, jugar y descubrir.',
    description: 'Acompañamos a los más pequeños en su transición post-jardín o colegio. Fomentamos su autonomía temprana, desarrollo motor y socialización en un ambiente cálido y 100% libre de pantallas.',
    color: '#D97706',
    bgColor: '#FEF3C7',
    tags: ['Sin Pantallas', 'Acompañamiento Almuerzo', 'Desarrollo Psicomotor', 'Socialización'],
    image: '/exploradores.jpg',
    schedule: 'Lunes a Viernes • 13:00 a 18:30 hrs',
    audience: [
      'Párvulos que salen temprano del colegio y necesitan cuidado amoroso',
      'Familias que buscan un entorno estimulante sin pantallas ni sobrecarga digital',
      'Niños en etapa de desarrollo de lenguaje y hábitos de convivencia'
    ],
    highlights: [
      'Acompañamiento cercano en almuerzo y colaciones saludables',
      'Estimulación sensorial y talleres de psicomotricidad guiados',
      'English Experience: familiarización lúdica y natural con el inglés',
      'Pausas activas y cuentacuentos vivenciales con material concreto'
    ],
    differentiators: [
      'Ratio máximo de 6 a 8 niños por educadora especializada',
      'Entorno seguro adaptado a la primera infancia',
      'Reporte diario de bienestar a los apoderados'
    ]
  },
  {
    id: 'aprender-jugando',
    name: 'Aprender Jugando',
    badge: '1° y 2° Básico',
    ageRange: '6 a 7 años • Primer Ciclo',
    slogan: 'Fortalecimiento de la lectoescritura, curiosidad y el amor por aprender.',
    description: 'El paso a la educación básica trae nuevas exigencias escolares. En AKdemia guiamos sus primeras tareas escolares y reforzamos la lectura comprensiva a través de dinámicas divertidas y juegos estructurados.',
    color: '#059669',
    bgColor: '#D1FAE5',
    tags: ['Lectoescritura', 'Hábito de Tareas', 'Pensamiento Lógico', 'Sin Estrés'],
    schedule: 'Lunes a Viernes • 13:30 a 18:30 hrs',
    audience: [
      'Niños que inician la educación formal y necesitan crear hábitos de estudio',
      'Estudiantes que requieren afianzar lectura fluida y cálculo inicial',
      'Familias que desean llegar a casa a disfrutar tiempo libre sin batallas de tareas'
    ],
    highlights: [
      'Resolución guiada de tareas escolares del colegio día a día',
      'Rincones de lectura motivante y comprensión mediante títeres y juegos',
      'Matemáticas con material concreto (bloques multibase, regletas)',
      'Talleres de arte, ciencia entretenida y expresión corporal'
    ],
    differentiators: [
      'Terminan sus tareas escolares en AKdemia: tardes libres en el hogar',
      'Estrategias pedagógicas activas que no aburren al niño',
      'Coordinación directa con los contenidos escolares de la zona'
    ]
  },
  {
    id: 'autonomia-estudio',
    name: 'Autonomía y Métodos de Estudio',
    badge: '3° a 5° Básico',
    ageRange: '8 a 11 años • Ciclo Intermedio',
    slogan: 'Aprender a organizarse, planificar y estudiar con seguridad e independencia.',
    description: 'En esta etapa el volumen de asignaturas y evaluaciones aumenta. Enseñamos a los estudiantes a planificar su semana, resumir materias, preparar exámenes y gestionar su tiempo de forma efectiva.',
    color: '#0284C7',
    bgColor: '#E0F2FE',
    tags: ['Técnicas de Estudio', 'Planificación Semanal', 'Preparación de Pruebas', 'Enfoque'],
    schedule: 'Lunes a Viernes • 14:00 a 19:00 hrs',
    audience: [
      'Estudiantes que se dispersan fácilmente o procrastinan las tareas',
      'Niños que necesitan metodologías claras para estudiar historia, ciencias o lenguaje',
      'Alumnos que buscan ganar seguridad antes de las semanas de pruebas'
    ],
    highlights: [
      'Uso de agendas, calendarios visuales y técnica Pomodoro adaptada',
      'Técnicas de síntesis: mapas mentales, fichas de memoria y esquemas',
      'Simulaciones y ensayos formativos antes de las pruebas escolares',
      'Acompañamiento en proyectos escolares y maquetas'
    ],
    differentiators: [
      'Construcción de hábitos duraderos para la vida académica',
      'Docentes titulados en pedagogía con vocación de guía',
      'Grupos de estudio focalizados por colegio y temarios'
    ]
  },
  {
    id: 'refuerzo-academico',
    name: 'Refuerzo Académico Especializado',
    badge: '6° Básico a IV Medio',
    ageRange: '12 a 18 años • Enseñanza Media',
    slogan: 'Supera dificultades, aclara dudas complejas y sube tu promedio NEM.',
    description: 'Tutorías personalizadas por asignatura con profesores expertos. Diseñado para nivelar baches de aprendizaje, preparar exámenes semestrales y asegurar notas sobresalientes para el ranking escolar.',
    color: '#4F46E5',
    bgColor: '#EEF2FF',
    tags: ['Matemáticas', 'Física / Química', 'Lenguaje', 'NEM & Ranking'],
    schedule: 'Módulos flexibles de 2 a 3 veces por semana',
    audience: [
      'Alumnos con bajas calificaciones en asignaturas científicas o humanistas',
      'Jóvenes que buscan asegurar un excelente NEM para la postulación universitaria',
      'Estudiantes que necesitan explicaciones paso a paso sin la presión del aula escolar'
    ],
    highlights: [
      'Matemáticas desde álgebra básica hasta cálculo y geometría analítica',
      'Física, Química y Biología con resolución de guías prácticas',
      'Comprensión lectora avanzada y redacción de ensayos',
      'Estrategias de estudio para optimizar horas de sueño y rendimiento'
    ],
    differentiators: [
      'Profesores universitarios especialistas en cada materia',
      'Material complementario propio y banco de ejercicios',
      'Seguimiento quincenal de notas del colegio'
    ]
  },
  {
    id: 'akdemia-highschool',
    name: 'AKdemia High School • Preuniversitario PAES',
    badge: 'III - IV Medio y Egresados',
    ageRange: '16 a 19 años • Preparación PAES',
    slogan: 'Estrategia, diagnóstico continuo y puntajes reales para entrar a la carrera que sueñas.',
    description: 'Programa de alto rendimiento enfocado en la PAES Regular y de Invierno. Combinamos rigor académico con entrenamiento mental, manejo del tiempo y orientación vocacional personalizada.',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    tags: ['PAES M1 y M2', 'Competencia Lectora', 'Ciencias & Historia', 'Orientación'],
    image: '/highschool.jpg',
    schedule: 'Vespertino y Sábados intensivos',
    audience: [
      'Estudiantes de IV Medio que buscan maximizar su puntaje de corte universitario',
      'Egresados que buscan subir sustancialmente su rendimiento del año anterior',
      'Jóvenes que requieren apoyo en el manejo de ansiedad y técnicas de descarte PAES'
    ],
    highlights: [
      'Ensayos mensuales presenciales calibrados a la escala DEMRE vigente',
      'Plataforma de estadísticas por eje temático para detectar debilidades exactas',
      'Talleres de manejo de estrés y ansiedad ante pruebas estandarizadas',
      'Asesoría vocacional y postulación estratégica paso a paso'
    ],
    differentiators: [
      'No eres un número: salas de máximo 12 a 15 alumnos, no de 50',
      'Feedback personalizado tras cada ensayo con el profesor',
      'Altas tasas históricas de ingreso a primeras opciones'
    ]
  },
  {
    id: 'apoyo-especializado',
    name: 'Apoyo Multidisciplinario & Especialistas',
    badge: 'Todos los ciclos',
    ageRange: '3 a 18 años • Gabinete Profesional',
    slogan: 'Psicopedagogía y Fonoaudiología para superar barreras de aprendizaje.',
    description: 'Atención individualizada para pesquisar, diagnosticar e intervenir dificultades específicas del aprendizaje (DEA), trastornos del lenguaje (TEL), déficit atencional (TDAH) y funciones ejecutivas.',
    color: '#E11D48',
    bgColor: '#FFE4E6',
    tags: ['Psicopedagogía', 'Fonoaudiología', 'TDAH & DEA', 'Informes Colegios'],
    schedule: 'Sesiones personalizadas previa reserva',
    audience: [
      'Niños con dificultades persistentes en la lectura, escritura o cálculo',
      'Estudiantes derivados por el equipo PIE o psicorientación del colegio',
      'Familias que necesitan una evaluación formal y un plan de acción concreto'
    ],
    highlights: [
      'Evaluación diagnóstica con baterías psicopedagógicas estandarizadas',
      'Sesiones individuales de estimulación cognitiva y neurodesarrollo',
      'Intervención fonoaudiológica en articulación y fluidez verbal',
      'Reuniones de coordinación y articulación con los colegios'
    ],
    differentiators: [
      'Gabinete clínico y pedagógico integrado en un solo lugar',
      'Emisión de informes técnicos oficiales para colegios',
      'Enfoque empático que fortalece la autoestima del estudiante'
    ]
  }
];

export interface DayStep {
  time: string;
  title: string;
  subtitle: string;
  iconName: string;
  details: string;
  tag: string;
}

export const DAILY_TIMELINE: DayStep[] = [
  {
    time: '13:45 - 14:15',
    title: 'Llegada y Almuerzo Guiado',
    subtitle: 'Acogida cálida y alimentación saludable',
    iconName: 'Utensils',
    details: 'Recibimos a los estudiantes con cariño. Acompañamos el almuerzo en un ambiente limpio, ordenado y tranquilo, reforzando la socialización cordial y hábitos de mesa.',
    tag: 'Bienestar'
  },
  {
    time: '14:15 - 14:45',
    title: 'Conexión y Pausa Activa',
    subtitle: 'Desconexión escolar sin pantallas',
    iconName: 'Sparkles',
    details: 'Espacio de transición para despejar la mente antes del estudio. Dinámicas de relajación, juegos de mesa grupales, lectura libre y movimiento corporal.',
    tag: 'Libre de Pantallas'
  },
  {
    time: '14:45 - 16:15',
    title: 'Bloque Académico y Tareas',
    subtitle: 'Resolución de deberes y tutoría personalizada',
    iconName: 'BookOpen',
    details: 'El momento central del estudio. Los profesores revisan las libretas y plataformas del colegio, guiando la resolución de tareas y el repaso para las pruebas de la semana.',
    tag: 'Foco Pedagógico'
  },
  {
    time: '16:15 - 17:15',
    title: 'Taller Creativo o Expresivo',
    subtitle: 'Desarrollo de habilidades y talentos',
    iconName: 'Palette',
    details: 'Talleres rotativos de ciencias entretenidas, artes plásticas, robótica inicial, ajedrez y expresión escénica para despertar pasiones fuera de la rutina tradicional.',
    tag: 'Creatividad'
  },
  {
    time: '17:15 - 17:45',
    title: 'Merienda y Cierre Reflexivo',
    subtitle: 'Retiro tranquilo y libre de tareas pendientes',
    iconName: 'Clock',
    details: 'Compartimos una colación de media tarde y revisamos los logros del día. La familia recibe al niño con sus tareas 100% listas para disfrutar la noche en el hogar.',
    tag: 'Tranquilidad Familiar'
  }
];

export const DIFFERENCIALS = [
  {
    icon: 'ShieldCheck',
    title: '100% Libre de Pantallas',
    description: 'En un mundo saturado de celulares y tablets, protegemos la atención, fomentamos la socialización cara a cara y el juego con material concreto.'
  },
  {
    icon: 'Users',
    title: 'Grupos Reducidos',
    description: 'Máximo 6 a 8 estudiantes por educador(a). No hacemos masificación; conocemos el nombre, ritmo y necesidades de cada niño.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Equipo Multidisciplinario',
    description: 'Docentes, psicopedagogas y fonoaudiólogas trabajando en el mismo centro, coordinadas para un apoyo verdaderamente integral.'
  },
  {
    icon: 'Home',
    title: 'Tardes Libres en Casa',
    description: 'Los niños llegan a su hogar con las tareas y repasos terminados. Devolvemos el tiempo de descanso y calidad a las familias.'
  },
  {
    icon: 'Award',
    title: 'Metodología Activa y Lúdica',
    description: 'Aprender no tiene que ser un castigo aburrido. Usamos dinámicas vivenciales para que el aprendizaje tenga sentido y despierte curiosidad.'
  },
  {
    icon: 'MessageSquare',
    title: 'Comunicación Permanente',
    description: 'Canal directo y cercano con los apoderados. Te mantenemos al tanto de sus avances, ánimo y logros día a día.'
  }
];

export const FAQS = [
  {
    question: '¿Qué incluye la jornada de Afterschool en AKdemia?',
    answer: 'Incluye recepción y acompañamiento en almuerzo, tutoría y supervisión de tareas escolares del colegio, preparación de pruebas, talleres lúdicos y creativos diarios, colación de media tarde y espacio seguro sin pantallas.'
  },
  {
    question: '¿Puedo contratar días u horarios flexibles?',
    answer: 'Sí. Contamos con planes de jornada completa (5 días a la semana), planes parciales (2 o 3 días a la semana) y módulos de reforzamiento por asignaturas específicas según la necesidad de tu familia.'
  },
  {
    question: '¿Cómo coordinan con el colegio de mi hijo?',
    answer: 'Revisamos diariamente las plataformas escolares (Classroom, Schoolnet, Webclass, cuadernos) para asegurar que todos los contenidos, tareas y fechas de evaluación estén cubiertos con anticipación.'
  },
  {
    question: '¿Qué pasa si mi hijo necesita apoyo de Psicopedagoga o Fonoaudióloga?',
    answer: 'Disponemos de profesionales especialistas dentro de nuestro propio equipo. Si detectamos alguna necesidad o traes una indicación del colegio, podemos realizar la evaluación e intervención directamente en AKdemia.'
  },
  {
    question: '¿Puedo ir a conocer las instalaciones antes de matricular?',
    answer: '¡Por supuesto! Es lo que más recomendamos. Puedes pulsar el botón "Agendar Visita" para coordinar un recorrido guiado donde conocerás las salas, los materiales y al equipo.'
  }
];
