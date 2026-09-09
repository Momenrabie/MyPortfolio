import { ImageResponse } from "next/og";

import { BRAND_COLORS } from "@/lib/constants";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND_COLORS.lightPrimary,
          color: BRAND_COLORS.lightPrimaryForeground,
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        MR
      </div>
    ),
    size,
  );
}
