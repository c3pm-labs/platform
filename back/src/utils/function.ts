import { PassThrough } from 'stream';

export function bufferToStream(buffer: Buffer): NodeJS.ReadableStream {
  const stream = new PassThrough();
  stream.end(buffer);
  return stream;
}

export function streamToString(stream: NodeJS.ReadableStream): Promise<string> {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}
