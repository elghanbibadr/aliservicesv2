import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const hostname = req.nextUrl.hostname;
  const isMaintenance =true;
  const productionDomain = "www.alieservices.com"; // Change this to your actual domain

  // Protect admin routes with Clerk
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  console.log("hostname",hostname)

  // Redirect to maintenance page only on the production domain
  if (isMaintenance && productionDomain===hostname && !req.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};