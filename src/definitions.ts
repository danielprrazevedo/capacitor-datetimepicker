declare module "@capacitor/core" {
  interface PluginRegistry {
    DateTimePicker: DateTimePickerPlugin;
  }
}

export interface DateTimePickerPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
