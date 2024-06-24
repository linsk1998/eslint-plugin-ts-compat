# Disable Symbol factory function (`ts-compat/no-top-level-await`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

top-level-await is not support in most build tool.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
await Promise.resolve()
```

Examples of **correct** code for this rule:

```ts
Promise.resolve().then(()=>{

});

async function aaa() {
	await Promise.resolve()
}
```

## When Not To Use It

Build tool supports top-level-await.

## Further Reading
