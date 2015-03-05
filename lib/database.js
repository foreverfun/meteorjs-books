BookCollection = new Mongo.Collection('books');

var seedData = function() {
  var book1 = {
    title: '1984',
    author: 'George Orwell',
    publisher: 'Signet Classic',
    category: 'Literature & Fiction: Classics',
    description: 'Meet Big Brother'
  };

  var book2 = {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    publisher: 'Bantam',
    category: 'Science & Math | Astronomy',
    description: 'Explore the Universe'
  };

  BookCollection.insert(book1);
  BookCollection.insert(book2);
}



