import Image from "next/image";

const Gallery = () => {
  const image = () => {
    // const url: string = `https://picsum.photos/800/400?random=${Math.floor(
    //   Math.random() * 100
    // )}`;
    const url: string = '';
    return url;
  };
  return (
    <div data-section="gallery" className="block mt-8 mb-8 w-full h-auto">
      <ul className="gallery">
        <li className="list-none h-36 grow before:content-none">
          <Image
            src={image()}
            alt="pic"
            width={150}
            height={150}
            blurDataURL="data..."
            placeholder="blur"
          />
        </li>
        <li className="list-none h-36 grow before:content-none">
          <Image
            src={image()}
            alt="pic"
            width={150}
            height={150}
            blurDataURL="data..."
            placeholder="blur"
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
