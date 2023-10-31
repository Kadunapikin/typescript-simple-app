import { FC, useState, ChangeEvent } from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
}
//second option
export const Person: FC<Props> = ({ name, age, email }) => {
    const [country, setCountry] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }


    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
        <h1>He is great developer from {country}</h1>
        <input placeholder='What country are byou from?' onChange={handleChange}></input>
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
