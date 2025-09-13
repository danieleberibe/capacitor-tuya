import { registerPlugin } from '@capacitor/core';

import type { TuyaPluginPlugin } from './definitions';

const TuyaPlugin = registerPlugin<TuyaPluginPlugin>('CapacitorTuya', {
  web: () => import('./web').then((m) => new m.TuyaPluginWeb()),
});

export * from './definitions';
export { TuyaPlugin };
