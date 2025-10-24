import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
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
          background: "linear-gradient(135deg, #9333EA 0%, #10B981 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        NC
      </div>
    ),
    {
      ...size,
    }
  );
}
