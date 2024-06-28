'use client'
import Head from 'next/head';
import Gallery from '../../../components/Gallery';
import Navbar from '../navbar';

export default function Home() {
  return (
    <div>
      <Navbar/> 
        <Gallery />
      
    </div>
  );
}
