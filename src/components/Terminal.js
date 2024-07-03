import $ from 'jquery';
import 'jquery.terminal';

const commands = {};
const term = $('.my-terminal').terminal(commands);
console.log(term)
