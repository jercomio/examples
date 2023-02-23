"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import react from "../../../../public/assets/frameworks/react.svg";
import nextjs from "../../../../public/assets/frameworks/nextjs.svg";
import redux from "../../../../public/assets/frameworks/redux.svg";
import apollo from "../../../../public/assets/frameworks/apollo.svg";
import strapi from "../../../../public/assets/frameworks/strapi.svg";

const FrameworksBar = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const tabRef = useRef<HTMLElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const linksTargetRef = useRef<HTMLDivElement>(null);

  //  Circle diameter of tab element
  const d: number = 30;

  const onTab = useCallback(
    (mouseOver: boolean) => {
      const tabBar = tabBarRef.current;
      const tab = tabRef.current;
      const linksTarget = linksTargetRef.current;

      if (mouseOver === true && linksTarget !== null) {
        const linkTargetNode = linksTarget.querySelectorAll("a");

        if (linkTargetNode !== null && tab !== null && tabBar !== null) {
          // Return the position of tabBar element relative to the viewport.
          const tabBarX = tabBar.getBoundingClientRect();

          linkTargetNode.forEach((link: HTMLElement) => {
            const mousemoveHandler = (event: MouseEvent) => {
              // Translate tab relative to cursor position and tabBar position
              tab.style.translate = `${
                event.clientX - tabBarX.x - d / 2
              }px 0px`;
            };
            link.addEventListener("mouseover", (event: MouseEvent) => {
              tab.classList.add("tab-highlight");
              tab.style.willChange = "translate";
              link.addEventListener("mousemove", mousemoveHandler);

              link.addEventListener("mouseout", (event: MouseEvent) => {
                tab.style.willChange = "";
                tab.style.translate = "";
                tab.removeAttribute("style");
                tab.classList.remove("tab-highlight");
                tab.removeEventListener("mousemove", mousemoveHandler);
              });
            });
          });
        }
      } else {
        // setMouseOver(false);
        if (tab !== null) {
          tab.classList.remove("tab-highlight");
          // removeEventListener("mousemove", onTab);
        }
      }
    },
    [mouseOver]
  );

  useEffect(() => {
    onTab(mouseOver);
  }, [mouseOver]);

  return (
    <>
      <div className="relative fw-icons flex flex-nowrap gap-px m-2.5">
        <div
          ref={tabBarRef}
          aria-hidden="true"
          className="tab-bar submenu-tabs-highlight"
        >
          <span ref={tabRef} id="tab" className="tab"></span>
        </div>
        <div ref={linksTargetRef} className="flex gap-px">
          <Link
            href={`https://reactjs.org/`}
            className="link"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={react} width={18} height={18} alt="react" />
          </Link>
          <Link
            href={`https://nextjs.org/`}
            className="link"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={nextjs} width={18} height={18} alt="nextjs" />
          </Link>
          <Link
            href={`https://redux.js.org/`}
            className="link"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={redux} width={18} height={18} alt="redux" />
          </Link>
          <Link
            href={`https://www.apollographql.com/`}
            className="link"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={apollo} width={18} height={18} alt="apollo" />
          </Link>
          <Link
            href={`https://strapi.io/`}
            className="link"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={strapi} width={18} height={18} alt="strapi" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FrameworksBar;
