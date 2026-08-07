/**
 * WebhookAdapter.gs
 * Adapter for webhook integration
 */

class WebhookAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.url = config.url;
    this.headers = config.headers || {};
  }

  initialize() {
    if (!this.url) {
      throw new Error('Webhook URL is required');
    }
    super.initialize();
  }
}
