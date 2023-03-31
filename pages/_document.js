import { Html, Head, Main, NextScript } from "next/document";
import { Scrollbar } from "smooth-scrollbar-react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ scrollBehavior: "smooth" }}>
        <Scrollbar
          // damping={0.6}
          // thumbMinSize={number}
          renderByPixels={true}
          // alwaysShowTracks={true}
          continuousScrolling={true}
          // wheelEventTarget={element}
          plugins={{
            overscroll: {
              effect: "bounce",
            },
          }}
          // onScroll={func}
        >
          <Main />
        </Scrollbar>
        <NextScript />
      </body>
    </Html>
  );
}
