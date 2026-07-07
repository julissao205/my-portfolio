import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse('Auth registration is currently disabled.', {
    status: 503,
  });
}
