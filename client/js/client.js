if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    viewAllBooks: function() {
      return BookCollection.find({});
    }
  });

  // Template.viewbook.title = function() {
  //   return "some other text";
  // };
  
  Template.viewbook.helpers ({
    viewABook: function() {
      var bookId = Session.get('selectedBook');
      var d= BookCollection.find({_id:bookId}).fetch();
      return d;
    } 
  });

  Template.editbook.helpers ({
    editABook: function() {
      var bookId = Session.get('selectedBook');
      var d= BookCollection.find({_id:bookId}).fetch();
      return d;
    } 
  });

  Template.body.events({
    "submit .add-book" : function(e) {
      e.preventDefault();

      // get data from the form
      BookCollection.insert({
        title: $('.book-title').val(),
        author: $('.book-author').val(),
        publisher: $('.book-publisher').val(),
        category: $('.book-category').val(),
        description: $('.book-description').val()
      });

      // reset the form
      $('.book-title').val("");
      $('.book-author').val("");
      $('.book-publisher').val("");
      $('.book-category').val("");
      $('.book-description').val("");
    },

    "click .delete" : function(e) {
      e.preventDefault();

      var d = Blaze.getData(event.target);
      BookCollection.remove({_id:d._id});
    },

    "click .view": function(e) {
      e.preventDefault();

      $('#viewModal').modal({backdrop:true});

      var d = Blaze.getData(event.target);
      Session.set('selectedBook', d._id);  
    },

     "click .edit": function(e) {
      e.preventDefault();

      $('#editModal').modal({backdrop:true});

      var d = Blaze.getData(event.target);
      Session.set('selectedBook', d._id);  
    }
  });

  // Template.editbook.event({
  //   'shown.bs.modal #editModal':function(e) {
  //     console.log("here");
  //   }
  // });

}





