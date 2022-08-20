import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TechnologyvikComponent } from './technologyvik.component';

describe('TechnologyvikComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TechnologyvikComponent     
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TechnologyvikComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-app'`, () => {
    const fixture = TestBed.createComponent(TechnologyvikComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TechnologyvikComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-app app is running!');
  });
});
