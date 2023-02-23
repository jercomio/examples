
import Link from "next/link";
import Image from "next/image";
import FrameworksBar from "./FrameworksBar";
import github from "../../../../public/assets/git/github.svg";

const ActionsBar = () => {

  return (
    <div
      data-section="actions-bar"
      className="flex flex-nowrap justify-start items-center rounded-lg bg-slate-700 w-full h-10"
    >
      <FrameworksBar />
      {/* <GitBar /> */}
      <div className="flex items-center ml-4">
        <Link href="https://github.com/jercomio" target="_blank" rel="noopener noreferrer">
          <Image src={github} alt={"github"} width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default ActionsBar;
