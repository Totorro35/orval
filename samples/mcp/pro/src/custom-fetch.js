"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFetch = void 0;
const env_1 = __importDefault(require("./env"));
const getBody = (c) => {
    const contentType = c.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return c.json();
    }
    if (contentType && contentType.includes('application/pdf')) {
        return c.blob();
    }
    return c.text();
};
const getUrl = (contextUrl) => {
    const baseUrl = env_1.default.PRO_API_URL;
    if (!baseUrl) {
        throw new Error('Environment variable `PRO_API_URL` is missing');
    }
    return new URL(`${baseUrl}${contextUrl}`).toString();
};
const customFetch = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
    const requestUrl = getUrl(url);
    const requestInit = Object.assign(Object.assign({}, options), { headers: Object.assign({}, options.headers) });
    const response = yield fetch(requestUrl, requestInit);
    const data = yield getBody(response);
    return { data, headers: response.headers, status: response.status };
});
exports.customFetch = customFetch;
