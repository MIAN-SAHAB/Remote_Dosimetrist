'use client'
import Link from 'next/link'
import SectionReveal from './SectionReveal'

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getFeaturedImage(post) {
  try {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
  } catch {
    return null
  }
}

function getFeaturedImageAlt(post) {
  try {
    return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title?.rendered || 'Blog post image'
  } catch {
    return post.title?.rendered || 'Blog post image'
  }
}

function getAuthor(post) {
  try {
    return post._embedded?.author?.[0]?.name || null
  } catch {
    return null
  }
}

function getCategories(post) {
  try {
    const terms = post._embedded?.['wp:term']
    if (terms && terms[0]) {
      return terms[0].map((t) => t.name)
    }
    return []
  } catch {
    return []
  }
}

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&hellip;|&amp;|&nbsp;|&#8217;|&#8230;/g, (m) => {
    const map = { '&hellip;': '…', '&amp;': '&', '&nbsp;': ' ', '&#8217;': "'", '&#8230;': '…' }
    return map[m] || m
  })
}

export default function BlogDetailClient({ post }) {
  if (!post) return null

  const featuredImage = getFeaturedImage(post)
  const imageAlt = getFeaturedImageAlt(post)
  const author = getAuthor(post)
  const categories = getCategories(post)
  const date = formatDate(post.date)
  const title = stripHtml(post.title?.rendered)
  const content = post.content?.rendered || ''

  return (
    <>
      <div className="ip-section ip-section-white py-12 md:py-20 relative">
        <div className="ip-ambient ip-ambient-1" />
        <div className="ip-ambient ip-ambient-2" />

        <div className="max-w-[860px] mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="sr-item">
              <Link href="/blog" className="blog-back-link">
                <span>←</span> Back to Blog
              </Link>
            </div>

            {/* Meta */}
            <div className="sr-item blog-detail-meta">
              {date && (
                <div className="blog-detail-meta-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span>{date}</span>
                </div>
              )}

              {author && (
                <>
                  <div className="blog-detail-meta-dot" />
                  <div className="blog-detail-meta-item">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>{author}</span>
                  </div>
                </>
              )}

              {categories.length > 0 && (
                <>
                  <div className="blog-detail-meta-dot" />
                  <div className="blog-detail-meta-item">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    <span>{categories.join(', ')}</span>
                  </div>
                </>
              )}
            </div>

            {/* Featured Image */}
            {featuredImage && (
              <div className="sr-item blog-featured-image">
                <img src={featuredImage} alt={imageAlt} />
              </div>
            )}

            {/* Post Content */}
            <div
              className="sr-item blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </SectionReveal>
        </div>
      </div>
    </>
  )
}
