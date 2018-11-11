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


<p>
	<img src="{{}}" alt=""/>
	<img [src]="" alt=""/>
</p>


npm install -g @angular/cli
ng new my-app
ng server --open
ng server --port 4201



https://segmentfault.com/a/1190000008834251

端口被占用，更新端口ng serve --port 4201

学习掌握系统开发的相关技术
根据需求，学习并掌握相关的技术，如angular，typescript，rxjs等相关技术

催收系统相关工作
修改催收系统bug，完善催收系统相关需求（如保持快速导航的收放状态、催收详情页添加常用电话和点击电话添加相应的催记功能）