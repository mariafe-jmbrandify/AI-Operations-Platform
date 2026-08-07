/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Logging Service
 * ------------------------------------------------------------
 * Centralized logging and observability.
 * ============================================================
 */

const LoggingService = (() => {

  const LEVELS = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    FATAL: "FATAL"
  };

  /**
   * Initialize logging.
   */
  function initialize() {

    info("Logging Service initialized.");

  }

  /**
   * Generate Correlation ID.
   */
  function correlationId() {

    return Utilities.getUuid();

  }

  /**
   * Generic logger.
   */
  function log(level, message, metadata = {}) {

    const entry = {

      timestamp: new Date().toISOString(),

      level,

      message,

      metadata

    };

    Logger.log(JSON.stringify(entry));

  }

  /**
   * Debug
   */
  function debug(message, metadata = {}) {

    if (ConfigurationManager.debugEnabled()) {

      log(LEVELS.DEBUG, message, metadata);

    }

  }

  /**
   * Information
   */
  function info(message, metadata = {}) {

    log(LEVELS.INFO, message, metadata);

  }

  /**
   * Warning
   */
  function warn(message, metadata = {}) {

    log(LEVELS.WARN, message, metadata);

  }

  /**
   * Error
   */
  function error(message, metadata = {}) {

    log(LEVELS.ERROR, message, metadata);

  }

  /**
   * Fatal
   */
  function fatal(message, metadata = {}) {

    log(LEVELS.FATAL, message, metadata);

  }

  return {

    initialize,

    correlationId,

    debug,

    info,

    warn,

    error,

    fatal

  };

})();