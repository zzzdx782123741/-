import React from 'react';
import { STATS_DATA } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-wanlian-red/5 to-red-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-wanlian-red/10 text-wanlian-red text-sm font-bold rounded-full mb-6">
            业务规模
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            数据见证实力
            <br />
            <span className="text-wanlian-red">覆盖全国网络</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            万联通已服务超过90万注册司机，连接6000+企业会员，覆盖全国2800+区县
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Stats */}
          <div className="lg:w-64 w-full space-y-6">
            {STATS_DATA.leftStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-wanlian-red/20 shadow-sm p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-black text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Map */}
          <div className="flex-1 relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="aspect-square relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <div className="text-gray-600 font-medium">全国业务覆盖图</div>
                    <div className="text-sm text-gray-500 mt-2">30+ 省级行政区</div>
                  </div>
                </div>
                
                {/* Map Points */}
                <div className="absolute inset-0">
                  {/* Beijing */}
                  <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-wanlian-red rounded-full animate-pulse">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      北京
                    </div>
                  </div>
                  
                  {/* Shanghai */}
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-wanlian-red rounded-full animate-pulse">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      上海
                    </div>
                  </div>
                  
                  {/* Guangzhou */}
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-wanlian-red rounded-full animate-pulse">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      广州
                    </div>
                  </div>
                  
                  {/* Chengdu */}
                  <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-wanlian-red rounded-full animate-pulse">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                      成都
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:w-64 w-full space-y-6">
            {STATS_DATA.rightStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-wanlian-red/20 shadow-sm p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-black text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all">
            <div className="text-2xl font-black text-wanlian-red mb-2">30+</div>
            <div className="text-sm text-gray-600">省级行政区</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all">
            <div className="text-2xl font-black text-wanlian-red mb-2">2800+</div>
            <div className="text-sm text-gray-600">服务区县</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all">
            <div className="text-2xl font-black text-wanlian-red mb-2">6万+</div>
            <div className="text-sm text-gray-600">运输线路</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all">
            <div className="text-2xl font-black text-wanlian-red mb-2">100+</div>
            <div className="text-sm text-gray-600">分支机构</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;