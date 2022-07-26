import './App.css';
import TextInput from './components/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = (data) => console.log(data);

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep !== '') {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
        res.json().then((data) => {
          console.log(cep);
          setData(data);
          if (!'') {
            setValue('street', data.logradouro);
            setValue('district', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('number');
          } else {
            alert('Não entregamos para esse CEP');
            setValue('cep');
            setValue('address');
            setValue('neighborhood');
            setValue('city');
            setValue('uf');
            setValue('addressNumber');
          }
        })
      );
    }
  };

  return (
    <div className="form-field">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Nome"
          fieldName="name"
          register={register}
          errors={errors}
          placeHolder="Nome..."
          isRequired={false}
          maximLength={20}
          minimLength={2}
        />
        <TextInput
          label="CEP"
          fieldName="cep"
          register={register}
          errors={errors}
          placeHolder="CEP..."
          isRequired={true}
          maximLength={20}
          minimLength={2}
          onBlur={checkCEP}
        />{' '}
        <TextInput
          label="Endereço"
          fieldName="street"
          register={register}
          errors={errors}
          placeHolder="Endereço..."
          isRequired={false}
          maximLength={50}
          minimLength={2}
        />{' '}
        <TextInput
          label="Cidade"
          fieldName="city"
          register={register}
          errors={errors}
          placeHolder="Estado..."
          isRequired={false}
          maximLength={20}
          minimLength={2}
        />{' '}
        <TextInput
          label="Estado"
          fieldName="uf"
          register={register}
          errors={errors}
          placeHolder="Estado..."
          isRequired={false}
          maximLength={20}
          minimLength={2}
        />{' '}
        <TextInput
          label="Número"
          fieldName="number"
          register={register}
          errors={errors}
          placeHolder="Número..."
          isRequired={false}
          maximLength={20}
          minimLength={2}
        />{' '}
        <TextInput
          label="Bairro"
          fieldName="district"
          register={register}
          errors={errors}
          placeHolder="Bairro..."
          isRequired={false}
          maximLength={20}
          minimLength={2}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
