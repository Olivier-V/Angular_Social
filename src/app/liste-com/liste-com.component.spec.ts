import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComComponent } from './liste-com.component';

describe('ListeComComponent', () => {
  let component: ListeComComponent;
  let fixture: ComponentFixture<ListeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
