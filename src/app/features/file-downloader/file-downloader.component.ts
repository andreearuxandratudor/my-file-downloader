import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/components/table/table.model';
import COLUMNS from './file-downloader.config';
import FILE_DATA from './file-downloader.data';
import { FileData } from './file-downloader.model';

@Component({
  selector: 'app-file-downloader',
  templateUrl: './file-downloader.component.html',
  styleUrls: ['./file-downloader.component.scss'],
})
export class FileDownloaderComponent implements OnInit {
  data: FileData[] = [];
  columns: TableColumn[] = COLUMNS;

  constructor() {}

  ngOnInit(): void {
    this.data = FILE_DATA.map((item) => ({
      ...item,
      selectable: item.status === 'available',
      selected: false,
    }));
  }
}
