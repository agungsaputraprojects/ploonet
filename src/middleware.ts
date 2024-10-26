import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/lib/i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ko/produksi', request.url))
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = 'ko'
    if (pathname === '/' || pathname === '') {
      return NextResponse.redirect(new URL(`/${locale}/produksi`, request.url))
    }
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  if (pathname === '/ko') {
    return NextResponse.redirect(new URL('/ko/produksi', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}