// Only runs when no static asset matches. Redirects any casing of /gtavi to the canonical /GTAVI path.
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/gtavi(\/.*)?$/i);
    if (m && !url.pathname.startsWith("/GTAVI")) {
      url.pathname = "/GTAVI" + (m[1] || "/");
      return Response.redirect(url.toString(), 301);
    }
    return new Response("Not found", { status: 404 });
  },
};
