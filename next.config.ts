import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

const configuredDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const localNetworkOrigins = Object.values(networkInterfaces())
  .flatMap((addresses) => addresses ?? [])
  .filter((address) => address.family === "IPv4" && !address.internal)
  .map((address) => address.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: Array.from(
    new Set([
      "127.0.0.1",
      "localhost",
      ...localNetworkOrigins,
      ...configuredDevOrigins,
    ]),
  ),
};

export default nextConfig;
