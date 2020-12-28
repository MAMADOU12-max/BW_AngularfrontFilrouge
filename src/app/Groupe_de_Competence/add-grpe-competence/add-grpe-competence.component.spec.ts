import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpeCompetenceComponent } from './add-grpe-competence.component';

describe('AddGrpeCompetenceComponent', () => {
  let component: AddGrpeCompetenceComponent;
  let fixture: ComponentFixture<AddGrpeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
