# Prefer .innerText (`ts-compat/prefer-inner-text`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

`innerText` is a factual standard that is supported by all browsers, and polyfills can be used to achieve compatibility in older versions of browsers. Although `textContent` is a defined standard, it cannot be made compatible using polyfills.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var b: HTMLElement;
b.textContent;
```

Examples of **correct** code for this rule:

```ts
var a: HTMLElement;
a.innerText;
```

## When Not To Use It

Abandon compatibility with older versions of IE.

## Further Reading

* [HTMLElement: innerText property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
* [HTML Standard # the-innertext-idl-attribute](https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute)
