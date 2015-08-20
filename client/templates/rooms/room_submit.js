Template.roomSubmit.rendered = function() {
  $('.datetimepicker').datetimepicker();
}

Template.roomSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var stringDate = $(e.target).find('.set-due-date').val();

    var formatDate = new Date(stringDate);

    var room = {
      expire: formatDate,
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('roomInsert', room, function(error, result) {
      if (error) {
        return alert(error.reason);
      }
      Router.go('roomPage', {_id: result._id});
    });
  }
});