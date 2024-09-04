import { toast } from 'react-toastify';

const Test = () => {
  const notify = () => toast.success('Notification message');

  return (
    <div>
      <button onClick={notify}>Show Notification</button>
    </div>
  );
}

export default Test