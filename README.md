# 📱 Ticketing App

This is a web app that allows you to purchase tickets for a concert venue. It implements different kinds of testing.

- Unit testing
- Integration testing
- Testing e2e

> **Note1:** Test files are allocated in `__tests__` folder.

> **Note2:** If you receive this warning "Expression produces a union type that is too complex to represent. ts(2590)", you have to go to the VS Code command palette, run the TypeScript and select TypeScript version command. **Make sure you have Use workspace version selected.**

It will add to `.vscode\settings.json` this line:

```bash
{
  "typescript.tsdk": "node_modules\\typescript\\lib"
}
```

## 📜 Scripts Available

```bash
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest --watch",
    "test:ci": "jest --ci"
```

## 🚀 Getting Started

1. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

2. Copy this template file for development

```bash
cp .env.development.local_template .env.development.local
```

3. Copy this template file for production

```bash
cp .env.local_template .env.local
```

4. In _.env.local_

- Add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

- Try this command to generate a random string: `openssl rand -hex 32`
  <br/>
  > **Note:** If you don't have the openssl command on your command-line, feel free to create a random string by just typing a bunch of keys on your keyboard.

5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. Run tests

```bash
npm run test
```

## 🛠️ Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## 📚 Technology stack

- **Next.js v12.1.5 (pages) with-jest template:** As the chosen framework to build with. Check out the official documentation on the [Next.js with Jest template](https://nextjs.org/docs/app/building-your-application/testing/jest) website.

  - Main Features of Next.js v12:
    - Middleware: Introduction of middleware to execute code before a request is completed.
    - React 18: Compatibility with React 18 features, such as concurrent mode.
    - SWC: Replacement of Babel with SWC for faster compilation.
    - Main directory for routes: `pages/`

- **React:** As the UI library in the background. Check out the official documentation on the [React](https://es.react.dev/) website.

- **TypeScript:** Adding strong static types and advanced features to improve large-scale development and code maintainability. Check out the official documentation on the [TypeScript](https://www.typescriptlang.org/) website.

- **Chakra UI (Theme and Components):** A modular and accessible component library providing a set of high-quality, customizable components to enhance UI development and improve the developer experience. Check out the official documentation on the [Chakra-UI](https://v2.chakra-ui.com/) website

- **Eslint:** Ensures code quality by enforcing preconfigured standards and best practices. It performs static analysis on the code, identifying errors and patterns that impact functionality or readability. Check out the official documentation on the [Eslint for Nextjs](https://nextjs.org/docs/pages/building-your-application/configuring/eslint) website.

- **Jest:** as the run testing engine. Check out the official documentation on the [Jest for Nextjs](https://nextjs.org/docs/app/building-your-application/testing/jest) website.

- **React testing library:** As the library for testing React components. Check out the official documentation on the [React Testing Library ](https://testing-library.com/docs/react-testing-library/intro/) website.

- **Cypress:** As the end-to-end testing framework for web applications. Check out the official documentation on the [Cypress for Next](https://nextjs.org/docs/pages/building-your-application/testing/cypress) website.

- **Mock Service Worker:** As the library for mocking API requests in tests. Check out the official documentation on the [ Mock Service Worker](https://mswjs.io/docs/cli/init/) website.

## 🌟 Special Features

- **JSON as db:** A simple db json file based, making it easy to work with and avoiding extra configurations. Db data is automatically populated first time the app is run.

## 📦 Prepare for production

1. Install image optimization package sharp. (If you're using the `<Image/>` component in your project.)

```bash
npm i sharp
```

2. Creating an optimized production build

```bash
npm run build
```

3. Start the production build

```bash
npm run start
```

4. You can deploy it on Vercel

## 🚀 Improvements

## 🤝 Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature/new-feature).
   Open a Pull Request.
