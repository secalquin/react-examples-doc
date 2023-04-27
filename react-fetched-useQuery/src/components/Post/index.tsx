import { useNavigate, Link } from "react-router-dom";
import { useFetchPosts } from "../../hooks/usePosts";

type Props = {};

export default function ListPost({}: Props): JSX.Element {
  let navigate = useNavigate();

  const { postsQuery, setFetched, cleanAllPosts } = useFetchPosts();
  const { data, isLoading, error, refetch } = postsQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setFetched(true);
            refetch();
          }}
        >
          Fetch Posts
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setFetched(false);
            cleanAllPosts();
          }}
        >
          Delete Posts
        </button>
      </div>
      {/*<Link to="/trainee" state={{ some: "value" }}>
        {" "}
        Redirect
      </Link>*/}

      {data?.length ? (
        <>
          <h1>Posts</h1>
          {data.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </>
      ) : (
        <div style={{ marginTop: "50px" }}>
          Click button to search new posts ....
        </div>
      )}
    </div>
  );
}
