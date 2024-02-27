import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqBoolComponent } from './req-bool.component';

describe('ReqBoolComponent', () => {
  let component: ReqBoolComponent;
  let fixture: ComponentFixture<ReqBoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqBoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
