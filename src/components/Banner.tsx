import React from 'react';
import { ArrowRight } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-wanlian-dark via-gray-900 to-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,0,18,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg_width%3D%2260%22_height%3D%2260%22_viewBox%3D%220_0_60_60%22_xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg_fill%3D%22none%22_fill-rule%3D%22evenodd%22%3E%3Cg_fill%3D%22%23ffffff%22_fill-opacity%3D%220.05%22%3E%3Cpath_d%3D%22M36_34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6_34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6_4V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl animate-slide-up">
          {/* Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-wanlian-red/20 backdrop-blur-sm rounded-full text-wanlian-red text-sm font-medium mb-8 animate-scale-in">
            <div className="w-2 h-2 bg-wanlian-red rounded-full animate-pulse"></div>
            <span>5A级网络货运平台</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            链接万千运力
            <br />
            <span className="text-wanlian-red">重塑服务价值</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl font-light border-l-2 border-wanlian-red/30 pl-6">
            依托互联网平台货物流通，为客户提供全程可视化的货运服务，实现降本增效，打造数字化货运新生态。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-wanlian-red text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 flex items-center space-x-2">
              <span>立即体验</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/20">
              了解详情
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-wanlian-red mb-2">90万+</div>
              <div className="text-sm text-gray-400">注册司机</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-wanlian-red mb-2">6000+</div>
              <div className="text-sm text-gray-400">企业会员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-wanlian-red mb-2">2800+</div>
              <div className="text-sm text-gray-400">服务区县</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-wanlian-red mb-2">2.6万</div>
              <div className="text-sm text-gray-400">承运总量(万吨)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;