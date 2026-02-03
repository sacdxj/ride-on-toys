import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款',
  description: 'FunRide Toys的服务条款，了解使用我们网站和服务的规则和条件。',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">服务条款</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          最后更新日期：2025年1月15日
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 接受条款</h2>
          <p>
            通过访问和使用FunRide Toys网站，您同意遵守这些服务条款。如果您不同意这些条款，请不要使用本网站。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 产品信息</h2>
          <p>
            我们努力确保网站上所有产品信息的准确性。但是，我们不保证产品描述、颜色或内容完全准确、完整、可靠或无错误。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 价格和付款</h2>
          <p>
            除非另有说明，否则网站上显示的所有价格均以人民币为单位，不包括税费和配送费用。我们保留随时更改价格的权利。
          </p>
          <p>
            我们接受以下付款方式：
          </p>
          <ul>
            <li>信用卡（Visa、MasterCard、American Express）</li>
            <li>借记卡</li>
            <li>支付宝</li>
            <li>微信支付</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 订单和配送</h2>
          <p>
            下单后，您将收到确认电子邮件。所有订单均须经我们确认；我们保留因任何原因拒绝或取消订单的权利。
          </p>
          <p>
            配送时间：
          </p>
          <ul>
            <li>订单处理时间：2-3个工作日</li>
            <li>配送时间：3-5个工作日（偏远地区可能需要更长时间）</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 退货和退款</h2>
          <p>
            退货政策：
          </p>
          <ul>
            <li>收货后7天内，支持无理由退货（产品必须完好无损）</li>
            <li>收到退货后14天内处理退款</li>
            <li>退货运费由买家承担，除非产品存在质量问题</li>
            <li>定制产品不支持退货</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 保修</h2>
          <p>
            所有FunRide产品均享有1年免费保修，涵盖所有非人为损坏的零部件。保修不包括：
          </p>
          <ul>
            <li>正常磨损和消耗品</li>
            <li>意外损坏或误用</li>
            <li>未经授权的维修或改装</li>
            <li>电池（6个月后性能衰减属正常现象）</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 知识产权</h2>
          <p>
            本网站的所有内容，包括但不限于文本、图形、标志、图像和软件，均归FunRide Toys或其许可方所有，受知识产权法保护。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 用户责任</h2>
          <p>
            使用本网站时，您同意：
          </p>
          <ul>
            <li>不将网站用于任何非法目的</li>
            <li>不尝试未经授权访问网站或其网络</li>
            <li>不干扰或破坏网站或连接到网站的网络</li>
            <li>不使用设备、软件或程序干扰网站运行</li>
            <li>不传播病毒或任何破坏性代码</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 责任限制</h2>
          <p>
            在法律允许的最大范围内，FunRide Toys不对因使用或无法使用本网站而导致的任何直接、间接、偶然、特殊或后果性损害承担责任。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 争议解决</h2>
          <p>
            因这些服务条款引起的任何争议应首先通过友好协商解决。如果协商不成，任何一方均可向中国上海市有管辖权的人民法院提起诉讼。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. 条款修改</h2>
          <p>
            我们保留随时修改这些服务条款的权利。修改后的条款将在本页面上发布，并自发布之日起生效。继续使用本网站即表示您接受修改后的条款。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. 联系我们</h2>
          <p>
            如果您对这些服务条款有任何疑问，请通过以下方式联系我们：
          </p>
          <p>
            邮箱：legal@funridetoys.com<br />
            电话：400-123-4567<br />
            地址：中国上海市浦东新区张江高科技园区科苑路88号FunRide大厦
          </p>
        </section>
      </div>
    </div>
  );
}
