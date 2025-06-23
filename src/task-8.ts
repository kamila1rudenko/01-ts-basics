export {};
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}
fetchPosts()
  .then((posts) => {
    if (posts.length > 0) {
      console.log(`First post (title): ${posts[0].title}`);
      console.log(`First post (body): ${posts[0].title}`);
      console.log(`First post type:`, posts[0]);
    } else {
      console.log("Posts not found");
    }
  })
  .catch((error) => {
    console.error("Error during posts receiving:", error);
  });
