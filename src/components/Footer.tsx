import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于' },
    { href: '/products', label: '产品' },
    { href: '/blog', label: '博客' },
    { href: '/contact', label: '联系' },
  ];

  const legalLinks = [
    { href: '/privacy', label: '隐私政策' },
    { href: '/terms', label: '服务条款' },
    { href: '/safety', label: '安全认证' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary-orange">FunRide</span>
              <span className="text-primary-blue">Toys</span>
            </h3>
            <p className="text-gray-400 text-sm">
              为儿童提供安全、有趣的乘骑玩具
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">法律信息</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 中国上海市浦东新区</li>
              <li>📞 +86 400-123-4567</li>
              <li>✉️ info@funridetoys.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} FunRide Toys. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
