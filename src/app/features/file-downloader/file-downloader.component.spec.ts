import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusCellComponent } from 'src/app/shared/components/table/table-cells/status-cell/status-cell.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';

import { FileDownloaderComponent } from './file-downloader.component';

describe('FileDownloaderComponent', () => {
  let component: FileDownloaderComponent;
  let fixture: ComponentFixture<FileDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDownloaderComponent, TableComponent, StatusCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
