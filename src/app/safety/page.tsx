import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '安全认证',
  description: 'FunRide Toys通过多项国际安全认证，包括CE认证、3C认证、环保认证和ISO 9001质量管理体系。',
};

export default function SafetyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-orange to-primary-yellow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">安全认证</h1>
            <p className="text-xl text-primary-dark/90">
              我们的产品通过了多项国际权威认证，确保孩子的安全
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">国际认证</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们的产品符合最严格的安全标准
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CE认证 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🇪🇺</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">CE认证</h3>
              <p className="text-gray-600 mb-4">
                欧盟安全标准认证，符合EN71玩具安全指令
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>✓ 机械物理性能测试</li>
                <li>✓ 易燃性测试</li>
                <li>✓ 有害物质迁移测试</li>
              </ul>
            </div>

            {/* 3C认证 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🇨🇳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">3C认证</h3>
              <p className="text-gray-600 mb-4">
                中国强制性产品认证，确保产品质量和安全
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>✓ 国家强制性标准</li>
                <li>✓ 定期工厂检查</li>
                <li>✓ 市场监督抽查</li>
              </ul>
            </div>

            {/* 环保认证 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-primary-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">环保认证</h3>
              <p className="text-gray-600 mb-4">
                无毒环保材料认证，保护儿童健康
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>✓ 无重金属</li>
                <li>✓ 无甲醛</li>
                <li>✓ 可回收材料</li>
              </ul>
            </div>

            {/* ISO认证 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">ISO 9001</h3>
              <p className="text-gray-600 mb-4">
                国际质量管理体系认证
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2">
                <li>✓ 全面质量管理</li>
                <li>✓ 持续改进机制</li>
                <li>✓ 客户满意度保证</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">安全特性</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              每个产品都经过精心设计，确保儿童的安全
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">安全带系统</h3>
              <p className="text-gray-600">
                所有电动产品都配备可调节的安全带，确保孩子在行驶过程中保持安全。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎚️</div>
              <h3 className="text-xl font-bold mb-2">速度控制</h3>
              <p className="text-gray-600">
                家长可以通过遥控器控制车辆速度，或者设置最高速度限制，确保适合孩子的能力。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🛑</div>
              <h3 className="text-xl font-bold mb-2">紧急制动</h3>
              <p className="text-gray-600">
                家长可以通过遥控器随时停车，遇到危险情况时可以立即停止车辆。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-2">电池保护</h3>
              <p className="text-gray-600">
                采用高品质锂电池，配备过充、过放、短路保护，确保使用安全。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold mb-2">温度保护</h3>
              <p className="text-gray-600">
                电机和电池都有温度传感器，过热时会自动断电，防止设备损坏。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-bold mb-2">防夹设计</h3>
              <p className="text-gray-600">
                所有活动部件都有防护罩，防止儿童手指被夹伤。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">测试流程</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              每个产品在上市前都经过严格的测试
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: '设计审查', desc: '安全风险评估' },
              { step: '02', title: '材料测试', desc: '无毒无害检测' },
              { step: '03', title: '原型测试', desc: '功能安全验证' },
              { step: '04', title: '生产检验', desc: '质量控制检查' },
              { step: '05', title: '第三方认证', desc: '权威机构认证' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-orange to-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            还有安全问题？
          </h2>
          <p className="text-xl mb-8 text-white/90">
            我们的专业团队随时为您解答
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-orange px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark hover:text-white transition-all duration-200"
          >
            联系我们
          </a>
        </div>
      </section>
    </>
  );
}
