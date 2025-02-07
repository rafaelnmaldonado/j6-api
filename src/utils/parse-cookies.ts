/*export default function parseCookies(response: Response) {
    const raw = response.headers['set-cookie'];
    return raw.map((entry) => {
      const parts = entry.split(';');
      const cookiePart = parts[0];
      return cookiePart;
    }).join(';');
}*/