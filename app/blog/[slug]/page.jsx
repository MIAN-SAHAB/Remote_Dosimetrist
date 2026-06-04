import { fetchPostBySlug } from '@/lib/api'
import { canonicalFor } from '@/lib/metadata'
import PageHero from '@/components/PageHero'
import BlogDetailClient from '@/components/BlogDetailClient'

export const revalidate = 300

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  const title = post?.yoast_head_json?.title || post?.title?.rendered || 'Blog Post'
  const description =
    post?.yoast_head_json?.description ||
    post?.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) ||
    ''

  return {
    title,
    description,
    alternates: {
      canonical: canonicalFor(`/blog/${slug}`),
    },
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  const heroTitle = post?.title?.rendered?.replace(/<[^>]*>/g, '') || 'Blog Post'

  return (
    <section className="ip-page-enter ip-grain bg-white">
      <PageHero
        title={heroTitle}
        breadcrumb="Blog"
      />

      <BlogDetailClient post={post} />
    </section>
  )
}
