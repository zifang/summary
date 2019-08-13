<template>
	<div v-highlight><pre><code>
	<h3>scss的用法和功能</h3>
	1、变量 $ 
	2、嵌套 (父选择器标志符&)
	3、导入sass文件(@import)
	4、静默注入（/*   */)
	5、混合器（@mixin通过@include调用)
		@mixin rounded-corners {
		  -moz-border-radius: 5px;
		  -webkit-border-radius: 5px;
		  border-radius: 5px;
		}
		notice {
		  background-color: green;
		  border: 2px solid #00aa00;
		  @include rounded-corners;
		}
	6、继承（@extend)
		.error {
		  border: 1px solid red;
		  background-color: #fdd;
		}
		.seriousError {
		  @extend .error;
		  border-width: 3px;
		}
		</code></pre>
	</div>
</template>