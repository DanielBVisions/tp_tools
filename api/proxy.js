export default async function handler(req, res) {
  const { slug } = req.query;
  const TOKEN = 'd8d75deb84b433bc694d5ced90c94b5a4de627a8fbc6565d49becac50f344ce5';
  const COLLECTION_ID = '69f0c5f8a03008cb9747ec85';
  const SITE_ID = '69c11e3a62cbd5490546ec0f';

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  const response = await fetch(
    `https://api.webflow.com/v2/sites/${SITE_ID}/collections/${COLLECTION_ID}/items?slug=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'accept-version': '2.0.0',
      },
    }
  );

  const data = await response.json();
  const html = data?.items?.[0]?.fieldData?.['artifact-html'] ?? null;

  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({ html });
}
