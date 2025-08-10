import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const linedBackground = {
  backgroundColor: "#e0e0e0",
  backgroundImage: `
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 23px,
      #c4c4c4 24px,
      transparent 25px
    )
  `,
  userSelect: "none", // disable text selection on hover/focus
};

const Page = React.forwardRef(({ children, visible }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        ...linedBackground,
        color: visible ? "#222" : "transparent",
        transition: "color 0.3s ease",
        // To prevent any hover effects:
        pointerEvents: "none",
      }}
      className="w-full h-full flex flex-col items-center justify-center p-8"
    >
      {children}
    </div>
  );
});

export default function PortfolioBook() {
  const bookRef = useRef(null);
  const [currentFlip, setCurrentFlip] = useState(0);

  const goToPage = (pageNumber) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNumber);
    }
  };

  // Listen for flip event to update visible page
 useEffect(() => {
  if (!bookRef.current) return;

  const flip = bookRef.current.pageFlip?.();
  if (!flip) return;

  const onFlip = (e) => {
    setCurrentFlip(e.data);
  };

  flip.on("flip", onFlip);

  return () => {
    flip.off("flip", onFlip);
  };
}, []);


  return (
    <div
      className="flex justify-center items-center min-h-screen bg-white"
      style={{
        overflow: "auto", // so scroll can appear if needed
      }}
    >
      <HTMLFlipBook
        width={400}
        height={600}
        size="fixed"
        drawShadow
        flippingTime={700}
        startPage={0}
        className="shadow-lg rounded"
        maxShadowOpacity={0.5}
        showCover
        mobileScrollSupport
        ref={bookRef}
        // Disable hover effects globally for book
        style={{ pointerEvents: "auto" }}
      >
        {/* First Page: PORTFOLIO */}
        <Page visible={currentFlip >= 0}>
          <h1
            className="text-6xl font-bold"
            style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
          >
            PORTFOLIO
          </h1>
        </Page>

        {/* Second Page: Name and Role */}
        <Page visible={currentFlip >= 1}>
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4">Fahim Ahmed</h2>
            <p className="text-xl">Web Developer</p>
          </div>
        </Page>

        {/* Summary Page */}
        <Page visible={currentFlip >= 2}>
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <p className="text-base leading-relaxed max-w-xs mx-auto">
            Passionate web developer skilled in React, Node.js, and modern web
            technologies. I create clean, user-focused applications with an
            eye for detail and performance.
          </p>
        </Page>

        {/* Index Page */}
        <Page visible={currentFlip >= 3}>
          <h3 className="text-2xl font-semibold mb-4">Index</h3>
          <ul className="space-y-2 text-blue-700 underline cursor-pointer max-w-xs mx-auto">
            <li onClick={() => goToPage(4)}>1. About Me</li>
            <li onClick={() => goToPage(5)}>2. Projects</li>
            <li onClick={() => goToPage(6)}>3. Contact</li>
          </ul>
        </Page>

        {/* About Me */}
        <Page visible={currentFlip >= 4}>
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-base max-w-xs mx-auto">
            I am a creative problem solver who enjoys turning complex
            challenges into elegant, functional designs. My passion lies in
            crafting engaging user experiences and scalable web solutions.
          </p>
        </Page>

        {/* Projects */}
        <Page visible={currentFlip >= 5}>
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <p className="text-base max-w-xs mx-auto mb-2">
            📌 Hotel Booking App — MERN stack application with dynamic room
            details and bookings.
          </p>
          <p className="text-base max-w-xs mx-auto">
            📌 EduManage — Educational platform with teacher dashboards and
            student reports.
          </p>
        </Page>

        {/* Contact */}
        <Page visible={currentFlip >= 6}>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>
            Email: <span className="text-blue-700">fahim@example.com</span>
          </p>
          <p>
            GitHub: <span className="text-blue-700">github.com/fahim</span>
          </p>
          <p>
            LinkedIn: <span className="text-blue-700">linkedin.com/in/fahim</span>
          </p>
        </Page>

        {/* Back Cover */}
        <Page visible={currentFlip >= 7}>
          <h2 className="text-3xl font-semibold" style={{ marginTop: "auto" }}>
            Thank You
          </h2>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}
