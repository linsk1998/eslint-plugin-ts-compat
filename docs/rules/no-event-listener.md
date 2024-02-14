# Disable standard event (`ts-compat/no-event-listener`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Native event could not compat. Should not use in business layer. Use framework to bind event;

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var el: HTMLDivElement;
var handle: () => any;

el.addEventListener('click', handle);
el.removeEventListener('click', handle);
el.dispatchEvent(new Event('click'));

window.addEventListener('click', handle);
document.addEventListener('click', handle);
```

Examples of **correct** code for this rule:

```ts
import $ from "jquery";
import { attachEvent } from "sky-core";

var el: HTMLDivElement;
var handle: () => any;

el.onclick = handle;
$(el).on('click', handle);
attachEvent(el, 'click', handle);
```

## When Not To Use It

* Use polyfill only in window and document.

## Further Reading

[can i use addEventListener](https://caniuse.com/addeventlistener)
