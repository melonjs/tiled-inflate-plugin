# melonJS Tiled inflate plugin
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

a melonJS plugin to enable loading and parsing of compressed Tiled maps
>Note: this plugin requires melonJS version 15.1 or higher

Installation
-------------------------------------------------------------------------------
`$ [sudo] npm install @melonjs/tiled-inflate-plugin`

Then import and instantiante the plugin in your project. For example:
```JavaScript
import { plugin } from 'melonjs';
import { TiledInflatePlugin } from '@melonjs/tiled-inflate-plugin';

// register the plugin
plugin.register(TiledInflatePlugin);
```

Once successfully registered, compressed maps will automatically be loaded and parsed by melonJS, no further actions are required.

Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
* Forums: with melonJS 2 we moved to a new discourse [forum](https://melonjs.discourse.group), but we can still also find the previous one [here](http://www.html5gamedevs.com/forum/32-melonjs/)
* Chat: come and chat with us on [discord](https://discord.gg/aur7JMk), or [gitter](https://gitter.im/melonjs/public)
* we tried to keep our [wikipage](https://github.com/melonjs/melonJS/wiki) up-to-date with useful links, tutorials, and anything related melonJS.