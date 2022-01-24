import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Wordle } from '../model/wordle';
import { WordleService } from '../wordle.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-wordle-table',
  templateUrl: './wordle-table.component.html',
  styleUrls: ['./wordle-table.component.scss'],
  providers: [DatePipe],
})
export class WordleTableComponent implements OnInit {
  paginationPageSize;
  searchValue: any;

  todayDate = new Date();
  timeDiffInDays = 0;
  firstWordleDate = new Date('6/19/2021');
  todayWordle = '';

  WordleArray: Wordle[];

  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Wordle #',
      filter: true,
    },
    { field: 'value' },
  ];
  gridOptions: any;

  constructor(private wordleService: WordleService, public datepipe: DatePipe) {
    this.WordleArray = new Array<Wordle>();
    this.paginationPageSize = 50;
  }

  onQuickFilterChanged() {
    this.gridOptions.api.setQuickFilter(this.searchValue);
  }

  ngOnInit(): void {
    this.getDateDiff();
    this.initializeTable();
  }

  getDateDiff() {
    const dateDiff =
      (this.todayDate.getTime() - this.firstWordleDate.getTime()) /
      (1000 * 3600 * 24);

    this.timeDiffInDays = Math.floor(dateDiff);
  }

  initializeGrid() {
    this.gridOptions = {
      rowData: this.WordleArray,
      columnDefs: this.columnDefs,
      pagination: true,
    };
  }

  initializeTable() {
    this.wordleService.getJSON().subscribe((result: Wordle[]) => {
      this.WordleArray = result;
      this.initializeGrid();
      this.setTodayWordle();
    });
  }

  setTodayWordle() {
    this.todayWordle = this.WordleArray[this.timeDiffInDays].value;
  }
}
