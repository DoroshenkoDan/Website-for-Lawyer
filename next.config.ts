import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const buildCpus = Number(process.env.NEXT_BUILD_CPUS);

const nextConfig: NextConfig = {
  reactCompiler: true,
  skipTrailingSlashRedirect: true,
  serverExternalPackages: ["nodemailer"],
  experimental: {
    globalNotFound: true,
    ...(Number.isInteger(buildCpus) && buildCpus > 0 ? { cpus: buildCpus } : {}),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.rglawyer.com.ua",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "rglawyer.com.ua",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
