(function () {
  var input = document.getElementById('find');
  if (!input) return;
  input.addEventListener('input', function () {
    var q = this.value.toLowerCase();
    var items = document.querySelectorAll('.places li');
    for (var i = 0; i < items.length; i++) {
      var name = items[i].getAttribute('data-name') || '';
      items[i].hidden = !!q && name.indexOf(q) === -1;
    }
  });
})();
