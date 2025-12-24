import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CUSTOMERS, PARTNERS } from '../constants';

const LogoTicker: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const customersPerPage = 6;
  const totalPages = Math.ceil(CUSTOMERS.length / customersPerPage);

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getCurrentCustomers = () => {
    const start = currentPage * customersPerPage;
    const end = start + customersPerPage;
    return CUSTOMERS.slice(start, end);
  };

  useEffect(() => {
    const interval = setInterval(nextPage, 5000);
    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(230,0,18,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-wanlian-red/10 text-wanlian-red text-sm font-bold rounded-full mb-6">
            合作伙伴
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            携手行业领军企业
            <br />
            <span className="text-wanlian-red">共建物流新生态</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            万联通已与众多知名企业建立深度合作关系，共同推动物流行业数字化转型
          </p>
        </div>

        {/* Customers Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">合作客户</h3>
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Logo Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-opacity duration-300 ${
              isAnimating ? 'opacity-50' : 'opacity-100'
            }`}>
              {getCurrentCustomers().map((customer, index) => (
                <div
                  key={customer.name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 group"
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="text-sm font-bold text-gray-500 text-center">${customer.name}</div>`;
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-wanlian-red w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">合作伙伴</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {PARTNERS.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-wanlian-red/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="text-sm font-bold text-gray-500 text-center">${partner.name}</div>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-wanlian-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-xl shadow-red-600/30 hover:shadow-red-600/50">
            成为合作伙伴
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;