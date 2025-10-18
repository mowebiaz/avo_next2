// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(req) {
  const env = process.env.VERCEL_ENV 
  const host = req.headers.get('host') || ''

  // Tous les déploiements preview -> noindex
  if (env === 'preview' || host.endsWith('.vercel.app')) {
    const res = NextResponse.next()
    res.headers.set('x-robots-tag', 'noindex, nofollow')
    return res
  }

  return NextResponse.next()
}
