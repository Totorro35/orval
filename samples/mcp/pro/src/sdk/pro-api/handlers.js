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
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckHandler = exports.getArticleByIdHandler = exports.getArticlesHandler = exports.getDeliverablesHandler = exports.rateForClientOrderItemHandler = exports.getClientOrderByIdHandler = exports.createClientOrderHandler = exports.getAllClientOrdersHandler = void 0;
const http_client_1 = require("./http-client");
const getAllClientOrdersHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.getAllClientOrders)(args.queryParams, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.getAllClientOrdersHandler = getAllClientOrdersHandler;
const createClientOrderHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.createClientOrder)(args.bodyParams, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.createClientOrderHandler = createClientOrderHandler;
const getClientOrderByIdHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.getClientOrderById)(args.pathParams.id, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.getClientOrderByIdHandler = getClientOrderByIdHandler;
const rateForClientOrderItemHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.rateForClientOrderItem)(args.bodyParams, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.rateForClientOrderItemHandler = rateForClientOrderItemHandler;
const getDeliverablesHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.getDeliverables)(args.queryParams, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.getDeliverablesHandler = getDeliverablesHandler;
const getArticlesHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.getArticles)(args.queryParams, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.getArticlesHandler = getArticlesHandler;
const getArticleByIdHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.getArticleById)(args.pathParams.id, args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.getArticleByIdHandler = getArticleByIdHandler;
const healthCheckHandler = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, http_client_1.healthCheck)(args.options);
    return {
        content: [
            {
                type: 'text',
                text: JSON.stringify(res),
            },
        ],
    };
});
exports.healthCheckHandler = healthCheckHandler;
