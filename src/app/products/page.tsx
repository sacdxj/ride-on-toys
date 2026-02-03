import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: '产品系列',
  description: '浏览FunRide Toys的全部乘骑玩具产品，包括跑车、摩托车、拖拉机等，适合3-8岁儿童。',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'sports-car',
      name: '豪华跑车',
      description: '仿真的跑车设计，配备LED灯、音乐播放器和可调节座椅，带给孩子们真实的驾驶体验。',
      price: 899,
      ageRange: '3-6岁',
      imageSrc: 'https://raw.githubusercontent.com/sacdxj/ride-on-toys/main/public/images/products/sports-car.jpg',
      badge: '热销',
    },
    {
      id: 'motorcycle',
      name: '平衡摩托车',
      description: '帮助儿童学习平衡和协调能力的理想选择，坚固耐用，安全可靠。',
      price: 599,
      ageRange: '2-5岁',
      imageSrc: 'https://raw.githubusercontent.com/sacdxj/ride-on-toys/main/public/images/products/motorcycle.jpg',
      badge: '新品',
    },
    {
      id: 'tractor',
      name: '迷你拖拉机',
      description: '农场主题设计，带有拖车功能，让孩子们体验农场生活的乐趣。',
      price: 799,
      ageRange: '4-8岁',
      imageSrc: 'https://raw.githubusercontent.com/sacdxj/ride-on-toys/main/public/images/products/tractor.jpg',
    },
    {
      id: 'jeep',
      name: '越野吉普车',
      description: '强大的越野能力，适合在各种地形上行驶，配备遥控器和安全带。',
      price: 1299,
      ageRange: '4-8岁',
      imageSrc: 'https://placehold.co/600x400?text=Jeep',
      badge: '推荐',
    },
    {
      id: 'police-car',
      name: '警车',
      description: '仿真警车设计，带有警灯、警报器和麦克风，让孩子们体验当警察的乐趣。',
      price: 999,
      ageRange: '3-7岁',
      imageSrc: 'https://raw.githubusercontent.com/sacdxj/ride-on-toys/main/public/images/products/police-car.jpg',
    },
    {
      id: 'bus',
      name: '双层巴士',
      description: '经典的伦敦双层巴士设计，可容纳两个儿童，适合和朋友一起玩耍。',
      price: 1199,
      ageRange: '3-8岁',
      imageSrc: 'https://placehold.co/600x400?text=Bus',
      badge: '限量',
    },
    {
      id: 'racing-cart',
      name: '赛车卡丁车',
      description: '流线型设计，可调节速度，适合赛车爱好者，带有一键启动功能。',
      price: 1099,
      ageRange: '5-8岁',
      imageSrc: 'https://placehold.co/600x400?text=Racing+Cart',
    },
    {
      id: 'fire-truck',
      name: '消防车',
      description: '仿真消防车设计，带有云梯、水枪和警报器，培养孩子的安全意识。',
      price: 1199,
      ageRange: '4-8岁',
      imageSrc: 'https://placehold.co/600x400?text=Fire+Truck',
    },
    {
      id: 'scooter',
      name: '电动滑板车',
      description: '轻便易操控，适合初学者，带有可调节高度的手柄和LED轮子。',
      price: 699,
      ageRange: '5-8岁',
      imageSrc: 'https://placehold.co/600x400?text=Scooter',
      badge: '特价',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-orange to-primary-yellow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">产品系列</h1>
            <p className="text-xl text-primary-dark/90">
              为各个年龄段的孩子精心设计的乘骑玩具
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-primary-orange text-white rounded-full font-semibold">
              全部产品
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-primary-orange hover:text-white transition-colors duration-200">
              2-4岁
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-primary-orange hover:text-white transition-colors duration-200">
              4-6岁
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-primary-orange hover:text-white transition-colors duration-200">
              6-8岁
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            需要帮助选择产品？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我们的专业团队随时为您提供咨询建议
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-blue transition-colors duration-200"
          >
            联系我们
          </a>
        </div>
      </section>
    </>
  );
}
