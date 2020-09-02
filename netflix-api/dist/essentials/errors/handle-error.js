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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWVycm9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZXNzZW50aWFscy9lcnJvcnMvaGFuZGxlLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsS0FBVSxFQUFFLEdBQVE7SUFDN0MsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxrQkFBa0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGdCQUFnQjtRQUN0RSxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ1YsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVc7UUFDL0QsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNWLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxrQkFBa0I7UUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXpELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9