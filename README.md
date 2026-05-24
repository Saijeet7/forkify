# Forkify

A recipe search and discovery app built with vanilla JavaScript, following the MVC architecture pattern. Search over 1,000,000 recipes, view details, adjust servings, bookmark favorites, and upload your own recipes.

## Features

- **Search** — Find recipes by keyword with paginated results
- **Recipe details** — View ingredients, cooking time, servings, and directions
- **Adjust servings** — Automatically recalculates ingredient quantities
- **Bookmarks** — Save recipes to a persistent list (localStorage)
- **Upload recipe** — Add your own recipes via the modal form

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:1234](http://localhost:1234) in your browser.

### Production build

```bash
npm run build
```

Output is written to the `dist/` folder.

## API key

Uploading and loading user-generated recipes requires a Forkify API key. Sign up at [forkify-api.herokuapp.com](https://forkify-api.herokuapp.com/) and set your key in `src/js/config.js`:

```js
export const KEY = 'your-api-key-here';
```

## Project structure

```
src/
├── js/
│   ├── controller.js    # App orchestration (MVC controller)
│   ├── model.js         # State, API calls, bookmarks persistence
│   ├── helpers.js       # Fetch utilities
│   ├── config.js        # API URL, constants
│   └── views/           # View classes (recipe, results, bookmarks, etc.)
├── sass/                # Stylesheets
└── img/                 # Icons and assets
```

## Tech stack

- Vanilla JavaScript (ES modules)
- Parcel (bundler)
- Sass (styles)
- [Forkify API](https://forkify-api.herokuapp.com/)
- fraction.js (ingredient quantity formatting)

**Note:** SVG icons use a sprite file (`src/img/icons.svg`). Parcel’s default SVG optimizer strips sprite symbols, so `.parcelrc` disables SVG optimization to keep icons working.

## License

ISC
