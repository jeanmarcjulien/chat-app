var socket = io();

$('document').ready(function() {
  $('form').on('submit', function(e) {
    var text = $('#message').val();
    socket.emit('message', text);
    $('#message').val('');
    e.preventDefault();
    return false;
  });

  socket.on('message', function(msg) {
    $('#history').append([
      $('<p>', { class: 'message' }).text(msg),
      $('<div>', { class: 'clear' })
    ]);
  });
});
