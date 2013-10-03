# chromeContext
[![Build Status](https://api.travis-ci.org/travishorn/jquery-chromeContext.png)](https://travis-ci.org/travishorn/jquery-chromeContext)

## Description
Create Chrome-styled context menus (right-click menus) for any element.

## Example usage
    $('#trigger').chromeContext({
      items: [
        {
          title: 'Hello',
          onclick: function () { console.log('hello.'); }
        },
        { separator: true },
        {
          title: 'World',
          onclick: function () { console.log('world.'); }
        }
      ]
    });

## Screenshot

![chromeContext screenshot](http://i.imgur.com/Truea63.png)

## Demo
See the **demo** directory in the repository or see the [online demo](http://jsfiddle.net/bupfy/1/).