/**
 * HttpClient.gs
 * Shared HTTP client utility for making API requests
 */

class HttpClient {
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || '';
    this.headers = config.headers || {};
    this.timeout = config.timeout || 30000;
  }

  /**
   * Make a GET request
   * @param {string} path - The API endpoint path
   * @param {object} options - Request options (params, headers, etc.)
   * @returns {object} Response object
   */
  get(path, options = {}) {
    return this.request('GET', path, null, options);
  }

  /**
   * Make a POST request
   * @param {string} path - The API endpoint path
   * @param {object} data - Request body data
   * @param {object} options - Request options
   * @returns {object} Response object
   */
  post(path, data, options = {}) {
    return this.request('POST', path, data, options);
  }

  /**
   * Make a PUT request
   * @param {string} path - The API endpoint path
   * @param {object} data - Request body data
   * @param {object} options - Request options
   * @returns {object} Response object
   */
  put(path, data, options = {}) {
    return this.request('PUT', path, data, options);
  }

  /**
   * Make a DELETE request
   * @param {string} path - The API endpoint path
   * @param {object} options - Request options
   * @returns {object} Response object
   */
  delete(path, options = {}) {
    return this.request('DELETE', path, null, options);
  }

  /**
   * Make an HTTP request
   * @param {string} method - HTTP method
   * @param {string} path - API endpoint path
   * @param {object} data - Request body
   * @param {object} options - Request options
   * @returns {object} Response object
   */
  request(method, path, data, options = {}) {
    try {
      const url = this.buildUrl(path, options.params);
      const payload = data ? JSON.stringify(data) : null;
      const headers = { ...this.headers, ...options.headers };

      const fetchOptions = {
        method: method,
        headers: headers,
        muteHttpExceptions: true
      };

      if (payload) {
        fetchOptions.payload = payload;
      }

      const response = UrlFetchApp.fetch(url, fetchOptions);
      return this.parseResponse(response);
    } catch (error) {
      throw new Error(`HTTP ${method} request failed: ${error.message}`);
    }
  }

  /**
   * Build full URL with query parameters
   * @param {string} path - API path
   * @param {object} params - Query parameters
   * @returns {string} Full URL
   */
  buildUrl(path, params = {}) {
    let url = this.baseUrl + path;
    const queryParams = new URLSearchParams(params).toString();
    if (queryParams) {
      url += '?' + queryParams;
    }
    return url;
  }

  /**
   * Parse HTTP response
   * @param {object} response - UrlFetchApp response
   * @returns {object} Parsed response
   */
  parseResponse(response) {
    const responseCode = response.getResponseCode();
    const contentType = response.getHeaders()['content-type'] || '';
    let responseBody = response.getContentText();

    let parsedBody = responseBody;
    if (contentType.includes('application/json')) {
      try {
        parsedBody = JSON.parse(responseBody);
      } catch (e) {
        // Keep as string if JSON parse fails
      }
    }

    return {
      status: responseCode,
      headers: response.getHeaders(),
      body: parsedBody,
      success: responseCode >= 200 && responseCode < 300
    };
  }
}
