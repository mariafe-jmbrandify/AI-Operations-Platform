/**
 * SparkAdapter.gs
 * Adapter for Cisco Spark integration
 */

class SparkAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
  }

  initialize() {
    if (!this.apiKey) {
      throw new Error('Spark API key is required');
    }
    super.initialize();
  }
}
