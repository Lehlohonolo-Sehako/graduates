import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeComponent } from './degree.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('DegreeComponent', () => {
  let component: DegreeComponent;
  let fixture: ComponentFixture<DegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeComponent ],
      imports: [RouterTestingModule], 
      providers: [DegreeComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
