import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoHeaderComponent } from './table-info-header.component';

describe('TableInfoHeaderComponent', () => {
  let component: TableInfoHeaderComponent;
  let fixture: ComponentFixture<TableInfoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
