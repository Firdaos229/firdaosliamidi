import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Les visuels du portfolio (avatar, mockups projets) sont des SVG locaux
    // générés pour ce projet, pas des uploads utilisateurs : sûr à activer ici.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
