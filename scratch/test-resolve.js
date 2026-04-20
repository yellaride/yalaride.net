try {
  const path = require.resolve('tailwindcss');
  console.log('tailwindcss resolved to:', path);
} catch (e) {
  console.error('Failed to resolve tailwindcss:', e.message);
}
