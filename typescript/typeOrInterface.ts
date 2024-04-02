/** type or interface? */

// #region extending

// type UserProps = {
//   name: string;
//   age: number;
// };

// type AdminProps = UserProps & {
//   role: string;
// };

// interface UserProps {
//   name: string;
//   age: number;
// }

// interface AdminProps extends UserProps {
//   role: string;
// }

// #endregion extending

// #region union types
// type alias can also describe union types - interface cannot
// type Address = string | string[];
// const address: Address = ["123 main street", "another text here"];

// #endregion union types

// #region using utility types
// types can easily use utility types - interfaces can too but only with ugly syntax
// type UserProps = {
//   name: string;
//   age: number;
//   createdAt: Date;
// };

// type GuestProps = Omit<UserProps, "name" | "age">; // good
// interface GuestProps extends Omit<UserProps, "name" | "age"> {} // not that good

// #endregion using utility types

// #region tuples
// type Address = [number, string]; // good
// const adress: Address = [1, "main st"];

// interface Address extends Array<number | string> {
//   0: number;
//   1: string;
// } // not that good

// #endregion tuples

// #region extracting type from something else
const project = {
  title: "project 1",
  specification: {
    areaSize: 100,
    rooms: 3,
  },
} as const; // specify that areaSize and rooms now are constants

type Specification = (typeof project)["specification"];

// #endregion extracting type from something else

// #region interfaces can be merged
// interface User {
//   name: string;
//   age: number;
// }

// interface User {
//   role: string;
// }

// const user: User = {
//   name: "Joseph",
//   age: 26,
//   role: "admin",
// };

// using type you can duplicate type aliases, but you can merge it
// by using like: TypeTwo = TypeOne & { somethingElse: true }

// #endregion interfaces can be merged

// #region classes

type TUser = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

class User implements TUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

// #endregion classes

/*
 conclusions:
 - there is no conclusion, just some notes actually
 - some people use "I" to indicate Interface, like IUserProps
   other people can use "T" to indicate Type, like TUserProps
 - interface can only describe an object 
 - type can describe object AND everything else (primitive such as string, number, boolean)
 - type alias can also describe union types - interface cannot
 - types can easily use utility types - interfaces can too but only with ugly syntax
 - types can easily describe tuples - interfaces can too but only with ugly syntax
 - extracting type from something else is more easier using type
 - interfaces can be merged - "interfaces are open" and "type aliases are closed"
   - in this case, interface turns your code unpredictable and unstable.
   - in third party libraries maybe it make sense use interface to overwrite something
 - type aliases can be used for classes too
 - using interfaces provides better error messages (short and more precised error messages)
 - nowadays type aliases and interfaces have no difference in performance
*/

/*
  utils:
   - https://www.youtube.com/watch?v=Idf0zh9f3qQ&ab_channel=ByteGrad
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */
