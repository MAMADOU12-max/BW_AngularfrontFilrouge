import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrpeCompetenceComponent } from './detail-grpe-competence.component';

describe('DetailGrpeCompetenceComponent', () => {
  let component: DetailGrpeCompetenceComponent;
  let fixture: ComponentFixture<DetailGrpeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGrpeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
