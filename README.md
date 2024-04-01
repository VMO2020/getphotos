# GET PHOTOS

## Languages

React JS & SASS

## RUN

Terminal: `yarn dev --host` Use mobile phone at `http://192.168.1.118:5173/`
Terminal  Build command: `yarn run build`

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

## Prepare for GIT

1. Move `.gitignore` from client/REACT to the ROOT and add: node_modules & .env
2. ADD: MIT LICENSE

## Create Github REPO

1. Terminal: `git init`
2. GitHub Repo: `getphotos`  (Public & without README)
3. Terminal: `git add .`
4. Terminal: `git commit -m "first commit"`
5. Terminal: `git branch -M main`
6. Terminal: `git remote add origin https://github.com/VMO2020/getphotos.git`
7. Terminal: `git push -u origin main`

## Netlify

1. Go to `https://app.netlify.com/` All sites and login with GitHub
2. Add new site => Import an existing project
3. Connect to Git provider: GitHub
4. Name: `getphotos`
5. Owner: `VMOG`
6. Branch to deploy: `main`
7. Base directory: `/`
8. Build command: `yarn run build`
9. Publish directory: `/dist`
10. Show Advance: Environment variable: New variable `.env`
11. Environment Add: `CI`=`false`
12. Deploy site
13. Site settings: Change url name: `https://getphotos.netlify.app/`
