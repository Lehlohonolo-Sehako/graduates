import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyExploreSearchbarComponent } from './company-explore-searchbar.component';

describe('CompanyExploreSearchbarComponent', () => {
  let component: CompanyExploreSearchbarComponent;
  let fixture: ComponentFixture<CompanyExploreSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ RouterTestingModule,FormsModule],
      declarations: [ CompanyExploreSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
