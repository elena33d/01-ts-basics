import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data[0].title);
      return response.data;
    });
}

fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error: unknown) => {
    console.error("Failed to fetch posts:", error);
  });
