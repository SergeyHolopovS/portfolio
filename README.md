# Портфолио — Сергей Холопов

React + TypeScript + Tailwind CSS. Собрано на основе дизайна из Claude Design (система «Organic»).

## Запуск

```bash
pnpm install
pnpm dev      # dev-сервер
pnpm build    # прод-сборка (tsc + vite build)
pnpm preview  # предпросмотр сборки
pnpm lint     # biome lint
pnpm format   # biome format --write
pnpm check    # biome check --write (форматирование + линт + сортировка импортов)
```

## Гибкая настройка

Весь контент и структура страницы вынесены в **[src/config/site.config.ts](src/config/site.config.ts)** —
чтобы отредактировать сайт, компоненты трогать не нужно:

- **Контент** — имя, hero-текст, статистика, навыки, опыт работы, проекты,
  учебные репозитории, цитата, контакты, футер.
- **`sectionVisibility`** — включает/выключает любую секцию (`stats`, `skills`,
  `experience`, `projects`, `learning`, `quote`, `contact`).
- **`sectionOrder`** — порядок секций на странице; поменяйте местами элементы
  массива, чтобы переставить блоки.
- Типы данных описаны в [src/config/types.ts](src/config/types.ts).

## Тема

Цвета, шрифты, радиусы и тени — CSS-переменные в
**[src/index.css](src/index.css)** (`@theme` блок), из которых Tailwind v4
генерирует утилиты (`bg-accent-100`, `text-accent2-700`, `rounded-card` и т.д.).
Поменяйте значения токенов — перекрасится весь сайт.

Плотность всех отступов (`p-*`, `gap-*`, `m-*`, ...) управляется одной
переменной `--spacing` — это множитель стандартной 4px-сетки Tailwind
(сейчас `0.275rem`, то есть шаг 4.4px, как в исходной дизайн-системе).
