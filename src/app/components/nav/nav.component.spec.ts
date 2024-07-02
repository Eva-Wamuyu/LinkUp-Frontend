import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the side menu', () => {
    const initialSideMenuState = component.sideMenuOpen;
    component.toggleMenu();
    expect(component.sideMenuOpen).toBe(!initialSideMenuState);
  });

  it('should close the side menu', () => {
    component.sideMenuOpen = true;
    component.closeSideMenu();
    expect(component.sideMenuOpen).toBe(false);
  });

  it('should show the add post form', () => {
    const initialAddPostFormState = component.showAddPostForm;
    component.showAddPostFormFunc();
    expect(component.showAddPostForm).toBe(!initialAddPostFormState);
  });

  it('should hide the add post form', () => {
    component.showAddPostForm = true;
    component.hideAddPostFormFunc();
    expect(component.showAddPostForm).toBe(false);
  });

  it('should log the form value to the console when adding a post', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    component.addPostForm.setValue({ content: 'Test content', post_img: 'test.png' });
    // component.addPost();
    expect(consoleSpy).toHaveBeenCalledWith({ content: 'Test content', post_img: 'test.png' });
  });

  it('should set default values during initialization', () => {
    expect(component.showPostForm).toBe(true);
    expect(component.logged).toBe(true);
  });
});
