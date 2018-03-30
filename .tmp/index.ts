import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from 'grid.component';

export * from './interfaces/callback.interface';
export * from './interfaces/field.interface';
export * from './interfaces/grid.methods';
export * from './interfaces/options.interface';
export * from './grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GridModule
    };
  }
}
