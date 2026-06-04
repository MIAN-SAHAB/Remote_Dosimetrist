'use client'
import Link from 'next/link'
import SectionReveal from './SectionReveal'

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&hellip;|&amp;|&nbsp;|&#8217;|&#8230;/g, (m) => {
    const map = { '&hellip;': '…', '&amp;': '&', '&nbsp;': ' ', '&#8217;': "'", '&#8230;': '…' }
    return map[m] || m
  })
}

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

function getCategory(post) {
  try {
    const terms = post._embedded?.['wp:term']
    if (terms && terms[0] && terms[0].length > 0) {
      return terms[0][0]?.name || null
    }
    return null
  } catch {
    return null
  }
}

export default function BlogListClient({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="blog-empty">
        <div className="blog-empty-icon">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#003777" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
        <h3>No Posts Yet</h3>
        <p>Check back soon for new blog posts.</p>
      </div>
    )
  }

  return (
    <SectionReveal stagger={0.1}>
      <div className="blog-grid">
        {posts.map((post, index) => {
          const featuredImage = getFeaturedImage(post)
          const imageAlt = getFeaturedImageAlt(post)
          const category = getCategory(post)
          const excerpt = stripHtml(post.excerpt?.rendered)
          const title = stripHtml(post.title?.rendered)
          const date = formatDate(post.date)
          const slug = post.slug

          return (
            <div className="sr-item" key={post.id || index}>
              <Link href={`/blog/${slug}`} className="block" style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="blog-card">
                  <div className="blog-card-image">
                    {featuredImage ? (
                      <img
                        src={featuredImage}
                        alt={imageAlt}
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#b0bec5" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="blog-card-body">
                    {category && (
                      <span className="blog-card-category">{category}</span>
                    )}
                    <h2 className="blog-card-title">{title}</h2>
                    <p className="blog-card-excerpt">{excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-date">{date}</span>
                      <span className="blog-card-readmore">
                        Read More <span>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )
        })}
      </div>
    </SectionReveal>
  )
}
