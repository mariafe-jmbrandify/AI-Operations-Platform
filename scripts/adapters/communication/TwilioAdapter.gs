/**
 * TwilioAdapter.gs
 * Adapter for Twilio integration
 */

class TwilioAdapter extends BaseAdapter {
  constructor(config = {}) {
    super(config);
    this.accountSid = config.accountSid;
    this.authToken = config.authToken;
  }

  initialize() {
    if (!this.accountSid || !this.authToken) {
      throw new Error('Twilio Account SID and Auth Token are required');
    }
    super.initialize();
  }
}
