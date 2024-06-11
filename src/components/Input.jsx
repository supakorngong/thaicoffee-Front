export default function Input(props) {
  const { type = "text", placeholder, name, value, onChange, error } = props;
  return (
    <>
      <div className="flex-col items-center mx-auto max-w-lg">
        <label className="block text-center my-2">{name}</label>
        <input type={type} className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2`} placeholder={placeholder} onChange={onChange} value={value} name={name} />
        {error && <small className="text-red-500">{error}</small>}
      </div>
    </>
  );
}
