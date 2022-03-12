import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDownloaderComponent } from './features/file-downloader/file-downloader.component';

const routes: Routes = [
  { path: 'file-downloader', component: FileDownloaderComponent },
  { path: '', redirectTo: '/file-downloader', pathMatch: 'full' },
  { path: '**', component: FileDownloaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
