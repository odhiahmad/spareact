/* eslint-disable import/no-anonymous-default-export */
export default {
  all: () =>
    Promise.resolve([
      {
        id: 1,
        name: "John Doe",
        address: "123 Main St",
        phoneNumber: "555-555-5555",
        photo: "https://randomuser.me/api/portraits/",
      },
      {
        id: 2,
        name: "Jane Doe",
        address: "123 Main St",
        phoneNumber: "555-555-5555",
        photo: "https://randomuser.me/api/portraits/",
      },
      {
        id: 3,
        name: "Jack Doe",
        address: "123 Main St",
        phoneNumber: "555-555-5555",
        photo: "https://randomuser.me/api/portraits/",
      },
    ]),
};
