export default async function handler(req, res) {
  const { slug } = req.query;
  const TOKEN = 'd85161e0dd2a33a196a1bea7b2d9d493a182c8ead6cb0f1816d0721459203da3';
  const COLLECTION_ID = '69f0c5f8a03008cb9747ec85';
  const SITE_ID = '69c11e3a62cbd5490546ec0f';

  const response = await fetch(
    `https://api.webflow.com/v2/sites/${SITE_ID}/collections`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'accept-version': '2.0.0',
      },
    }
  );

  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json(data);
}
