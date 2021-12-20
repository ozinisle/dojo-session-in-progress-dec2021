require([
    'dojo/dom'
], function (dom) {
    var greeting = dom.byId('probableGreet');
    greeting.innerHTML += ' from Dojo - Did not wait for dom';
});