/**
 * Checks if the code is running on the server-side (server) or client-side (browser) environment.
 * 检查代码是否在服务器端（服务器）或客户端（浏览器）环境中运行。
 *
 * The value of this constant will be true if the code is running on the server-side,
 * and false if it is running on the client-side.
 * 如果代码在服务器端运行，则此常量的值为 true；如果在客户端运行，则值为 false。
 *
 * @constant {boolean}
 */
export const isServer = typeof window === "undefined";

/**
 * Checks if the code is running on the client-side (browser) environment.
 * 检查代码是否在客户端（浏览器）环境中运行。
 *
 * The value of this constant will be true if the code is running on the client-side,
 * and false if it is running on the server-side.
 * 如果代码在客户端运行，则此常量的值为 true；如果在服务器端运行，则值为 false。
 *
 * @constant {boolean}
 */
export const isClient = !isServer;

/**
 * Checks if the current environment supports touch events, typically indicating touch-enabled devices.
 * 检查当前环境是否支持触摸事件，通常表示支持触摸的设备。
 *
 * @returns {boolean} Returns true if the environment supports touch events, otherwise returns false.
 *                    如果环境支持触摸事件，则返回 true；否则返回 false。
 */
export function isTouchSupported() {
  return isClient && "ontouchstart" in window;
}

/**
 * Checks if the current environment is likely a mobile device.
 * 检查当前环境是否可能是移动设备。
 *
 * @returns {boolean} Returns true if the environment is likely a mobile device, otherwise returns false.
 *                    如果环境可能是移动设备，则返回 true；否则返回 false。
 */
export function isMobile(): boolean {
  // Let's consider it mobile if the screen width is less than or equal to 768 pixels
  const isMobileScreen = isClient && window.innerWidth <= 768;

  // Return true if either screen width is small or there is touch support
  return isMobileScreen || isTouchSupported();
}
