import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    'posts',
    fetchPosts,
    {
      // ✅ Advanced React Query Options
      staleTime: 1000 * 60,        // البيانات تفضل fresh لمدة دقيقة
      cacheTime: 1000 * 60 * 5,    // الكاش يفضل موجود 5 دقائق
      refetchOnWindowFocus: false, // ميعملش refetch لما أرجع للتبويب
      keepPreviousData: true,      // يحتفظ بالبيانات القديمة أثناء التحديث
    }
  )

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
            padding: '10px',
            marginBottom: '10px',
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
