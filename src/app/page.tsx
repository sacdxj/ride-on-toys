import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  const featuredProducts = [
    {
      id: 'sports-car',
      name: '豪华跑车',
      description: '仿真的跑车设计，配备LED灯、音乐播放器和可调节座椅，带给孩子们真实的驾驶体验。',
      price: 899,
      ageRange: '3-6岁',
      imageSrc: '/images/products/sports-car.jpg',
      badge: '热销',
    },
    {
      id: 'motorcycle',
      name: '平衡摩托车',
      description: '帮助儿童学习平衡和协调能力的理想选择，坚固耐用，安全可靠。',
      price: 599,
      ageRange: '2-5岁',
      imageSrc: '/images/products/motorcycle.jpg',
      badge: '新品',
    },
    {
      id: 'tractor',
      name: '迷你拖拉机',
      description: '农场主题设计，带有拖车功能，让孩子们体验农场生活的乐趣。',
      price: 799,
      ageRange: '4-8岁',
      imageSrc: '/images/products/tractor.jpg',
    },
  ];

  const latestPosts = [
    {
      slug: 'choosing-safe-ride-toys',
      title: '如何选择安全的乘骑玩具？',
      excerpt: '为孩子选择乘骑玩具时，安全是最重要的考虑因素。本文将为您介绍选择安全玩具的关键要点...',
      date: '2025-01-15',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Safe+Toys',
      category: '安全指南',
    },
    {
      slug: 'benefits-of-ride-toys',
      title: '乘骑玩具对儿童发展的益处',
      excerpt: '乘骑玩具不仅好玩，还能促进儿童的身体协调能力、空间认知能力和社交技能的发展...',
      date: '2025-01-10',
      author: '儿童发展专家',
      imageSrc: 'https://placehold.co/600x400?text=Child+Development',
      category: '育儿知识',
    },
    {
      slug: 'eco-friendly-materials',
      title: '我们为什么选择环保材料？',
      excerpt: '了解FunRide Toys如何通过使用可持续材料来保护环境和儿童健康...',
      date: '2025-01-05',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Eco+Friendly',
      category: '环保理念',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-orange to-primary-yellow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                让孩子在<br />
                <span className="text-primary-dark">安全</span>中快乐成长
              </h1>
              <p className="text-xl mb-8 text-primary-dark/90">
                FunRide Toys 提供优质的儿童乘骑玩具，采用环保材料，通过欧盟认证，
                专为3-8岁儿童设计。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="bg-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-dark transition-all duration-200">
                  浏览产品
                </Link>
                <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-orange transition-all duration-200">
                  了解更多
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero/happy-kids.jpg"
                alt="快乐的孩子玩乘骑玩具"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为什么选择 FunRide？</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们致力于为孩子提供最安全、最有趣的乘骑玩具
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">欧盟认证</h3>
              <p className="text-gray-600">所有产品通过严格的欧盟安全标准认证</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-2">环保材料</h3>
              <p className="text-gray-600">使用可回收、无毒的环保材料制造</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">精工制造</h3>
              <p className="text-gray-600">精密工艺，确保每个细节都完美无缺</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">家长信赖</h3>
              <p className="text-gray-600">超过50,000个家庭的信赖选择</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">热门产品</h2>
              <p className="text-gray-600">最受欢迎的乘骑玩具</p>
            </div>
            <Link href="/products" className="text-primary-orange font-semibold hover:text-primary-blue transition-colors duration-200">
              查看全部 →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Age Range Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">适合各个年龄段</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              根据孩子的年龄和能力，选择最适合的乘骑玩具
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-2">2-4岁</h3>
              <p className="text-gray-600 mb-4">适合初学者的简单车型，帮助培养平衡感</p>
              <Link href="/products?age=2-4" className="text-primary-blue font-semibold">
                浏览产品 →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-orange/10 to-primary-orange/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🏎️</div>
              <h3 className="text-2xl font-bold mb-2">4-6岁</h3>
              <p className="text-gray-600 mb-4">电动车型，带给孩子更多驾驶乐趣</p>
              <Link href="/products?age=4-6" className="text-primary-orange font-semibold">
                浏览产品 →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-purple/10 to-primary-purple/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚜</div>
              <h3 className="text-2xl font-bold mb-2">6-8岁</h3>
              <p className="text-gray-600 mb-4">高级车型，更多功能和更快的速度</p>
              <Link href="/products?age=6-8" className="text-primary-purple font-semibold">
                浏览产品 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">最新文章</h2>
              <p className="text-gray-600">育儿知识和产品资讯</p>
            </div>
            <Link href="/blog" className="text-primary-orange font-semibold hover:text-primary-blue transition-colors duration-200">
              查看全部 →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-orange to-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好给孩子一个快乐的童年了吗？</h2>
          <p className="text-xl mb-8 text-white/90">
            立即浏览我们的产品系列，为孩子找到完美的乘骑玩具
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary-orange px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark hover:text-white transition-all duration-200 shadow-lg"
          >
            立即购买
          </Link>
        </div>
      </section>
    </>
  );
}
