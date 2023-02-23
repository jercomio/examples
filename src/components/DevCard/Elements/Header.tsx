import Image from "next/image";
import logo from '../../../../public/next.svg';

const Header = () => {
  return (
    <div
      data-section="header"
      className="flex flex-row justify-start items-center"
    >
      <div className="icon">
        <Image
          src={logo}
          width={64}
          height={64}
          alt="logo"
          className="jrc_logo-card"
        />
      </div>
      {/* <div className="title-card">
        <h2 className="text-lg">Jercom.io</h2>
        <span className="block w-full h-px bg-slate-400"></span>
        <span className="text-xs text-slate-400">Web Development</span>
      </div> */}
    </div>
  );
};

export default Header;
