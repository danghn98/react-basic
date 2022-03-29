// import { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BaiTap1 from './components/BaiTap1';
import ColorBox from './components/ColorBox';
import Counnter from './components/Counter';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import DataList from './features/DataList';
import TodoFeature from './features/Todo';
// import productApi from './api/productApi';
import BaiTap2 from './components/BaiTap2';

function App() {
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const params = {
    //             _limit: 10,
    //         };
    //         const productList = await productApi.getAll(params);
    //         console.log(productList);
    //     };

    //     fetchProducts();
    // }, []);

    return (
        <div className='contaner'>
            Header
            {/* <TodoFeature/>
			<AlbumFeature/>
			<ColorBox/>
			<Counnter/> */}
            {/* <p><Link to="/todos">Todos</Link></p>
			<p><Link to="/albums">Albums</Link></p> */}
            <p>
                <NavLink to='/data-list'>Data List</NavLink>
            </p>
            <p>
                <NavLink to='/todos' activeClassName='active-menu'>
                    Todos
                </NavLink>
            </p>
            <p>
                <NavLink to='/albums'>Albums</NavLink>
            </p>
            <p>
                <NavLink to='/colorbox'>Color Box</NavLink>
            </p>
            <p>
                <NavLink to='/counter'>Counter</NavLink>
            </p>
            <p>
                <NavLink to='/bai-tap-1'>Bai tap 1</NavLink>
            </p>
            <p>
                <NavLink to='/bai-tap-2'>Bai tap 2 Calendar</NavLink>
            </p>
            <Switch>
                <Redirect from='/home' to='/' />
                <Redirect from='/post-list/:postId' to='/post/:postId' />
                <Route path='/data-list' component={DataList} exact />
                {/* <Route path="/" component={TodoFeature} exact />  */}
                <Route path='/todos' component={TodoFeature} />
                <Route path='/albums' component={AlbumFeature} />
                <Route path='/colorbox' component={ColorBox} />
                <Route path='/counter' component={Counnter} />

                <Route path='/bai-tap-1' component={BaiTap1} />
                <Route path='/bai-tap-2' component={BaiTap2} />

                <Route component={NotFound} />
            </Switch>
            Footer
        </div>
    );
}

export default App;
