import Modal from 'components/Modal';
import ModalV2 from 'components/Modal/ModalV2';
import { TryLogin, tryLogin } from 'data/cred';
import React from 'react';

const Login = () => {
  const [loginState, setLoginState] = React.useState({ userName: '', password: '' });
  const [data, setData] = React.useState<TryLogin | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [openModal, toggleLoginModal] = React.useState(false);
  const [openNewModal, toggleNewModal] = React.useState(false);

  const handleClose = () => {
    toggleLoginModal(false);
  };

  const handleLogin = async () => {
    toggleLoginModal(true);
    try {
      setLoading(true);
      const data = await tryLogin(loginState);
      setData(data);
    } catch (e) {
      setData(e as TryLogin);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = async () => {
    toggleNewModal(true);
    try {
      setLoading(true);
      const data = await tryLogin(loginState);
      setData(data);
    } catch (e) {
      setData(e as TryLogin);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={loginState.userName}
          onChange={e => setLoginState(prev => ({ ...prev, userName: e.target.value }))}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={loginState.password}
          onChange={e => setLoginState(prev => ({ ...prev, password: e.target.value }))}
        />
        <button type='button' onClick={handleLogin}>
          Login
        </button>
        <div>
          <button type='button' onClick={toggleModal}>
            New login
          </button>
        </div>
      </form>
      <Modal isOpen={openModal} onClose={handleClose}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>{data?.status}</h3>
            <p>{data?.message}</p>
          </div>
        )}
      </Modal>
      <ModalV2 isOpen={openNewModal} onClose={() => toggleNewModal(false)}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>{data?.status}</h3>
            <p>{data?.message}</p>
          </div>
        )}
      </ModalV2>
    </section>
  );
};

export default Login;
