// enum declaration.
/* enum Role {
  ADMIN,
  READER,
} */
// If you don't want to start with 0.
/* enum Role {
  ADMIN = 5,
  READER,
} */
// giving your own values.
/* enum Role {
  ADMIN = 100,
  READER = 200,
} */
// giving mixed values.
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READER"] = 100] = "READER";
})(Role || (Role = {}));
var personEnumEx = {
    name: "kunal",
    age: 28,
    role: Role.ADMIN
};
console.log(personEnumEx);
