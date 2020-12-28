import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpeCompetenceComponent } from './edit-grpe-competence.component';

describe('EditGrpeCompetenceComponent', () => {
  let component: EditGrpeCompetenceComponent;
  let fixture: ComponentFixture<EditGrpeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
