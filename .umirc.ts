import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'fe-better-practice',
  description: '基于 React 的前端项目最佳实践探索',
  mode: 'doc',
  // Github Pages 需要使用 docs 作为输出目录，对应的 resolve/includes 也需要修改
  outputPath: 'docs',
  resolve: {
    includes: ['src'],
  },
  // 默认仅使用中文
  locales: [['zh-CN', '中文']],
  // 使用 esbuild 打包
  esbuild: {},
});
