const crypto = require("crypto");

const SALT_LENGTH = 16;
const ITERATIONS = 310_000;
const KEY_LENGTH = 32;
const DIGEST = "sha256";

function hashPassword(password) {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString("hex");
  return `${ITERATIONS}:${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [iterations, salt, originalHash] = storedHash.split(":");
  const hash = crypto
    .pbkdf2Sync(password, salt, parseInt(iterations), KEY_LENGTH, DIGEST)
    .toString("hex");
  return crypto.timingSafeEqual(
    Buffer.from(originalHash, "hex"),
    Buffer.from(hash, "hex")
  );
}

module.exports = { hashPassword, verifyPassword };
