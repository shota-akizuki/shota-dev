import fetch from 'node-fetch';

export default async (req, res) => {
  // クエリの確認
  if (req.query.secret !== 'SECRET_KEY' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // 下書きのデータを取得
  const content = await fetch(
    `https://shota-akizuki.microcms.io/api/v1/blog/${req.query.id}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  // エラー処理

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // プレビューデータを格納
  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey
  });

  // // 詳細ページへリダイレクト
  res.writeHead(307, { Location: `blog/${content.id}` });
  res.end('Preview mode enabled');
};
