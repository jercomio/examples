'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "../../../../public/assets/git/github.svg";
import gitlab from "../../../../public/assets/git/gitlab.svg";
import { useState, useEffect, useCallback } from "react";

const GitBar = () => {
  const [isSubMenu, setIsSubMenu] = useState(false);

  const targetSubMenu = document.getElementById("submenu1");
  const gitSvg = document.querySelector("svg");
  const submenu = useCallback((isSubMenu:boolean) => {
    if (isSubMenu) {
    if (targetSubMenu !== null && gitSvg !== null) {
      targetSubMenu.style.translate = '50px';
      targetSubMenu.style.opacity = '0';
      targetSubMenu.style.display = "block";
      targetSubMenu.style.transition = "all 150ms ease-in";
      setTimeout(() => {
          targetSubMenu.style.translate = '0px';
          targetSubMenu.style.opacity = '1';
      }, 0);

      gitSvg.style.filter = "invert(0.88)";
      gitSvg.style.transition = 'all 150ms cubic-bezier(0,.5,1,.5)';
    }
      
    } else {
      if (gitSvg !== null && targetSubMenu !== null) {
        gitSvg.style.filter = "invert(0)";
        targetSubMenu.style.transition = "all 150ms ease-in";
        targetSubMenu.style.translate = '-50px';
        targetSubMenu.style.opacity = '0';
        setTimeout(() => {
            targetSubMenu.style.display = "none";
        }, 150)
        setIsSubMenu(false);
      }
    }
  }, [targetSubMenu, gitSvg]);

  useEffect(() => {
    submenu(isSubMenu)
  }, [isSubMenu]);

  return (
    <>
      <div className="relative flex flex-nowrap justify-center items-center gap-px m-2.5">
        <div
          id="gitIcon"
          className="git"
          onClick={() => setIsSubMenu(!isSubMenu)}
        >
          {/* <Image id="gitSvg" src={git} alt={'git'} width={18} height={18} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="M6 21a3 3 0 0 1-1-5.83V8.83a3.001 3.001 0 1 1 2 0V9a2 2 0 0 0 2 2h6a4 4 0 0 1 4 4v.17a3.001 3.001 0 1 1-2 0V15a2 2 0 0 0-2-2H9a3.982 3.982 0 0 1-2-.535v2.706A3.001 3.001 0 0 1 6 21Z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div id="submenu1" className="hidden relative block">
        <div className="absolute -top-[85px] -left-[40px] flex flex-col flex-nowrap gap-0 w-28 h-22 bg-slate-900 rounded-lg p-2 shadow-md border border-slate-400">
          <Link
            href={"/"}
            className="flex flex-row flex-nowrap gap-1 rounded-lg hover:bg-slate-100"
            onClick={() => setIsSubMenu(false)}
          >
            <Image src={github} alt={"github"} width={14} height={14} />
            <p className="text-xs text-slate-400">GitHub</p>
          </Link>
          <Link
            href={"/"}
            className="flex flex-row flex-nowrap gap-1 rounded-lg hover:bg-slate-100"
            onClick={() => setIsSubMenu(false)}
          >
            <Image src={gitlab} alt={"gitlab"} width={14} height={14} />
            <p className="text-xs text-slate-400">GitLab</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GitBar;
