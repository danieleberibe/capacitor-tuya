export interface TuyaPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
