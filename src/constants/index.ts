// 导航配置
export const NAV_ITEMS = [
  { label: '首页', path: '/' },
  { label: '车后服务', path: '/#aftersales' },
  { label: '平台能力', path: '/#platforms' },
  { label: '业务规模', path: '/#stats' },
  { label: '安全合规', path: '/#safety' },
];

// 平台模块配置
export const PLATFORM_MODULES = [
  {
    id: 'logistics',
    title: '网络货运平台',
    description: '依托互联网平台货物流通，为客户提供全程可视化的货运服务，实现降本增效，打造数字化货运新生态，助力企业管理升级。',
    icon: '🚛',
    features: ['全程可视化', '智能调度', '合规保障'],
    ctaText: '立即体验',
    downloads: [
      { name: '易达宝货主端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=shipper' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=driver' }
    ]
  },
  {
    id: 'aftersales',
    title: '车后服务',
    description: '为物流车辆提供从配件采购、维修保养到金融保险的全生命周期数字化服务，让每一次运输都有保障。',
    icon: '🔧',
    features: ['正品配件', '标准维修', '金融保险'],
    ctaText: '了解详情',
    downloads: [
      { name: '万联驿站', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=aftersales' }
    ]
  },
  {
    id: 'valueadd',
    title: '增值服务',
    description: '提供ETC、能源、金融等一站式增值服务，助力企业降本增效，提升运营效率。',
    icon: '💎',
    features: ['ETC通行', '能源服务', '金融支持'],
    ctaText: '了解更多'
  }
];

// 统计数据
export const STATS_DATA = {
  leftStats: [
    { label: '注册司机', value: '900940', color: '#EF4444', isRed: false },
    { label: '企业会员', value: '6093', color: '#EF4444', isRed: false },
    { label: '服务区县', value: '2877', color: '#EF4444', isRed: false },
    { label: '承运总量(万吨)', value: '26716', color: '#EF4444', isRed: false },
  ],
  rightStats: [
    { label: '认证车辆', value: '998310', color: '#EF4444', isRed: false },
    { label: '运输线路', value: '59962', color: '#EF4444', isRed: false },
    { label: '分支机构', value: '100+', color: '#EF4444', isRed: false },
    { label: '覆盖省级', value: '30', color: '#EF4444', isRed: false },
  ]
};

// 合作伙伴数据
export const CUSTOMERS = [
  { name: 'COSCO SHIPPING', logo: 'https://logo.clearbit.com/coscoshipping.com' },
  { name: 'SINOTRANS', logo: 'https://logo.clearbit.com/sinotrans.com' },
  { name: '中国铁路快运', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/China_Railway_Logo_2017.svg/1200px-China_Railway_Logo_2017.svg.png' },
  { name: 'CRE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/China_Railway_Express_logo.svg/2560px-China_Railway_Express_logo.svg.png' },
  { name: '百世', logo: 'https://logo.clearbit.com/800best.com' },
  { name: '中国邮政', logo: 'https://logo.clearbit.com/chinapost.com.cn' },
  { name: '安吉物流', logo: 'https://www.anji-plus.com/images/logo.png' },
  { name: '顺丰', logo: 'https://logo.clearbit.com/sf-express.com' },
  { name: '京东物流', logo: 'https://logo.clearbit.com/jdwl.com' },
  { name: '中核集团', logo: 'https://logo.clearbit.com/cnnc.com.cn' },
  { name: '万联通', logo: '/logo.png' },
  { name: '鞍钢集团', logo: 'https://logo.clearbit.com/ansteel.cn' },
];

export const PARTNERS = [
  { name: '阿里云', logo: 'https://logo.clearbit.com/aliyun.com' },
  { name: '中信银行', logo: 'https://logo.clearbit.com/citicbank.com' },
  { name: '用友软件', logo: 'https://logo.clearbit.com/yonyou.com' },
  { name: '法大大', logo: 'https://logo.clearbit.com/fadada.com' },
  { name: '腾讯地图', logo: 'https://logo.clearbit.com/map.qq.com' },
  { name: '中交兴路', logo: 'https://www.sinoiov.com/images/logo.png' },
  { name: '交通银行', logo: 'https://logo.clearbit.com/bankcomm.com' },
  { name: '路税', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Flogistictax.png&w=128&q=75' },
  { name: '百度云', logo: 'https://logo.clearbit.com/cloud.baidu.com' },
  { name: '中国光大银行', logo: 'https://logo.clearbit.com/cebbank.com' },
  { name: '华泰保险', logo: 'https://www.ehuatai.com/images/logo.png' },
  { name: 'aSign爱签', logo: 'https://www.esign.cn/images/logo.png' },
];

// 安全合规数据
export const SAFETY_FEATURES = [
  {
    id: '01',
    title: '全过程闭环管控',
    description: '从订单受理、车辆调度、轨迹追踪到费用结算，实现业务流、信息流、资金流"多流合一"',
  },
  {
    id: '02',
    title: '多重安全审核',
    description: '三证合一校验、工商数据联动、黑名单库筛查，多维度保障承运方真实合规',
  },
  {
    id: '03',
    title: '阳光合规财税',
    description: '直连官方税务系统，一键开具真实运输增值税专用发票，降低财税风险',
  }
];

// 车后服务角色配置
export const ROLES = [
  { id: 'brand', label: '品牌商/经销商', icon: 'Store' },
  { id: 'shop', label: '维修门店', icon: 'Settings2' },
  { id: 'driver', label: '司机与中小车队', icon: 'Truck' },
];

// 车后服务特色功能
export const SERVICE_FEATURES = [
  {
    title: '正品溯源',
    description: '平台直连大牌厂商，全链条溯源，确保每一件配件均为原厂正品。',
    icon: 'ShieldCheck'
  },
  {
    title: '价格透明',
    description: '全国统一结算价，告别线下维修"看人下菜"的行业乱象。',
    icon: 'BarChart4'
  },
  {
    title: '数字监管',
    description: '维修过程线上可视化，服务工单实时归档，质量可追溯。',
    icon: 'RefreshCcw'
  },
  {
    title: '极速响应',
    description: '依托全国网点布局，为长途货运提供紧急救援及快速维保服务。',
    icon: 'Settings2'
  }
];