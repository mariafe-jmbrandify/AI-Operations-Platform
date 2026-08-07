/**
 * AppFolioAdapter.gs
 * Adapter for AppFolio integration
 */

class AppFolioAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://api.appfolio.com';
  }

  initialize() {
    if (!this.apiKey) {
      throw new Error('AppFolio API key is required');
    }
    super.initialize();
  }
}
