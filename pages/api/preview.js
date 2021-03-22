import fetch from 'node-fetch';

//ブラウザから`/api/preview`にアクセスするとこの関数が起動
export default async (req, res) => {
  //クエリとして渡ってくる slug は記事のID、draftKey は下書き用の draftKey
  //slugが存在しない場合は404を返す
  if (!req.query.slug) {
    return res.status(404).end();
  }
  //slugが正しいものかどうかCMSのAPIを呼び出してチェック
  const content = await fetch(
    `https://shota-akizuki.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }
  //`res.setPreviewData()` に渡した引数が、
  //`getStaticProps` の引数である `context` から受け取ることができる
  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey
  });
  res.writeHead(307, { Location: `blog/${content.id}` });
  res.end('Preview mode enabled');
};
