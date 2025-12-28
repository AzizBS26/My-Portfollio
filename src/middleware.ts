import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/api/:path*"],
};

export function middleware(request: NextRequest) {
  // Add request ID for tracking
  const requestId = crypto.randomUUID();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-id", requestId);

  // Log incoming request
  console.log(`[${requestId}] ${request.method} ${request.nextUrl.pathname}`);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
