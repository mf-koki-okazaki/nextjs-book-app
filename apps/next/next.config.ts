import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // MUI や Emotion が正しくビルドされるようにトランスパイル対象に含める
  transpilePackages: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
};

export default nextConfig;
