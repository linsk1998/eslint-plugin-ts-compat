# Disable Event.prototype.timeStamp (`ts-compat/no-event-timestamp`)

<!-- end auto-generated rule header -->

Event timeStamp is unusual use. Disable timeStamp for performent, vaind getting timeStamp in every event.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var e: MouseEvent;

e.timeStamp;
```

Examples of **correct** code for this rule:

```ts
var e: any;

e.timeStamp;
```

## When Not To Use It

Framework has polyfill event.

## Further Reading
