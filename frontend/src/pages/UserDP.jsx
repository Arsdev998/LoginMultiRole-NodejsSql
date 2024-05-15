import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddProducts from "../components/FormAddProducts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import UserDetail from "../components/UserDetail";

const UserDP = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [navigate, isError]);

  return (
    <Layout>
      <UserDetail />
    </Layout>
  );
};

export default UserDP;
