import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpeCompetenceComponent } from './list-grpe-competence.component';

describe('ListGrpeCompetenceComponent', () => {
  let component: ListGrpeCompetenceComponent;
  let fixture: ComponentFixture<ListGrpeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
