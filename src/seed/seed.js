const userData = [
  {
    email: "user1@example.com",
    password: "password1",
    savedPost: [
      {
        author: "Author 1",
        title: "Title 1",
        content: "Content 1",
        creationDate: new Date(),
        rating: 5,
        relevant: true,
        tags: "Tag1, Tag2",
        avatar: "http://example.com/avatar1.jpg",
        image: "http://example.com/image1.jpg",
      },
      // Puedes agregar más posts aquí si es necesario
    ],
  },
  {
    email: "user2@example.com",
    password: "password2",
    savedPost: [
      {
        author: "Author 2",
        title: "Title 2",
        content: "Content 2",
        creationDate: new Date(),
        rating: 4,
        relevant: true,
        tags: "Tag3, Tag4",
        avatar: "http://example.com/avatar2.jpg",
        image: "http://example.com/image2.jpg",
      },
      // Puedes agregar más posts aquí si es necesario
    ],
  },
  {
    email: "user3@example.com",
    password: "password3",
    savedPost: [
      {
        author: "Author 3",
        title: "Title 3",
        content: "Content 3",
        creationDate: new Date(),
        rating: 3,
        relevant: true,
        tags: "Tag5, Tag6",
        avatar: "http://example.com/avatar3.jpg",
        image: "http://example.com/image3.jpg",
      },
      // Puedes agregar más posts aquí si es necesario
    ],
  },
];

module.exports = userData;
