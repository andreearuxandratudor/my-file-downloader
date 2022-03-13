import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCellComponent } from './status-cell.component';

describe('StatusCellComponent', () => {
  let component: StatusCellComponent;
  let fixture: ComponentFixture<StatusCellComponent>;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusCellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCellComponent);
    component = fixture.componentInstance;
    nativeElem = fixture.nativeElement;

    component.item = {
      name: 'smss.exe',
      device: 'Stark',
      path: '',
      status: 'scheduled',
      selectable: false
    };
    component.field = 'status';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title with capital first letter', () => {
    const status = nativeElem.querySelector('.status');
    expect(status?.innerHTML).toEqual('Scheduled');
  });

  it('should not display the available icon when an item is scheduled', () => {
    expect(nativeElem.querySelector('.available')).toBeNull();
  });

  it('should display the available icon when an item is available', () => {
    component.item = {...component.item, status: 'available', selectable: true}
    fixture.detectChanges();
    expect(nativeElem.querySelector('.available')).not.toBeNull();
  });
});
