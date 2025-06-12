const API_HOST = import.meta.env.VITE_API_HOST;

export default async function WakeUp() {
  const url = new URL(API_HOST);

  return await fetch(url);
}
