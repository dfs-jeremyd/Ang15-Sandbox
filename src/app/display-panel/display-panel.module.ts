import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSliderModule } from 'ngx-slider-v2';

import { PanelWrapperComponent } from "./panel-wrapper/panel-wrapper.component";
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [PanelWrapperComponent, ProgressBarComponent],
    imports: [
        BrowserModule,
        NgbModule,
        NgxSliderModule
    ],
    exports: [PanelWrapperComponent, ProgressBarComponent]
})
export class PanelDisplayModule {}