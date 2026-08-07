/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Claude Adapter
 * ------------------------------------------------------------
 * Anthropic Claude implementation.
 * ============================================================
 */

class ClaudeAdapter extends BaseAdapter {

  constructor() {
    super("Claude");
  }

  /**
   * Authenticate using configured API key.
   */
  authenticate() {

    const apiKey =
      ConfigurationManager.get(ConfigKeys.AI_API_KEY);

    if (!apiKey) {

      throw new Error("Claude API key is not configured.");

    }

    return apiKey;

  }

  /**
   * Execute an AI request.
   *
   * @param {Object} request
   * @returns {Object}
   */
  execute(request) {

    const apiKey = this.authenticate();

    const payload = {

      model: ConfigurationManager.get(ConfigKeys.AI_MODEL),

      max_tokens: request.maxTokens || 2000,

      temperature: request.temperature ?? 0.2,

      messages: [

        {
          role: "user",
          content: request.prompt
        }

      ]

    };

    const options = {

      method: "post",

      contentType: "application/json",

      headers: {

        "x-api-key": apiKey,

        "anthropic-version": "2023-06-01"

      },

      payload: JSON.stringify(payload),

      muteHttpExceptions: true

    };

    try {

      const response = UrlFetchApp.fetch(

        "https://api.anthropic.com/v1/messages",

        options

      );

      const status = response.getResponseCode();

      const body = JSON.parse(response.getContentText());

      if (status >= 400) {

        throw new Error(
          body.error?.message || "Claude API error."
        );

      }

      return {

        success: true,

        provider: "Claude",

        model: body.model,

        data: body,

        usage: body.usage || {}

      };

    } catch (error) {

      LoggingService.error(

        "Claude Adapter failed.",

        {

          error: error.message

        }

      );

      throw error;

    }

  }

  /**
   * Basic health check.
   */
  healthCheck() {

    return {

      adapter: "Claude",

      provider: "Anthropic",

      status: "Available"

    };

  }

}
