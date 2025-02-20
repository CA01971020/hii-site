import React from "react";
import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  description: string;
  url: string;
  alt: string;
  src: string;
  wd: number;
  hg: number;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  url,
  alt,
  src,
  wd = 60,
  hg = 60,
}) => {
  return (
    <div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="relative mr-12 lg:mr-96 ml-12 lg:ml-96 rounded-xl p-10 bg-white grid grid-cols-2 lg:grid-cols-1 shadow-lg ring-2 ring-black/20 shadow-black/50">
            <Image
              alt={alt}
              src={src}
              width={wd}
              height={hg}
              className=" absolute left-8 lg:left-20 top-2.5"
            ></Image>
            <p className=" absolute w-48 top-7 right-8 lg:right-20 text-Customblue">
              {title}
            </p>
          </div>
        </a>
      </div>
      <div className=" mt-8 mr-8 ml-8">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
