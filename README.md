# MMM-Bengali

This module is designed for [MagicMirror2](https://docs.magicmirror.builders/). It cyclically displays Bengali words, Bengali pronunciations, and English translations. 

## Screenshot

![](https://raw.githubusercontent.com/ethanwang4/MMM-Bengali/master/screenshot.png)

## Installation

```shell
cd modules
git clone https://github.com/ethanwang4/MMM-Bengali
```
## Usage

Add the following to your modules list in config.js

```js
modules: [
    {
        module: 'MMM-Bengali',
        position: 'bottom_left',
        config: {
            // See below 
        }
    }
]
```

### Configuration

The following properties can be configured:
|Option|Description|
|--- |--- |
| `updateFreq` | Number of milliseconds between each word switch.<br>Default value: `10000`|
| `level` | Word commonality; 1 = most common, 7 = least common.<br>Default value: `1`|

## References

Code adapted from

https://github.com/tderflinger/MMM-Hanzi

https://github.com/daniel-windsor/MMM-eswordoftheday/blob/main/MMM-eswordoftheday.js

Translations derived from 

https://github.com/MinhasKamal/BengaliDictionary 
