import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  const refVal = url.searchParams?.get("ref");

  if (refVal) {
    url.searchParams.delete("ref");
    const response = NextResponse.redirect(url);
    const refCookie = refVal === "rec" ? "rec" : "oth";
    response.cookies.set("ref", refCookie, {
      expires: new Date("9999-12-31T23:59:59.000Z"),
    });

    if (refVal !== "rec") {
      const REF_SERVICE = process.env.REF_SERVICE;
      const refUrl = new URL(REF_SERVICE);
      refUrl.searchParams.set("ref", refVal);
      fetch(refUrl);
    }

    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
