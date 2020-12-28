import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompetenceComponent } from './item-competence.component';

describe('ItemCompetenceComponent', () => {
  let component: ItemCompetenceComponent;
  let fixture: ComponentFixture<ItemCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
