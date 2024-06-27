"use client";
import { useToPng } from "@hugocxl/react-to-image";

export default function Home() {
  const [state, convert, ref] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = "convertImg.png";
      link.href = data;
      link.click();
    },
  });

  return (
    <div>
      <h1>test next js app</h1>
      <div
        style={{
          width: "200px",
          height: "fit-content",
          //border: "4px solid red",
        }}
        ref={ref}
      >
        <h2>title</h2>
        <button
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            border: "4px solid blue",
            borderRadius: "12px",
          }}
        >
          button
        </button>
      </div>
      <button type="button" onClick={convert}>
        convert
      </button>
    </div>
  );
}
