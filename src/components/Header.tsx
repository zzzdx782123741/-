import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { scrollToElement } from '../utils';

interface HeaderProps {
  currentPath: 'home' | 'aftersales';
  onNavigate: (path: 'home' | 'aftersales') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (path === '/#aftersales') {
      onNavigate('aftersales');
    } else if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      scrollToElement(elementId);
    } else {
      onNavigate('home');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center group transition-all"
          >
            <div className="mr-3 transition-transform group-hover:scale-110 duration-500">
              <img src="/logo.png" alt="万联通 Logo" className="w-9 h-9 object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center">
                <span className="text-3xl font-black tracking-tighter text-gray-900 leading-none">万连通</span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide mt-1">万联易达集团旗下物流服务平台</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = (item.path === '/#aftersales' && currentPath === 'aftersales') || 
                               (item.path === '#platforms' && currentPath === 'home');
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-wanlian-red font-bold' 
                      : 'text-gray-600 hover:text-wanlian-red'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => window.open('tel:400-015-8686', '_self')}
            className="px-6 py-2 text-sm font-medium text-wanlian-red hover:text-red-700 transition-colors"
          >
            400-015-8686
          </button>
          <button 
            onClick={() => onNavigate('aftersales')}
            className="px-6 py-2 bg-wanlian-red text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            车后服务
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-wanlian-red hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button 
                onClick={() => window.open('tel:400-015-8686', '_self')}
                className="w-full px-4 py-3 text-sm font-medium text-wanlian-red hover:text-red-700 transition-colors"
              >
                400-015-8686
              </button>
              <button 
                onClick={() => onNavigate('aftersales')}
                className="w-full px-4 py-3 bg-wanlian-red text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
              >
                车后服务
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;