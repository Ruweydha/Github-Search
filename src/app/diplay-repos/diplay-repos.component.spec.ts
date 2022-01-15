import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayReposComponent } from './diplay-repos.component';

describe('DiplayReposComponent', () => {
  let component: DiplayReposComponent;
  let fixture: ComponentFixture<DiplayReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplayReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
