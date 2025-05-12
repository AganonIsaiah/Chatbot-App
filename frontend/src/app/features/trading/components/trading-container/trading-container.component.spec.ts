import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingContainerComponent } from './trading-container.component';

describe('TradingContainerComponent', () => {
  let component: TradingContainerComponent;
  let fixture: ComponentFixture<TradingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
