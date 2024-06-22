"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let FeedService = class FeedService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    formatNumber(number) {
        return number.toString().padStart(2, '0');
    }
    async getArticles(query) {
        const date = new Date(query.date);
        const day = this.formatNumber(date.getDate() + 1);
        const month = this.formatNumber(date.getMonth() + 1);
        const year = date.getFullYear();
        const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getArticlesTranslated(language) {
        const url = 'https://libretranslate.com/translate';
        const data = JSON.stringify({
            q: 'Hola mundo',
            source: 'auto',
            target: 'en',
            format: 'text',
            alternatives: 3,
            api_key: '',
        });
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, data));
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.FeedService = FeedService;
exports.FeedService = FeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], FeedService);
//# sourceMappingURL=feed.service.js.map