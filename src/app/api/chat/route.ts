import { generateMessage } from '@/app/lib/api';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const message = await generateMessage(prompt);

  return NextResponse.json({ message });
}