type _Type = "key" | "value" ;

// Key의 최소 길이
const MIN_KEY_LENGTH = 3;

/**
 * Key 또는 Value 에 관한 Error
 */
class LocalStorageInvalidError extends Error {
  type: _Type;
  value: any;

  constructor(type: _Type, value: any, message: string) {
    super(`[LocalStorageInvalidError] Entered ${type} ${value}, ${message}`);
    this.name = "LocalStorageInvalidError";
    this.type = type;
    this.value = value;
  }
}

/**
 * Type에 따라 값이 올바른지 확인합니다
 * @param { _Type } type - 입력된 값의 type(key | value) 제약조건 구분
 * @param { any } value - 사용될 값
 */
function validate(type: _Type, value: any): void {
  switch (true) {
    case value === null || value === undefined:
      throw new LocalStorageInvalidError(type, value, "null/undefined");
    case type === "key" &&
      (typeof value !== "string" || value.length < MIN_KEY_LENGTH):
      throw new LocalStorageInvalidError(type, value, "check key condition");
  }
}

/**
 * LocalStorage 에서 값을 가져옵니다.
 * @param {string} key
 * @returns {any}
 */
export function getLocalStorageValue(key: string): any {
  validate("key", key);
  const rawValue: string | null = localStorage.getItem(key);
  return rawValue ? JSON.parse(rawValue) : null;
}

/**
 * LocalStorage에 값을 설정합니다.
 * @param {string} key
 * @param {any} value
 */
export function setLocalStorageValue(key: string, value: any): void {
  validate("key", key);
  validate("value", value);
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * LocalStorage에 Key가 있는지 확인합니다.
 * @param {string} key
 * @returns {boolean}
 */
export function isKeyOnLocalStorage(key: string): boolean {
  validate("key", key);
  return localStorage.getItem(key) !== null;
}
