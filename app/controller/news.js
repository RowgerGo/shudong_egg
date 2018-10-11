'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    this.ctx.body = 'hi, news';
  }
}
module.exports = NewsController;
