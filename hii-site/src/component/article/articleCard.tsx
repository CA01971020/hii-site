import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  platform: string;
  data: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  url,
  platform,
  data,
}) => {
  return (
    <div className="relative text-Customblack p-3 mr-12 ml-12 mb-3 bg-white rounded-lg shadow-lg ring-2 ring-black/10 shadow-black/50">
      <div className="mt-3 mb-3">
        <p className=" text-Customgray mt-3 mb-3">{data}</p>
        <h2 className=" text-lg mb-5 underline underline-offset-8">{title}</h2>
        <p className="m-4">{description}</p>
        <a
          className=" underline underline-offset-4 text-Customblue hover:text-Customblue/50"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platform}の記事を読む
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
