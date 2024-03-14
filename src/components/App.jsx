import LeaveModal from './leaveModal/LeaveModal';
import LoginForm from './loginForm/LoginForm';

export const App = () => {
  return (
    <div>
      {' '}
      <LeaveModal text="Do you want to leave?" />;
      <LoginForm />;
    </div>
  );
};
