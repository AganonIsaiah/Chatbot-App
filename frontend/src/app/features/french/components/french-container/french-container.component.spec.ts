import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchContainerComponent } from './french-container.component';

describe('FrenchContainerComponent', () => {
  let component: FrenchContainerComponent;
  let fixture: ComponentFixture<FrenchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenchContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
