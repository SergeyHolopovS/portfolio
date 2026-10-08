import type { SiteConfig } from './types'

/**
 * Single source of truth for every piece of content on the site, plus
 * which sections render and in what order. Edit this file to re-purpose
 * the template — no component code needs to change.
 */
export const siteConfig: SiteConfig = {
  meta: {
    title: 'Сергей Холопов — Frontend-разработчик',
    description: 'Портфолио Сергея Холопова: frontend-разработка на React, Next.js, Vue и Nuxt.',
  },

  brand: 'Сергей Холопов',

  nav: [
    { label: 'Опыт', href: '#experience' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Контакты', href: '#contact' },
  ],
  navCta: {
    label: 'Написать мне',
    href: 'mailto:gssdsudas@gmail.com',
    variant: 'primary',
  },

  hero: {
    lines: ['Пишу фронтенд', 'с пятнадцати лет.'],
    description:
      'Frontend-разработчик из Санкт-Петербурга. SPA и SSR-приложения на React, Next.js, Vue и Nuxt. Параллельно писал бэкенд на Kotlin и Spring Boot — поэтому вижу систему целиком и говорю с бэкендом на одном языке.',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/SergeyHolopovS',
        variant: 'primary',
        external: true,
      },
      {
        label: 'Telegram',
        href: 'https://t.me/Sergey_Holopov',
        variant: 'ghost',
        external: true,
      },
    ],
  },

  stats: [
    {
      value: '11',
      label: 'Лет, когда написал первый код',
      width: 'clamp(160px, 20vw, 240px)',
      numberSize: 'clamp(34px, 3.4vw, 48px)',
      padding: 28,
      bg: 'accent-100',
      fg: 'accent-700',
    },
    {
      value: '15',
      label: 'Лет — старт во фронтенде',
      width: 'clamp(150px, 17vw, 200px)',
      numberSize: 'clamp(30px, 3vw, 42px)',
      padding: 24,
      bg: 'neutral-200',
      fg: 'accent-700',
      offsetY: 28,
    },
    {
      value: '5',
      label: 'Больших проектов на React, Next.js и Nuxt',
      width: 'clamp(180px, 23vw, 290px)',
      numberSize: 'clamp(34px, 3.4vw, 48px)',
      padding: 32,
      bg: 'accent2-200',
      fg: 'accent2-800',
      offsetY: -14,
    },
    {
      value: '10',
      label: 'Учебных репозиториев',
      width: 'clamp(140px, 16vw, 185px)',
      numberSize: 'clamp(28px, 2.8vw, 40px)',
      padding: 22,
      bg: 'accent2-100',
      fg: 'accent2-700',
      offsetY: 28,
    },
  ],

  skills: [
    {
      title: 'Языки',
      skills: [
        { label: 'TypeScript', tone: 'accent' },
        { label: 'JavaScript ES6+', tone: 'accent' },
        { label: 'Kotlin', tone: 'neutral' },
        { label: 'HTML5', tone: 'neutral' },
        { label: 'CSS3', tone: 'neutral' },
      ],
    },
    {
      title: 'Фреймворки',
      skills: [
        { label: 'React', tone: 'accent' },
        { label: 'Next.js', tone: 'accent' },
        { label: 'Vue 3', tone: 'accent2' },
        { label: 'Nuxt', tone: 'accent2' },
      ],
    },
    {
      title: 'Состояние и данные',
      skills: [
        { label: 'TanStack Query', tone: 'outline' },
        { label: 'Zustand', tone: 'outline' },
        { label: 'REST', tone: 'outline' },
        { label: 'WebSocket', tone: 'outline' },
        { label: 'JWT', tone: 'outline' },
      ],
    },
    {
      title: 'Стили',
      skills: [
        { label: 'Tailwind CSS', tone: 'neutral' },
        { label: 'SCSS', tone: 'neutral' },
        { label: 'CSS Modules', tone: 'neutral' },
        { label: 'Адаптивная вёрстка', tone: 'neutral' },
      ],
    },
    {
      title: 'Инструменты',
      skills: [
        { label: 'Vite', tone: 'outline' },
        { label: 'pnpm', tone: 'outline' },
        { label: 'ESLint', tone: 'outline' },
        { label: 'Prettier', tone: 'outline' },
        { label: 'Jest', tone: 'outline' },
        { label: 'Git', tone: 'outline' },
        { label: 'GitHub Actions', tone: 'outline' },
        { label: 'Docker', tone: 'outline' },
      ],
    },
    {
      title: 'Бэкенд — дополнительно',
      skills: [
        { label: 'Spring Boot', tone: 'accent2' },
        { label: 'Kafka', tone: 'accent2' },
        { label: 'RabbitMQ', tone: 'accent2' },
        { label: 'PostgreSQL', tone: 'accent2' },
        { label: 'Микросервисы', tone: 'accent2' },
      ],
    },
  ],

  experience: [
    {
      company: 'FluffyRP',
      role: 'Фронтенд-разработчик · частный заказ',
      link: { label: 'fluffyrp.com', href: 'https://fluffyrp.com' },
      description:
        'Разработка и поддержка сайта Minecraft-сервера. Отвечаю за фронтенд-часть целиком: от вёрстки до интеграции с API и релизов.',
      highlights: [
        'Личный кабинет: профиль, управление скинами, история операций.',
        'Форум с ветками и модерацией, система петиций с голосованием.',
        'Банкинг: балансы, переводы, история транзакций — формы с валидацией и защита от повторных отправок.',
        'Админ-панель: управление пользователями, контентом и заявками, доступ по ролям.',
        'Постоянная поддержка: доработки по запросам администрации, багфиксы, рефакторинг компонентов.',
      ],
    },
  ],

  projects: {
    kicker: 'Проекты',
    title: 'Что я собрал руками',
    items: [
      {
        kicker: 'Командный проект',
        title: 'CineNetwork',
        description:
          'Платформа для просмотра аниме: SSR-фронтенд на Next.js и микросервисный бэкенд. Отвечал за фронтенд — каталог и страницы тайтлов, плеер, авторизацию и личный кабинет; участвовал в сервисах Anime и Auth (выдача и обновление JWT-токенов).',
        tags: [
          { label: 'Next.js', tone: 'accent' },
          { label: 'TypeScript', tone: 'accent' },
          { label: 'Tailwind CSS', tone: 'outline' },
          { label: 'SCSS', tone: 'outline' },
          { label: 'Jest', tone: 'outline' },
          { label: 'JWT', tone: 'outline' },
        ],
        link: {
          label: 'github.com/CineNetwork',
          href: 'https://github.com/CineNetwork/Frontend',
        },
      },
      {
        kicker: 'Фронтенд на Nuxt',
        title: 'EasyGuide',
        description:
          'Платформа авторских экскурсий: туристы ищут и бронируют туры, гиды публикуют маршруты, ведут расписание и принимают заявки. SSR на Nuxt 4, каталог с фильтрами в URL, JWT в cookie с автообновлением токенов — параллельные запросы и вкладки ждут одно обновление через Web Locks API.',
        tags: [
          { label: 'Nuxt 4', tone: 'accent2' },
          { label: 'Vue 3', tone: 'accent2' },
          { label: 'TypeScript', tone: 'accent' },
          { label: 'Tailwind CSS', tone: 'outline' },
          { label: 'SSR', tone: 'outline' },
          { label: 'JWT', tone: 'outline' },
        ],
        link: {
          label: 'github.com/SergeyHolopovS/easyguide-nuxtjs',
          href: 'https://github.com/SergeyHolopovS/easyguide-nuxtjs',
        },
      },
      {
        kicker: 'Фронтенд и бэкенд',
        title: 'PickMe',
        description:
          'Мини-приложение внутри Telegram: React + TypeScript на Vite, авторизация через initData бота, работа в ограничениях WebApp-окружения — тема, вьюпорт, нативные кнопки. Написал обе части и настроил деплой через GitHub Actions.',
        tags: [
          { label: 'React', tone: 'accent' },
          { label: 'TypeScript', tone: 'accent' },
          { label: 'Vite', tone: 'outline' },
          { label: 'Telegram WebApp API', tone: 'outline' },
          { label: 'GitHub Actions', tone: 'outline' },
        ],
        link: {
          label: 'github.com/PickMeApp',
          href: 'https://github.com/PickMeApp/mini-app',
        },
      },
      {
        kicker: 'Веб-клиент',
        title: 'EukoLand',
        description:
          'SPA на React + TypeScript для игрового проекта: главная страница, личный кабинет и несколько внутренних разделов. Собственная структура компонентов и работа с серверным состоянием через TanStack Query и Zustand.',
        tags: [
          { label: 'React', tone: 'accent' },
          { label: 'TypeScript', tone: 'accent' },
          { label: 'Vite', tone: 'outline' },
          { label: 'TanStack Query', tone: 'outline' },
          { label: 'Zustand', tone: 'outline' },
        ],
        link: {
          label: 'github.com/EukoLand',
          href: 'https://github.com/EukoLand/frontend-react',
        },
      },
      {
        kicker: 'Самостоятельно',
        title: 'Allitta',
        description:
          'Веб-приложение с админкой: React-фронтенд поверх серверной части, авторизация, работа с формами и файлами, окружение в Docker. Здесь разобрался, как фронтенд живёт рядом с реальным бэкендом и деплоем.',
        tags: [
          { label: 'React', tone: 'accent' },
          { label: 'JavaScript', tone: 'accent' },
          { label: 'REST API', tone: 'outline' },
          { label: 'Docker', tone: 'outline' },
        ],
        link: {
          label: 'github.com/SergeyHolopovS/Allitta',
          href: 'https://github.com/SergeyHolopovS/Allitta',
        },
      },
    ],
  },

  learning: {
    kicker: 'Учебные и небольшие проекты',
    description:
      'Репозитории, на которых я разбирал технологии по отдельности — от SSR до JWT-авторизации и телеграм-ботов.',
    items: [
      {
        name: 'nuxt-blog',
        description: 'блог на Nuxt с SSR',
        href: 'https://github.com/SergeyHolopovS/nuxt-blog',
      },
      {
        name: 'vue-todos',
        description: 'задачник на Vue 3',
        href: 'https://github.com/SergeyHolopovS/vue-todos',
      },
      {
        name: 'giftis-react',
        description: 'клиент к giftis-kotlin',
        href: 'https://github.com/SergeyHolopovS/giftis-react',
      },
      {
        name: 'giftis-kotlin',
        description: 'API на Kotlin',
        href: 'https://github.com/SergeyHolopovS/giftis-kotlin',
      },
      {
        name: 'math-exam-simulator',
        description: 'тренажёр задач',
        href: 'https://github.com/SergeyHolopovS/math-exam-simulator',
      },
      {
        name: 'CryptoCheck',
        description: 'курсы криптовалют',
        href: 'https://github.com/SergeyHolopovS/CryptoCheck',
      },
      {
        name: 'authexample',
        description: 'JWT-авторизация от и до',
        href: 'https://github.com/SergeyHolopovS/authexample',
      },
      {
        name: 'konews',
        description: 'агрегатор новостей',
        href: 'https://github.com/SergeyHolopovS/konews',
      },
      {
        name: 'dnd-enemy-generator',
        description: 'генератор противников D&D',
        href: 'https://github.com/SergeyHolopovS/dnd-enemy-generator',
      },
      {
        name: 'discord-stats-bot',
        description: 'бот статистики Discord',
        href: 'https://github.com/SergeyHolopovS/discord-stats-bot',
      },
    ],
  },

  quote: {
    text: 'Писал и фронтенд, и бэкенд — поэтому понимаю систему целиком и говорю с бэкендом на одном языке.',
    author: 'из моего резюме, и это правда',
  },

  contact: {
    heading: 'Ищу работу или стажировку во фронтенде',
    description:
      'Санкт-Петербург, СПбГМТУ — факультет цифровых промышленных технологий, бакалавриат, 2 курс. Открыт к удалёнке и офису. Напишите — отвечу быстро. Уже есть опыт коммерческой разработки на React и Next.js, а на стороне бэкенда работал с Kotlin и Spring Boot. Рассматриваю стажировку, частичную и полную занятость — опишите задачу, и отвечу с конкретикой по срокам.',
    actions: [
      {
        label: 'gssdsudas@gmail.com',
        href: 'mailto:gssdsudas@gmail.com',
        variant: 'primary',
      },
      {
        label: '@Sergey_Holopov',
        href: 'https://t.me/Sergey_Holopov',
        variant: 'secondary',
        external: true,
      },
      {
        label: 'github.com/SergeyHolopovS',
        href: 'https://github.com/SergeyHolopovS',
        variant: 'ghost',
        external: true,
      },
    ],
  },

  footer: 'Сергей Холопов · Frontend-разработчик · Санкт-Петербург',

  sectionVisibility: {
    stats: true,
    skills: true,
    experience: true,
    projects: true,
    learning: true,
    quote: true,
    contact: true,
  },

  sectionOrder: ['stats', 'skills', 'experience', 'projects', 'learning', 'quote', 'contact'],
}
