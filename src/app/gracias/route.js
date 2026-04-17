import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'gracias-diagnostico.html');
    const html = fs.readFileSync(filePath, 'utf8');
    
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (err) {
    return new Response('Error loading page: ' + err.message, { status: 500 });
  }
}
