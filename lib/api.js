const API = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPageBySlug(slug) {
  try {
    const res = await fetch(
      `${API}wp/v2/pages?slug=${slug}&acf_format=standard&_embed&status=publish`,
      {
        signal: AbortSignal.timeout(30000),
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}

export async function fetchPosts(page = 1, perPage = 12) {
  try {
    const res = await fetch(
      `${API}wp/v2/posts?page=${page}&per_page=${perPage}&_embed&acf_format=standard&status=publish`,
      {
        signal: AbortSignal.timeout(30000),
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const res = await fetch(
      `${API}wp/v2/posts?slug=${slug}&_embed&acf_format=standard&status=publish`,
      {
        signal: AbortSignal.timeout(30000),
        next: { revalidate: 60 },
      }
    );

    const data = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}