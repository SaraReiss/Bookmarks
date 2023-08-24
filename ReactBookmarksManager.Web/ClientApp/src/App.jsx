import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Addbookmark from './Addbookmark'
import Mybookmarks from './Mybookmarks';
import { AuthContextComponent } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Logout from './Logout';





const App = () => {
    return (
        <AuthContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/mybookmarks' element={
                        <PrivateRoute>
                            <Mybookmarks />
                        </PrivateRoute>
                    } />
                     <Route exact path='/addbookmark' element={
                        <PrivateRoute>
                            <Addbookmark />
                        </PrivateRoute>
                    } />
                     <Route exact path='/logout' element={
                        <PrivateRoute>
                            <Logout />
                        </PrivateRoute>
                    } />
                </Routes>
            </Layout>
        </AuthContextComponent>
    );
}

export default App;