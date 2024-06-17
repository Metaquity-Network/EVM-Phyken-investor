import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  if (
    !pathname.startsWith('/assets') &&
    !pathname.startsWith('/waitlist') &&
    !pathname.startsWith('/coming-soon') &&
    !pathname.startsWith('/confirm-email') &&
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/api')
  ) {
    url.pathname = '/assets';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
