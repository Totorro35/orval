"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    PRO_API_URL: (0, envalid_1.str)(),
});
