$(function(){
  $('#one').chromeContext({
    items: [
      { title: 'Hello',
        onclick: function () { console.log('hello.'); } },
      { separator: true },
      { title: 'World',
        onclick: function () { console.log('world.'); } }
    ]
  });
  
  $('#two').chromeContext({
    items: [
      { title: 'Item 1',
        onclick: function () { console.log('one.'); } },
      { title: 'Item 2',
        onclick: function () { console.log('two.'); } },
      { title: 'Item 3',
        onclick: function () { console.log('three.'); } },
      { title: 'Item 4',
        onclick: function () { console.log('four.'); } },
      { title: 'Item 5',
        onclick: function () { console.log('five.'); } },
      { title: 'Item 6',
        onclick: function () { console.log('six.'); }
      }
    ]
  });
});