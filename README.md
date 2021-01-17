# Installation

### Initial package
```
npm init -y or yarn init -y
```
```json
{
  "name": "api-with-graphql",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/WC-Seven/api-with-graphql.git",
  "author": "WC-Seven <wcsevendev@gmail.com>",
  "license": "MIT"
}
```
[⇧ back to top](#Installation)

### Babel - Optional
```
npm i -D @babel/core @babel/cli @babel/preset-env @babel/node 
> *OR
yarn add @babel/core @babel/cli @babel/preset-env @babel/node -D
```

"babel/cli" - `@babel/cli`
"babel/core" - `@babel/core`
"babel/node" - `@babel/node`
"babel/preset-env" - `@babel/preset-env`

```
Create a .babelrc file
```

```.babelrc
{
    "presets": ["@babel/present-dev"]
}
```

### Install - Apollo Server and GraphpQL
```
npm i apollo-server graphql graphql-tools
> *OR
yarn add apollo-server graphql graphql-tools
```

```
"Apollo Server" - `apollo-server`
"GraphQl" - `graphql`
"GraphQl Tools" - `graphql-tools`
```

[⇧ back to top](#Installation)

### Install - Apollo Server and GraphpQL
```
npm i knex pg dotenv
> *OR
yarn add knex pg dotenv
```

```
"Knex" - `knex`
"PG" - `pg`
"Dotenv" - `dotenv`
```

[⇧ back to top](#Installation)
---

# React - Type-Definitions Cheatsheet

### `React.FC<Props>` | `React.FunctionComponent<Props>`
Type representing a functional component
```tsx
const MyComponent: React.FC<Props> = ...