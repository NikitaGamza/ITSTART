This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Тестовое задание для Junior React Developer

## Задание

Необходимо развернуть локально `json-server` и загрузить в него данные **seminars**. Используйте любые удобные технологии, но обязательно с использованием React для реализации следующих функций:

1. **Запрос данных**

   - Запросите данные с семинарами из `json-server`.

2. **Отрисовка списка семинаров**

   - Отобразите список семинаров на странице.

3. **Удаление семинара**

   - Реализуйте кнопку удаления семинара, которая при клике открывает окно подтверждения.
   - При подтверждении удаления отправьте `DELETE` запрос на сервер.

4. **Редактирование семинара**

   - Реализуйте кнопку редактирования семинара.
   - Редактирование должно происходить в модальном окне.

5. **Размещение на GitHub**
   - Залейте проект на GitHub и пришлите ссылку.
   - **Важно:** `json-server` должен находиться в том же репозитории, что и приложение.

## Дополнительные рекомендации

- Используйте современные подходы (например, React Hooks, функциональные компоненты).
- Обратите внимание на обработку ошибок и состояния загрузки.
- Добавьте комментарии в код для пояснения ключевых моментов реализации.

Перед запуском фронта запустить json-server
Команда для запуска: yarn dev
