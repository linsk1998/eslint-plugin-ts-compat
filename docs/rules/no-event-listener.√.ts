import $ from "jquery";
import { attachEvent } from "sky-core";

var el: HTMLDivElement;
var handle: () => any;

el.onclick = handle;
$(el).on('click', handle);
attachEvent(el, 'click', handle);
