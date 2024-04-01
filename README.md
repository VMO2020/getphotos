# GET PHOTOS

## Languages

React JS & SASS

## RUN

Terminal: `yarn dev --host` Use mobile phone at `http://192.168.1.118:5173/`

## Start

1. Terminal: `yarn create vite`
    2.1 Project name: `.`
    2.2 Select: React
    2.3 Select: JavaScript
2. Terminal: `yarn install`
3. Terminal: `yarn dev` TEST
4. Open: `http://localhost:5173/` Cmd Click

## ADD: package,json

```js
"scripts": {
  "client": "vite",
  ... }
```

## Dependencies

1. Terminal: `yarn add sass --dev` - CSS
2. Terminal: `yarn add react-icons`
3. Terminal: `yarn add dotenv`

## Clean

1. Clean the code - Delete all code that you do not need
2. Create `reset.scss`and `styles.scss` inside *src*
3. Import CSS at *main.jsx*:

```js
{
  import './reset.scss';
  import './styles.scss';
}
```

## index.html

Change *title* & *icon*

```html
<link rel="icon" type="image/svg+xml" href="/teeth_whitening.svg" />
<title>Dental 58</title>
```

## Environment variables

Create: `.env.local`
