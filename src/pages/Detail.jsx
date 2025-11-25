import { useParams } from "react-router";
// ... import data fetching and state hooks

export const Detail = () => {
  const { id } = useParams(); // <-- This is the key
  // ... rest of the fetch logic

  return <h1>Detail Page for ID: {id}</h1>;
};
