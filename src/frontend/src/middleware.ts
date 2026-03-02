// import { withAuth } from "next-auth/middleware"

export default function middleware() { }

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};
