/**
 * Utility class to manage browser cookies.
 */
export default class CookieManager {
  /**
   * Sets a cookie with a specified name, value, and expiration in days.
   *
   * @param name - The name of the cookie.
   * @param value - The value of the cookie.
   * @param days - The number of days the cookie should persist.
   */
  static setCookie(name: string, value: string, days: number): void {
    try {
      document;
    } catch {
      return;
    }

    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
  }

  /**
   * Retrieves the value of a cookie by its name.
   *
   * @param name - The name of the cookie to retrieve.
   * @returns The value of the cookie, or `null` if the cookie does not exist.
   */
  static getCookie(name: string): string | null {
    try {
      document;
    } catch {
      return null;
    }
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === " ")
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length, cookie.length)
        );
      }
    }
    return null;
  }

  /**
   * Deletes a cookie by setting its expiration date in the past.
   *
   * @param name - The name of the cookie to delete.
   */
  static deleteCookie(name: string): void {
    try {
      document;
    } catch {
      return;
    }
    document.cookie = `${name}=; Max-Age=-99999999; path=/`;
  }
}
