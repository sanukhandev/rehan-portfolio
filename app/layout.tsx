import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Rehan Antulay — SharePoint & Power Platform Developer',description:'Explore Rehan Antulay’s enterprise applications, SharePoint solutions, Power Platform automation, and professional experience.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
