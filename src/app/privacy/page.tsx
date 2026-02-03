import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'FunRide Toys的隐私政策，了解我们如何收集、使用和保护您的个人信息。',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          最后更新日期：2025年1月15日
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 信息收集</h2>
          <p>
            FunRide Toys致力于保护您的隐私。我们收集的信息包括：
          </p>
          <ul>
            <li>您主动提供的信息（如姓名、电子邮件地址、电话号码等）</li>
            <li>通过cookies和类似技术自动收集的信息</li>
            <li>交易信息（订单、支付信息等）</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 信息使用</h2>
          <p>
            我们使用收集的信息用于：
          </p>
          <ul>
            <li>处理和完成您的订单</li>
            <li>提供客户服务和支持</li>
            <li>发送订单确认和更新</li>
            <li>发送营销通讯（在您同意的情况下）</li>
            <li>改进我们的产品和服务</li>
            <li>防止欺诈和确保安全</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 信息共享</h2>
          <p>
            我们不会出售、出租或交易您的个人信息。仅在以下情况下共享信息：
          </p>
          <ul>
            <li>与授权的服务提供商（如物流公司、支付处理商）</li>
            <li>遵守法律要求或法院命令</li>
            <li>保护我们的权利、财产或安全</li>
            <li>在您明确同意的情况下</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 数据安全</h2>
          <p>
            我们采取合理的技术和组织措施来保护您的个人信息免受未经授权的访问、使用或披露。然而，没有任何传输或存储方法是完全安全的。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
          <p>
            我们使用cookies和类似技术来改善您的浏览体验、分析网站使用情况和提供个性化内容。您可以通过浏览器设置管理cookies偏好。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 您的权利</h2>
          <p>
            您有权：
          </p>
          <ul>
            <li>访问您的个人信息</li>
            <li>更正不准确的信息</li>
            <li>删除您的个人信息</li>
            <li>反对或限制某些处理活动</li>
            <li>数据可携带性</li>
            <li>撤回同意</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 儿童隐私</h2>
          <p>
            我们的服务面向成年人，不会故意收集16岁以下儿童的个人信息。如果您是父母或监护人，并发现您的孩子向我们提供了个人信息，请联系我们。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 政策更新</h2>
          <p>
            我们可能会不时更新本隐私政策。更新后的政策将在本页面上发布，并注明修订日期。重大变更时，我们会通过电子邮件或网站通知您。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 联系我们</h2>
          <p>
            如果您对本隐私政策有任何疑问或疑虑，请通过以下方式联系我们：
          </p>
          <p>
            邮箱：privacy@funridetoys.com<br />
            电话：400-123-4567<br />
            地址：中国上海市浦东新区张江高科技园区科苑路88号FunRide大厦
          </p>
        </section>
      </div>
    </div>
  );
}
