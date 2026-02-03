import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// This would normally fetch from the CMS
async function getBlogPost(slug: string) {
  // Simulated data - in production, fetch from Decap CMS
  const posts: Record<string, any> = {
    'choosing-safe-ride-toys': {
      title: '如何选择安全的乘骑玩具？',
      date: '2025-01-15',
      author: 'FunRide 团队',
      category: '安全指南',
      imageSrc: 'https://placehold.co/1200x600?text=Safe+Toys',
      content: `
        <p>为孩子选择乘骑玩具时，安全是最重要的考虑因素。本文将为您介绍选择安全玩具的关键要点。</p>

        <h2>1. 检查安全认证</h2>
        <p>确保产品通过了权威的安全认证，如CE认证、3C认证等。这些认证表明产品符合严格的安全标准。</p>

        <h2>2. 选择适合年龄的产品</h2>
        <p>不同的乘骑玩具适合不同年龄段的孩子。请仔细阅读产品标签上的年龄建议，选择适合您孩子年龄和体型的产品。</p>

        <h2>3. 检查材料质量</h2>
        <p>优质的产品应该使用无毒、环保的材料。检查是否有刺鼻的气味，边角是否圆润光滑，避免划伤孩子。</p>

        <h2>4. 考虑稳定性</h2>
        <p>对于较小的孩子，选择重心低、底座宽大的产品，这样可以减少翻车的风险。电动玩具应该有速度限制功能。</p>

        <h2>5. 查看用户评价</h2>
        <p>在购买前，查看其他家长的评价和反馈，了解产品的实际使用情况和安全性。</p>

        <p>记住，即使选择了最安全的玩具，家长的监督也是必不可少的。确保孩子在安全的环境中玩耍，并始终佩戴适当的防护装备。</p>
      `,
    },
  };

  return posts[slug] || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: '文章未找到',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <Link href="/blog" className="text-primary-orange hover:text-primary-blue">
            返回博客首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/blog" className="hover:text-primary-orange">
            博客
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary-orange">{post.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-600">
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-3">•</span>
          <span>{post.author}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-12 rounded-2xl overflow-hidden">
        <Image
          src={post.imageSrc}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full"
        />
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share */}
      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-bold mb-4">分享这篇文章</h3>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-primary-orange text-white rounded-full hover:bg-primary-blue transition-colors duration-200">
            微信
          </button>
          <button className="px-6 py-2 bg-primary-orange text-white rounded-full hover:bg-primary-blue transition-colors duration-200">
            微博
          </button>
          <button className="px-6 py-2 bg-primary-orange text-white rounded-full hover:bg-primary-blue transition-colors duration-200">
            复制链接
          </button>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16 pt-8 border-t">
        <h3 className="text-2xl font-bold mb-6">相关文章</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/benefits-of-ride-toys" className="group">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold group-hover:text-primary-orange transition-colors duration-200">
                乘骑玩具对儿童发展的益处
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                了解乘骑玩具如何促进儿童的身体和认知发展
              </p>
            </div>
          </Link>
          <Link href="/blog/safety-first-approach" className="group">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold group-hover:text-primary-orange transition-colors duration-200">
                安全第一：FunRide的质量控制体系
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                深入了解我们的质量控制和安全标准
              </p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
