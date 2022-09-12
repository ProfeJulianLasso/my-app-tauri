import { invoke } from '@tauri-apps/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RustService {

  constructor() { }

  get isTauri(): boolean {
    return !!(window && window.__TAURI__);
  }

  async callHelloWorld(name: string): Promise<string> {
    const text: string = await invoke('greet', { name });
    console.log(text);
    return text;
  }
}
