import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSelectorComponent } from './recipe-selector.component';

describe('Spinner', () => {
  let component: RecipeSelectorComponent;
  let fixture: ComponentFixture<RecipeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
