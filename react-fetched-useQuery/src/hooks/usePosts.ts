import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import placeHolderIntanceAPI from "../api/paceholderInstanceAPI";
import { Post } from "../types";

const QUERY_KEY = `getPosts`;

export function useFetchPosts() {
  const queryClient = useQueryClient();
  const [fetched, setFetched] = useState(false);

  const postsQuery = useQuery(
    QUERY_KEY,
    async () => {
      const res = await placeHolderIntanceAPI.get<Post[]>(`/posts?_limit=10`);
      return res.data;
    },
    { enabled: fetched }
  );

  const cleanAllPosts = () => {
    queryClient.setQueryData(QUERY_KEY, []);
  };

  return { postsQuery, setFetched, fetched, cleanAllPosts };
}
