import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailednewsComponent } from './detailednews.component';

describe('DetailednewsComponent', () => {
  let component: DetailednewsComponent;
  let fixture: ComponentFixture<DetailednewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailednewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailednewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
