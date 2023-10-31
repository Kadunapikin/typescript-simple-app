import * as React from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
}
//second option
export const Person = ({ name, age, email}: Props) => {
    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
      </div>
    );
  }
  


//First method

// export const Person = (props: Props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.email}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   );
// }
