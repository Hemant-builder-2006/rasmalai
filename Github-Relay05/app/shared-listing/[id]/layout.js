const getBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (envUrl?.startsWith('http://') || envUrl?.startsWith('https://')) {
    return envUrl;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

const stripHtml = (text = '') => text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

async function fetchPublicListing(id) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/listings/public/${id}`, {
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data?.success ? data.listing : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const listing = await fetchPublicListing(id);

  if (!listing) {
    return {
      title: 'Shared Listing',
      description: 'View this CampusMart listing.',
    };
  }

  const imageUrl = listing.images?.[0]?.url || listing.image || '/logo.png';
  const description = stripHtml(listing.description || `Check out ${listing.title} on CampusMart`).slice(0, 160);

  return {
    title: `${listing.title} | CampusMart`,
    description,
    openGraph: {
      title: listing.title,
      description,
      type: 'website',
      url: `/shared-listing/${id}`,
      images: [
        {
          url: imageUrl,
          alt: listing.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: listing.title,
      description,
      images: [imageUrl],
    },
  };
}

export default function SharedListingLayout({ children }) {
  return children;
}
