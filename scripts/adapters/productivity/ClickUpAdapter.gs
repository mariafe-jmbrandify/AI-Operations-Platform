/**
 * ClickUpAdapter.gs
 * Adapter for ClickUp integration
 */

class ClickUpAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
  }

  initialize() {
    if (!this.apiKey) {
      throw new Error('ClickUp API key is required');
    }
    super.initialize();
  }
}
