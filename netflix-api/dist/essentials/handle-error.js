"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWVycm9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZXNzZW50aWFscy9oYW5kbGUtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxLQUFVLEVBQUUsR0FBUTtJQUM3QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDakIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssZ0JBQWdCO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDVixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVztRQUMvRCxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ1YsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFrQjtRQUFFLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFFekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDIn0=