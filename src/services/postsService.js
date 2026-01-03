export default {
  fetchPosts() {
    const posts = [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
      },
      {
        userId: 1,
        id: 6,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 7,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
        userId: 1,
        id: 8,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },
      {
        userId: 1,
        id: 9,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
      }
    ]


    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');

    // if (!response.ok) throw new Error('Неудачная попытка запроса на сервер');

    // const data = await response.json();

    return mock
  },

  fetchTodos() {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
      },
      {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
      },
      {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
      },
      {
        userId: 1,
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: true
      },
      {
        userId: 1,
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: true
      },
      {
        userId: 1,
        id: 13,
        title: "et doloremque nulla",
        completed: false
      },
      {
        userId: 1,
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: true
      },
      {
        userId: 1,
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: true
      },
      {
        userId: 1,
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: true
      },
      {
        userId: 1,
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: true
      },
      {
        userId: 1,
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: false
      },
      {
        userId: 1,
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: true
      },
      {
        userId: 1,
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: true
      }
    ]

    return todos
  }
}
