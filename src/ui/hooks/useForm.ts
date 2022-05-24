import {useState} from 'react';


export const useForm = <T>(initialState: T): [T, ({target}: any) => void, () => void] => {

  const [values, setValues] = useState<T>(initialState);

  const reset = () => {
    setValues(initialState);
  }


  const handleInputChange = ({target}: any) => {

    setValues({
      ...values,
      [target.name]: target.value
    });

  }

  return [values, handleInputChange, reset];

}