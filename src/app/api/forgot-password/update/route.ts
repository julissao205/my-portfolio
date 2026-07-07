import { NextRequest, NextResponse } from 'next/server';

export async function POST(_request: NextRequest) {
  return new NextResponse('Password updates are currently disabled.', {
    status: 503,
  });
}
