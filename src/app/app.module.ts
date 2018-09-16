import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BarComponent } from './bar/bar.component';
import { SideComponent } from './side/side.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BarComponent,
    SideComponent,
    SearchComponent,
    VideoComponent,
    VideoListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
