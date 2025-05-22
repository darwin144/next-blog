// components/Home.tsx
type Post = {
    title: string
    slug: string
    summary: string
    date: string
  }
  
  type HomeProps = {
    posts: Post[]
  }
  
  export default function Home({ posts }: HomeProps) {
    return (
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">My Blog</h1>
        {posts.map((post) => (
          <article key={post.slug} className="mb-8 border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
            <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-2 block">
              Read more →
            </a>
          </article>
        ))}
      </main>
    )
  }
  