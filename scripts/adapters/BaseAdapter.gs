/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Base Adapter
 * ------------------------------------------------------------
 * Abstract foundation for all platform adapters.
 * ============================================================
 */

class BaseAdapter {

  constructor(name) {

    this.name = name;

  }

  initialize() {

    LoggingService.info(
      `${this.name} initialized.`
    );

  }

  authenticate() {

    throw new Error(
      "authenticate() must be implemented."
    );

  }

  execute(request) {

    throw new Error(
      "execute() must be implemented."
    );

  }

  validate(response) {

    return true;

  }

  healthCheck() {

    return {

      adapter: this.name,

      status: "Healthy"

    };

  }

}
