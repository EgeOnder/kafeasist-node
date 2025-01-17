<p align="center">
  <img src="https://user-images.githubusercontent.com/40398628/219168270-f14d82ed-1466-4cf2-9d2f-e02bdf00bce4.png" width="130" alt="Logo" />
</p>

<h1 align="center">
  kafeasist
</h1>

<p align="center">
  kafeasist is a café/restaurant/bar management software made with ❤️. kafeasist is a software as a service that you can subscribe to monthly or yearly and leave whenever you want. kafeasist makes managing your business much more simpler with easy-to-use dashboard. Keeps track of your data and stores it in a cloud server so you wouldn't lose any of it! With kafeasist, you won't need any other software to run your business.
</p>

# Table of contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [kafeasist Stack](#kafeasist-stack)
  - [Turborepo](#turborepo)
  - [apps/](#apps/)
  - [packages/](#packages/)
- [Contributing](#contributing)
- [License](#license)
- [Maintainers](#maintainers)

# Getting started

## Prerequisites

This codebase is a monorepo, so you need to install `pnpm` globally to use it.

- [Node.js](https://nodejs.org/en/) (v20.x or higher)
- [pnpm](https://pnpm.io/) (v9.x or higher)

## Installation

Install the dependencies using `pnpm`:

```bash
pnpm install
```

## Usage

To start the development server, run:

```bash
pnpm dev
```

# kafeasist Stack

kafeasist is a monorepo that uses [pnpm](https://pnpm.io/) workspaces and uses the following technologies:

| Technology                                    | Description                                           | Used in        |
| --------------------------------------------- | ----------------------------------------------------- | -------------- |
| [TypeScript](https://www.typescriptlang.org/) | Used for the main programming language of the project | `*`            |
| [Turborepo](https://turbo.build/repo)         | Used for managing the monorepo                        | `*`            |
| [Tailwind CSS](https://tailwindcss.com/)      | Used for styling both web and mobile applications     | `apps/`        |
| [Next.js](https://nextjs.org/)                | Powers the web application                            | `apps/www/`    |
| [Expo](https://expo.dev/)                     | Powers the mobile application                         | `apps/mobile/` |

## apps/

For more information about the `apps/` folder, please check the [apps/](apps/) folder.

## packages/

For more information about the `packages/` folder, please check the [packages/](packages/) folder.

## tooling/

For more information about the `tooling/` folder, please check the [tooling/](tooling/) folder.

# Contributing

Contributions to the project is highly appreciated. If you have any suggestions/questions/requests please consider [opening an issue](https://github.com/kafeasist/kafeasist/issues/new). If you want to contribute to the project, fixing an open issue is greatly recommended and appreciated. To see the all contribution rules please check the [contribution rules](CONTRIBUTING.md).

[⬆ Back to top](#table-of-contents)
