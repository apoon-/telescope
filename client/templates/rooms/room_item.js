Template.roomItem.helpers({
  // domain: function() {
  //   var a = document.createElement('a');
  //   a.href = this.url;
  //   return a.hostname;
  // }
  date: function() {
    //convert ISODate to String Date for display

    var ISODate = this.expire;

    return moment(ISODate).format('MMMM Do YYYY, h:mm:ss a');
  }
});