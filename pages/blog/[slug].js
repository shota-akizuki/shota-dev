// 下書き状態のコンテンツを取得
export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `https://shota-akizuki.microcms.io/api/v1/blog/${slug}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ''
    }`,
    { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  ).then((res) => res.json());
  return {
    props: {
      content
    }
  };
};
