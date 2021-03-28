# Website

Personal website including my personal blog.

## Getting started

### Prerequisites

You will need to install [node.js](https://nodejs.org) and [yarn](https://yarnpkg.com/)

### Installing

1. Clone the repository.
2. Enter the created directory.
3. Execute the following command to install the projects dependencies:

    ```
    yarn install
    ```

4. Copy the .env.template file and name it .env. Make sure to apply the correct settings inside the created file.

### Running

To start a development server, run:

```
yarn serve
```

This should start an instance of the server on a given port.

### Building

To compile the production build, run:

```
yarn build
```

## Conventions

### Code Style and formatting

This project relies heavily on [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce consistent
formatting and coding styles. A [pre-commit-hook](https://githooks.com/) runs every time you try to commit,
linting and reformatting the staged files. This allows you to basically forget about formatting,
prettier is much better at it anyway.

> Tip: you can setup your editor to run eslint --fix on save, to see the
> formatting changes sooner. This allows you to write code like an absolute monster,
> all on one line even, hit save, and watch the magic happen.

Some of the eslint rules may seem a bit harsh. If there is one that particularly annoys you,
please open an issue to discuss it.
