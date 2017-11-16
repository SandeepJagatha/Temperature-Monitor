import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TemperatureMonitorService } from './temperatureMonitor.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent
      ],
      providers: [TemperatureMonitorService],
    }).compileComponents()
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
  
  it('getCurrentMedian should return 11 and usedPercentage should be 100', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const testForm = <NgForm>{ value: { temperature: 11 } };

      app.recordTemperature(testForm);
      app.recordTemperature(<NgForm>{ value: { temperature: 12 } });
      app.recordTemperature(<NgForm>{ value: { temperature: 13 } });
      app.recordTemperature(<NgForm>{ value: { temperature: 14 } });
      app.recordTemperature(<NgForm>{ value: { temperature: -11 } });
      app.recordTemperature(<NgForm>{ value: { temperature: -12 } });
      
      app.getCurrentMedian();
      expect(app.median).toEqual(11.5);
      
      app.recordTemperature(<NgForm>{ value: { temperature: -13 } });
      app.getCurrentMedian();
      expect(app.median).toEqual(11);
      
      app.recordTemperature(<NgForm>{ value: { temperature: -14 } });
      expect(app.usedPercentage).toEqual(100);
      
      app.recordTemperature(<NgForm>{ value: { temperature: -15 } });
      expect(app.alertText).toEqual('Reached max collection of temperatures : 8.');
  });
  
  it('valid temperatureValue test', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const testForm = <NgForm>{ value: { temperature: 420 } };

      app.recordTemperature(testForm);
      expect(app.alertText).toEqual('Temperature range should be in the -100 to 100 degress.');
  });
  
});
