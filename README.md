## Project Starter
&mdash; Sayantan Bakshi(sbongoog@gmail.com)

**Instructions**
1. Install Gulp globally first. `npm install -g gulp`
2. Use [Google Fonts](https://fonts.google.com/) only and edit, add to the font list in [src/assets/fonts/fonts.list](src/assets/fonts/fonts.list) file.
3. Edit the less code in [styles.less](src/assets/less/styles.less). Do not remove the fonts.css import as the fonts.css generated at build time needs to be imported into the main stylesheet.
4. Put your individual less components in [src/assets/less/imports](src/assets/less/imports). Any less file put in the imports directory is auto imported into the [src/assets/less/styles.less](src/assets/less/styles.less) directory while building.

**Commands:**
1. `npm install` &mdash; Installs gulp and other plugins
2. `gulp clearbuild` &mdash; Removes build folder
3. `gulp buildproject` &mdash; Removes previous builds and builds anew
