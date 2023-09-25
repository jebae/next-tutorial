import Head from "next/head";
import { FC } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const Meta: FC<Props> = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={subtitle} />

      {/* 오픈 그래프 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subtitle} />
      <meta property="og:image" content={image} />

      {/* 트위터 카드 */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
