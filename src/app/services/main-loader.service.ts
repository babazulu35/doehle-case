import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MainLoaderService {

  @Output() mainLoader = new EventEmitter<{isLoading: boolean}>();

  constructor() { }

  updateMainLoader(flag: boolean) {
    this.mainLoader.emit({isLoading: flag});
  }

}
