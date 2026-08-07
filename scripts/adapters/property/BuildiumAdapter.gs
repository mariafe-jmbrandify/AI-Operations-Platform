/**
 * BuildiumAdapter.gs
 * Adapter for Buildium integration
 */

class BuildiumAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.accountId = config.accountId;
  }

  initialize() {
    if (!this.apiKey || !this.accountId) {
      throw new Error('Buildium API key and Account ID are required');
    }
    super.initialize();
  }
}
