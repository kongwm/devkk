import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 生成静态文件到 /out 目录
  images: { unoptimized: true }, // 禁用默认图片优化（需手动处理）
  // basePath: '/devkk', // 替换为你的仓库名
};

export default nextConfig;
