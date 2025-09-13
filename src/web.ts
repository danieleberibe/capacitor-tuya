import { WebPlugin } from '@capacitor/core';

import type { TuyaPluginPlugin } from './definitions';

export class TuyaPluginWeb extends WebPlugin implements TuyaPluginPlugin {
  initTuya(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
