import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNowComponent } from './data-now.component';

describe('DataNowComponent', () => {
  let component: DataNowComponent;
  let fixture: ComponentFixture<DataNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
