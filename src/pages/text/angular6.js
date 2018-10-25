阻止事件冒泡

方式一
<div>
  <button (click)="$event.stopPropagation(); doSomething()">Click me</button>
</div>
方式二
@Component({
  selector: 'exe-app',
  template: `
    <div>
        <button (click)="doSomething($event)">Click me</button>
    </div>`
})
export class AboutComponent {
  doSomething($event: Event) {
    $event.stopPropagation();
    // your logic
  }
}