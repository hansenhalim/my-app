export default async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import("./msw.polyfills");
  const { server } = await import("./mocks/server");
  server.listen();
}
