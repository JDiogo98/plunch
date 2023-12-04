import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('request', req.nextUrl.pathname);

  const cookie = req.cookies.get('auth');

  console.log('cookie', cookie);

  return NextResponse.next();
}

