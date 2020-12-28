import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGrpecompetenceComponent } from './item-grpecompetence.component';

describe('ItemGrpecompetenceComponent', () => {
  let component: ItemGrpecompetenceComponent;
  let fixture: ComponentFixture<ItemGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
