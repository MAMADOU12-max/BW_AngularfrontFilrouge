import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivingDataComponent } from './archiving-data.component';

describe('ArchivingDataComponent', () => {
  let component: ArchivingDataComponent;
  let fixture: ComponentFixture<ArchivingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
