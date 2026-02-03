import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系FunRide Toys，我们的专业团队随时为您提供咨询服务。客户满意度是我们最重要的目标。',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-white/90">
              我们随时为您解答疑问，提供专业的咨询服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">联系方式</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">公司地址</h3>
                    <p className="text-gray-600">
                      中国上海市浦东新区张江高科技园区<br />
                      科苑路88号FunRide大厦
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">客服热线</h3>
                    <p className="text-gray-600">
                      400-123-4567（全国免费热线）<br />
                      工作时间：周一至周五 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-yellow/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">电子邮箱</h3>
                    <p className="text-gray-600">
                      info@funridetoys.com<br />
                      support@funridetoys.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-purple/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">社交媒体</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-gray-600 hover:text-primary-orange transition-colors duration-200">
                        微信公众号
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary-orange transition-colors duration-200">
                        微博
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary-orange transition-colors duration-200">
                        抖音
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-neutral-light rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p>地图加载中...</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">给我们留言</h2>
              <p className="text-gray-600 mb-8">
                请填写下面的表单，我们会在24小时内回复您
              </p>

              <form
                action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`}
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    placeholder="请输入您的邮箱"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    placeholder="请输入您的电话（可选）"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    主题 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  >
                    <option value="">请选择主题</option>
                    <option value="product-inquiry">产品咨询</option>
                    <option value="order-status">订单查询</option>
                    <option value="after-sales">售后服务</option>
                    <option value="cooperation">商务合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    留言内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange resize-none"
                    placeholder="请描述您的问题或需求..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white py-4 rounded-full font-bold text-lg hover:bg-primary-blue transition-colors duration-200"
                >
                  发送留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h2>
            <p className="text-xl text-gray-600">快速找到您需要的答案</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '你们的产品有保修期吗？',
                a: '是的，所有FunRide产品都提供1年免费保修服务，涵盖所有非人为损坏的零部件。',
              },
              {
                q: '配送需要多长时间？',
                a: '一般情况下，订单会在2-3个工作日内发货，配送时间为3-5个工作日。偏远地区可能需要额外时间。',
              },
              {
                q: '可以退货吗？',
                a: '自收货之日起7天内，如产品无损坏且包装完整，支持无理由退货。退货产生的运费由买家承担。',
              },
              {
                q: '产品需要自己组装吗？',
                a: '大部分产品需要简单的组装，我们提供详细的说明书和视频教程。部分产品支持付费上门安装服务。',
              },
              {
                q: '乘骑玩具的最大承重是多少？',
                a: '不同型号的产品承重不同，一般在30-50公斤之间。请在产品页面查看具体规格。',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm group"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-orange transition-colors duration-200">
                    {faq.q}
                  </h3>
                  <span className="text-2xl text-gray-400 group-open:text-primary-orange transition-colors duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
