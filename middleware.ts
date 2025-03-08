import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/');

  if (segments[1] === 'artist' && segments[2]) {
    return NextResponse.redirect(new URL(`/artist/${segments[2]}/created`, request.url));
  }
  else if(pathname.match('marketplace')){
    return NextResponse.redirect(new URL(`/marketplace/nft`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/artist/:path', '/marketplace'],
  
};