import React from 'react';
import { ArrowRight, Download, Truck, Shield, TrendingUp } from 'lucide-react';
import { PLATFORM_MODULES } from '../constants';

const PlatformModules: React.FC = () => {
  return (
    <section id="platforms" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-wanlian-red/10 text-wanlian-red text-sm font-bold rounded-full mb-6">
            核心能力
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            三大核心平台
            <br />
            <span className="text-wanlian-red">构建物流新生态</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            依托万联通强大的运力基石，打造透明、标准、高效的车后综合服务体系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLATFORM_MODULES.map((module, index) => (
            <div
              key={module.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-[32px] p-8 border border-gray-100 hover:border-wanlian-red/30 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Module Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-wanlian-red/10 to-red-600/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">{module.icon}</div>
              </div>

              {/* Module Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wanlian-red transition-colors">
                {module.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {module.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {module.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-wanlian-red rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full py-4 bg-wanlian-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg group-hover:shadow-xl group-hover:shadow-red-600/30 flex items-center justify-center space-x-2">
                <span>{module.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Downloads for Logistics Module */}
              {module.downloads && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">产品下载</h4>
                  <div className="space-y-4">
                    {module.downloads.map((download, idx) => (
                      <div key={idx} className="flex items-center bg-white rounded-xl p-4 border border-gray-200 hover:border-wanlian-red/30 transition-colors">
                        <div className="bg-white p-2 rounded-lg border border-gray-200 mr-4">
                          <img src={download.qrUrl} alt={download.name} className="w-16 h-16" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{download.name}</div>
                          <div className="text-sm text-gray-500">扫码一键下载</div>
                        </div>
                        <Download className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="mt-20 bg-gradient-to-r from-wanlian-red to-red-700 rounded-[32px] p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">平台实力见证</h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            万联通已服务超过90万注册司机，连接6000+企业会员，覆盖全国2800+区县
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">90万+</div>
              <div className="text-red-200 text-sm">注册司机</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">6000+</div>
              <div className="text-red-200 text-sm">企业会员</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">2800+</div>
              <div className="text-red-200 text-sm">服务区县</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">2.6万</div>
              <div className="text-red-200 text-sm">承运总量(万吨)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformModules;