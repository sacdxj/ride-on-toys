import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解FunRide Toys的品牌故事、使命和价值观。我们致力于为孩子提供安全、有趣的乘骑玩具。',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于 FunRide Toys</h1>
            <p className="text-xl text-white/90">
              我们相信，每个孩子都值得拥有一个充满快乐和探索的童年
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的故事</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  FunRide Toys 成立于2015年，由一群热爱儿童教育的父母和设计师共同创立。
                  我们深知，在当今数字化时代，孩子们越来越沉迷于电子设备，缺乏户外活动和体育锻炼。
                </p>
                <p>
                  我们的使命是通过提供安全、有趣、富有创意的乘骑玩具，鼓励孩子们走出家门，
                  在户外探索世界，发展身体协调能力，培养社交技能。
                </p>
                <p>
                  多年来，我们已经服务了超过50,000个家庭，获得了家长和孩子们的一致好评。
                  我们将继续坚持品质和安全，为更多孩子带来快乐。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x500?text=Our+Story"
                alt="我们的故事"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的使命与价值观</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              一切为了孩子的快乐成长
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">使命</h3>
              <p className="text-gray-600 leading-relaxed">
                通过提供安全、有趣、富有创意的乘骑玩具，激发孩子们的好奇心，
                鼓励他们探索世界，培养健康的生活习惯。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">愿景</h3>
              <p className="text-gray-600 leading-relaxed">
                成为中国最受信赖的儿童乘骑玩具品牌，让每个孩子都能拥有
                一个充满欢乐和美好回忆的童年。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary-yellow/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">价值观</h3>
              <p className="text-gray-600 leading-relaxed">
                安全第一、品质至上、创新设计、环保可持续、客户满意。
                我们始终将孩子的安全和健康放在首位。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">安全认证</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们的产品通过了多项国际安全认证
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-neutral-light rounded-xl">
              <div className="text-5xl mb-4">🇪🇺</div>
              <h3 className="font-bold mb-2">CE认证</h3>
              <p className="text-sm text-gray-600">欧盟安全标准</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-xl">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold mb-2">环保认证</h3>
              <p className="text-sm text-gray-600">无毒环保材料</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-xl">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">3C认证</h3>
              <p className="text-sm text-gray-600">中国强制产品认证</p>
            </div>
            <div className="text-center p-6 bg-neutral-light rounded-xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">质量管理体系</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的团队</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              由专业的儿童教育专家、设计师和工程师组成
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: '张明', role: '创始人 & CEO', emoji: '👨‍💼' },
              { name: '李婷', role: '首席设计师', emoji: '👩‍🎨' },
              { name: '王强', role: '安全工程师', emoji: '👨‍🔧' },
              { name: '赵丽', role: '儿童教育专家', emoji: '👩‍🏫' },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-orange">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
