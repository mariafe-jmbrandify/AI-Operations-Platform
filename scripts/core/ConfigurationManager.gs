/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Configuration Manager
 * ------------------------------------------------------------
 * Centralized configuration management for the platform.
 * ============================================================
 */

const ConfigurationManager = (() => {

  const properties = PropertiesService.getScriptProperties();

  /**
   * Initialize configuration.
   */
  function initialize() {

    Logger.log("Loading platform configuration...");

    validateRequiredProperties();

    Logger.log("Configuration loaded.");

  }

  /**
   * Get a configuration value.
   *
   * @param {string} key
   * @returns {*}
   */
  function get(key) {

    return properties.getProperty(key);

  }

  /**
   * Set a configuration value.
   *
   * @param {string} key
   * @param {*} value
   */
  function set(key, value) {

    properties.setProperty(key, value);

  }

  /**
   * Determine current environment.
   */
  function environment() {

    return get("ENVIRONMENT") || "development";

  }

  /**
   * Debug mode.
   */
  function debugEnabled() {

    return get("DEBUG") === "true";

  }

  /**
   * Validate required properties.
   */
  function validateRequiredProperties() {

    const required = [

      "ENVIRONMENT",

      "CLAUDE_API_KEY",

      "CLAUDE_MODEL"

    ];

    required.forEach(key => {

      if (!properties.getProperty(key)) {

        throw new Error(`Missing required configuration: ${key}`);

      }

    });

  }

  /**
   * Return all configuration (excluding secrets).
   */
  function summary() {

    return {

      environment: environment(),

      debug: debugEnabled(),

      version: AIOP.VERSION

    };

  }

  return {

    initialize,

    get,

    set,

    environment,

    debugEnabled,

    summary

  };

})();