import { type NextRequest, NextResponse } from 'next/server';

export async function POST(_req: NextRequest) {
  return NextResponse.json(
    {
      status: 410,
      revalidated: false,
      message: 'This endpoint is no longer in use.',
    },
    { status: 410 },
  );
}
