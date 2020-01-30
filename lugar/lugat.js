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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import axios = require('axios');
var axios = require('axios').default;
exports.getLugarLatLog = function (direccion) { return __awaiter(void 0, void 0, void 0, function () {
    var encodedUrl, instance, resp, data, direc, lat, lng;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                encodedUrl = encodeURI(direccion);
                instance = axios.default.create({
                    baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + encodedUrl,
                    headers: { 'x-rapidapi-key': '7ac7da7dccmsh5ab27b66ec40a71p15f506jsn2a2452fb691d' }
                });
                return [4 /*yield*/, instance.get("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + encodedUrl)];
            case 1:
                resp = _a.sent();
                // axios({
                //     "method":"GET",
                //     "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
                //     "headers":{
                //     "content-type":"application/octet-stream",
                //     "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
                //     "x-rapidapi-key":"7ac7da7dccmsh5ab27b66ec40a71p15f506jsn2a2452fb691d"
                //     },"params":{
                //     "location":"New York"
                //     }
                //     })
                //     .then((response)=>{
                //     //   console.log(response)
                //       console.log(response.data.Results[0].name)
                //     })
                //     .catch((error)=>{
                //         return `No se pudo determinar el clima de ${direccion}`        
                //     })
                if (resp.data.Results.lenght == 0) {
                    throw new Error("No hay resultados para " + direccion);
                }
                data = resp.data.Results[0];
                direc = data.name;
                lat = data.lat;
                lng = data.lon;
                // console.log(`direc: ${direc}`);
                // console.log(`lat: ${lat}`);
                // console.log(`lng: ${lng}`);
                return [2 /*return*/, {
                        direc: direc,
                        lat: lat,
                        lng: lng
                    }];
        }
    });
}); };
//# sourceMappingURL=lugat.js.map