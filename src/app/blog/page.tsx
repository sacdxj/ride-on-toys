import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: '博客',
  description: '阅读FunRide Toys的最新文章，了解育儿知识、产品资讯和安全指南。',
};

export default function BlogPage() {
  const posts = [
    {
      slug: 'choosing-safe-ride-toys',
      title: '如何选择安全的乘骑玩具？',
      excerpt: '为孩子选择乘骑玩具时，安全是最重要的考虑因素。本文将为您介绍选择安全玩具的关键要点，包括材料质量、安全认证、年龄适配性等方面，帮助家长做出明智的选择。',
      date: '2025-01-15',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Safe+Toys',
      category: '安全指南',
    },
    {
      slug: 'benefits-of-ride-toys',
      title: '乘骑玩具对儿童发展的益处',
      excerpt: '乘骑玩具不仅好玩，还能促进儿童的身体协调能力、空间认知能力和社交技能的发展。本文将详细介绍乘骑玩具如何帮助孩子在游戏中学习和成长。',
      date: '2025-01-10',
      author: '儿童发展专家',
      imageSrc: 'https://placehold.co/600x400?text=Child+Development',
      category: '育儿知识',
    },
    {
      slug: 'eco-friendly-materials',
      title: '我们为什么选择环保材料？',
      excerpt: '了解FunRide Toys如何通过使用可持续材料来保护环境和儿童健康。我们承诺使用无毒、可回收的材料，为孩子们创造更美好的未来。',
      date: '2025-01-05',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Eco+Friendly',
      category: '环保理念',
    },
    {
      slug: 'outdoor-play-importance',
      title: '户外游戏对儿童成长的重要性',
      excerpt: '在数字化时代，孩子们越来越缺乏户外活动。本文将探讨户外游戏对儿童身心发展的积极影响，以及如何鼓励孩子多参与户外活动。',
      date: '2024-12-28',
      author: '育儿专家',
      imageSrc: 'https://placehold.co/600x400?text=Outdoor+Play',
      category: '育儿知识',
    },
    {
      slug: 'maintaining-ride-toys',
      title: '如何维护和保养乘骑玩具',
      excerpt: '正确的维护和保养可以延长乘骑玩具的使用寿命，确保孩子的安全。本文提供详细的保养指南和常见问题解决方案。',
      date: '2024-12-20',
      author: 'FunRide 技术团队',
      imageSrc: 'https://placehold.co/600x400?text=Maintenance',
      category: '产品指南',
    },
    {
      slug: 'best-ride-toys-2025',
      title: '2025年最受欢迎的乘骑玩具推荐',
      excerpt: '我们精选了2025年最受欢迎的乘骑玩具，帮助家长为孩子选择最合适的产品。包括不同年龄段和预算的推荐。',
      date: '2024-12-15',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Best+Toys+2025',
      category: '产品推荐',
    },
    {
      slug: 'balance-bike-guide',
      title: '平衡车选购指南：从入门到精通',
      excerpt: '平衡车是幼儿学习骑行的理想工具。本文详细介绍如何选择适合孩子的平衡车，以及如何循序渐进地教授孩子骑行技巧。',
      date: '2024-12-10',
      author: '骑行教练',
      imageSrc: 'https://placehold.co/600x400?text=Balance+Bike',
      category: '产品指南',
    },
    {
      slug: 'safety-first-approach',
      title: '安全第一：FunRide的质量控制体系',
      excerpt: '深入了解FunRide Toys严格的质量控制体系，从原材料采购到成品检测，每个环节都确保产品达到最高的安全标准。',
      date: '2024-12-05',
      author: '质量控制团队',
      imageSrc: 'https://placehold.co/600x400?text=Quality+Control',
      category: '公司动态',
    },
    {
      slug: 'winter-outdoor-activities',
      title: '冬季户外游戏指南',
      excerpt: '冬天也可以让孩子享受户外游戏的乐趣！本文提供冬季户外游戏的安全提示和有趣的活动建议，让孩子在寒冷天气中也能快乐玩耍。',
      date: '2024-11-28',
      author: 'FunRide 团队',
      imageSrc: 'https://placehold.co/600x400?text=Winter+Play',
      category: '育儿知识',
    },
  ];

  const categories = [
    { name: '全部', count: posts.length },
    { name: '安全指南', count: 2 },
    { name: '育儿知识', count: 4 },
    { name: '产品指南', count: 3 },
    { name: '环保理念', count: 1 },
    { name: '产品推荐', count: 1 },
    { name: '公司动态', count: 1 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-purple to-primary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">博客</h1>
            <p className="text-xl text-white/90">
              育儿知识、产品资讯和安全指南
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">分类</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-orange/10 hover:text-primary-orange transition-colors duration-200 flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">搜索</h3>
                  <input
                    type="search"
                    placeholder="搜索文章..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  />
                </div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">订阅我们的新闻通讯</h2>
          <p className="text-lg mb-8 text-white/90">
            获取最新的育儿知识、产品优惠和安全指南
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="您的邮箱地址"
              required
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-primary-orange rounded-full font-bold hover:bg-primary-dark hover:text-white transition-colors duration-200"
            >
              订阅
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
