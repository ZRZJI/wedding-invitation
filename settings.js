/**
 * ============================================================
 *  婚礼邀请函 — 文案配置文件
 *  修改这里的内容，页面会自动更新，不需要动 index.html
 * ============================================================
 */

const WEDDING_CONFIG = {

  // ===== 新人信息 =====
  groomName:       '张睿',
  brideName:       '赵嘉妮',

  // ===== 父母信息 =====
  fatherName:      '赵阳',
  motherName:      '于丽',

  // ===== 日期 =====
  dateYear:        '2026',
  dateMonth:       '6',
  dateDay:         '24',
  dateWeekday:     '星期三',
  dateLunar:       '农历五月初十',

  // ===== 地点 =====
  venueName:       '费家饭店',
  venueAddress:    '辽宁省营口市老边区东海大街与白庙子路交叉口东北方向59米左右',
  venueAddressShort: '辽宁省营口市老边区\n东海大街与白庙子路交叉口东北方向',

  // ===== 地图链接（高德 marker URI） =====
  // 修改经纬度时：position=经度,纬度  name=地点名
  mapUrl:          'https://uri.amap.com/marker?position=122.328,40.665&name=费家饭店&coordinate=gaode&callnative=0',

  // ===== 报名问卷链接 =====
  rsvpUrl:         'https://f.wps.cn/g/KmLtMYGS/',
  rsvpBtnText:     '填 写 参 会 信 息',
  rsvpHint:        '信息仅用于婚宴安排，不会泄露',

  // ===== 邀请语（每行一个 <p>，高亮内容用 {highlight} 括起来） =====
  invitationLines: [
    '谨定于 {2026年6月24日}（{星期三}）',
    '为爱女 {赵嘉妮}',
    '与爱婿 {张睿}',
    '举办婚礼答谢宴',
    '恭候您及家人光临',
  ],

  // ===== 封面副标题 =====
  heroTopText:     '诚 邀 莅 临',
  heroSubtitle:    '婚 礼 答 谢 宴',

  // ===== 照片章节标题 =====
  galleryTitle:    '我们的故事',
  galleryEnglish:  'Our Story',

  // ===== 照片诗句分隔（共两段） =====
  poem1:           '执子之手\n与子偕老',
  poem2:           '往后余生\n目光所至，皆是你',

  // ===== 页脚文案 =====
  footerThanks:    '感谢您的到来',
  footerEnglish:   'Thank You For Coming',

  // ===== 分享卡片（微信/QQ 分享气泡）=====
  // og:image 需填图片的完整线上 URL（上传图床后替换）
  // 格式：'https://xxx.com/your-cover.jpg'
  // 当前填第一张婚纱照的相对路径，仅本地预览有效；部署后请替换为绝对 URL
  shareTitle:      '赵嘉妮 & 张睿 婚礼答谢宴',
  shareDesc:       '赵阳 · 于丽 诚邀您参加婚礼答谢宴 · 2026年6月24日 · 费家饭店',
  shareImage:      'photos/4H9A6090.jpg',   // ← 部署后替换为完整 https:// URL

};
