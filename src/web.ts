import { WebPlugin } from '@capacitor/core';
import { DateTimePickerPlugin } from './definitions';

export class DateTimePickerWeb extends WebPlugin implements DateTimePickerPlugin {
  constructor() {
    super({
      name: 'DateTimePicker',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const DateTimePicker = new DateTimePickerWeb();

export { DateTimePicker };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DateTimePicker);
