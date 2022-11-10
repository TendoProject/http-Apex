"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
exports.VERSION = 6;
__exportStar(require("./abstracts/enums/DeltaType"), exports);
__exportStar(require("./abstracts/enums/PacketType"), exports);
__exportStar(require("./abstracts/interfaces/IPacketProvider"), exports);
__exportStar(require("./abstracts/interfaces/IPacketWriter"), exports);
__exportStar(require("./abstracts/Adapter"), exports);
__exportStar(require("./classes/Entity"), exports);
__exportStar(require("./classes/EntityMember"), exports);
__exportStar(require("./packets/BasicAlive"), exports);
__exportStar(require("./packets/BasicSync"), exports);
__exportStar(require("./packets/EntityChange"), exports);
__exportStar(require("./packets/EntityChangeMember"), exports);
__exportStar(require("./packets/EntityChangeMemberDelta"), exports);
__exportStar(require("./packets/EntityCreate"), exports);
__exportStar(require("./packets/EntityCreateMember"), exports);
__exportStar(require("./packets/EntityDelete"), exports);
__exportStar(require("./packets/EntityUpdate"), exports);
__exportStar(require("./packets/EntityUpdateEntity"), exports);
__exportStar(require("./packets/EntityUpdateEntityMember"), exports);
__exportStar(require("./providers/AliveProvider"), exports);
__exportStar(require("./providers/EntityProvider"), exports);
__exportStar(require("./streams/BinaryReader"), exports);
__exportStar(require("./streams/BinaryWriter"), exports);
__exportStar(require("./Channel"), exports);
__exportStar(require("./Process"), exports);
__exportStar(require("./Region"), exports);
__exportStar(require("./Server"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2FwaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUN6Qiw4REFBNEM7QUFDNUMsK0RBQTZDO0FBQzdDLHlFQUF1RDtBQUN2RCx1RUFBcUQ7QUFDckQsc0RBQW9DO0FBQ3BDLG1EQUFpQztBQUNqQyx5REFBdUM7QUFDdkMsdURBQXFDO0FBQ3JDLHNEQUFvQztBQUNwQyx5REFBdUM7QUFDdkMsK0RBQTZDO0FBQzdDLG9FQUFrRDtBQUNsRCx5REFBdUM7QUFDdkMsK0RBQTZDO0FBQzdDLHlEQUF1QztBQUN2Qyx5REFBdUM7QUFDdkMsK0RBQTZDO0FBQzdDLHFFQUFtRDtBQUNuRCw0REFBMEM7QUFDMUMsNkRBQTJDO0FBQzNDLHlEQUF1QztBQUN2Qyx5REFBdUM7QUFDdkMsNENBQTBCO0FBQzFCLDRDQUEwQjtBQUMxQiwyQ0FBeUI7QUFDekIsMkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSA2O1xuZXhwb3J0ICogZnJvbSAnLi9hYnN0cmFjdHMvZW51bXMvRGVsdGFUeXBlJztcbmV4cG9ydCAqIGZyb20gJy4vYWJzdHJhY3RzL2VudW1zL1BhY2tldFR5cGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hYnN0cmFjdHMvaW50ZXJmYWNlcy9JUGFja2V0UHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9hYnN0cmFjdHMvaW50ZXJmYWNlcy9JUGFja2V0V3JpdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYWJzdHJhY3RzL0FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jbGFzc2VzL0VudGl0eSc7XG5leHBvcnQgKiBmcm9tICcuL2NsYXNzZXMvRW50aXR5TWVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcGFja2V0cy9CYXNpY0FsaXZlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFja2V0cy9CYXNpY1N5bmMnO1xuZXhwb3J0ICogZnJvbSAnLi9wYWNrZXRzL0VudGl0eUNoYW5nZSc7XG5leHBvcnQgKiBmcm9tICcuL3BhY2tldHMvRW50aXR5Q2hhbmdlTWVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcGFja2V0cy9FbnRpdHlDaGFuZ2VNZW1iZXJEZWx0YSc7XG5leHBvcnQgKiBmcm9tICcuL3BhY2tldHMvRW50aXR5Q3JlYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFja2V0cy9FbnRpdHlDcmVhdGVNZW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wYWNrZXRzL0VudGl0eURlbGV0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3BhY2tldHMvRW50aXR5VXBkYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFja2V0cy9FbnRpdHlVcGRhdGVFbnRpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wYWNrZXRzL0VudGl0eVVwZGF0ZUVudGl0eU1lbWJlcic7XG5leHBvcnQgKiBmcm9tICcuL3Byb3ZpZGVycy9BbGl2ZVByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvdmlkZXJzL0VudGl0eVByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtcy9CaW5hcnlSZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW1zL0JpbmFyeVdyaXRlcic7XG5leHBvcnQgKiBmcm9tICcuL0NoYW5uZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9Qcm9jZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vUmVnaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vU2VydmVyJztcbiJdfQ==