import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // If the request path is not for '/assets' or its child paths and is not a file or API route, redirect to home
  if (!pathname.startsWith('/assets') && !pathname.startsWith('/_next') && !pathname.startsWith('/api')) {
    url.pathname = '/assets';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
