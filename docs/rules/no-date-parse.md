# Not allow parse date string (`ts-compat/no-date-parse`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

There is diffrent date string format support is diffrent browsers. 'yyyy/MM/dd' is the common date format. However, backend or local requestor give the format may be 'yyyy-MM-dd'. It is recommended use lib to parse.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var str = "2010/03/01 00:00:00";
new Date(str);
Date.parse(str);
```

Examples of **correct** code for this rule:

```ts
new Date(2021, 0, 1);
new Date(1700000000000);
```

## Options

### allowAny

Boolean. When true allowed any.

## When Not To Use It

Give date string that format is 'yyyy/MM/dd'.

## Further Reading

[由于浏览器差异和不一致性，强烈建议不要使用Date构造函数（和Date.parse，它们是等效的）解析日期字符串。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#%E7%A4%BA%E4%BE%8B)
