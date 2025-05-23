// MARK: if this doesnt work out proprly use globalThis.accessToken

let accessToken = "";

export function getAccessToken() {
  return accessToken;
}

export function setAccessToken(token) {
  accessToken = `Bearer ${token}`;
}
