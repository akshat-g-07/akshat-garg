export function getAccessToken() {
  return localStorage.getItem("accessToken") || "";
}

export function setAccessToken(token) {
  localStorage.setItem("accessToken", `Bearer ${token}`);
}
