import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="万联通 Logo" className="w-10 h-10 object-contain mr-3" />
              <div>
                <div className="text-2xl font-black tracking-tighter">万连通</div>
                <div className="text-xs text-gray-400 mt-1">万联易达集团旗下物流服务平台</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-6">
              万联通是5A级网络货运平台，依托互联网平台货物流通，为客户提供全程可视化的货运服务，实现降本增效，打造数字化货运新生态。
            </p>
            <div className="flex space-x-4">
              <a href="tel:400-015-8686" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                400-015-8686
              </a>
              <a href="mailto:service@wanliantong.com" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                客服邮箱
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">核心服务</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">网络货运平台</a></li>
              <li><a href="#" className="hover:text-white transition-colors">车后服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">增值服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ETC通行</a></li>
              <li><a href="#" className="hover:text-white transition-colors">智慧能源</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">支持中心</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务协议</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">合规保障</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 万联通物流服务平台. 版权所有 | 津ICP备2021000000号
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>5A级网络货运平台</span>
              <span>•</span>
              <span>ISO 9001认证</span>
              <span>•</span>
              <span>信息安全等级保护</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;