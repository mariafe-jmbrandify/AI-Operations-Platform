/**
 * AirtableAdapter.gs
 * Adapter for Airtable integration
 */

class AirtableAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.baseId = config.baseId;
  }

  initialize() {
    if (!this.apiKey || !this.baseId) {
      throw new Error('Airtable API key and Base ID are required');
    }
    super.initialize();
  }
}
