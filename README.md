# jensnieulandt.github.io

This is my resume website ([jensn.dev](https://jensn.dev)), which I might (mis)use as a blog or as a platform for experimentation 🧪  

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fjensn.dev)](https://jensn.dev)

## Build with

 - [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) - An open-source web framework using Vue
 - [Nuxt Content](https://content.nuxtjs.org) - A file-based CMS for Nuxt
 - [Content Wind](https://github.com/Atinux/content-wind) - A personal website theme

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

This will also register a few commit hooks with Husky.

## Linting

Run these commands regularly to catch any linting issues:

```bash
# Lint all JavaScript and TypeScript code with Eslint
pnpm lint:js

# Lint all style related code with Stylelint
pnpm lint:style

# Run the Prettier linter
pnpm lint:prettier

# Run all previously mentioned linters
pnpm lint

# Automatically fix linting issues
pnpm lintfix
```

All staged files are linted with a [pre-commit hook](/.husky/pre-commit)

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev -o
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Deployment

A GitHub action is used to deploy the static files to GitHub pages.

Generate the static files like this:

```bash
pnpm generate
```

## Commitizen

This repo is [commitizen](https://commitizen-tools.github.io/commitizen) friendly. 

If you want to run the [commitizen cli](https://github.com/commitizen/cz-cli):

```bash
pnpm commit
```

This will prompt you to generate a commit message that automatically adheres to [the standard](https://www.conventionalcommits.org/en/v1.0.0).
