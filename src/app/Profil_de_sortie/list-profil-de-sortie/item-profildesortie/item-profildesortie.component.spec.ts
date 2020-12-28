import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProfildesortieComponent } from './item-profildesortie.component';

describe('ItemProfildesortieComponent', () => {
  let component: ItemProfildesortieComponent;
  let fixture: ComponentFixture<ItemProfildesortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProfildesortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProfildesortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
