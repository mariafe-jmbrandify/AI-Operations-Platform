/**
 * ============================================================
 * AI Operations Platform (AIOP)
 * Notification Service
 * ------------------------------------------------------------
 * Responsible for delivering notifications across supported
 * communication channels.
 * ============================================================
 */

const NotificationService = (() => {

  /**
   * Initialize notification service.
   */
  function initialize() {

    LoggingService.info("Notification Service initialized.");

  }

  /**
   * Send notification.
   *
   * @param {Object} notification
   */
  function send(notification) {

    LoggingService.info(
      "Sending notification.",
      {
        channel: notification.channel
      }
    );

    switch (notification.channel) {

      case "EMAIL":
        sendEmail(notification);
        break;

      case "SPARK":
        sendSpark(notification);
        break;

      case "SLACK":
        sendSlack(notification);
        break;

      default:
        throw new Error(
          `Unsupported notification channel: ${notification.channel}`
        );

    }

  }

  /**
   * Gmail notification.
   */
  function sendEmail(notification) {

    GmailApp.sendEmail(

      notification.to,

      notification.subject,

      notification.body

    );

    LoggingService.info(
      "Email sent.",
      {
        recipient: notification.to
      }
    );

  }

  /**
   * Spark placeholder.
   */
  function sendSpark(notification) {

    LoggingService.info(
      "Spark notification queued."
    );

    // Future:
    // SparkAdapter.send(notification);

  }

  /**
   * Slack placeholder.
   */
  function sendSlack(notification) {

    LoggingService.info(
      "Slack notification queued."
    );

    // Future:
    // SlackAdapter.send(notification);

  }

  return {

    initialize,

    send

  };

})();
