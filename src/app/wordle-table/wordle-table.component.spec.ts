import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleTableComponent } from './wordle-table.component';

describe('WordleTableComponent', () => {
  let component: WordleTableComponent;
  let fixture: ComponentFixture<WordleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
