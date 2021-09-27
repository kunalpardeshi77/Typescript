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
enum Role {
  ADMIN = "Admin",
  READER = 100,
}

const personEnumEx = {
  name: "kunal",
  age: 28,
  role: Role.ADMIN,
};

console.log(personEnumEx);
