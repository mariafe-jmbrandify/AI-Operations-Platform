/**
 * GeminiAdapter.gs
 * Adapter for Google Gemini integration
 */

class GeminiAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.model = config.model || 'gemini-pro';
  }

  initialize() {
    if (!this.apiKey) {
      throw new Error('Gemini API key is required');
    }
    super.initialize();
  }
}
