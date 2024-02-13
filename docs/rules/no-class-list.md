# Disable Function.prototype.name (`ts-compat/no-class-list`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Old version browsers not support classList, use className.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var el: HTMLElement;
el.classList.add("aaa");
```

Examples of **correct** code for this rule:

```ts
var el: HTMLElement;
el.className = "aaa" ;
```

## When Not To Use It

Give up compat.

## Further Reading

[can i use classList](https://caniuse.com/classlist)
