import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Error fetching posts')
  }
  return res.json()
}

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery('posts', fetchPosts)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>
  }

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: '10px' }}>
        Refetch Posts
      </button>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsComponent
