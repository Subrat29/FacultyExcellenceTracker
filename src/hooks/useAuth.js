import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginSuccess,
  loginFailure,
  setLoading,
  logout, // Make sure to import logout action
} from '../store/features/authSlice';

const useAuthenticate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, loading, accessToken, user, roleType } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const checkAuthentication = () => {
      const storedAccessToken = localStorage.getItem('accessToken');
      const storedUser = localStorage.getItem('user');
      const storedRoleType = localStorage.getItem('roleType');

      // If no token or user in localStorage, force logout
      if (!storedAccessToken || !storedUser) {
        dispatch(logout());
        navigate('/login');
        return;
      }

      // If tokens exist in localStorage but not in Redux store, attempt to restore
      if (!accessToken && storedAccessToken) {
        try {
          dispatch(
            loginSuccess({
              accessToken: storedAccessToken,
              refreshToken: localStorage.getItem('refreshToken'),
              user: JSON.parse(storedUser),
              roleType: storedRoleType,
            })
          );
        } catch (error) {
          dispatch(logout());
          navigate('/login');
        }
      }
    };

    checkAuthentication();
  }, [dispatch, navigate, accessToken, user]);

  return { status, loading };
};

export default useAuthenticate;
