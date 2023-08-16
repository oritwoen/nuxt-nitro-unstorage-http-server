export default defineEventHandler(async (event) => {
  const storage = useStorage('data');

  await storage.setItem('foo', 'bar');

  return 'foo has been set';
});
