import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInformaionComponent } from './post-informaion.component';

describe('PostInformaionComponent', () => {
  let component: PostInformaionComponent;
  let fixture: ComponentFixture<PostInformaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostInformaionComponent]
    });
    fixture = TestBed.createComponent(PostInformaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
