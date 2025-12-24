// 通用类型定义
export interface NavigationItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  color?: string;
  isRed?: boolean;
}

export interface PartnerItem {
  name: string;
  logo: string;
}

export interface PlatformModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
}

export interface DownloadItem {
  name: string;
  qrUrl: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface RoleSolution {
  id: string;
  label: string;
  icon: string;
  solutions: string[];
}

// 响应式断点
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
} as const;

// 动画配置
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOut: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
  },
} as const;