import { fetchPosts, fetchPageBySlug } from '@/lib/api'
import { canonicalFor } from '@/lib/metadata'
import PageHero from '@/components/PageHero'
import BlogListClient from '@/components/BlogListClient'

export const revalidate = 300

export async function generateMetadata() {
  const data = await fetchPageBySlug('home')
  const yoastTitle = data?.yoast_head_json?.title || ''
  const shortSiteName = yoastTitle.includes('|') ? yoastTitle.split('|').pop().trim() : yoastTitle || 'Remote Dosimetrist'

  return {
    title: `Blog | ${shortSiteName}`,
    description:
      data?.yoast_head_json?.description ||
      'Read the latest insights, tips, and updates on remote dosimetry services.',
    alternates: {
      canonical: canonicalFor('/blog'),
    },
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts(1, 12)

  return (
    <section className="ip-page-enter ip-grain bg-white">
      <PageHero
        title="Blog"
        subtitle="Insights, updates, and expert perspectives on remote dosimetry"
        breadcrumb="Blog"
      />

      <div className="ip-section ip-section-white py-12 md:py-24 relative">
        <div className="ip-ambient ip-ambient-1" />
        <div className="ip-ambient ip-ambient-2" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <BlogListClient posts={posts} />
        </div>
      </div>
    </section>
  )
}
