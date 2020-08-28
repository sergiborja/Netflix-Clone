"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
module.exports = function (req, res) {
    film_1.default.find().then(function (allFilms) {
        res.send(allFilms);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtYWxsLWZpbG1zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2VydmVyLWxvZ2ljcy9yZXRyaWV2ZS1hbGwtZmlsbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBbUM7QUFFbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFhO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==