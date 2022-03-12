import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/components/table/table.component';
import { FileDownloaderComponent } from './features/file-downloader/file-downloader.component';
import { StatusCellComponent } from './shared/components/table/table-cells/status-cell/status-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FileDownloaderComponent,
    StatusCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
