import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Post } from "../types";

const QUERY_KEY = "getPosts";

export function useFetchPosts() {
    const queryClient = useQueryClient();
    const [fetched, setFetched] = useState(false);

    const postsQuery = useQuery(
        QUERY_KEY,
        async () => {
            const res = await axios.get<Post[]>(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );
            return res.data;
        },
        { enabled: fetched }
    );

    const cleanAllPosts = () => {
        queryClient.setQueryData(QUERY_KEY, []);
    }

    return { postsQuery, setFetched, fetched, cleanAllPosts }

}