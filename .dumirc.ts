const repo = 'react_dumi_demo'; // 项目名

export default {
  themeConfig: { name: 'react' },
  locales: [{ id: 'zh-CN', name: '中文' }],
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
};
