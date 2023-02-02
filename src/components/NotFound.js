import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center font-family margin-200 not-founnd__set">
      <h1 className="font-family ">很抱歉沒有這個頁面唷 ( ×ω× )!</h1>
      <br/>
      <br/>
      <br/>
      <Link to="/" className="text-center">
        回首頁
      </Link>
    </div>
  );
};

export default NotFound;