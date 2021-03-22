export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `https://shota-akizuki.microcms.io/apis/blog/${slug}${
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
