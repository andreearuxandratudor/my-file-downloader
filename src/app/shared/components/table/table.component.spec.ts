import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import FILE_DATA from 'src/app/features/file-downloader/file-downloader.data';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let debugElem: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement;
    component.data = FILE_DATA.map((item) => ({
      ...item,
      selectable: item.status === 'available',
      selected: false,
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectionLabel', () => {
    it('should return "None Selected" when selectionCounter === 0', () => {
      expect(component.selectionLabel).toEqual('None Selected');
    });

    it('should return "Selected 1" when selectionCounter === 1', () => {
      component.selectionCounter = 1;
      expect(component.selectionLabel).toEqual('Selected 1');
    });
  });

  describe('allChecked', () => {
    it('should return true when selectionCounter === selectableItems', () => {
      component.selectableItems = 2;
      component.selectionCounter = 2;
      expect(component.allChecked).toEqual(true);
    });

    it('should return false when selectionCounter !== selectableItems', () => {
      component.selectableItems = 2;
      component.selectionCounter = 1;
      expect(component.allChecked).toEqual(false);
    });
  });

  describe('indeterminateSelection', () => {
    it('should return false when selectionCounter === selectableItems', () => {
      component.selectableItems = 2;
      component.selectionCounter = 2;
      expect(component.indeterminateSelection).toEqual(false);
    });

    it('should return false when selectionCounter === 0', () => {
      component.selectableItems = 2;
      component.selectionCounter = 0;
      expect(component.indeterminateSelection).toEqual(false);
    });

    it('should return true when selectionCounter !== selectableItems', () => {
      component.selectableItems = 2;
      component.selectionCounter = 1;
      expect(component.indeterminateSelection).toEqual(true);
    });
  });

  describe('toggleSelection', () => {
    it('should call toggleSelection when clicking the select all checkbox', () => {
      spyOn(component, 'toggleSelection');
      debugElem.query(By.css('#selectAllCheckbox')).nativeElement.click();
      expect(component.toggleSelection).toHaveBeenCalled();
    });

    it('should select all selectable items when not all items are selected', () => {
      component.toggleSelection();
      expect(component.selectionCounter).toEqual(2);
    });

    it('should deselect all selectable items when all items are selected', () => {
      component.selectionCounter = 2;
      component.toggleSelection();
      expect(component.selectionCounter).toEqual(0);
    });
  });

  describe('toggleRowSelection', () => {
    it('should call toggleRowSelection when clicking a row checkbox', () => {
      spyOn(component, 'toggleRowSelection');
      debugElem.queryAll(By.css('.selectionColumn'))[1].children[0].nativeElement.click();
      expect(component.toggleRowSelection).toHaveBeenCalled();
    });

    it('should not call toggleRowSelection when clicking a disabled row checkbox', () => {
      spyOn(component, 'toggleRowSelection');
      debugElem.query(By.css('.selectionColumn')).children[0].nativeElement.click();
      expect(component.toggleRowSelection).not.toHaveBeenCalled();
    });

    it('should deselect an already selected item', () => {
      component.data[1].selected = true;
      component.selectionCounter = 1;
      component.toggleRowSelection(component.data[1]);
      expect(component.selectionCounter).toEqual(0);
    })
  });

  describe('downloadSelected', () => {
    it('should not alert when clicking on disabled button', () => {
      spyOn(window, 'alert');
      debugElem.query(By.css('#download')).nativeElement.click();
      expect(window.alert).not.toHaveBeenCalled();
    });

    it('should alert name and device of selected items when clicking on download button', () => {
      spyOn(window, 'alert');
      debugElem.queryAll(By.css('.selectionColumn'))[1].children[0].nativeElement.click();
      fixture.detectChanges();
      debugElem.query(By.css('#download')).nativeElement.click();
      expect(window.alert).toHaveBeenCalledWith(`${component.data[1].device} ${component.data[1].path}\n`);
    });
  });
});
