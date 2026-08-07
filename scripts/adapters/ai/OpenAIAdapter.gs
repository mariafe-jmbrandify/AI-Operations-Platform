/**
 * OpenAIAdapter.gs
 * Adapter for OpenAI integration
 */

class OpenAIAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.apiKey = config.apiKey;
    this.model = config.model || 'gpt-4';
  }

  initialize() {
    if (!this.apiKey) {
      throw new Error('OpenAI API key is required');
    }
    super.initialize();
  }
}
