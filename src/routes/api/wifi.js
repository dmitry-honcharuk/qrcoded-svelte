import { toDataURL, toString } from 'qrcode';

export async function post(req, res) {
  const {
    body: { protocol, name, password },
  } = req;

  const svg = await toString(`WIFI:T:${protocol};S:${name};P:${password};;`, { type: 'svg' });

  return res.json({ svg });
}

