export default {
  async fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

    if (!response.ok) throw new Error('Неудачная попытка запроса на сервер');

    const data = await response.json();

    return data.filter(post => post.id <= 8)
  }
}
