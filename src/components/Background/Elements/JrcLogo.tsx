'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
import logo from "../../../../public/next.svg";
import Child from "./Child";

const JrcLogo = () => {
  const [visible, setVisible] = useState(false);
  const childRef = useRef<HTMLElement>(null);

  const child = childRef.current;

  const displayChild = useCallback((visible:boolean) => {
    if (child !== null) {
      if (visible) {
        if (child !== null) {
          child.style.display = "block";
          child.style.opacity = '0';
          child.style.transition = 'all 0.7s ease';
          setTimeout(() => {
            child.style.opacity = '1';
          }, 0)
        }
        
      } else {
        if (child !== null) {
          child.style.transition = 'all 0.7s ease';
          child.style.opacity = '0';
          setTimeout(() => {
            child.style.display = "none";
          }, 700)
          setVisible(false);
        }
      }
    }
  }, [child]);

  useEffect(() => {
    displayChild(visible)
  }, [visible]);

  return (
    <>
      <div className="jrc-logo-box" onClick={() => setVisible(!visible)}>
        <Image
          src={logo}
          width={150}
          height={150}
          alt="logo"
          className="jrc_logo invert"
          priority
        />
      </div>

      <section ref={childRef} id="child" className="child jrc_section-child hidden" onClick={() => setVisible(!visible)}>
        <Child />
      </section>
    </>
  );
};

export default JrcLogo;
