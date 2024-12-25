import {  Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import TopHeader from '../TopHeader';



export function Layout() {



  return (
    <div className="min-h-screen w-full bg-background text-foreground">
 
      <TopHeader />
      <Header />
      <main className="  ">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}