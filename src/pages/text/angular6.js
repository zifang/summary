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

// 模板
// ngFor,ngIf
// hero是模板输入变量
// #heroInput是模板引用变量

<input type="text" #heroInput /> {{heroInput.value}}
<ul>
	<li *ngFor="let hero of heros">{{ hero.name }}</li>
</ul>
<p *ngIf="heros.length > 3">there are many heros!</p>

