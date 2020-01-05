interface UserProps {
  name: string;
  age: number;
}
export class User {
  /**
   * Adding events
   */
  events: {[key: string]: CallableFunction[]} = {};

  constructor(private data: Partial<UserProps>) {}

  get(propName: keyof UserProps): (string | number | undefined) {
    return this.data[propName];
  }

  set(update: Partial<UserProps>): void {
    Object.assign(
      this.data,
      update
    );
  }

  /**
   * Registering events with callbacks.
   * @param eventName
   * @param callback
   */
  on(eventName: string, callback: CallableFunction): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    });
  }
}
