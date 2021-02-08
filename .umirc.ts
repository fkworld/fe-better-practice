import { defineConfig } from 'dumi';

const GITHUB_REPOSITORY_NAME = 'fe-better-practice';

export default defineConfig({
  title: 'fe-better-practice',
  description: '前端最佳实践探索',
  mode: 'doc',
  // 配置 GitHub Pages
  base: `/${GITHUB_REPOSITORY_NAME}`,
  publicPath: `/${GITHUB_REPOSITORY_NAME}/`,
  exportStatic: {},
  // 默认仅使用中文
  locales: [['zh-CN', '中文']],
  // 使用 esbuild 打包
  esbuild: {},
  dynamicImport: {},
});
