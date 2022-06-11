import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUSerComponent } from './table-user.component';

describe('TableUSerComponent', () => {
  let component: TableUSerComponent;
  let fixture: ComponentFixture<TableUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
