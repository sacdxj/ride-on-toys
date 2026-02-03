import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSrc: string;
  category?: string;
}

const BlogCard = ({ slug, title, excerpt, date, author, imageSrc, category }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
          />
          {category && (
            <span className="absolute top-4 left-4 bg-primary-yellow text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={date}>{date}</time>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-orange transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary-orange font-semibold hover:text-primary-blue transition-colors duration-200 inline-flex items-center"
        >
          阅读更多
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
