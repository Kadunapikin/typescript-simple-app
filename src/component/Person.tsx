import { FC, useState, ChangeEvent } from 'react';

export enum hairColor {
    blonde = 'Your hair color is amazing',
    yellow = 'You look like a yahoo boy',
    pink = 'You are a very bad boy'
}

interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: hairColor;
}


//second option
export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
    const [country, setCountry] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }

    type NameType = "Isaac" | "Daniel" | "David"
    const nameForType: NameType = "David"


    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
        <h1>He is great developer from {country}</h1>
        <input placeholder='What country are byou from?' onChange={handleChange}></input>
        <h2>{hairColor}</h2>
        <h1>{nameForType}</h1>
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
