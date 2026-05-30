// Netlify Scheduled Function.
//
// Why this exists: the blog uses future-dated posts as a drip schedule (one new
// post roughly every 3 days). A static build only publishes posts whose pubDate
// has already passed, so the site needs to rebuild periodically for a due post
// to appear. This function fires once a day and pokes a Netlify build hook,
// which kicks off a fresh production build. The 3-day cadence is set by the
// posts' pubDates, not by this schedule, so a daily rebuild is plenty.
//
// Setup (one-off): create a build hook for the site and store its URL in the
// BUILD_HOOK_URL environment variable. See netlify.toml notes.

export const config = { schedule: '@daily' };

export default async () => {
  const hook = process.env.BUILD_HOOK_URL;
  if (!hook) {
    return new Response('BUILD_HOOK_URL not set; skipping rebuild.', { status: 200 });
  }
  await fetch(hook, { method: 'POST' });
  return new Response('Triggered production rebuild.', { status: 200 });
};
