# mapbox-api-chingu

![Image of Yaktocat](https://i.imgur.com/3Hl0SpM.png)

## Overview

A simple Mapbox App showing noticeable landmarks in Sydney. Created using `create-react-app` and `mapbox-gl-js`. [Click here to view the live version.](https://alexlee22.github.io/mapbox-api-chingu/)

### Features

- Clean Material Design UI,
- Search and jump to navigation through toggable menu,
- Image of each landmark (taken from GeoJSON, images from Wikipedia),
- Easy to swap GeoJSON in the `/src/const.js` file.

### Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [mapbox-gl-js](https://docs.mapbox.com/mapbox-gl-js/api/)
- [material-ui](https://material-ui.com/) - Google's Material Design in easy to use React components
- [styled-components](https://www.styled-components.com/)
- [redux](https://redux.js.org/introduction/getting-started) - cross-component state management

## Running the project

Before running the site, ensure the following are installed and your terminal can run the following (developed on the following):

- `node v11.11.0`
- `npm v6.7.0`

You will also need a Mapbox API access key. [For more info, check here](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)

To install the required packages:

1. Clone the git repo to your (Or download the files directly from Github),
2. Navigate to the folder in terminal,
3. Run the command `npm install` in your terminal
4. Open the file `/src/const.js` and replace `<KEY>` on the line starting with `export const MAPBOX_KEY = ...` with your key provided from MapBox,
5. After installed, run the command `npm run start` to run  in development mode.

There are multiple commands to start the code, check `scrips` in the file `package.json` for the full list of commands to run. You can either run the app as ***local server** or **compile static** ready for deployment. See below for more infomation.

### Build Static Files

`npm run build`

This command will compile all the required files to run the site inside the folder `/build`. You can run the site using these files on a static hosting service. Below is a command for easy deploying to **GitHub Pages**.

### Deploy to GH Pages

Inside your `package.json` file on the line starting with `"homepage"`, replace `<USERNAME>` with your github username and `<GITHUB_REPO_NAME>` with the repo in which you want to host your site in.
```
...
"homepage": "http://<USERNAME>.github.io/<GITHUB_REPO_NAME>",
...
```

Next 

## Customisation

### GeoJSON
```
{
    "type": "FeatureCollection",
    "features": [
        ...
    ]
}
```

Inside features is a list of markers with their co-ordinate and some properties. See below for an example of a marker:

```
...
    {
      "type": "Feature",
      "properties": {
        "name": "Sydney Opera House",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/SydneyOperaHouse20182.jpg/540px-SydneyOperaHouse20182.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.2152463197708,
          -33.8568651729163
        ]
      }
    },
...
```

Properties inside of the geoJSON contains 2 important variables:

- `Name`: Name of the marker which will show up in the search menu and the popup,
- `image`: source of the image for the popup (url).

### Material-UI

Currently only colours can be changed via their theme. You can change the color of the banner and markers by changing the variable `MATERIAL_UI_COLORS.primary` in the file `/src/const.js`.

## Credits

- Favicons from [favicon.io](https://favicon.io/emoji-favicons/),
- Images for landmarks from their respective [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) pages,
- List of landmarks from [Trip Savvy](https://www.tripsavvy.com/sydney-landmarks-4123601),
- [GeoJSON editer](http://geojson.io/): very easy to use for editing GeoJSON.