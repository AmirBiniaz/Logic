const user = {
  name: "Amirreza",
  address: {
    city: "Berlin",
    zip: "10115",
  },
};

console.log("Example 1:", user.address?.city);
// Output: Berlin

console.log("Example 1:", user.contact?.phone);
// Output: undefined (no error, safe access)

const company = {
  name: "TechCorp",
  employees: {
    manager: {
      name: "Alice",
    },
  },
};

console.log("Example 2:", company.employees?.manager?.name);
// Output: Alice

console.log("Example 2:", company.employees?.assistant?.name);
// Output: undefined (instead of crashing)

const api = {
  getData() {
    return "Data fetched!";
  },
};

console.log("Example 3:", api.getData?.());
// Output: Data fetched!

const api2 = {};
console.log("Example 3:", api2.getData?.());
// Output: undefined (safe, no error)

const students = {
  list: [{ name: "Ali" }, { name: "Sara" }],
};

console.log("Example 4:", students.list?.[0]?.name);
// Output: Ali

console.log("Example 4:", students.list?.[2]?.name);
// Output: undefined (safe, no crash)

const profile = {
  username: "amirreza",
};

const city = profile.address?.city ?? "Unknown";
console.log("Example 5:", city);
// Output: Unknown
