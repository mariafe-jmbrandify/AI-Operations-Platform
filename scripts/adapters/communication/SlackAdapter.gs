/**
 * SlackAdapter.gs
 * Adapter for Slack integration
 */

class SlackAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.webhookUrl = config.webhookUrl;
  }

  initialize() {
    if (!this.apiKey && !this.webhookUrl) {
      throw new Error('Slack API key or webhook URL is required');
    }
    super.initialize();
  }
}
