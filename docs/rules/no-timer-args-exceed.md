# Not allow using the third argument of `setTimeout` & `setInterval` (`ts-compat/no-timer-args-exceed`)

💼<!-- end auto-generated rule header -->

There is a compatibility issue with using the third parameter of `setTimeout` & `setInterval`. If using polyfill, it does not comply with the principle of using native features as much as possible.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
setTimeout(() => {
  alert("Hello, world!");
}, 1000);
```

Examples of **correct** code for this rule:

```ts
setTimeout((msg) => {
  alert(msg);
}, 1000, "Hello, world!");
```

## When Not To Use It

Use polyfill.

## Further Reading

* [MDN Web Docs: setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)
* [MDN Web Docs: setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
