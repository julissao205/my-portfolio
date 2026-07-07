import { NextRequest, NextResponse } from 'next/server';

export const POST = async (_request: NextRequest) => {
  return new NextResponse('Token verification is currently disabled.', {
    status: 503,
  });
};
