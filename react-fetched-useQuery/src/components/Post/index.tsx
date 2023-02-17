import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

type Props = {};
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function ListPost({}: Props): JSX.Element {
  const [fetched, setFetched] = useState(false);

  const { data, error, isLoading, refetch, isFetching, remove } = useQuery(
    "getPosts",
    async () => {
      if (fetched == true) {
        const res = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        setFetched(false);
        return res.data;
      }
      return [];
    },
    { enabled: fetched, keepPreviousData: true }
  );

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          setFetched(true);
        }}
      >
        Fetch Posts
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setFetched(false);
          refetch({ queryKey: "getPosts" });
        }}
      >
        Delete Posts
      </button>

      {data?.length ? (
        <div>
          <div>
            <h1>Posts</h1>
            <hr />
            {data.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "50px" }}>
          Click button to search new posts ....
        </div>
      )}
    </div>
  );
}
