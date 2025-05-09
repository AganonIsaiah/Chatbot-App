import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputViewComponent } from './chat-input-view.component';

describe('ChatInputViewComponent', () => {
  let component: ChatInputViewComponent;
  let fixture: ComponentFixture<ChatInputViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInputViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
