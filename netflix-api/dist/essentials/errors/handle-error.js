"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (error, res) {
    var status = 500;
    if (error.name === "UnexistenceError" || error.name === "DuplicityError")
        status = 409;
    else if (error.name === "TypeError" || error.name === "VoidError")
        status = 406;
    else if (error.name === "CredentialsError")
        status = 401;
    res.status(status).json({ error: error.message });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWVycm9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZXNzZW50aWFscy9lcnJvcnMvaGFuZGxlLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQVksRUFBRSxHQUFhO0lBQ3BELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNqQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQWtCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxnQkFBZ0I7UUFDdEUsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNWLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO1FBQy9ELE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDVixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQWtCO1FBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUV6RCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==