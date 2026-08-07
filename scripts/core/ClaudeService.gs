/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Claude Service
 * ------------------------------------------------------------
 * Central AI service responsible for communicating with
 * Claude through the configured adapter.
 * ============================================================
 */

const ClaudeService = (() => {

  /**
   * Execute a Claude request.
   *
   * @param {Object} prompt
   * @returns {Object}
   */
  function execute(prompt) {

    const started = new Date();

    LoggingService.info("Calling Claude AI.");

    try {

      const response = ClaudeAdapter.send(prompt);

      const duration = new Date() - started;

      LoggingService.info(
        "Claude response received.",
        {
          duration
        }
      );

      return response;

    } catch (error) {

      LoggingService.error(
        "Claude request failed.",
        {
          error: error.message
        }
      );

      throw error;

    }

  }

  /**
   * Simple availability check.
   */
  function healthCheck() {

    return {

      provider: "Claude",

      model: ConfigurationManager.get("CLAUDE_MODEL"),

      status: "Available"

    };

  }

  return {

    execute,

    healthCheck

  };

})();