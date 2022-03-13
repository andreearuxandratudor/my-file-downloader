import { Component, Input, OnInit } from '@angular/core';
import { CellDecorator, TableColumn } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  CellDecorator = CellDecorator;
  selectionCounter = 0;
  selectableItems = 0;

  constructor() {}

  ngOnInit(): void {
    this.selectableItems = this.data.filter((item) => item.selectable).length;
  }

  get selectionLabel(): string {
    return this.selectionCounter > 0
      ? `Selected ${this.selectionCounter}`
      : 'None Selected';
  }

  get allChecked(): boolean {
    return this.selectionCounter > 0 && this.selectionCounter === this.selectableItems;
  }

  get indeterminateSelection(): boolean {
    return (
      this.selectionCounter > 0 && this.selectionCounter < this.selectableItems
    );
  }

  toggleSelection(): void {
    const allSelected = this.selectionCounter < this.selectableItems;
    this.data
      .filter((item) => item.selectable)
      .forEach((item) => (item.selected = allSelected));
    this.selectionCounter = allSelected ? this.selectableItems : 0;
  }

  toggleRowSelection(item: any): void {
    item.selected = !item.selected;
    this.selectionCounter = item.selected
      ? this.selectionCounter + 1
      : this.selectionCounter - 1;
  }

  downloadSelected(): void {
    let message = '';
    this.data
      .filter((item) => item.selected)
      .forEach((item) => (message += item.device + ' ' + item.path + '\n'));
    alert(message);
  }
}
