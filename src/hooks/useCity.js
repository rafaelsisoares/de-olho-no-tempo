export default function useCity() {

  const handleChange = ({ target: { value } }) => {
    const arrCity = value.split(' ');
    const strCity = arrCity.join('+');
    console.log(strCity);
  };

  return {
    handleChange,
  };
}
