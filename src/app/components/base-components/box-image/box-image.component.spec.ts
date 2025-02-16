import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImageComponent } from './box-image.component';

describe('BoxImageComponent', () => {
  let component: BoxImageComponent;
  let fixture: ComponentFixture<BoxImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
