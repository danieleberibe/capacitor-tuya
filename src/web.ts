import { WebPlugin } from '@capacitor/core';

import type { TuyaPluginPlugin } from './definitions';

export class TuyaPluginWeb extends WebPlugin implements TuyaPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
