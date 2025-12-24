// 工具函数

/**
 * 数字格式化
 */
export const formatNumber = (num: string | number): string => {
  const n = typeof num === 'string' ? parseInt(num.replace(/,/g, '')) : num;
  return n.toLocaleString('zh-CN');
};

/**
 * 滚动到指定元素
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * 回到顶部
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * 防抖函数
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }) as T;
};

/**
 * 节流函数
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};

/**
 * 检测设备类型
 */
export const detectDevice = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * 生成唯一ID
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 图片加载错误处理
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string): void => {
  const target = e.target as HTMLImageElement;
  target.style.display = 'none';
  if (target.parentElement) {
    target.parentElement.innerHTML = `<div class="text-sm font-bold text-gray-500 text-center leading-tight">${fallbackText}</div>`;
  }
};